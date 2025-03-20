"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Testimonial } from "@/types/testimonials";
import { DataTableColumnHeader } from "./testimonials-data-table-column-header";
import { DataTableRowActions } from "./testimonials-data-table-row-actions";
import { TableMeta } from "./testimonials-data-table";
import { ImageWithFallbackAvatar } from "@/components/image-with-fallback-avatar";

export const columns: ColumnDef<Testimonial>[] = [
  {
    accessorKey: "image",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Image" />
    ),
    cell: ({ row }) => {
      return (
        <ImageWithFallbackAvatar
          src={row.getValue("image")}
          alt={row.getValue("name")}
          className="w-10 h-10 rounded-full"
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex max-w-[500px] items-center">
          <span className="truncate font-medium">{row.getValue("name")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "testimonial",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Testimonial" />
    ),
    cell: ({ row }) => {
      return (
        <div className="max-w-[500px] truncate prose dark:prose-invert prose-sm">
          <div
            dangerouslySetInnerHTML={{ __html: row.getValue("testimonial") }}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "source",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Source" />
    ),
    cell: ({ row }) => {
      return (
        <div className="max-w-[200px] truncate">
          {row.getValue("source") || "-"}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row, table }) => (
      <DataTableRowActions
        row={row}
        onSuccess={() =>
          (table.options.meta as TableMeta<Testimonial>).refreshData()
        }
      />
    ),
  },
];
