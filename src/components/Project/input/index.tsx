import { ReactNode } from "react"

type Props = {
    label? : ReactNode
}

export default function Input({label}: Props){    
    
    return(
        <>
            <div>
                <label className="w-full">{label}</label>
            </div>
            <div className={`relative gap-2 inline-flex w-full h-fit`}>
            <input 
                className={`w-full h-fit z-0`} 
                type="text" 
                placeholder='Nomor peserta' 
                />
            <button className={`gap-1 bg-pr rounded-[8px] flex items-center justify-center`}>            
                Cari
            </button>

            </div>              
        </>
    )
}