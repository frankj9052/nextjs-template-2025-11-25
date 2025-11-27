"use client";
import { get } from "@/libs/axios/client";
import { Button } from "@heroui/react";
import { AxiosError } from "axios";
import { BaseError } from "@frankjhub/shared-errors";
import { useState } from "react";

type TestResponse = {
  data: {
    ok: string;
    message: string;
    timestamp: string;
  };
};

export const AxiosTest = () => {
  const [result, setResult] = useState<string>("");

  const testAxios = async () => {
    try {
      const res = await get<TestResponse>("/api/test"); // 访问一个简单的测试 API
      if (res instanceof BaseError) {
        setResult("❌ Axios Error:\n" + res.message);
      }
      setResult(JSON.stringify(res, null, 2));
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        setResult("❌ Axios Error:\n" + err.message);
      }
    }
  };
  return (
    <div style={{ padding: 20 }}>
      <h1>Axios Test</h1>

      <Button onPress={testAxios} color="primary">
        Test Axios
      </Button>

      <pre style={{ marginTop: 20, background: "#f0f0f0", padding: 12 }}>
        {result || "Click Test Axios button..."}
      </pre>
    </div>
  );
};
