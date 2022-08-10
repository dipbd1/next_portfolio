/** @type {import('next').NextConfig} */

// const withPlugins = require("next-compose-plugins");

// // with Transpiler

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["placeimg.com"],
  },
};

// const withTM = require("next-transpile-modules")([
//   "three",
//   "@react-three/fiber",
//   "@react-three/drei",
// ]);

// module.exports = withPlugins([withTM], nextConfig);

module.exports = nextConfig;
