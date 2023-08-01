import { useEffect, useState } from "react";


export default function Countdown(){
    const [second, setSecond] = useState(9);
    const [minutes, setMinutes] = useState(11);
    const [hours, setHours] = useState(21);
    
    useEffect(() => {
       const interval = setInterval(() => {
        const targetDate = new Date('2023-08-29');
        const now = new Date();
        const timeRemaining: number = targetDate.getTime() - now.getTime();

        const secondsRemaining = Math.floor((timeRemaining % (1000*60)) / 1000);
        const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

        setSecond(secondsRemaining);
        setMinutes(minutesRemaining);
        setHours(hoursRemaining);

        if (timeRemaining <= 0 ){
            clearInterval(interval);
        }
       }, 1000);
       
       return () => clearInterval(interval)
    })
    
    return (
        <>
            <div className="flex py-5 flex-col items-center justify-center gap-[33px] self-stretch rounded-xl bg-white">
                <div className="text-center text-5xl font-bold text-neutral-600">
                    PENGUMUMAN
                </div>
                <div className="flex text-center font-semibold text-9xl text-neutral-600 tracking-[-2.816px] leading-tight">
                    <span className="mr-10">
                        {hours} 
                    </span>
                    <span className="mr-10">
                         |
                    </span>
                    <span className="mr-10">
                         {minutes} 
                    </span>
                    <span className="mr-10">
                         |
                    </span>
                    <span className="mr-1 text-primary-600">
                        {second}
                    </span>
                </div>
                <div className="flex w-[498px] justify-between items-start text-sm font-normal text-neutral-600 tracking-[-0.084px] leading-tight">
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