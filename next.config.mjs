/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL("https://avatars.githubusercontent.com/u/71191114?v=4"),
      new URL("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/*"),
    ],
  },
};

export default nextConfig;
