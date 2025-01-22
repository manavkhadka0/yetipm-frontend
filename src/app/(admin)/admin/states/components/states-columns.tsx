"use client";

import { ColumnDef } from "@tanstack/react-table";
import { State } from "@/types/states";
import { DataTableColumnHeader } from "./states-data-table-column-header";
import { DataTableRowActions } from "./states-data-table-row-actions";
import { TableMeta } from "./states-data-table";

export const columns: ColumnDef<State>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="State Name" />
    ),
    enableSorting: true,
  },
  {
    accessorKey: "abbreviation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Abbreviation" />
    ),
    enableSorting: true,
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    enableSorting: true,
  },
  {
    id: "actions",
    cell: ({ row, table }) => (
      <DataTableRowActions
        row={row}
        onSuccess={() => (table.options.meta as TableMeta<State>).refreshData()}
      />
    ),
    enableSorting: false,
    enableHiding: false,
    enablePinning: true,
    size: 100,
  },
];
