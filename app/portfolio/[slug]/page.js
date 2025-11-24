import projects from "@/data/projects";
import Factory from "@/app/components/svg/Factory";
import People from "@/app/components/svg/People";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: projects.filter((project) => project.slug === slug)[0].title,
    description: projects.filter((project) => project.slug === slug)[0]
      .description,
  };
}

async function SingleProjectDetailsPage({ params }) {
  const { slug } = await params;
  return (
    <div>
      {projects
        .filter((project) => project.slug === slug)
        .map((project) => {
          return (
            <div key={project.id}>
              {/* Project Heading */}
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold">
                  Case Study: {project.title}
                </h1>
                <p className="text-gray-300 font-['system-ui'] text-xl font-extralight">
                  {project.intro}
                </p>
              </div>
              {/* Divider */}
              <div className="border-b border-border pb-10 lg:-ms-12 lg:-me-12"></div>
              {/* Project Details */}
              <div className="flex bg-primary p-6 rounded mt-9 gap-6">
                <div className="hidden lg:block w-4/12">
                  <img
                    className="aspect-[3/4] rounded"
                    src="https://timkey.neocities.org/assets/images/project/project-3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-xl mb-4">
                    {project?.client?.name}
                  </h2>
                  <div className="space-y-2">
                    <p className="flex items-center">
                      <span className="mr-2">
                        <Factory />
                      </span>
                      <span className="font-medium mr-1">Industry: </span>
                      {project.industry}
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2">
                        <People />
                      </span>
                      <span className="font-medium mr-1">Size: </span>
                      {project.teamSize}+
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2">{/* <Link />*/}</span>
                      <span className="font-medium mr-1">Website: </span>
                      <span className="underline text-accent">
                        {project.website}
                      </span>
                    </p>
                  </div>
                  <p className="my-4">{project.shortDescription}</p>
                  <h4 className="font-semibold">Project Requirements</h4>
                  <ul className="list-decimal ml-8 mt-3 text-gray-300 text-sm space-y-1">
                    {project.requirements.map((req) => (
                      <li key={req}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Contents */}
              <div className="mt-6 space-y-8 overflow-hidden">
                {Array.isArray(project.content) &&
                  project.content.map((c) => {
                    return (
                      <div key={c.title}>
                        <h2 className="text-2xl font-semibold mb-2">
                          {c?.title}
                        </h2>
                        <p className="text-gray-300 leading-6.5 font-extralight">
                          {c?.description}
                        </p>

                        {Array.isArray(c.images) && (
                          <div key={c.title} className="lg:flex gap-4 mt-5">
                            {c.images.map((img) => {
                              return (
                                <div
                                  key={img}
                                  className="rounded overflow-hidden lg:w-1/2 mb-4 lg:mb-0"
                                >
                                  <img
                                    className="w-full lg:h-full"
                                    src={
                                      img.includes("http")
                                        ? img
                                        : `/pictures/${img}`
                                    }
                                  />
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>

              {/* Review */}
              <div className="mt-4 bg-primary p-4 rounded">
                <p>{project.client.review}</p>
                <div className="flex gap-2 items-center mt-2">
                  <div className="text-gray-400">
                    <p className="text-sm">{project?.client?.contactPerson}</p>
                    <p className="text-sm">{project?.client.position}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default SingleProjectDetailsPage;
