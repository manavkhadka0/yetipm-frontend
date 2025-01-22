const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.yetipm.baliyoventures.com',
        pathname: '/media/images/**', // Adjust the pathname if necessary
      },
    ],
  },
};

export default nextConfig;