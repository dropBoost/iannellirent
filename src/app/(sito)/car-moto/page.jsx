import Image from "next/image";
import Link from "next/link";
import { IoCarSport } from "react-icons/io5";
import { MenuHeader } from "@/components/menuHeader";

export default function PAGEcarMoto () {
  return (
    <div className="lg:p-4 p-0 h-200">
      <div className="relative h-200">
        <div className="absolute inset-0 flex flex-col w-full bg-[url(/img/rentCar.png)] bg-cover bg-center lg:rounded-3xl brightness-25"/>
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex flex-row items-center justify-center w-full h-24 border-b">
            <div className="flex flex-row items-center justify-between w-full lg:max-w-7xl px-5">
              <div>
                <Image src={`/assets/logo-type-light.png`} width={200} height={100} className="" alt="logo iannelli rent" />
              </div>
              <div>
                <MenuHeader/>
              </div>
              <div className="lg:flex hidden">
                <ButtonPrenota link={"#"} label={"bookinggg"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ButtonPrenota (link) {
  return (
    <Link href={link} className="group flex items-center justify-between transition-all bg-brand w-40 px-1 py-1 rounded-[4rem]">
      <div className="bg-neutral-200 text-neutral-950 p-2 rounded-full transition-transform duration-500 group-hover:translate-x-28">
        <IoCarSport className="text-2xl"/>
      </div>
      <span className="font-bold text-white transition-transform duration-500 group-hover:-translate-x-16 pe-4">
        Prenota
      </span>
    </Link>
  )
}