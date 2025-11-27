import { serverEnv } from "@/config/env.server";

export const EnvTest = () => {
  return (
    <div>
      <div>Check NEXT_PUBLIC_ENV_TEST:</div>
      <div>{serverEnv?.NEXT_PUBLIC_API_BASE_URL}</div>
      <div>Check Node Env</div>
      <div>{serverEnv?.NODE_ENV}</div>
    </div>
  );
};
