export const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL || "";
if (!SUPABASE_URL) {
  throw new Error("SUPABASE_URL is not defined");
}

export const SUPABASE_ANON_KEY =
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "";
if (!SUPABASE_ANON_KEY) {
  throw new Error("SUPABASE_ANON_KEY is not defined");
}

export const GOOGLE_OAUTH_CLIENT_ID =
  process.env.EXPO_PUBLIC_GOOGLE_OAUTH_CLIENT_ID || "";
if (!GOOGLE_OAUTH_CLIENT_ID) {
  throw new Error("GOOGLE_OATH_CLIENT_ID is not defined");
}
