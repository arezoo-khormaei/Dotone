import { useTranslation } from "react-i18next";
import Divider from "../Divider";
import HomeBlogCard from "../cards/HomeBlogCard";
import type { IHomeBlogCardProps } from "../../types/generalTypes";

export default function HomeFourthSection() {
  const { t } = useTranslation();
  const items: IHomeBlogCardProps[] = [
    {
      tags: ["هواپیما", "سفر", "فرودگاه", "گردشگری"],
      title: "لورم ایپسوم متن ساختگی!",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...",
      image: "",
      linkTo: "",
    },
    {
      tags: ["هواپیما", "سفر", "فرودگاه", "گردشگری"],
      title: "لورم ایپسوم متن ساختگی!",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...",
      image: "",
      linkTo: "",
    },
    {
      tags: ["سینما", "لحظه تی وی"],
      title: "لورم ایپسوم متن ساختگی!",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...",
      image: "",
      linkTo: "",
      date: "date",
    },
    {
      tags: ["تاکسی", "دات وان سفر"],
      title: "لورم ایپسوم متن ساختگی!",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...",
      image: "",
      linkTo: "",
      date: "date",
    },
  ];

  const showMore = {
    title: "مشاهده اخبار و\nمقالات بیشتر",
    image: [""],
    linkTo: "/blog",
    showMore: true,
  };

  return (
    <div className="container" id="blog">
      <Divider title={t("blog")} className="mb-4" />
      <h3 className="title3">{t("blog_content")}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10">
        {items.map((item, index) => (
          <div
            key={index}
            className={`
              ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}
              ${index >= 2 ? "col-span-1" : ""}
            `}
          >
            <HomeBlogCard
              {...item}
              theme={index === 0 ? "dark" : "light"}
              size={index < 2 ? "lg" : "sm"}
            />
          </div>
        ))}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          <HomeBlogCard {...showMore} theme={"light"} size={"sm"} />
        </div>
      </div>
    </div>
  );
}
