import Image from "next/image";
import Link from "next/link";
import COMPsocialIcons from "@/components/socialIcons";

export default function Home() {
  
  return (
  <div className="flex min-h-dvh h-dvh flex-col p-3 bg-radial-[at_25%_100%] from-neutral-950 via-neutral-900 via-60% to-brand to-100%  text-neutral-200">
    <main className="flex flex-col flex-1 rounded-4xl gap-4 p-3">
      <div className="flex flex-row items-center justify-between">
        <Image width={200} height={100} src={`/assets/logo-type-light.png`} alt="logo-iannelli-rent"/>
        <COMPsocialIcons facebook={"#"} instagram={"#"} telephone={"#"} tiktok={"#"} whatsapp={"#"}/>
      </div>
      <div className="flex lg:flex-row flex-col flex-1 rounded-4xl gap-0 bg-brand/50 p-2 shadow-2xl">
        <Link href={"/car-moto"} target="_parent" className="group relative flex basis-1/3 overflow-hidden lg:rounded-s-4xl lg:rounded-tr-none rounded-s-none rounded-t-4xl">
        
          <div className="absolute inset-0 bg-[url('/img/rentCar.png')] bg-cover bg-center bg-no-repeat grayscale brightness-50 transition-all group-hover:grayscale-0 group-hover:brightness-75 transform-gpu scale-100 duration-1000 ease-out group-hover:scale-110" />
          <div className="relative z-10 flex w-full items-center justify-end text-white">
            <ButtonElement label={"Auto e Moto"}/>
          </div>
        </Link>
        <Link href={"#"} target="_parent" className="group relative flex basis-1/3 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/img/rentCommercial.png')] bg-cover bg-center bg-no-repeat grayscale brightness-40 transition-all group-hover:grayscale-0 group-hover:brightness-60 transform-gpu scale-100 duration-1000 ease-out group-hover:scale-110" />
          <div className="relative z-10 flex w-full items-center justify-end text-white">
            <ButtonElement label={"Veicoli Commerciali"}/>
          </div>
        </Link>
        <Link href={"#"} target="_parent" className="group relative flex basis-1/3 overflow-hidden lg:rounded-e-4xl lg:rounded-bl-none rounded-e-none rounded-b-4xl ">
          <div className="absolute inset-0 bg-[url('/img/rentBeb.png')] bg-cover bg-center bg-no-repeat grayscale brightness-50 transition-all group-hover:grayscale-0 group-hover:brightness-50 transform-gpu scale-100 duration-1000 ease-out group-hover:scale-110" />
          <div className="relative z-10 flex w-full items-center justify-end text-white">
            <ButtonElement label={"room"}/>
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

export function ButtonElement ({label}) {
  return (
    <div className="bg-brand/90 text-neutral-100 hover:text-neutral-100 hover:bg-brand px-5 py-1 uppercase lg:text-xl text-sm font-bold shadow-2xl bg-radial-[at_15%_100%] from-neutral-950/70 to-brand/80 to-100% ">
      {label}
    </div>
  )
}