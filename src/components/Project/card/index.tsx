import Slider from "react-slick"
import Sarjana from "../../img/sarjana.png"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState } from "react"

interface CardAtt {
    name?: string
    desc?: string
    onSelect: (index: number) => void
}

export default function Card({onSelect}: CardAtt) {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    //Offline Data
    const [cardData, setCardData] = useState<CardAtt[]>([]); 
    
    //Online Data
    const apiUrl = 'https://announcement.usu.ac.id/api/period/active';

    useEffect(() => {
        fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    if (data && data.data){
                        setCardData(data.data);
                        console.log(data);
                    } else{
                        console.error('Error response');
                    }
                })
                .catch((error) => console.error('Error fetching data: ', error));
        

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return() => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    /*const fetchAPI = async () => {
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
    */
    
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

    const renderCards = () => {
        return cardData.map((card, index) => {
            const cardNameWords = card.name?.split(" ") || [];
            const firstWord = cardNameWords[0] || "";
            const remainingWords = cardNameWords.slice(1).join(" ");

            const handleClick = () => {
                onSelect(index);
                console.log(index);
            }

            const commonCardJSX = (
                <div key={index} className="w-[197px] xs:w-full h-[197px] p-3 flex-col 
                justify-center items-center rounded-lg bg-primary-600 text-white
                group hover:bg-primary-700 hover:scale-125 xs:hover:scale-100"
                onClick={handleClick}>
                    <div className="flex items-center justify-center">
                        <img src={Sarjana} width='71px' height='71px' />
                    </div>
                    <div className="text-center">
                        <div>{firstWord}</div>
                        <div className="font-bold line-clamp-3">{remainingWords}</div>
                    </div>
                </div>
            );
            
            if (screenWidth >= 640) {
                return (
                    <div className="">
                        {commonCardJSX}
                    </div>
                );
            } else {
                return (
                    <div className="justify-center flex flex-col items-center hover:bg-primary-700">
                        {commonCardJSX}
                    </div>
                );
            }
        });
    };
        
    return (
        <>
            <div className="gap-10 py-10 ">
                {screenWidth >= 640 ? (
                    <div className="grid gap-4 grid-cols-5 grid-rows-1">
                        {renderCards()}
                    </div>
                ) : (
                    <Slider {...sliderSettings}>
                        {renderCards()}
                    </Slider>
                )}
            </div>
        </>
    );
}