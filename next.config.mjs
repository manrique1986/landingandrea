/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['res.cloudinary.com'], // Agregar Cloudinary como dominio permitido
    },
  };
  
  // Cambia esto:
  // module.exports = nextConfig;
  
  // Por esto:
  export default nextConfig;