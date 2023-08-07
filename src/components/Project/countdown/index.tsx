import { useEffect, useState } from "react";

interface Props{
    selectedCard: number;
}

export default function Countdown({ selectedCard }: Props){
    const [second, setSecond] = useState(9);
    const [minutes, setMinutes] = useState(11);
    const [hours, setHours] = useState(21);
   
    const [targetDate, setTargetDate] = useState(new Date('2023-08-29'));
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout|null>(null);
    const [name, setName] = useState('')

    const apiUrl = 'https://announcement.usu.ac.id/api/period/active';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data && data.data && data.data.length > 0) {
                    const endDate = new Date(data.data[selectedCard].end_date);
                    setTargetDate(endDate);

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
    }, [selectedCard]);

    useEffect(() => {
        if (targetDate) {
          const interval = setInterval(() => {
            const now = new Date();
            const timeRemaining: number = targetDate.getTime() - now.getTime();
    
            if (timeRemaining <= 0) {
              clearInterval(interval); // Clear interval when countdown ends
            } else {
              const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
              const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
              const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
              setSecond(secondsRemaining);
              setMinutes(minutesRemaining);
              setHours(hoursRemaining + daysRemaining * 24);
            }
          }, 1000);
    
          setIntervalId(interval);
    
          return () => {
            clearInterval(interval);
          };
        }
      }, [targetDate]);
      
    return (
        <>
            <div className="flex font-bold py-5 flex-col items-center justify-center gap-[33px] self-stretch rounded-xl bg-white">
                <div className="px-5">
                    <label>
                        <span className="lg:text-[48px] md:text-4xl sm:text-3xl text-2xl text-[#5E5E5E] !leading-relaxed pr-3">
                            PENGUMUMAN 
                        </span>
                        <span className="lg:text-[48px] md:text-4xl sm:text-3xl text-2xl text-[#03965C]"> 
                        {name} 
                        </span>
                    </label>
                </div>
                <div className="flex text-center font-semibold text-9xl xs:text-4xl card-sm:text-7xl card-md:text-8xl text-neutral-600 tracking-[-2.816px] leading-tight">
                    <span className="mr-10 xs:mr-3 card-sm:mr-5">
                        {hours} 
                    </span>
                    <span className="mr-10 xs:mr-3 card-sm:mr-5">
                         |
                    </span>
                    <span className="mr-10 xs:mr-3 card-sm:mr-5">
                         {minutes} 
                    </span>
                    <span className="mr-10 xs:mr-3 card-sm:mr-5">
                         |
                    </span>
                    <span className="mr-1 text-primary-600 card-sm:mr-5">
                        {second}
                    </span>
                </div>
                <div className="flex w-[498px] card-sm:w-[299px] xs:w-40 justify-between items-start text-sm font-normal text-neutral-600 tracking-[-0.084px] leading-tight">
                        <span>
                            Jam
                        </span>
                        <span>
                            Menit
                        </span>
                        <span>
                            Detik
                        </span>
                </div>
            </div>
        </>
    )
}