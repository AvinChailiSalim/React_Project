import Slider from "react-slick";
import Card from "../card";
import Countdown from "../countdown";
import { useEffect, useState } from "react";
import OnlineCard from "../card/onlineCard";
import Input from "../input";
import Output from "../output";
import { dataFetch } from "../utils/dataFetch";

export default function Body() {

    const [selectedCard, setSelectedCard] = useState(0);
    const [dataCode, setDataCode] = useState("")

    const handleCardSelect = (index: number) => {
        setSelectedCard(index);
    };

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
            const data = await dataFetch(apiUrl)    
            
            if (data && data.data && data.data.length > 0) {
                const endDate = new Date(data.data[selectedCard].start_date);
                setTargetDate(endDate);
                restartCountdown(endDate);
                setDataCode(data.data[selectedCard].code)
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
                    searchData={handleSearchData}
                    />
                {searchResult && (
                    <Output 
                    search={searchResult} 
                    setSearch={setSearchResult}
                    dataCode={dataCode}
                    setDataCode={setDataCode} />
                )}
                </div>)            
                :
                (<Countdown selectedCard={selectedCard}/>)}
            
        </div>
        </>
    )
}