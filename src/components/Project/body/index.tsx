import Slider from "react-slick";
import Card from "../card";
import Countdown from "../countdown";
import { useEffect, useState } from "react";
import OnlineCard from "../card/onlineCard";
import Input from "../input";
import Output from "../output";

export default function Body() {

    const [selectedCard, setSelectedCard] = useState(0);

    const handleCardSelect = (index: number) => {
      setSelectedCard(index);
    };
  
    const arrCard: any[] = [
        {
            type: 'SELEKSI',
            desc: 'MAHASISWA INTERNASIONAL 2023'   
        },
        {
            type: 'SELEKSI',
            desc: 'MAHASISWA MANDIRI 2023'   
        },
        {
            type: 'PROGRAM',
            desc: 'APOTEKER SEMESTER GANJIL TAHUN AJARAN 2023/2024'   
        },
        {
            type: 'PROGRAM',
            desc: 'MAGISTER & DOKTER SEMESTER GENAP TAHUN 2023/2024'   
        },
        {
            type: 'PROGRAM',
            desc: 'PENDIDIKAN DOKTER SPESIALIS SEMESTER GANJIL TAHUN AJARAN 20..'   
        },
    ]

    /*    {window.innerWidth <= 640 ? (
                <div className="py-10 grid gap-4 grid-cols-5 grid-rows-1">
                {
                    arrCard.map(card => <Card key={card.desc} type={card.type}>{card.desc}</Card>)
                }       
            </div>
            ) : (<div className="carousel-container">
                  
                     </div>)}
          */  

    const [searchResult, setSearchResult] = useState('');
    const [targetDate, setTargetDate] = useState(new Date('2023-08-29'));
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout|null>(null);
    const [isTimeYet, setIsTimeYet] = useState<boolean>(false);

    const apiUrl = 'https://announcement.usu.ac.id/api/period/active';

    const handleSearchData = (input: string) => {
        setSearchResult(input);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                
                if (data && data.data && data.data.length > 0) {
                    const endDate = new Date(data.data[selectedCard].end_date);
                    setTargetDate(endDate);
                    restartCountdown(endDate);
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

    const restartCountdown = (newTargetDate: Date) => {
        if (intervalId !== null){
            clearInterval(intervalId);
        }

            const interval = setInterval(() => {
                const now = new Date();
                const timeRemaining: number = newTargetDate.getTime() - now.getTime();
                if(timeRemaining < 0){
                    setIsTimeYet(true);
                } else{
                    setIsTimeYet(false);
                    setSearchResult("");
                }
                
                if (timeRemaining <= 0) {
                    clearInterval(interval);
                }
            }, 1000);

            setIntervalId(interval);

    }

    

    return(
        <>
        <div className="gap-10">
            <Card onSelect={handleCardSelect}/>
            {isTimeYet?
                (<div>
                <Input 
                    selectedCard={selectedCard} 
                    searchData={handleSearchData}/>
                <Output 
                    search={searchResult} 
                    setSearch={setSearchResult} />
                </div>)            
                :
                (<Countdown selectedCard={selectedCard}/>)}
            
        </div>
        </>
    )
}