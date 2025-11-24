import Link from "next/link";
import Eye from "../svg/Eye";
import Button from "./Button";

const ProjectCard = ({ image, title, description, client, projectSlug }) => {
  return (
    <div className="group bg-primary overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 relative rounded">
      <Link
        className="flex flex-col md:flex-row"
        href={`/portfolio/${projectSlug}`}
      >
        {/* Image Section */}
        <div className="w-full lg:max-w-1/3">
          <img
            src={"/pictures/" + image}
            alt={title}
            className="w-full aspect-[3/4] max-h-52 h-full object-cover md:object-center"
          />
        </div>

        {/* Content Section */}
        <div className="w-full p-6 flex flex-col justify-center">
          <h3 className="text-lg font-bold text-white mb-3 underline underline-offset-4 leading-[22px] line-clamp-1">
            {title}
          </h3>
          <p className="text-gray-200 text-sm leading-[21px] mb-4 line-clamp-5">
            {description}
          </p>
          <p className="text-gray-300 text-sm font-semibold">
            <span className="font-medium">Client:</span> {client}
          </p>
        </div>
      </Link>

      {/* Portfolio Link */}
      <div className="hidden absolute inset-0 bg-primary/90 lg:flex justify-center items-center opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
        <div className="max-w-48">
          <Button
            className="bg-primary"
            icon={<Eye />}
            to={`/portfolio/${projectSlug}`}
          >
            View Case Study
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
