import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import FadeInWhenVisible from "../components/FadeInWhenVisible"; // Ensure the correct path

const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      <h2 className="text-3xl font-bold mb-6 text-blue-600">Projects</h2>
      <FadeInWhenVisible>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      </FadeInWhenVisible>
    </section>
  );
};

export default Projects;
