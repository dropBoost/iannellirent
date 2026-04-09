import Image from "next/image";
import Link from "next/link";
import COMPsocialIcons from "@/components/socialIcons";
import { FaHome } from "react-icons/fa";

export default function Home() {
  
  return (
  <div className="flex min-h-dvh h-dvh flex-col p-3 bg-radial-[at_25%_100%] from-neutral-950 via-neutral-900 via-60% to-brand to-100%  text-neutral-200">
    <main className="flex flex-col flex-1 rounded-4xl gap-4 p-6">
      <div className="flex lg:flex-row flex-col items-center justify-between gap-3">
        <Image width={200} height={100} src={`/assets/logo-type-light.png`} alt="logo-iannelli-rent"/>
        <COMPsocialIcons facebook={"#"} instagram={"#"} telephone={"#"} tiktok={"#"} whatsapp={"#"}/>
      </div>
      <div className="flex lg:flex-row flex-col flex-1 rounded-4xl gap-3">
        <Link href={"/car-moto"} target="_parent" className="group relative flex basis-1/3 overflow-hidden lg:rounded-s-4xl lg:rounded-tr-none rounded-s-none rounded-t-4xl bg-brand/50 shadow-2xl">
          <div className="absolute inset-0 bg-[url('/img/rentCar.png')] bg-cover bg-center bg-no-repeat transition-all grayscale-50 brightness-60 group-hover:grayscale-100 group-hover:brightness-75 transform-gpu scale-100 duration-700 ease-out group-hover:scale-110" />
          <div className="relative z-10 flex w-full items-center justify-center text-white">
            <ButtonElement label={"Auto e Moto"} icon={<FaHome className="text-2xl"/>} labelTrue={false}/>
          </div>
        </Link>
        <Link href={"#"} target="_parent" className="group relative flex basis-1/3 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/img/rentCommercial.png')] bg-cover bg-center bg-no-repeat transition-all grayscale-50 brightness-60 group-hover:grayscale-100 group-hover:brightness-60 transform-gpu scale-100 duration-700 ease-out group-hover:scale-110" />
          <div className="relative z-10 flex w-full items-center justify-center text-white">
            <ButtonElement label={"Veicoli Commerciali"} labelTrue={true}/>
          </div>
        </Link>
        <Link href={"#"} target="_parent" className="group relative flex basis-1/3 overflow-hidden lg:rounded-e-4xl lg:rounded-bl-none rounded-e-none rounded-b-4xl ">
          <div className="absolute inset-0 bg-[url('/img/rentBeb.png')] bg-cover bg-center bg-no-repeat transition-all grayscale-50 brightness-60 group-hover:grayscale-100 group-hover:brightness-50 transform-gpu scale-100 duration-700 ease-out group-hover:scale-110" />
          <div className="relative z-10 flex w-full items-center justify-center text-white">
            <ButtonElement label={"b&b room"} labelTrue={true}/>
          </div>
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center">
        <span className="text-[0.6rem] text-neutral-500">powered by DROPBOOST.it</span>
      </div>
    </main>
  </div>
  );
}

export function ButtonElement ({ label, icon, image = "#" , labelTrue = false}) {
  return (
    <div className="flex flex-col items-center gap-1 bg-neutral-950/60 hover:bg-neutral-100/50 transition-all duration-300 w-full px-5 py-5 text-neutral-100 hover:text-neutral-100 uppercase lg:text-xl text-sm font-bold shadow-2xl">
      
      {image !== "#" && (
        <Image
          src={image}
          width={150}
          height={150}
          alt={label || "Immagine categoria Iannelli Rent"}
        />
      )}

      {icon && icon}

      {labelTrue ? <span className="text-[0.6rem]">{label}</span> : null}
    </div>
  );
}