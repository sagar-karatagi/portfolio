import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="border rounded-xl p-5 shadow-md hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-700 text-sm mb-3">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href={project.github}
          target="_blank"
          className="text-gray-600 hover:text-black text-sm flex items-center gap-1"
          rel="noreferrer"
        >
          <FaGithub /> Code
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            className="text-blue-600 text-sm hover:underline"
            rel="noreferrer"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
