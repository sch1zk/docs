import nextra from 'nextra'
 
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true // mandatory, otherwise won't export
  },
  basePath: "/docs",

  // Optional: Change the output directory `out` -> `dist`
  // distDir: "build"
}
const withNextra = nextra({
  search: false 
})
 
export default withNextra(nextConfig)