"use client";
import { Button } from "@heroui/react";
import { toast } from "react-toastify";

export const ToastifyTest = () => {
  const toastifyTest = () => {
    toast.success("This is a toastify test!");
  };
  return (
    <div>
      <div>Toastify Test</div>
      <Button onPress={toastifyTest}>Toastify Test</Button>
    </div>
  );
};
