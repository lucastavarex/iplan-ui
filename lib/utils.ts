export const getBaseUrl = () => {
  if (process.env.NEXT_VERCEL_ENV == "production")
    return `https://${process.env.NEXT_VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.NEXT_VERCEL_URL) return `https://${process.env.NEXT_VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
};
