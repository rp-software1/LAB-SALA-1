import ProjectCard from "../components/features/ProjectCard";
export const metadata = {
  title: "Projects",
  description: "Panel de proyectos",
};
const projects = [
  { id: 1, name: "RV4", owner: "Backend", status: "active" },
  { id: 2, name: "Portal Real Estate", owner: "Frontend", status: "paused" },
  { id: 3, name: "ReflexoPeru", owner: "Fullstack", status: "active" },
];

export default function Projects(){
    return(
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-slate-800">Projects</h1>
            <div className="grid gap-4">
                {projects.map(p => (
                    <ProjectCard key={p.id} project={p} />
                ))}
            </div>
        </div>
    )
}