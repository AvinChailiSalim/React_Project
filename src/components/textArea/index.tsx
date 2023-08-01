type Props = {
    type?: 'primary' | 'error',
    children?: React.ReactNode
    className?: string
    disabled: boolean
}

export default function TextArea({type = 'primary', children, className, disabled}: Props) {

    const getTextAreaState = (type: string, disabled: boolean) => {
        let btnType = '' 
        if(!disabled){
            if(type === 'primary'){
                btnType ='border border-primary-500 hover:border-primary-600 focus:drop-shadow-primary active:border-primary-700' 
            } else if(type === 'error'){
                btnType = 'border border-error-600 hover:border-error-700 focus:drop-shadow-error active:border-error-800'     
            }
        } else if(disabled){
            btnType='bg-neutral-200 rounded-1 border-neutral-300 border-solid'
        }
        return btnType;
    };
    
    const btnType = getTextAreaState(type, disabled);

    return(
        <>
            <div className="w-full">
                <textarea 
                className={`w-full inline-flex gap-1 ${btnType} bg-pr rounded-[8px] flex items-center justify-center ${className} ${disabled}`} 
                placeholder="Input your message"></textarea>
            </div>
        </>
    )
}