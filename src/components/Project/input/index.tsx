import { ReactNode } from "react"

type Props = {
    label? : ReactNode,
    helperText?: string,
    children?: string,
}

export default function Input({label, helperText, children}: Props){    
    
    return(
        <>
            <div>
                <label className="w-full">{label}</label>
            </div>
            <div className={`relative gap-2 inline-flex w-full h-fit`}>
            <input 
                className={`w-full h-fit z-0`} 
                type="text" 
                placeholder={children} 
                />
            </div>              
        </>
    )
}