import withPWA from 'next-pwa';

const nextConfig = {
    reactStrictMode: true,
    ...withPWA({
        dest: 'public',
        register: true,
        skipWaiting: true,
    }),
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
            },
        ],
    },
};

export default nextConfig;
