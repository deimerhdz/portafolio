import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  type: "primary" | "secondary";
};

export const Button = ({ children, type }: Props) => {
  const classType =
    type == "primary"
      ? "bg-esmeralda hover:bg-white text-negro-azulado"
      : "bg-azul-noche text-white border border-white hover:text-esmeralda hover:border-esmeralda";
  return (
    <button
      className={`py-[13px] px-[24px] font-semibold rounded-full transition-all ${classType}`}
    >
      {children}
    </button>
  );
};
