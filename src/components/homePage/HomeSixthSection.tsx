import { useTranslation } from "react-i18next";
import Divider from "../Divider";
import ContactForm from "../forms/ContactUsForm";
import type { ISocialMedias } from "../../types/generalTypes";
import { motion } from "framer-motion";
import { QRCode } from "react-qrcode-logo";
import Mail from "../../icons/Mail";
import Linkedin from "../../icons/Linkedin";
import Twitter from "../../icons/Twitter";
import Phone from "../../icons/Phone";
import Telegram from "../../icons/Telegram";
import WhatsApp from "../../icons/WhatsApp";

export default function HomeSixthSection() {
  const { t } = useTranslation();

  const socialMedias: ISocialMedias[] = [
    { icon: <WhatsApp className="group-hover:text-gray-100" />, linkTo: "" },
    { icon: <Telegram className="group-hover:text-gray-100" />, linkTo: "" },
    { icon: <Phone className="group-hover:text-gray-100" />, linkTo: "" },
    { icon: <Mail className="group-hover:text-gray-100" />, linkTo: "" },
    { icon: <Twitter className="group-hover:text-gray-100" />, linkTo: "" },
    { icon: <Linkedin className="group-hover:text-gray-100" />, linkTo: "" },
  ];

  return (
    <div className="myContainer relative !pb-14 lg:!pb-10" id="contactUs">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Divider title={t("contact_us")} />
        <h3 className="title3 mt-4">{t("contact_us_desc")}</h3>
        <p className="whitespace-pre mt-4 mb-5 text-wrap text-justify xl:text-base text-sm">
          {t("contact_us_desc2")}
        </p>
      </motion.div>

      <div className="lg:grid lg:grid-cols-2 block xl:gap-40 md:gap-24">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-1"
        >
          <ContactForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-1 flex flex-col items-end"
        >
          <img src="/address-image.svg" className="lg:block hidden" />
          <div className="flex justify-center items-center gap-6 lg:mt-[70px] mt-8">
            {socialMedias.map((media, index) => (
              <div className="relative group inline-block">
                <div className="absolute left-1/2 -translate-x-1/2 -top-[85px] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <div className="absolute top-[4px] left-[4px] w-3 h-3 border-t-[1px] border-l-[1px] border-black rounded-tl-md" />
                  <div className="absolute top-[4px] right-[4px] w-3 h-3 border-t-[1px] border-r-[1px] border-black rounded-tr-md" />
                  <div className="absolute bottom-[4px] left-[4px] w-3 h-3 border-b-[1px] border-l-[1px] border-black rounded-bl-md" />
                  <div className="absolute bottom-[4px] right-[4px] w-3 h-3 border-b-[1px] border-r-[1px] border-black rounded-br-md" />

                  <QRCode
                    value={media.linkTo}
                    size={50}
                    bgColor="#f3f4f6"
                    qrStyle="dots"
                    eyeRadius={2}
                    style={{ borderRadius: 8 }}
                    quietZone={9}
                  />
                  <div
                    className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 
                      border-l-[12px] border-r-[12px] border-t-[12px]
                      border-l-transparent border-r-transparent border-t-gray-100"
                  />
                </div>
                <button
                  key={index}
                  className="group rounded-full bg-gray-100 hover:bg-black transition-all duration-700 w-10 h-10 flex items-center justify-center"
                >
                  {media.icon}
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <img src="/bottom-pattern.svg" />
    </div>
  );
}
