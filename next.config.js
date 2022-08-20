/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ["ar", "en", "tr"],
        defaultLocale: "en",
    },
};

module.exports = nextConfig;