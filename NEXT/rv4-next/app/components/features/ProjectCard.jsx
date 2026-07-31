import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-gray-800">{project.name}</h3>
        <Badge tone={project.status === "active" ? "success" : "warn"}>
          {project.status}
        </Badge>
      </div>
      <p className="text-sm text-gray-500 mt-2">Owner: {project.owner}</p>
    </div>
    )
}