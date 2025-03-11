"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Faq } from "@/types/faqs";
import { TableMeta } from "./faqs-data-table";
import { DataTableColumnHeader } from "./faqs-data-table-column-header";
import { DataTableRowActions } from "./faqs-data-table-row-actions";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<Faq>[] = [
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => {
      const category = row.getValue("category") as string;
      return (
        <Badge variant="secondary" className="font-medium">
          {category || "General Questions"}
        </Badge>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "question",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Question" />
    ),
    cell: ({ row }) => {
      return (
        <div className="max-w-[500px] truncate">{row.getValue("question")}</div>
      );
    },
  },
  {
    accessorKey: "answer",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Answer" />
    ),
    cell: ({ row }) => {
      return (
        <div className="max-w-[500px] truncate prose dark:prose-invert prose-sm">
          <div dangerouslySetInnerHTML={{ __html: row.getValue("answer") }} />
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row, table }) => (
      <DataTableRowActions
        row={row}
        onSuccess={() => (table.options.meta as TableMeta<Faq>).refreshData()}
      />
    ),
  },
];
