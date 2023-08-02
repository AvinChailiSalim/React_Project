import Slider from "react-slick"
import Sarjana from "../../img/sarjana.png"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Props = {
    type?: 'SELEKSI'  | 'PROGRAM'
    children?: string
}

export default function Card({type, children}: Props) {

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
            {window.innerWidth >= 640 ? (
                <div>
                     <div className="grid gap-4 grid-cols-5 grid-rows-1">
                    {arrCard.map((card, index) => (
                    <div className="w-[197px] h-[197px] p-3 flex-col justify-center items-center 
                    gap-[14px] rounded-lg bg-primary-600 text-white group
                    hover:bg-primary-700 hover:scale-125">
                        <div className="flex items-center justify-center group-hover:scale-125">
                            <img src={Sarjana} width='71px' height='71px'/>
                        </div>
                        <div className="group-hover:translate-y-4">
                            <div>{card.type}</div>
                            <div key={index} className="font-bold line-clamp-3">{card.desc}</div>
                        </div>    
                    </div>
                    ))}
                    </div>
                </div>
            ) : (
                <div>
                    <Slider {...sliderSettings}>
                        {arrCard.map((card, index) => (   
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