import { useEffect, useState } from "react";
import Sarjana from "../../img/sarjana.png"
import Countdown from "../countdown";


interface CardData{
    name?: string
}


export default function OnlineCard(){
    //Online Data
    const [onlineData, setOnlineData] = useState<CardData[]>([]);
    const [selectedCard, setSelectedCard] = useState(Number);

    const apiUrl = 'https://announcement.usu.ac.id/api/period/active';

        useEffect(() => {
            fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    if (data && data.data){
                        setOnlineData(data.data);
                        console.log(data);
                    } else{
                        console.error('Error response');
                    }
                })
                .catch((error) => console.error('Error fetching data: ', error));
        }, [])
        
    return(
        <>
        <div>
            <div className="grid gap-4 grid-cols-5 grid-rows-1">
            {onlineData.map((card, index) => {
                    const cardNameWords = card.name?.split(" ") || [];
                    const firstWord = cardNameWords[0] || "";
                    const remainingWords = cardNameWords.slice(1).join(" ");

                    return (
                        <div 
                        key={index}
                        onClick={() => setSelectedCard(index)} 
                        className="w-[197px] h-[197px] sm:w-24 p-3 flex-col justify-center items-center gap-[14px] rounded-lg bg-primary-600 text-white group hover:bg-primary-700 hover:scale-125">
                            <div className="flex items-center justify-center group-hover:scale-125">
                                <img src={Sarjana} alt="Sarjana" width="71px" height="71px" />
                            </div>
                            <div className="group-hover:translate-y-4">
                                <div>{firstWord}</div>
                                <div className="font-bold line-clamp-3 group-hover:line-clamp-2">{remainingWords}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        </>
    )
}

