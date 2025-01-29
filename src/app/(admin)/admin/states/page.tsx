"use client";

import { useEffect, useState } from "react";
import { StatesResponse } from "@/types/states";
import axios from "axios";
import { showError } from "@/lib/alerts";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "./components/states-data-table";
import { EditStateDialog } from "./components/states-edit-state-dialog";
import { columns } from "./components/states-columns";

export default function StatesPage() {
  const [states, setStates] = useState<StatesResponse>();
  const [isLoading, setIsLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const fetchStates = async (page: number = 1, size: number = pageSize) => {
    try {
      setIsLoading(true);
      const response = await axios.get<StatesResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/states/?page=${page}&page_size=${size}`
      );
      setStates(response.data);
      setCurrentPage(page);
      setPageSize(size);
    } catch {
      showError("Failed to fetch states");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGlobalSearch = async (searchTerm: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL
        }/api/states/?search=${encodeURIComponent(searchTerm)}`
      );
      const data = await response.json();
      setStates(data as StatesResponse);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error searching states:", error);
      showError("Failed to search states");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  const handlePageChange = (page: number) => {
    fetchStates(page, pageSize);
  };

  const handlePageSizeChange = (newSize: number) => {
    fetchStates(1, newSize);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">States</h1>
        <Button onClick={() => setDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add State
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={states?.results || []}
        onDataChange={fetchStates}
        isLoading={isLoading}
        onGlobalSearch={handleGlobalSearch}
        pagination={{
          pageCount: Math.ceil((states?.count || 0) / pageSize),
          currentPage,
          pageSize,
          onPageChange: handlePageChange,
          onPageSizeChange: handlePageSizeChange,
        }}
      />

      <EditStateDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSuccess={fetchStates}
      />
    </div>
  );
}
