import { useTranslation } from "react-i18next";

export default function HomeSecondSection() {
  const { t } = useTranslation();

  return (
    <div className="container" id="about">
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-28">
        <h2 className="title2 mb-6 md:mb-0">{t("one_group")}</h2>
        <p className="text-justify text-shadow md:text-base text-sm leading-7 md:leading-8">
          {t("explantation1")}
        </p>
      </div>

      <div className="relative bg-gray-100 md:text-base text-sm rounded-3xl text-center md:pt-10 md:pb-14 px-6 py-6 whitespace-pre text-wrap mt-8 md:mt-14 overflow-hidden">
        <p>{t("explantation2")}</p>
        <img
          src="/icons/trapezoid.svg"
          className="absolute bottom-0 right-4 md:right-8 w-16 md:w-auto"
        />
        <img
          src="/icons/trapezoid.svg"
          className="absolute -bottom-8 md:-bottom-12 right-20 md:right-56 w-16 md:w-auto"
        />
        <img
          src="/icons/trapezoid.svg"
          className="absolute bottom-0 left-4 md:left-8 w-16 md:w-auto"
        />
        <img
          src="/icons/trapezoid.svg"
          className="absolute -bottom-8 md:-bottom-12 left-20 md:left-56 w-16 md:w-auto"
        />
      </div>
    </div>
  );
}
