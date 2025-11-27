"use client";

import { AxiosTest } from "@/components/Test/AxiosTest";
import { ClsxTest } from "@/components/Test/ClsxTest";
import { EnvTest } from "@/components/Test/EnvTest";
import { ReduxTest } from "@/components/Test/ReduxTest";
import { SwiperTest } from "@/components/Test/SwiperTest";
import { ToastifyTest } from "@/components/Test/ToastifyTest";

export const HeroSecion = () => {
  return (
    <div className="flex flex-col gap-3">
      <ClsxTest />
      <ReduxTest />
      <ToastifyTest />
      <SwiperTest />
      <EnvTest />
      <AxiosTest />
    </div>
  );
};
