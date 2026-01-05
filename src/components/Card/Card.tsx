import { cva, type VariantProps } from "class-variance-authority";
import type { ElementType, ReactNode } from "react";
import type React from "react";

export const cardVariants = cva(
    `
        rounded-lg border border-solid border-gray-200 bg-white shadow-sm
    `,
    {
        variants:{
            size:{
                none:"",
                md:"p-5"
            }
        },
        defaultVariants:{
            size:"none"
        }
    }
    
)

export interface CardProps extends VariantProps<typeof cardVariants>{
    as?: ElementType
    children?:ReactNode
    className?:string
}

export function Card({as: Component="div", size, children, className, ...props}:CardProps){
    return (
    <Component className={cardVariants({size, className})} {...props}>
        {children}
    </Component>
    )
}