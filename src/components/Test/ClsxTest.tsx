import clsx from "clsx";

export const ClsxTest = () => {
  return <div className={clsx(["w-10", "h-10", "border-1 border-black", "bg-red-200"])} />;
};
