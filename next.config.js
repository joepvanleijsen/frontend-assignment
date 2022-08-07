/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false, // Should be false to prevent Keycloak from going in infinite loop after user is logged in

	env: {
		API_GATEWAY_URL: process.env.API_GATEWAY_URL ? process.env.API_GATEWAY_URL : null,
	},

	images: {
		domains: ['localhost'],
	},

	experimental: {
		outputStandalone: true,
	},
};

module.exports = nextConfig
