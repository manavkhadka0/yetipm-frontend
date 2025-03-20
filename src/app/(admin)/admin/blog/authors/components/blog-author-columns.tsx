"use client";

import { ColumnDef } from "@tanstack/react-table";
import { BlogAuthor } from "@/types/blog";
import { DataTableColumnHeader } from "./blog-author-data-table-column-header";
import { DataTableRowActions } from "./blog-author-data-table-row-actions";
import { TableMeta } from "./blog-author-data-table";
import { ImageWithFallbackAvatar } from "@/components/image-with-fallback-avatar";

export const columns: ColumnDef<BlogAuthor>[] = [
  {
    accessorKey: "picture",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Picture" />
    ),
    cell: ({ row }) => {
      const image = row.getValue("picture") as string;
      return (
        <ImageWithFallbackAvatar
          src={image}
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
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
    cell: ({ row }) => {
      return (
        <div className="max-w-[200px] truncate">{row.getValue("role")}</div>
      );
    },
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone" />
    ),
    cell: ({ row }) => {
      return (
        <div className="max-w-[200px] truncate">{row.getValue("phone")}</div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row, table }) => (
      <DataTableRowActions
        row={row}
        onSuccess={() =>
          (table.options.meta as TableMeta<BlogAuthor>).refreshData()
        }
      />
    ),
  },
];
