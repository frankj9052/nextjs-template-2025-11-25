"use client";
import { reduxStore } from "@/libs/redux";
import { HeroUIProvider } from "@heroui/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={reduxStore}>
      <HeroUIProvider>
        <ToastContainer position="bottom-left" hideProgressBar className="z-50" />
        {children}
      </HeroUIProvider>
    </Provider>
  );
}
