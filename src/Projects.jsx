import { useFetchProjects } from "./fetchProjects";

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();

  if (isLoading) {
    return (
      <section className="projects">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline" />
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, title, url, img } = project;
          return (
            <a
              key={id}
              href={url}
              className="project"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img} alt="project" className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
