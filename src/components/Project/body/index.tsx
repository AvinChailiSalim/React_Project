import Slider from "react-slick";
import Card from "../card";
import Countdown from "../countdown";
import { useState } from "react";
import OnlineCard from "../card/onlineCard";

export default function Body() {

    const[selectedCard, setSelectedCard] = useState(Number);

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
        
    const apiUrl = 'https://announcement.usu.ac.id/api/period/active';


    return(
        <>
        <div className="gap-10">
            <Card />
            <Countdown selectedCard={0}/>
        </div>
        </>
    )
}