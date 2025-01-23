/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true, // Ignore ESLint errors during build
    },
    typescript: {
      ignoreBuildErrors: true, // Ignore TypeScript errors during build
    },
  };
  
  export default nextConfig; // Use 'export default' for ESM
  