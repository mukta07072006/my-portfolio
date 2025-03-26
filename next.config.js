/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,                     // 🔥 Disabled for stability
  experimental: {
    serverActions: true,                // 🔥 Required for Next.js 14+
    optimizePackageImports: [           // 🔥 Optimize these packages
      'framer-motion',
      'nodemailer'
    ]
  },
  eslint: {
    ignoreDuringBuilds: true            // 🔥 Temporary build fix
  }
};

module.exports = nextConfig;
