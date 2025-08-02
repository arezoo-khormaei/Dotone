import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function HomeSecondSection() {
  const { t } = useTranslation();

  return (
    <div className="myContainer" id="about">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-28">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="title2 mb-6 lg:mb-0">{t("one_group")}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="text-justify text-shadow lg:text-base text-sm leading-7 lg:leading-8">
            {t("explantation1")}
          </p>
        </motion.div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0 }}
      >
        <div className="relative bg-gray-100 lg:text-base text-sm rounded-3xl text-center lg:pt-10 lg:pb-14 px-6 py-6 whitespace-pre text-wrap mt-8 lg:mt-14 overflow-hidden">
          <p>{t("explantation2")}</p>
          <img
            src="/icons/trapezoid.svg"
            className="absolute bottom-0 right-4 lg:right-8 w-16 lg:w-auto"
          />
          <img
            src="/icons/trapezoid.svg"
            className="absolute -bottom-8 lg:-bottom-12 right-20 lg:right-56 w-16 lg:w-auto"
          />
          <img
            src="/icons/trapezoid.svg"
            className="absolute bottom-0 left-4 lg:left-8 w-16 lg:w-auto"
          />
          <img
            src="/icons/trapezoid.svg"
            className="absolute -bottom-8 lg:-bottom-12 left-20 lg:left-56 w-16 lg:w-auto"
          />
        </div>
      </motion.section>
    </div>
  );
}
