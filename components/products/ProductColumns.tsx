"use client";

import { ColumnDef } from "@tanstack/react-table";
import Delete from "../custom ui/Delete";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

export const columns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <Link href={`/products/${row.original._id}`} className="hover:text-red-1">
        {row.original.title}
      </Link>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "collections",
    header: "Collections",
    cell: ({ row }) =>
      row.original.collections.map((collection) => collection.title).join(", "),
  },
  {
    accessorKey: "price",
    header: "Price (₹)",
  },
  {
    accessorKey: "expense",
    header: "Expense (₹)",
  },
  {
    id: "actions",
    cell: ({ row }) => <Delete item = "product" id={row.original._id} />,
  },
];
