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

    const apiUrl = 'https://announcement.usu.ac.id/api/period/active';

    useEffect(() => {
        console.log("Target Date :", targetDate);

        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data && data.data && data.data.length > 0) {
                    const endDate = new Date(data.data[selectedCard].end_date);
                    setTargetDate(endDate);
                    restartCountdown(endDate);
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

    const restartCountdown = (newTargetDate: Date) => {
        if (intervalId !== null){
            clearInterval(intervalId);
        }

            const interval = setInterval(() => {
                const now = new Date();
                const timeRemaining: number = targetDate.getTime() - now.getTime();

                const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);
                const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

                setSecond(secondsRemaining);
                setMinutes(minutesRemaining);
                setHours(hoursRemaining);

                if (timeRemaining <= 0) {
                    clearInterval(interval);
                }
            }, 1000);

            setIntervalId(interval);

    }

    return (
        <>
            <div className="flex py-5 flex-col items-center justify-center gap-[33px] self-stretch rounded-xl bg-white">
                <div className="text-center text-5xl xs:text-2xl font-bold text-neutral-600">
                    PENGUMUMAN
                </div>
                <div className="flex text-center font-semibold text-9xl xs:text-4xl text-neutral-600 tracking-[-2.816px] leading-tight">
                    <span className="mr-10 xs:mr-3">
                        {hours} 
                    </span>
                    <span className="mr-10 xs:mr-3">
                         |
                    </span>
                    <span className="mr-10 xs:mr-3">
                         {minutes} 
                    </span>
                    <span className="mr-10 xs:mr-3">
                         |
                    </span>
                    <span className="mr-1 text-primary-600">
                        {second}
                    </span>
                </div>
                <div className="flex w-[498px] xs:w-40 justify-between items-start text-sm font-normal text-neutral-600 tracking-[-0.084px] leading-tight">
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