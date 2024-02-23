/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [{
            hostname: "edamam-product-images.s3.amazonaws.com",
            protocol: 'https',
        }]
    }
};

export default nextConfig;
