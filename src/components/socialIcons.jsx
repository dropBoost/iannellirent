import { FaEnvelope, FaFacebookSquare, FaInstagramSquare, FaPhoneSquare, FaWhatsappSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Link from "next/link";



export default function COMPsocialIcons ({facebook, instagram, tiktok, mail, telephone, whatsapp}) {
  return (
    <div className="flex flex-row items-center gap-2">
      {facebook && <ButtonSocialIcon icon={<FaFacebookSquare/>} link={facebook || ""}/> }
      {instagram && <ButtonSocialIcon icon={<FaInstagramSquare/>} link={instagram || ""}/> }
      {tiktok && <ButtonSocialIcon icon={<AiFillTikTok/>} link={tiktok || ""}/> }
      {whatsapp && <ButtonSocialIcon icon={<FaWhatsappSquare/>} link={whatsapp || ""}/> }
      {mail && <ButtonSocialIcon icon={<FaEnvelope/>} link={mail || ""}/> }
      {telephone && <ButtonSocialIcon icon={<FaPhoneSquare/>} link={telephone || ""}/> }
    </div>
  )
}

export function ButtonSocialIcon ({icon, link}) {
  return (
    <Link href={`${link}`}>
      <span className="hover:text-neutral-900 transition-all">
        {icon}
      </span>
    </Link>
  )
}
