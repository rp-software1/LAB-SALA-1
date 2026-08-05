import CarritoList from "./carritoList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carrito del Restaurante",
  description: "Carrito de compras",
}

export default function CarritoPage() {
  return (
    <CarritoList />
  )
}
