import { cva, type VariantProps } from "class-variance-authority"
import type React from "react"
import { Skeleton } from "../Skeleton/Skeleton"

export const inputCheckboxWrapperVariants = cva(
    `
        inline-flex items-center justify-center relative group
    `
)

export const InputCheckboxVariants = cva(
    `
        appearance-none peer flex items-center  transition overflow-hidden
    `,
    {
        variants:{
            variant:{
                none:"",
                default:`border-2 border-solid  border-green-700 hover:border-green-900/20
                        checked:border-green checked:bg-green-700 group-hover:checked:border-green-900 group-hover:checked:bg-green-900 cursor-pointer `
            },
            size: {
                md: "w-5 h-5 rounded-sm"
            },
            isDisabled :{
                true:"pointer-events-none"
            }
        },
        defaultVariants:{
            variant:"default",
            size:"md",
            isDisabled:false
        }
    }
)

export const inputCheckboxIconVariants = cva(
    `
        absolute top-1/2 left-1 -translate-y-1/2 hidden peer-checked:block fill-white
    `,
    {
        variants:{
            
            size:{
                md:"w-3 h-3"
            }
        },
        defaultVariants:{
            size:"md"
        }
    }
)


export interface InputCheckboxProps extends VariantProps<typeof InputCheckboxVariants>,
    Omit<React.ComponentProps<"input">, "size"|"disabled">{
        loading?:boolean
}


export function InputCheckbox({
    size, isDisabled, className, variant,loading,...props
}:InputCheckboxProps){

    if(loading){
        return <Skeleton className={InputCheckboxVariants({variant:"none"})}/>
    }

    return (
        <label className={inputCheckboxWrapperVariants({className})}>
            <input type="checkbox" className={InputCheckboxVariants({size ,variant , isDisabled})} {...props}/>
            <svg className={inputCheckboxIconVariants({size})} width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.354 0.854028L4.35403 8.85403C4.30759 8.90052 4.25245 8.9374 4.19175 8.96256C4.13105 8.98772 4.06599 9.00067 4.00028 9.00067C3.93457 9.00067 3.86951 8.98772 3.80881 8.96256C3.74811 8.9374 3.69296 8.90052 3.64653 8.85403L0.146528 5.35403C0.0527077 5.26021 0 5.13296 0 5.00028C0 4.8676 0.0527077 4.74035 0.146528 4.64653C0.240348 4.55271 0.367596 4.5 0.500278 4.5C0.63296 4.5 0.760208 4.55271 0.854028 4.64653L4.00028 7.7934L11.6465 0.146528C11.7403 0.0527074 11.8676 -9.88557e-10 12.0003 0C12.133 9.88558e-10 12.2602 0.0527074 12.354 0.146528C12.4478 0.240348 12.5006 0.367596 12.5006 0.500278C12.5006 0.63296 12.4478 0.760208 12.354 0.854028Z" fill="white"/>
            </svg>

        </label>
    )
}