export const PORT = process.env.PORT || 5000;
export const HOST = process.env.HOST || "localhost";
export const SERVER_URL = `http://${HOST}/${PORT}`;
export const DB_NAME = "techStack";
export const DB_URL = `mongodb://localhost:27017/${DB_NAME}`;
export const API_URL = `${SERVER_URL}/api`;
