import { ReactNode, useEffect, useState } from "react"
import { dataFetch } from "../utils/dataFetch";

type Props = {
    selectedCard: number
    searchData: any
}

export default function Input({selectedCard, searchData}: Props){    
    
    const apiUrl = 'https://announcement.usu.ac.id/api/period/active';

    const [name, setName] = useState('') 
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout|null>(null);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await dataFetch(apiUrl) 

            if (data && data.data && data.data.length > 0) {
                const name = data.data[selectedCard].name
                setName(name)
                console.log(selectedCard)
            } else {
                console.error('Error response');
            }
        
        };

        fetchData();

        return() => {
            if (intervalId !== null){
                clearInterval(intervalId);
            }
        }

    }, [selectedCard]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue = e.target.value.replace(/\D/g, "");
        setInputValue(numericValue)
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const handleSearch = () => {
        searchData(inputValue);
        console.log('Button clicked')
    }

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
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyUp={handleKeyPress}/>
                    </div>
                <div className="bg-primary-500 rounded-lg text-white h-fit py-2 px-4 lg:px-0 hover:bg-primary-600 active:bg-primary-700">
                    <button type="submit" 
                    className="btn-form w-full mt-[5px]"
                    onClick={handleSearch}>
                        <span>
                            Cari
                        </span>
                    </button>
                </div>
            </div>    
        </div>
    )
}