/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "raw.githubusercontent.com",
            port: "",
            pathname: "/**"
         }
      ]
   },
   async redirects() {
      return [
         {
            source: "/:catalog/page/1",
            destination: "/:catalog",
            permanent: true
         }
      ]
   }
}

module.exports = nextConfig
