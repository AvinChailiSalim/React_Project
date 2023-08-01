import { useState , useEffect} from "react";
type Props = {
type?: 'primary' | 'error' | 'outlined' | 'text' | 'secondary',
size?: 'sm' | 'md' | 'lg',
children?: React.ReactNode
className?: string
disabled: boolean
}

export default function Button({type = 'outlined', size = 'sm', children, className, disabled}: Props) {
 
    let btnSize = '';
    if(size === 'sm'){
        btnSize = 'h-8 text-xs px-sm-md-w py-sm-h';
    } else if(size === 'md'){
        btnSize = 'h-10  text-xs px-sm-md-w py-md-h'
    }else if(size === 'lg'){
        btnSize = 'h-12  text-xs px-lg-w py-lg-h'
    }

    const getButtonState = (type: string, disabled: boolean) => {
        let btnType = '' 
        if(!disabled){
            if(type === 'primary'){
                btnType ='bg-primary-500 text-white hover:bg-primary-600 focus:drop-shadow-primary active:bg-primary-700' 
            } else if(type === 'error'){
                btnType = 'bg-error-600 text-white hover:bg-error-700 focus:drop-shadow-error active:bg-error-800'     
            } else if(type === 'secondary'){
                btnType = 'bg-primary-200 hover:bg-primary-100 focus:drop-shadow-primary active:bg-primary-200'
            } else if (type === 'text'){
                btnType = 'bg-white text-primary-500 hover:text-primary-600 focus:text-primary-600 active:text-primary-700'    
            } else if(type === 'outlined'){
                btnType = 'bg-white border-neutral-300 text-neutral-700 border border-solid hover:bg-neutral-100 focus:drop-shadow-neutral active:bg-neutral-200' 
            }
        } else if(disabled){
            btnType='bg-neutral-200 rounded-1 border-neutral-300 border-solid'
        }
        return btnType;
    };
    
    const btnType = getButtonState(type, disabled);

    /*      
            }} else if (state === 'disabled'){
                btnType = 'bg-neutral-200 rounded-1 border-neutral-300 border-solid'    
       }
       return btnType;
    }

    const btnState = getButtonState(type, state);
*/



    return (
        <button className={`inline-flex  gap-1 ${btnSize} ${btnType} bg-pr rounded-[8px] flex items-center justify-center ${className} ${disabled}`}>
            
                <span className="mr-2">+</span>
                {children}
                <span className="mr-2">&#8594;</span> 
            
        </button>
    )
}