const prod = process.env.NODE_ENV === "production";
module.exports = {
  "process.env.NEXT_PUBLIC_BASE_URL": prod
    ? "http://afrotrap-main.vercel.app"
    : "http://localhost:3000",
};
