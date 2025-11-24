import Button from '../common/Button';
import RightArrow from '../svg/RightArrow';
import tamimImage from "/images/tamimhasan.webp";

export default function Home() {
  return (
    <div>
      {/* Hero Section Start */}
      <div className="flex flex-col lg:flex-row gap-8 items-center max-w-7xl mx-auto pb-12">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="font-bold text-5xl">Tamim Hasan</h1>
          <h2 className="text-2xl font-extralight text-white/70 pb-4 pt-2">
            React & Analytics Expert
          </h2>
          <p className="text-white/70 mr-10 pb-4">
            I'm a React and Next.js Developer, as well as a Web Analytics
            Expert. Since 2020, I’ve worked on many projects involving React and
            Next.js — creating fast, modern, and scalable web applications.
            Alongside development, I specialize in Google Tag Manager (including
            Server-Side GTM) and Google Analytics, helping businesses track user
            behavior accurately and make data-driven decisions with confidence.
          </p>
          <div className="flex gap-3 h-12">
            <Button to="portfolio" icon={<RightArrow />}>
              View Portfolio
            </Button>
            <button className="bg-gray-700 text-white font-semibold rounded px-4 py-2 flex gap-2 items-center cursor-pointer">
              <svg
                className="w-3"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="file-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
                />
              </svg>
              <span className="hidden lg:block">View</span>
              <span>Resume</span>
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="md:w-[400px] shrink-0">
          <img
            className="w-full h-auto object-cover"
            src={tamimImage}
            alt="Profile"
          />
        </div>
      </div>
      <div className="line" />
      {/* Hero Section End */}
      {/* Technical Expertise Section Start */}
      <section>
        <h2 className="text-[32px] leading-[38px] font-bold mt-8">What I do</h2>
        <p className="text-white/70 mr-10 pb-4 mt-4">
          I specialize in setting up{' '}
          <strong className="text-white">
            Google Tag Manager (Web & Server-Side)
          </strong>{' '}
          and <strong className="text-white">Google Analytics.</strong> I also
          configure{' '}
          <strong className="text-white">
            Facebook Pixel & CAPI, TikTok Pixel, Google Ads Conversion Tracking
          </strong>
          , and other advanced tracking setups — ensuring every event and
          conversion is recorded accurately.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="lg:p-4">
            <div className="flex">
              <img
                className="max-w-6 max-h-6 mb-2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg"
                alt=""
              />
            </div>
            <h4 className="text-lg font-semibold mb-1">Facebook Pixel</h4>
            <p className="text-sm text-gray-400">
              I learned Facebook Pixel from different YouTube channels, which
              helped me understand how to track and measure website interactions
              effectively.
            </p>
          </div>
          <div className="lg:p-4">
            <div className="flex">
              <img className="max-w-6 max-h-6 mb-2" src="/svg/ga.svg" alt="" />
            </div>
            <h4 className="text-lg font-semibold mb-1">Google Analytics</h4>
            <p className="text-sm text-gray-400">
              I learned Google Analytics from various YouTube channels, which
              helped me understand tracking, reporting, and data analysis for
              informed decisions.
            </p>
          </div>
          <div className="lg:p-4">
            <div className="flex">
              <img className="max-w-6 max-h-6 mb-2" src="/svg/gtm.svg" alt="" />
            </div>
            <h4 className="text-lg font-semibold mb-1">Google Tag Manager</h4>
            <p className="text-sm text-gray-400">
              I completed a course on Google Tag Manager from Analytics Mania,
              learning everything from fundamentals to advanced concepts.
            </p>
          </div>
          <div className="lg:p-4">
            <div className="flex">
              <img
                className="max-w-6 max-h-6 mb-2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                alt=""
              />
              <img
                className="max-w-6 max-h-6 mb-2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                alt=""
              />
            </div>
            <h4 className="text-lg font-semibold mb-1">React/Next JS</h4>
            <p className="text-sm text-gray-400">
              I have completed a course on React and Next.js from Learn with
              Sumit. I learned all the core concepts and fundamentals through
              multiple projects."
            </p>
          </div>
          <div className="lg:p-4">
            <img
              className="max-w-6 max-h-6 mb-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              alt=""
            />
            <h4 className="text-lg font-semibold mb-1">Tailwind CSS</h4>
            <p className="text-sm text-gray-400">
              Recently, I learned Tailwind CSS — an awesome framework for
              building fast, mobile-first web applications.
            </p>
          </div>
          <div className="lg:p-4">
            <img
              className="max-w-6 max-h-6 mb-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt=""
            />
            <h4 className="text-lg font-semibold mb-1">Vanilla JavaScript</h4>
            <p className="text-sm text-gray-400">
              JavaScript was my first programming language, and learning it from{' '}
              <a
                className="text-accent underline"
                target="_blank"
                href="https://www.youtube.com/@LearnwithSumit"
              >
                Learn with Sumit
              </a>{' '}
              has been an awesome journey.
            </p>
          </div>
          <div className="lg:p-4">
            <div className="flex">
              <img
                className="max-w-6 max-h-6 mb-2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                alt=""
              />
              <img
                className="max-w-6 max-h-6 mb-2"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                alt=""
              />
            </div>
            <h4 className="text-lg font-semibold mb-1">HTML & CSS</h4>
            <p className="text-sm text-gray-400">
              I learned HTML and CSS from various online channels, which helped
              me build a strong foundation in web development.
            </p>
          </div>
          {/* Add more items here */}
        </div>
      </section>
      {/* Technical Expertise Section End */}
      {/* Order button start */}
      <div className="flex justify-center mt-4">
        <Button
          targetBlank
          to="https://www.fiverr.com/tamimhasandev"
          icon={<RightArrow />}
        >
          Services &amp; Pricing
        </Button>
      </div>
      {/* Order button start */}
    </div>
  );
}
