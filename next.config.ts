const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.yetipm.com",
        pathname: "/media/**/**", // Adjust the pathname if necessary
      },
    ],
  },
};

export default nextConfig;
