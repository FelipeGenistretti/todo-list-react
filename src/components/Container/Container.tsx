import { cva, cx, type VariantProps } from "class-variance-authority";
import type { ElementType, ReactNode } from "react";

export const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      md: "max-w-[31.5rem] px-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface ContainerProps extends VariantProps<typeof containerVariants> {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
}

export function Container({
  as: Component = "div",
  className,
  children,
  size,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cx(containerVariants({ size }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}
