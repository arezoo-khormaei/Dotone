import { useTranslation } from "react-i18next";
import Divider from "../Divider";
import ContactForm from "../forms/ContactUsForm";
import type { ISocialMedias } from "../../types/generalTypes";

export default function HomeSixthSection() {
  const { t } = useTranslation();

  const socialMedias: ISocialMedias[] = [
    { icon: "/icons/social-media/whatsApp.svg", linkTo: "" },
    { icon: "/icons/social-media/telegram.svg", linkTo: "" },
    { icon: "/icons/social-media/phone.svg", linkTo: "" },
    { icon: "/icons/social-media/mail.svg", linkTo: "" },
    { icon: "/icons/social-media/twitter.svg", linkTo: "" },
    { icon: "/icons/social-media/linkedin.svg", linkTo: "" },
  ];

  return (
    <div className="container relative !pb-14 md:!pb-10" id="contactUs">
      <Divider title={t("contact_us")} />
      <h3 className="title3 mt-4">{t("contact_us_desc")}</h3>
      <p className="whitespace-pre mt-4 mb-5 text-wrap text-justify">
        {t("contact_us_desc2")}
      </p>

      <div className="md:flex block justify-between items-start gap-10">
        <div className="flex-1">
          <ContactForm />
        </div>

        <div>
          <img src="/address-image.svg" className="md:block hidden" />
          <div className="flex justify-center items-center gap-6 md:mt-12 mt-8">
            {socialMedias.map((media, index) => (
              <button
                key={index}
                className="rounded-full bg-gray-200 w-10 h-10 flex items-center justify-center"
              >
                <img src={media.icon} alt="" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <img src="/bottom-pattern.svg" />
      <img
        src="/logo-black.svg"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 md:w-[197px] w-[150px] md:h-[147px] h-[100px]"
      />
    </div>
  );
}
