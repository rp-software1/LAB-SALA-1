export async function generateMetadata({params}){
    const {id} = await params;
    return{
        title: `Restaurante | Mesa ${id}`,
        description: `Detalle de la mesa ${id}`,
    }
}

export default async function MesaDetail({params}){
    const {id} = await params;
    return(
        <div> 
            <h1>Mesa: {id}</h1>
        </div>
    )
}