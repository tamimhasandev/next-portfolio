import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import PaperPlane from "../svg/PaperPlane";
import Linkedin from "../svg/Linkedin";
import X from "../svg/X";
import Github from "../svg/Github";
import StackOverflow from "../svg/StackOverflow";
import CodePen from "../svg/CodePen";
import User from "../svg/User";
import Laptop from "../svg/Laptop";
import Bag from "../svg/Bag";
import Resume from "../svg/Resume";
import Contact from "../svg/Contact";
import MenuLink from "./MenuLink";

const data = {
  aboutMe: `Hi, I'm Tamim Hasan. I'm a React/Next.js Developer and a Web Analytics Expert.`,
  socials: [
    {
      id: 1,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/tamimhasandev/",
      icon: <Linkedin />,
    },
    {
      name: "X",
      link: "https://x.com/tamimhasandev",
      icon: <X />,
    },
    {
      name: "Github",
      link: "https://github.com/tamimhasandev",
      icon: <Github />,
    },
    {
      name: "StackOverflow",
      link: "https://stackoverflow.com/users/14277076/md-tamim-hasan",
      icon: <StackOverflow />,
    },
    {
      name: "CodePen",
      link: "https://codepen.io/tamimhasandev",
      icon: <CodePen />,
    },
  ],
  menu: [
    {
      name: "About Me",
      link: "/",
      icon: <User />,
    },
    {
      name: "Portfolio",
      link: "/portfolio",
      icon: <Laptop />,
    },
    {
      name: "Services & Pricing",
      link: "https://www.fiverr.com/tamimhasandev",
      icon: <Bag />,
      blank: true,
    },
    {
      name: "Resume",
      link: "/resume",
      icon: <Resume />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <Contact />,
    },
  ],
};

export default function SideBar() {
  return (
    <div>
      <header className="bg-primary hidden lg:block text-white w-[280px] h-screen px-4 py-6 fixed overflow-y-auto scrollbar">
        <aside className="">
          <h2 className="text-2xl font-semibold text-center leading-4">
            Tamim Hasan
          </h2>
          <div className="flex flex-col items-center text-center pt-6">
            <div className="relative">
              <div className="absolute w-full h-full z-30 animate-ring-spin">
                <div className="relative w-full h-full">
                  <div className="absolute w-[calc(50%)] h-[calc(50%)] border-t-4 border-l-4 rounded-tl-full border-[#4285f4]"></div>
                  <div className="absolute right-0 w-[calc(50%)] h-[calc(50%)] border-t-4 border-r-4 rounded-tr-full border-[#ea4335]"></div>
                  <div className="absolute bottom-0 w-[calc(50%)] h-[calc(50%)] border-b-4 border-l-4 rounded-bl-full border-[#fbbc05]"></div>
                  <div className="absolute bottom-0 right-0 w-[calc(50%)] h-[calc(50%)] border-b-4 border-r-4 rounded-br-full border-[#34a853]"></div>
                </div>
              </div>
              <div className="w-40 h-40 overflow-hidden rounded-full p-1">
                <Image
                  src="https://avatars.githubusercontent.com/u/71191114?v=4"
                  alt="Profile"
                  className="rounded-full scale-125"
                  width={160}
                  height={160}
                  hostname="avatars.githubusercontent.com"
                />
              </div>
            </div>
            <p className="text-sm mt-4">{data.aboutMe}</p>
            {/* Links Start */}
            <ul className="flex gap-2 justify-center mt-4">
              {data.socials.map((social) => {
                return (
                  <li key={social.name}>
                    <a
                      target="_blank"
                      title={social.name}
                      className="block bg-primary hover:bg-secondary border border-accent transition-colors duration-75 text-accent w-8 h-8 rounded-full overflow-hidden p-2"
                      href={social.link}
                    >
                      {social.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="border-b w-full pb-4 mb-4 border-gray-700" />
            {/* Links End */}
            <div className="mt-4 flex flex-col w-full">
              <ul className="flex flex-col items-baseline space-y-4 text-left px-2 pl-7">
                {data.menu.map((item) => (
                  <MenuLink key={item.name} item={item} />
                ))}
              </ul>
              {/* Hire me button Start */}
              <Button
                icon={<PaperPlane />}
                to="https://www.fiverr.com/tamimhasandev"
                className="justify-center items-center !my-3"
                targetBlank
              >
                Hire Me
              </Button>
              {/* Hire me button End */}
            </div>
          </div>
        </aside>
      </header>
    </div>
  );
}
