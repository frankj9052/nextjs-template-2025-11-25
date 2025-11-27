"use client";

import z from "zod";
import { serverEnv } from "./env.server";

const clientEnvSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
});

export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_API_BASE_URL: serverEnv?.NEXT_PUBLIC_API_BASE_URL,
});
