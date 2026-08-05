"use client";

export default function CarritoResumen({ total }: { total: number }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
      <div className="flex justify-between text-lg font-bold">
        <span>Total</span>
        <span>S/ {total.toFixed(2)}</span>
      </div>
    </div>
  );
}
