"use client";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchProducts } from "../api/products/route";

// Define the columns for the DataGrid
const columns = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
  },
  {
    field: "priceinCents",
    headerName: "Price (in cents)",
    flex: 1,
  },
  {
    field: "description",
    headerName: "Description",
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    flex: 1,
    type: "dateTime",
  },
];
// import { fetchProducts } from "../api/fetchProducts";
export default function ProductsDataGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const rowsClean = products?.map((p) => ({
    id: p.id,
    name: p.name,
    priceInCents: p.priceinCents,
    description: p.description,
    createdAt: new Date(p.createdAt),
  }));
  //   console.log(rowsClean);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rowsClean} columns={columns} pageSize={5} />
    </div>
  );
}
