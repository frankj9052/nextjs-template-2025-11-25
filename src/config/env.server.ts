import z from "zod";

const serverEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  NEXT_PUBLIC_API_BASE_URL: z.string().url().default("http://localhost:3000"),
});

const parsed = serverEnvSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("❌ Invalid server environment variables!");
  console.error(parsed.error.format());
  if (typeof window === "undefined") {
    process.exit(1);
  }
}

export const serverEnv = parsed.data;
