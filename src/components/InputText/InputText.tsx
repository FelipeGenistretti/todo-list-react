import { cva, cx, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { textVariants } from "../Text/Text";

export const inputTextVariants = cva(
  "border-b border-solid border-gray-200 focus:border-pink outline-none",
  {
    variants: {
      size: {
        md: "pb-2 px-2",
      },
      isDisabled: {
        true: "pointer-events-none opacity-50",
      },
    },
    defaultVariants: {
      size: "md",
      isDisabled: false,
    },
  }
);

export interface InputTextProps
  extends VariantProps<typeof inputTextVariants>,
    Omit<ComponentProps<"input">, "size" | "disabled"> {
  isDisabled?: boolean;
}

export function InputText({
  size,
  isDisabled,
  className,
  ...props
}: InputTextProps) {
  return (
    <input
      className={cx(
        inputTextVariants({ size, isDisabled }),
        textVariants(),
        className
      )}
      disabled={isDisabled}
      {...props}
    />
  );
}
