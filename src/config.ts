const config = {
  app: {
    port: import.meta.env.VITE_APP_PORT || 3000,
    baseUrl: import.meta.env.VITE_APP_BASE_URL || "http://localhost",
  },
  api: {
    server: import.meta.env.VITE_API_SERVER || "http://localhost:5000/api",
  },
};

export default config;
