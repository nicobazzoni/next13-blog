/** @type {import('next').NextConfig} */
module.exports = {
  
  reactStrictMode: true,
  experimental: { 
    appDir: true 
  },

  
  images: {
    domains: ['links.papareact.com', 'cdn.sanity.io'],
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  
}
