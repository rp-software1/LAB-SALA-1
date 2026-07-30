export async function generateMetadata({params}){
    const {id} = await params;
    return{
        title: `Proyecto: ${id}`,
        description: `Detalle del proyecto ${id}`,
    }
}

export default async function ProjectDetail({params}){
    const {id} = await params;
    return(
        <div> 
            <h1>Proyecto: {id}</h1>
        </div>
    )
}