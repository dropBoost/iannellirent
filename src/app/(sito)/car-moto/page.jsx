import Image from "next/image";
import Link from "next/link";
import { IoCarSport } from "react-icons/io5";
import { MenuHeader } from "@/components/menuHeader";
import { Separator } from "@/components/ui/separator";
import { FaCircle, FaHome } from "react-icons/fa";

export default function PAGEcarMoto () {
  return (
    <main className="flex flex-col gap-20 items-center bg-neutral-100">
      {/* HERO BANNER */}
      <div className="lg:p-4 p-0 h-dvh w-full">
        <div className="relative h-full">
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
      {/* FRIST SECTION */}
      <div className="flex flex-row w-full max-w-7xl">
        {/* IMAGE */}
        <div className="basis-3/6 h-160 bg-[url(/img/rentCar.png)] bg-cover bg-center bg-no-repeat rounded-4xl">
        </div>
        {/* INFO SECTION */}
        <div className="basis-3/6 flex flex-col justify-center gap-5 p-10">
          <SectionTitle label={"Chi Siamo"} id={"chisiamo"} bgColor={`bg-white`}/>
          <div>
            <h2 className="text-6xl font-bold">Il tuo partner affidabile<br/>per soluzioni di noleggio auto.</h2>
          </div>
          <div>
            <h3 className="text-lg font-light">Offriamo una vasta gamma di veicoli ben tenuti, adatti a viaggi di lavoro, vacanze in famiglia e spostamenti quotidiani.</h3>
          </div>
          <div className="flex flex-col gap-3 border w-full">
            <div className="flex flex-row justify-between">
              <div className="basis-3/6 w-full">ICON</div>
              <div className="basis-3/6 w-full">TEXT</div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="basis-3/6 w-full">ICON</div>
              <div className="basis-3/6 w-full">TEXT</div>
            </div>
          </div>
          <Separator className={`bg-neutral-300`}/>
          <ButtonPrenota/>
        </div>
      </div>
      {/* SECOND SECTION */}
      <div className="flex flex-row w-full items-center max-w-450 bg-white rounded-4xl p-30">
        <div className="flex flex-col items-center w-full gap-20">
          {/* TITLE */}
          <div className="flex flex-col items-center w-full gap-5">
            <SectionTitle label={"I nostri Servizi"} id={"servizi"} bgColor={`bg-neutral-100`}/>
            <h2 className="text-5xl font-semibold text-center leading-15">
              I nostri servizi di<br/>autonoleggio per ogni esigenza
            </h2>
          </div>
          {/* INFO SERVICE */}
          <div className="flex flex-row gap-10 w-full max-w-7xl h-100">
            {/* COLONNA 1 */}
            <div className="basis-2/6 flex flex-col items-start justify-between bg-neutral-100 p-10 w-full rounded-4xl">
              <FaHome className="text-5xl text-brand"/>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold">Noleggio Auto #lowcost</h3>
                <p className="text-neutral-700 text-sm">Il nostro servizio di noleggio auto economiche offre veicoli convenienti ed efficienti nei consumi, perfetti per gli spostamenti quotidiani e i viaggi in città.</p>
              </div>
              <div className="flex flex-col gap-5 w-full">
                <Separator className={`bg-neutral-200`}/>
                <span className="text-sm font-bold">scopri di più</span>
              </div>
            </div>
            {/* COLONNA 2 */}
            <div className="basis-2/6 flex flex-col items-start justify-between bg-neutral-100 p-10 w-full rounded-4xl">
              <FaHome className="text-5xl text-brand"/>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold">Noleggio auto di lusso</h3>
                <p className="text-neutral-700 text-sm">Il nostro servizio di noleggio auto di lusso offre veicoli convenienti ed efficienti nei consumi, perfetti per gli spostamenti quotidiani e i viaggi in città.</p>
              </div>
              <div className="flex flex-col gap-5 w-full">
                <Separator className={`bg-neutral-200`}/>
                <span className="text-sm font-bold">scopri di più</span>
              </div>
            </div>
            {/* COLONNA 3 */}
            <div className="basis-2/6 flex flex-col items-start justify-between bg-neutral-100 p-10 w-full rounded-4xl">
              <FaHome className="text-5xl text-brand"/>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold">Noleggio Auto senza Conducente</h3>
                <p className="text-neutral-700 text-sm">Il nostro servizio di noleggio auto senza conducente offre veicoli convenienti ed efficienti nei consumi, perfetti per gli spostamenti quotidiani e i viaggi in città.</p>
              </div>
              <div className="flex flex-col gap-5 w-full">
                <Separator className={`bg-neutral-200`}/>
                <span className="text-sm font-bold">scopri di più</span>
              </div>
            </div>
          </div>
          {/* SOCIAL PROOF */}
          <div className="flex flex-col items-center w-full gap-5">
            <p className="">Scopri la gamma completa di soluzioni di noleggio auto affidabili.</p>
          </div>
        </div>
      </div>
      {/* THIRD SECTION */}
      <div className="flex flex-row w-full max-w-7xl min-h-160">
        {/* INFO SECTION */}
        <div className="basis-3/6 flex flex-col h-full justify-between gap-5 p-14">
          <SectionTitle label={"Perchè sceglire noi"} id={"socialproof"} bgColor={`bg-white`}/>
          <div>
            <h2 className="text-5xl font-bold leading-12">Perché scegliere i nostri affidabili<br/>servizi di autonoleggio?</h2>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="flex flex-col justify-between gap-3">
                <FaHome className="text-5xl"/>
                <h3 className="w-full text-xl font-bold">Prezzi di Noleggio Accessibili</h3>
                <p>Offriamo prezzi competitivi e trasparenti per il noleggio auto</p>
              </div>
              <div className="flex flex-col justify-between gap-3">
                <FaHome className="text-5xl"/>
                <h3 className="w-full text-xl font-bold">Auto ben tenute</h3>
                <p>Offriamo prezzi competitivi e trasparenti per il noleggio auto</p>
              </div>
            </div>
            <Separator className={`bg-neutral-300`}/>
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="flex flex-col justify-between gap-3">
                <FaHome className="text-5xl"/>
                <h3 className="w-full text-xl font-bold">Ampia gamma di veicoli</h3>
                <p>Offriamo prezzi competitivi e trasparenti per il noleggio auto</p>
              </div>
              <div className="flex flex-col justify-between gap-3">
                <FaHome className="text-5xl"/>
                <h3 className="w-full text-xl font-bold">Opzioni di noleggio flessibili</h3>
                <p>Offriamo prezzi competitivi e trasparenti per il noleggio auto</p>
              </div>              
            </div>
          </div>
        </div>
        {/* IMAGE */}
        <div className="basis-3/6 min-h-160 bg-[url(/img/rentCar.png)] bg-cover bg-center bg-no-repeat rounded-4xl">
        </div>
      </div>
      <div className="h-200 bg-neutral-100 w-full">CIAo</div>
    </main>
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
export function SectionTitle ({label, id, bgColor}) {
  return (
  <div id={id} className={`${bgColor} flex flex-row items-center gap-2 text-neutral-950 p-2 rounded-full px-6 w-fit`}>
    <div className="">
      <FaCircle className="text-[0.4rem] text-brand"/>
    </div>
    <span className="font-bold text-sm">
      {label}
    </span>
  </div>
  )
}