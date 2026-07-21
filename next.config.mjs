/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Гарантируем, что брендовая иконка попадёт в serverless-бандл route /wallet/apple,
  // где она читается через fs для сборки .pkpass.
  outputFileTracingIncludes: {
    "/wallet/apple": ["./public/apple-icon.png"],
  },
}

export default nextConfig
