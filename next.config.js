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
   }
}

"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"

module.exports = nextConfig
