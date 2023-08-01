import { LogoUSU } from "../../icon/icon"

export default function Header() {
    return(
    <div className='inline-flex gap-3 w-full h-fit'>
        <div className='w-[62px] h-[62px]'>
          <LogoUSU  />
        </div>
        <div>
          <div
          className='font-inter text-base font-bold leading-24 tracking-tight text-white '>
            PENGUMUMAN KELULUSAN
          </div>
          <div
          className='font-inter text-base leading-24 tracking-tight text-white '>
            UNIVERSITAS SUMATERA UTARA
          </div>
        </div>
      </div>
    )
}