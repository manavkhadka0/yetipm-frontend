"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable } from "./components/rentals-data-table";
import { columns } from "./components/rentals-columns";
import { Rental } from "@/types/rentals";
import { showError } from "@/lib/alerts";
import axios from "axios";

export default function RentalsPage() {
  const router = useRouter();
  const [data, setData] = useState<Rental[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRentals = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects/`
      );
      setData(response.data.results);
    } catch {
      showError("Failed to fetch rentals");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRentals();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Rentals</h1>
        <Button onClick={() => router.push("/admin/rentals/create")}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>

      <div className="mt-6">
        <DataTable
          columns={columns}
          data={data}
          onDataChange={() => {
            setIsLoading(true);
            fetchRentals();
          }}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
