import { ReactNode, useEffect, useState } from "react"

type Props = {
    selectedCard: number
}

export default function Input({selectedCard}: Props){    
    
    const apiUrl = 'https://announcement.usu.ac.id/api/period/active';

    const [name, setName] = useState('') 
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout|null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data && data.data && data.data.length > 0) {
                    const name = data.data[selectedCard].name
                    setName(name)
                    console.log(selectedCard)
                } else {
                    console.error('Error response');
                }
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();

        return() => {
            if (intervalId !== null){
                clearInterval(intervalId);
            }
        }

    }, [selectedCard]);


    return(
        <div className="bg-white w-full h-fit rounded-lg py-5 grid grid-flow-row px-5 font-bold">
            <div>
                <label className="w-full">
                    <span className="lg:text-[48px] md:text-4xl sm:text-3xl text-2xl text-[#5E5E5E] !leading-relaxed pr-3">
                        PENGUMUMAN 
                    </span>
                    <span className="lg:text-[48px] md:text-4xl sm:text-3xl text-2xl text-[#03965C]"> 
                       {name} 
                    </span>
                </label>
            </div>
            <div className='grid grid-flow-row lg:grid-flow-col gap-3 pt-3'>
                <div className="pb-10">
                    <input 
                    className={`pl-3 py-2 w-full h-fit z-0 rounded-lg border border-solid border-gray`} 
                    type="text" 
                    placeholder='Nomor peserta' 
                    />
                    </div>
                <div className="bg-primary-500 rounded-lg text-white h-fit py-2 px-4 lg:px-0">
                    <button type="submit" 
                    className="btn-form w-full mt-[5px]">
                        <span>
                                Cari
                        </span>
                    </button>
                </div>
            </div>              
        </div>
    )
}