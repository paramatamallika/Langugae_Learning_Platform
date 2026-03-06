import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicitly load .env from Backend folder
dotenv.config({ path: path.join(__dirname, ".env") });

console.log("Loaded URL:", process.env.SUPABASE_URL);
console.log("Loaded KEY:", process.env.SUPABASE_KEY);

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default supabase;