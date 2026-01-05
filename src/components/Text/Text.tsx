import type { ElementType, ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"

export const textVariants = cva("font-sans text-gray-400",{
  variants:{
    variant:{
      "body-sm-bold":"text-sm leading-5 font-semibold",
      "body-md":"text-base leading-6 font-normal",
      "body-md-bold":"text-base leading-6 font-semibold"
    }
  },
  defaultVariants:{
    variant:"body-md"
  }
})

export interface TextProps extends VariantProps<typeof textVariants> {
  as?: ElementType
  children?: ReactNode
  className?: string
}

export function Text({
  as: Component = "span",
  className,
  children,
  variant,
  ...props
}: TextProps) {
  return (
    <Component className={textVariants({ variant, className })} {...props}>
      {children}
    </Component>
  )
}
