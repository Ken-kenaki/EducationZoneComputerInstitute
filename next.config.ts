/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co", // Double asterisk allows all subdomains
      },
    ],
  },
  // ... other config if you have
};

module.exports = nextConfig;
