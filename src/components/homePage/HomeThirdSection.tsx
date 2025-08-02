import { useTranslation } from "react-i18next";
import TransitionButton from "../buttons/TransitionButton";
import type { ICompaniesList } from "../../types/generalTypes";
import Divider from "../Divider";
import { motion } from "framer-motion";

export default function HomeThirdSection() {
  const { t } = useTranslation();

  const companiesList: ICompaniesList[] = [
    {
      companyName: "ترابری",
      linkTo: "",
    },
    {
      companyName: "مالی اعتباری",
      linkTo: "",
    },
    {
      companyName: "رسانه",
      linkTo: "",
    },
    {
      companyName: "تاکسی برقی",
      linkTo: "",
    },
    {
      companyName: "راه آهن",
      linkTo: "",
    },
    {
      companyName: "ترابری",
      linkTo: "",
    },
    {
      companyName: "مالی اعتباری",
      linkTo: "",
    },
    {
      companyName: "رسانه",
      linkTo: "",
    },
    {
      companyName: "تاکسی برقی",
      linkTo: "",
    },
    {
      companyName: "راه آهن",
      linkTo: "",
    },
  ];

  return (
    <div
      className="myContainer bg-[url('/companies_background.svg')] bg-no-repeat bg-left"
      id="companies"
    >
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Divider title={t("companies_classification")} className="mb-4" />
        <h3 className="title3">{t("companies")}</h3>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-7 mt-6 sm:mt-8 md:mt-10"
      >
        {companiesList.map((item, index) => (
          <div
            key={index}
            className="w-full aspect-[226/60] max-w-[226px] mx-auto"
          >
            <TransitionButton label={item.companyName} linkTo={item.linkTo} />
          </div>
        ))}
      </motion.section>
    </div>
  );
}
