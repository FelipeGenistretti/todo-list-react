import { cva, type VariantProps } from "class-variance-authority";
import { Component, type ElementType } from "react";

export const skeletonVariants = cva(`
    animate-pulse bg-gray-200 pointer-events-none
    `,{
        variants:{
            rounded:{
                sm:"rounded-sm",
                lg:"rounded-lg",
                full:"rounded-full"
            }
        },
        defaultVariants:{
            rounded:"lg"
        }
});

export interface SkeletonProps extends VariantProps<typeof skeletonVariants>{
    as?:ElementType
    className?:string
}

export function Skeleton({as:Component="div", rounded, className,...props}:SkeletonProps) {
    return(
        <Component className={skeletonVariants({rounded, className})}>

        </Component>
    )
}