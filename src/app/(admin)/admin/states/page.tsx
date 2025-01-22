"use client";

import { useEffect, useState } from "react";
import { State, StatesResponse } from "@/types/states";
import axios from "axios";
import { showError } from "@/lib/alerts";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "./components/states-data-table";
import { EditStateDialog } from "./components/states-edit-state-dialog";
import { columns } from "./components/states-columns";

export default function StatesPage() {
  const [states, setStates] = useState<State[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);

  const fetchStates = async () => {
    try {
      const response = await axios.get<StatesResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/states/`
      );
      setStates(response.data.results);
      setIsLoading(false);
    } catch {
      showError("Failed to fetch states");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

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
        data={states}
        onDataChange={fetchStates}
        isLoading={isLoading}
      />

      <EditStateDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSuccess={fetchStates}
      />
    </div>
  );
}
