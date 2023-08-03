import { useEffect, useState } from "react";

interface YgoData{
    name?: string;
    level?: number;
    desc?: string;
    card_images?: {image_url? : string}[];
}


export default function OnlineCard(){
    //Online Data
    const [onlineData, setOnlineData] = useState<YgoData[]>([]);

    const apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Hieratic';

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
        //onlineData.length > 0 ? (

        /*) : (
            <div>
                Loading...
            </div>
        ) */
    return(
        <>
        <div>
            <div className="grid gap-4 grid-cols-5 grid-rows-1">
            {onlineData.map((card, index) => (
            <div className="w-[197px] h-[197px] p-3 flex-col justify-center items-center 
            gap-[14px] rounded-lg bg-primary-600 text-white group
            hover:bg-primary-700 hover:scale-125">
                <div className="flex items-center justify-center group-hover:scale-125">
                    <img src={card.card_images && card.card_images[0]?.image_url} width='71px' height='71px'/>
                </div>
                <div className="group-hover:translate-y-4">
                    <div>{card.name}</div>
                    <div key={index} className="font-bold line-clamp-3 group-hover:line-clamp-2">{card.desc}</div>
                </div>    
            </div>
            ))
                       }
            </div>
        </div>
    
        </>
    )
}

