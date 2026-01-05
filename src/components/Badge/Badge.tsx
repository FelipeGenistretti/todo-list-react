import { cva, cx, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { Text } from "../Text/Text";
import { Skeleton } from "../Skeleton/Skeleton";

export const badgeVariants = cva("inline-flex rounded-full items-center justify-center", {
    variants: {
        variant : {
            none:"",
            primary:"bg-green-200",
            secondary: "bg-pink-200"
        },
        size: {
            sm: "py-0.5 px-2"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "sm"
    }
})

export const badgeTextVariants = cva("",{
    variants:{
        variant:{
            none:"",
            primary:"text-green-800",
            secondary: "text-pink-800"
        }
    }
})

export const badgeSkeletonVariants = cva("",
    {
        variants:{
            size:{
                sm:"w-6 h-6"
            }
        },
        defaultVariants:{
            size:"sm"
        }
    }
)

export interface BadgeProps extends ComponentProps<"div">, VariantProps<typeof badgeVariants> {
    loading?:boolean
}

export function Badge({variant, size, className, children, loading,...props}:BadgeProps){

    if(loading){
        return <Skeleton rounded="full" className={cx(badgeVariants({variant:"none"}), badgeSkeletonVariants({size, className}))} />
    }

    return (
        <div className={badgeVariants({className, variant, size})} {...props}>
            <Text variant="body-sm-bold" className={badgeTextVariants({variant})} >{children}</Text>
        </div>
    )
}