import Sarjana from "../../img/sarjana.png"

type Props = {
    type?: 'SELEKSI'  | 'PROGRAM'
    children?: string
}

export default function Card({type, children}: Props) {

    return(
        
            <div className="w-[197px] h-[197px] p-3 flex-col justify-center items-center gap-[14px] rounded-lg bg-primary-600 text-white
            hover:bg-primary-700 hover:scale-125">
                <div className="">
                    <img src={Sarjana} width='71px' height='71px'/>
                </div>
                <div>
                    <div>{type}</div>
                    <div className="font-bold">{children}</div>
                </div>
            </div>
        
    )
}