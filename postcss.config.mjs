/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // Added autoprefixer to handle cross-browser compatibility
  },
};

export default config;
