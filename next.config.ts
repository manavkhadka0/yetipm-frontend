const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yetipm.baliyoventures.com",
        pathname: "/media/**/**", // Adjust the pathname if necessary
      },
    ],
  },
};

export default nextConfig;
