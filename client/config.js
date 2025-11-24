export const serverUrl =
  import.meta.env.VITE_API_URL || import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

// Debug khi cần
export const printConfig = () => {
  console.log("🔧 Using Backend API:", serverUrl);
};
