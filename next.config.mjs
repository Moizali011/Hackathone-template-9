/** @type {import('next').NextConfig} */
const nextConfig = {
  images : {
      domains :[
          "images.pexels.com",
          "cdn.sanity.io"
      ],
  },
};

export default nextConfig; 

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
};
