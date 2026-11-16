/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Optimización activada: sirve AVIF/WebP en el tamaño justo (mejor LCP).
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Transiciones animadas entre rutas con la View Transitions API.
    viewTransition: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ]
  },
}

export default nextConfig
