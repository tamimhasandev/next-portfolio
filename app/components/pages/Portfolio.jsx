import projects from '../../../data/projects';
import Button from '../common/Button';
import ProjectCard from '../common/ProjectCard';
import PaperPlane from '../svg/PaperPlane';

export default function Portfolio() {
  return (
    <div>
      <div className="space-y-4">
        <h1 className="text-center text-3xl font-semibold">Portfolio</h1>
        <p className="lg:w-2/3 mx-auto text-center">
          Welcome to my online portfolio. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. I'm
          taking on freelance work at the moment. Want some help building your
          software?
        </p>
        <div className="w-60 mx-auto">
          <Button
            icon={<PaperPlane />}
            className="justify-center items-center gap-2"
          >
            Hire Me
          </Button>
        </div>
      </div>
      <div className="container mx-auto py-8 grid gap-8 lg:grid-cols-2">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.shortDescription}
              client={project.client.name}
              projectSlug={project.slug}
            />
          );
        })}
      </div>
    </div>
  );
}
