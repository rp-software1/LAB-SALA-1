'use client';

import { useRouter } from "next/navigation"
import type { Mesa } from "../../src/types";

interface MesaCardProps {
    mesa: Mesa;
}

const colorPorEstado: Record<Mesa['estado'], string> = {
    Disponible:     'bg-green-100 border-green-400 hover:bg-green-200',
    Ocupada:        'bg-red-100   border-red-400   hover:bg-red-200',
    Reservada:      'bg-yellow-100 border-yellow-400 hover:bg-yellow-200',
    Fuera_Servicio: 'bg-gray-100  border-gray-400',
}

export default function MesaCard({ mesa }: MesaCardProps) {
  const router = useRouter();

  const handleClick = (): void => {
    if (mesa.estado === 'Fuera_Servicio') return;
    router.push(`/mesa/${mesa._id}`);
  };

  return (
    <button
      onClick={handleClick}
      className={`border-2 rounded-lg p-4 text-left w-full
               ${colorPorEstado[mesa.estado]}
               ${mesa.estado === 'Fuera_Servicio' ? 'cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <p className="font-bold text-lg">Mesa {mesa.numero}</p>
      <p className="text-sm text-gray-600">Cap: {mesa.capacidad}</p>
      <p className="text-sm capitalize">{mesa.estado.replace("_", " ")}</p>
    </button>
  );
}