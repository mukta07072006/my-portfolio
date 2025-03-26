/** @type {import('next').NextConfig} */
   const nextConfig = {
     reactStrictMode: true,
     swcMinify: false, // Disabled for stability
     output: 'standalone' // Optimized for Vercel
   };
   module.exports = nextConfig;
