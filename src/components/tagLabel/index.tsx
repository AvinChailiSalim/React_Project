import { useState } from "react";
import { ComponentArrows, XClose } from "../icon/icon";
import {AnimatePresence, motion, useAnimate} from "framer-motion";

type Props = {
    type?: 'primary' | 'error' | 'default' | 'info' | 'warning',
    size?: 'sm' | 'md' | 'lg',
    children?: React.ReactNode
    className?: string
    disabled: boolean
    canClose: boolean
    logo?: React.ReactNode
}
    
export default function TagLabel({type='default', size, children,className,disabled, canClose, logo}: Props){
    let labelSize = '';
    if(size === 'sm'){
        labelSize = 'h-fit w-tag-sm text-sm px-tag-sm-w py-tag-sm-h';
    } else if(size === 'md'){
        labelSize = 'h-fit w-tag-md text-sm px-tag-md-w py-tag-md-h'
    }else if(size === 'lg'){
        labelSize = 'h-fit w-tag-lg text-sm px-tag-lg-w py-tag-lg-h'
    }

    const getLabelState = (type: string, disabled: boolean) => {
        let labelType = '' 
        if(!disabled){
            if(type === 'primary'){
                labelType ='bg-primary-50 text-primary-700' 
            } else if(type === 'error'){
                labelType = 'bg-error-50 text-error-700'     
            } else if(type === 'warning'){
                labelType = 'bg-warning-50 text-warning-700'
            } else if (type === 'info'){
                labelType = 'bg-info-50 text-info-700'    
            } else if(type === 'default'){
                labelType = 'bg-neutral-50 text-neutral-700' 
            }
        } else if(disabled){
            labelType='bg-neutral-200 rounded-1 border-neutral-300 border-solid'
        }
        return labelType;
    };
    
    const labelType = getLabelState(type, disabled);

    const[isOpen, setIsOpen] = useState<boolean>(true);

    const toggleLabel = () => {
        setIsOpen(!isOpen);
    }

    return(
        <>
         <motion.div
            layout
            initial={{ height: 0 }}
            animate={{ height: isOpen? 'auto' : 0}}
            style={{ overflow: "hidden" }}
            > 
            <label className={`inline-flex gap-1 ${labelSize} ${labelType} bg-pr rounded-[8px] flex items-center justify-center ${className} ${disabled}`}>
                <div className="">
                    {logo}
                </div>
                {children}
                {canClose && (
                   <div className="cursor-pointer justify-center "
                    onClick={toggleLabel}
                    >
                        <XClose />
                    </div>
                )}
            </label>
            </motion.div>
        </>
    )
}