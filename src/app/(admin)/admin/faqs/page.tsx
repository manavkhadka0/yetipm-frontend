"use client";

import { useEffect, useState } from "react";
import { Faq } from "@/types/faqs";
import { columns } from "./components/faqs-columns";
import axios from "axios";
import { showError } from "@/lib/alerts";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { EditFaqDialog } from "./components/faqs-edit-dialog";
import { DataTable } from "./components/faqs-data-table";

interface FaqFilters {
  category?: string;
  search?: string;
}

export default function FaqsPage() {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [filteredFaqs, setFilteredFaqs] = useState<Faq[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const fetchFaqs = async (filters?: FaqFilters) => {
    try {
      setIsLoading(true);
      let url = `${process.env.NEXT_PUBLIC_API_URL}/api/faqs/`;

      // Add filters to URL
      if (filters?.category || filters?.search) {
        url += "?";
        const params = [];
        if (filters.category) {
          params.push(`category=${encodeURIComponent(filters.category)}`);
        }
        if (filters.search) {
          params.push(`search=${encodeURIComponent(filters.search)}`);
        }
        url += params.join("&");
      }

      const response = await axios.get<Faq[]>(url);

      const allFaqs = response.data;
      setFaqs(allFaqs);

      // Apply client-side pagination
      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;
      setFilteredFaqs(allFaqs.slice(start, end));
    } catch {
      showError("Failed to fetch FAQs");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGlobalSearch = async (searchTerm: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get<Faq[]>(
        `${
          process.env.NEXT_PUBLIC_API_URL
        }/api/faqs/?search=${encodeURIComponent(searchTerm)}`
      );
      const searchResults = response.data;
      setFaqs(searchResults);
      setCurrentPage(1);
      setFilteredFaqs(searchResults.slice(0, pageSize));
    } catch (error) {
      console.error("Error searching FAQs:", error);
      showError("Failed to search FAQs");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  // Update filtered FAQs when page or page size changes
  useEffect(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    setFilteredFaqs(faqs.slice(start, end));
  }, [currentPage, pageSize, faqs]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (newSize: number) => {
    setPageSize(newSize);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">FAQs</h1>
        <Button onClick={() => setDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add FAQ
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={filteredFaqs}
        onDataChange={fetchFaqs}
        isLoading={isLoading}
        onGlobalSearch={handleGlobalSearch}
        pagination={{
          pageCount: Math.ceil(faqs.length / pageSize),
          currentPage,
          pageSize,
          onPageChange: handlePageChange,
          onPageSizeChange: handlePageSizeChange,
        }}
      />

      <EditFaqDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSuccess={fetchFaqs}
      />
    </div>
  );
}
