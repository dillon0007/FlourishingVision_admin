"use client"

import { ColumnDef } from "@tanstack/react-table"
import Delete from "../custom ui/Delete"
import Link from "next/link"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

export const columns: ColumnDef<CollectionType>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell:({row}) => <Link href={`/collections/${row.original._id}`} className="hover:text-red-1">{row.original.title}</Link>
  },
  {
    accessorKey: "products",
    header: "Products",
    cell:({row}) => <p>{row.original.products.length}</p>
  },
  {
    id:"actions",
    cell:({row}) => <Delete item="collection" id={row.original._id}/>
  },
]
