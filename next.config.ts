const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yetipm.baliyoventures.com",
        pathname: "/media/images/**", // Adjust the pathname if necessary
      },
    ],
  },
};

export default nextConfig;
