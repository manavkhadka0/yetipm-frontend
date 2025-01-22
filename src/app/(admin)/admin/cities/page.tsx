"use client";

import { useEffect, useState } from "react";
import { City, CityResponse } from "@/types/city";
import { columns } from "./components/cities-columns";
import { DataTable } from "./components/cities-data-table";
import axios from "axios";
import { showError } from "@/lib/alerts";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { EditCityDialog } from "./components/cities-edit-city-dialog";

export default function CitiesPage() {
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);

  const fetchCities = async () => {
    try {
      const response = await axios.get<CityResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cities/`
      );
      setCities(response.data.results);
      setIsLoading(false);
    } catch {
      showError("Failed to fetch cities");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Cities</h1>
        <Button onClick={() => setDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add City
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={cities}
        onDataChange={fetchCities}
        isLoading={isLoading}
      />

      <EditCityDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSuccess={fetchCities}
      />
    </div>
  );
}
