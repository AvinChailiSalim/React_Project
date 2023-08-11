import { useEffect, useState } from "react";
import {AnimatePresence, motion} from "framer-motion";
import { AlertTriangle, CheckCircleBroken, XCircle, XClose } from "../../icon/icon";
import { dataFetch } from "../utils/dataFetch";

interface dataSiswa{
    nosiswa: string;
    pass: boolean;
}

export default function Output({search, setSearch, dataCode, setDataCode}: any){
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const [siswaData, setSiswaData] = useState<dataSiswa[]>([]); 
    const [isPass, setIsPass] = useState<boolean>(false);
    const [isExist, setIsExist] = useState<boolean>(true);
    
    //Local Data
    //const apiUrl = 'http://localhost:3001/' + dataCode

    //Online Data
    //const newApiUrl = 'https://announcement.usu.ac.id/api/pass?periodCode=' + dataCode +'&registrationNumber=' + search
            
    useEffect(() => {
        const fetchData = async () => {
            const newApiUrl = 'http://localhost:3001/' + dataCode
            const data = await dataFetch(newApiUrl)

            if (data) {
                setSiswaData(data);
                console.log(data);
            } else {
                console.error('Error response');
            }
        };
    
        fetchData();
    
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [dataCode]);
    
    const searchData = (input: string) => {
            if(search === ""){
                return;
            }
            else if(search != ""){
                let found = false
                for (let index = 0; index < siswaData.length; index++) {
                    if(search == siswaData[index].nosiswa){
                        setIsPass(siswaData[index].pass);
                        found = true;
                        setIsExist(true);
                        break;
                    }
                } 
                if(!found) {
                    setIsExist(false);
                }
            }
            }
    
    useEffect(() => {
        searchData(search);
    }, [search])

    const toggleOutput = () => {
        setSearch("");
        console.log(search)
    }

    return(
        <>
            <motion.div
            layout
            key={search}
            initial={{ height: 0 }}
            animate={{ height: search !== "" ? 'auto' : 0}}
            style={{ overflow: "hidden" }}
            > 
            <AnimatePresence>
            
            {search && (
                <div>
                    <div className="py-5 px-5 rounded-lg bg-white mt-4 text-[#5E5E5E] font-bold">
                        <div 
                        className="cursor-pointer text-right text-error-700"
                        onClick={toggleOutput}>
                            <XClose />
                        </div>    
                    {search !== "" && (
                        <div className="mt-4 text-center text-9xl xs:text-7xl card-sm:text-7xl card-md:text-8xl">
                            <div className="text-base">
                                <span>
                                    Nomor peserta:
                                </span>
                                <span>
                                    {search}
                                </span>
                            </div>
                            {isExist === true ?
                                (isPass ? 
                                    <div>
                                        <div className="text-primary-700 scale-150 text-base pt-4">
                                            <CheckCircleBroken 
                                                style={{fontSize: '30px', width: '50px', height:'50px'}}/>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                SELAMAT!
                                            </div> 
                                            <div className="text-[#03965C]">
                                                Anda lulus!
                                            </div>
                                        </div>
                                    </div>
                                    : 
                                    <div>
                                        <div className="text-error-700 scale-150 text-base pt-4">
                                            <XCircle 
                                                style={{fontSize: '30px', width: '50px', height:'50px'}}/>
                                        </div>
                                        <div className="">
                                            Maaf
                                        </div> 
                                        <div className="text-error-700">
                                            Anda tidak lulus
                                        </div>
                                    </div>
                            )  
                            :
                            <div>
                                <div className="text-yellow-400 scale-150 text-base pt-4">
                                    <AlertTriangle 
                                        style={{fontSize: '30px', width: '50px', height:'50px'}}/>
                                </div>        
                            <div className="">
                                Maaf
                            </div> 
                            <div className="text-error-700">
                                Data anda tidak ditemukan
                            </div>
                        </div>
                            }
                            
                            
                        </div>
                    )}
                    <div className="pt-4">
                            Informasi tambahan ada di:
                            <a href="https://registrasi.usu.ac.id" style={{color:'blue'}}> Registrasi USU </a>
                    </div>
                    </div>
                </div>
              )}
            </AnimatePresence>
         </motion.div>     
        
        </>
    )
}