/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep `next dev` output separate so a production build cannot replace its chunks.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
};

export default nextConfig;
