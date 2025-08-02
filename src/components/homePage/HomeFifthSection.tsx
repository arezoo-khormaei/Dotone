import { useTranslation } from "react-i18next";
import Divider from "../Divider";
import type { ICompanyCategories } from "../../types/generalTypes";
import { motion } from "framer-motion";

export default function HomeFifthSection() {
  const { t } = useTranslation();

  const companyCategories: ICompanyCategories[] = [
    {
      categoryTitle: "ترابری",
      childrenCompanies: [
        {
          logo: "/test-logo.svg",
          decription:
            "دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.",
        },
        {
          logo: "/test-logo.svg",
          decription:
            "دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.",
        },
        {
          logo: "/test-logo.svg",
          decription:
            "دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.",
        },
      ],
    },
    {
      categoryTitle: "مالی اعتباری",
      childrenCompanies: [
        {
          logo: "/test-logo.svg",
          decription:
            "دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.",
        },
        {
          logo: "/test-logo.svg",
          decription:
            "دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.",
        },
        {
          logo: "/test-logo.svg",
          decription:
            "دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.",
        },
      ],
    },
    {
      categoryTitle: "مالی اعتباری",
      childrenCompanies: [
        {
          logo: "/test-logo.svg",
          decription:
            "دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.",
        },
        {
          logo: "/test-logo.svg",
          decription:
            "دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.",
        },
        {
          logo: "/test-logo.svg",
          decription:
            "دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.",
        },
      ],
    },
  ];
  return (
    <div className="lg:px-16 p-7 lg:py-12 py-4 grid grid-cols-4 lg:gap-20">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="lg:col-span-1 lg:block hidden"
      >
        <img src="/tower.svg" className="h-[976px]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className={`lg:col-span-3 col-span-4 rounded-[40px] bg-gray-100 py-10 pl-7 pr-2 h-[976px]`}
      >
        <div className="h-full overflow-y-scroll px-4 py-1" dir="ltr">
          {companyCategories?.map((categ, index) => (
            <div
              key={index}
              className={`w-full ${
                index !== companyCategories.length - 1 && "mb-24"
              }`}
              dir="rtl"
            >
              <Divider title={t("companies")} className="mb-4" />
              <div className="flex justify-between items-center">
                <h3 className="lg:text-[28px] text-2xl mb-4">
                  {categ.categoryTitle}
                </h3>
                <button>
                  <img src="/icons/arrowLeft.svg" />
                </button>
              </div>
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 mt-4">
                {categ?.childrenCompanies?.map((company, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-6 col-span-1 h-[306px] flex flex-col justify-center items-center"
                  >
                    <img src="/test-logo.svg" alt="" />
                    <p className="text-sm text-justify">{company.decription}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
