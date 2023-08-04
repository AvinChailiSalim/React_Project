import Slider from "react-slick"
import Sarjana from "../../img/sarjana.png"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState } from "react"

interface CardAtt {
    type?: 'SELEKSI'  | 'PROGRAM'
    desc?: string
}

export default function Card({}: CardAtt) {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    //Offline Data
    const [cardData, setCardData] = useState<CardAtt[]>([]); 
    
    useEffect(() => {
        fetchAPI();

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return() => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    const fetchAPI = async () => {
        try{
            const response = await fetch('http://localhost:3001/cardData');
            if(response.ok){
                const data = await response.json();
                setCardData(data);
            }
            else{
                console.error("Failed to fetch data from local API");
            }
        } catch(error){
            console.error('Error fetching data:', error);
        }
    }

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
    };

    /*<div className="w-[197px] h-[197px] p-3 flex-col justify-center items-center gap-[14px] rounded-lg bg-primary-600 text-white
            hover:bg-primary-700 hover:scale-125">
                <div className="">
                    <img src={Sarjana} width='71px' height='71px'/>
                </div>
                <div>
                    <div>{type}</div>
                    <div className="font-bold">{children}</div>
                </div>
            </div>*/

    return(
            <>
            <div className="gap-10 py-10 ">
            {screenWidth >= 640 ? (
                <div>
                     <div className="grid gap-4 grid-cols-5 grid-rows-1">
                    {cardData.map((card, index) => (
                    <div className="w-[197px] h-[197px] p-3 flex-col justify-center items-center 
                    gap-[14px] rounded-lg bg-primary-600 text-white group
                    hover:bg-primary-700 hover:scale-125">
                        <div className="flex items-center justify-center group-hover:scale-125">
                            <img src={Sarjana} width='71px' height='71px'/>
                        </div>
                        <div className="group-hover:translate-y-4">
                            <div>{card.type}</div>
                            <div key={index} className="font-bold line-clamp-3 group-hover:line-clamp-2">{card.desc}</div>
                        </div>    
                    </div>
                    ))}
                    </div>
                </div>
            ) : (
                <div>
                    <Slider {...sliderSettings}>
                        {cardData.map((card, index) => (   
                            <div key={index} className="w-[197px] h-[197px] p-3 justify-center flex flex-col
                            items-center rounded-lg bg-primary-600 text-white
                            hover:bg-primary-700">
                                <div className="flex items-center justify-center">
                                    <img src={Sarjana} width='71px' height='71px'/>        
                                </div>
                                <div className="text-center">
                                    <div>{card.type}</div>
                                    <div className="font-bold truncate">{card.desc}</div>
                                </div>    
                            </div>
                        ))}
                    </Slider>
                </div>
            )}
            </div>
            </>
    )
}