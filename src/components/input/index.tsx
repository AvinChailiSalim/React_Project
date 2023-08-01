//label, placeholder, help, prefix, suffix, icon

import { Children, ReactNode } from "react";

type Props = {
    label? : ReactNode,
    helperText?: string,
    prefix?: ReactNode,
    suffix?: ReactNode,
    icon?: ReactNode,
    disabled?: boolean,
    children?: string,
    type?: 'disabled' | 'active' | 'error'
}

export default function Input ({label, type, children, helperText, prefix, suffix, icon, disabled}: Props) {
    const getButtonState = (type: any) => {
        let btnType = '' 
        switch(type){
            case 'active':
                btnType = 'bg-white border-primary-300 text-neutral-700 border-[1px] rounded-lg border-solid hover:border-primary-500 focus:drop-shadow-primary active:border-neutral-200';
                break;
            case 'disabled':
                btnType='bg-neutral-200 rounded-lg border-[1px] border-neutral-300 border-solid';
                break;
            case 'error':
                btnType='border-error-300 border-[1px] rounded-lg hover:border-error-700 focus:drop-shadow-error active:border-error-800';
                break;
            default:
                btnType = 'bg-white border-neutral-300 text-neutral-700 border-[1px] rounded-lg border-solid hover:border-primary-500 focus:drop-shadow-primary active:border-neutral-200'
                break;
        }
        return btnType;
    };

    const getImageColor = (type: any) => {
        let imageColor = ''
        switch (type) {
            case 'active':
                imageColor = 'text-primary-500';  
                break; 
            case 'disabled':
                imageColor = 'text-neutral-500'; 
                break;
                case 'error':
                imageColor = 'text-error-500'; 
                break;
            default:
                imageColor = 'text-neutral-500';
                break;
        }
        return imageColor;
    };

    const btnType = getButtonState(type);
    const imageColor = getImageColor(type);

    const inputPadding = prefix ? "pl-6" : "pl-3";
            
    return ( 
        <>
             <form >
                <div>
                    <label className="w-full">{label}</label>
                </div>
                <div className={`relative ${btnType} gap-2 inline-flex w-full h-fit`}>
                    {prefix && ( 
                        <div className={`absolute ${imageColor} h-full flex items-center bg-neutral-300 rounded-l-md gap-1 w-fit text-base z-10`}>
                            {prefix}
                        </div>
                    )}
                    <input 
                        className={`${inputPadding} w-full h-fit ${imageColor} focus:drop-shadow-${btnType} z-0`} 
                        type="text" 
                        placeholder={children} 
                        disabled={type === 'disabled'||disabled}/>
                    <div className={`absolute right-5 ${imageColor} h-full flex items-center`}>
                        {icon}
                    </div>
                    {suffix && (
                        <div className={`absolute right-0 ${imageColor} h-full flex items-center bg-neutral-300 rounded-r-md gap-1 w-fit text-base`}>
                            {suffix}
                        </div>
                    )}
                </div>
                     <small>{helperText}</small>
            </form>
        </>
    );
}
 
