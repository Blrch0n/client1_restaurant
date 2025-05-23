/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "templateapi.xyz",
        pathname: "/qrmenu/uploads/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
