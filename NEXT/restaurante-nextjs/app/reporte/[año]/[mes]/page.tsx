import type { Metadata } from "next";

interface Props {
    params: Promise<{ año: string; mes: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { año, mes } = await params;
    return {
        title: `Reporte de ${mes} del ${año}`,
    };
}

export default async function ReportePage({ params }: Props) {
    const { año, mes } = await params;
    return (
        <div>
            <h1>Reporte de {mes} del {año}</h1>
        </div>
    );
}