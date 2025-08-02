import FooterReservedRights from "./FooterReservedRights";
import { motion } from "framer-motion";

export default function Footer() {
  const info = [
    {
      image: "/icons/social-media/phone.svg",
      text: "021-42101000",
    },
    {
      image: "/icons/location.svg",
      text: "تهران، جهان کودک، برج دات وان",
    },
    {
      image: "/icons/social-media/mail.svg",
      text: "info1@one-holding.ir",
    },
  ];

  const footerLinks = [
    {
      title: "دسترسی سریع",
      links: [
        {
          label: "تماس با ما",
          linkTo: "/contact-us",
        },
        {
          label: "درباره ما",
          linkTo: "/contact-us",
        },
        {
          label: "شرکت ها",
          linkTo: "/contact-us",
        },
        {
          label: "استخدام",
          linkTo: "/careers",
        },
        {
          label: "اخبار",
          linkTo: "/news",
        },
      ],
    },
    {
      title: "لینک ها",
      links: [
        {
          label: "www.link.com",
          linkTo: "/contact-us",
        },
        {
          label: "www.link.com",
          linkTo: "/contact-us",
        },
        {
          label: "www.link.com",
          linkTo: "/contact-us",
        },
        {
          label: "www.link.com",
          linkTo: "/careers",
        },
        {
          label: "www.link.com",
          linkTo: "/news",
        },
      ],
    },
    {
      title: "لینک ها",
      links: [
        {
          label: "www.link.com",
          linkTo: "/contact-us",
        },
        {
          label: "www.link.com",
          linkTo: "/contact-us",
        },
        {
          label: "www.link.com",
          linkTo: "/contact-us",
        },
        {
          label: "www.link.com",
          linkTo: "/careers",
        },
        {
          label: "www.link.com",
          linkTo: "/news",
        },
      ],
    },
    {
      title: "لینک ها",
      links: [
        {
          label: "www.link.com",
          linkTo: "/contact-us",
        },
        {
          label: "www.link.com",
          linkTo: "/contact-us",
        },
        {
          label: "www.link.com",
          linkTo: "/contact-us",
        },
        {
          label: "www.link.com",
          linkTo: "/careers",
        },
        {
          label: "www.link.com",
          linkTo: "/news",
        },
      ],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 250 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="lg:px-28 lg:pb-14 p-7 relative"
    >
      <img
        src="/logo-black.svg"
        className="absolute -top-32 left-1/2 -translate-x-1/2 lg:w-[197px] w-[150px] lg:h-[147px] h-[100px]"
      />

      <div className="w-full lg:flex grid grid-cols-3 lg:justify-center justify-between items-center lg:gap-[220px] gap-3 my-11">
        {info.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 justify-center items-center col-span-1 text-center"
          >
            <img src={item.image} className="lg:w-10 w-6 lg:h-10 h-6" />
            <p className="text-xs md:text-sm xl:text-lg">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="lg:flex grid grid-cols-2 justify-center items-center lg:gap-[220px] gap-12 my-16">
        {footerLinks.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center lg:items-start items-center text-nowrap xl:text-base text-sm"
          >
            <h4 className="font-semibold">{item.title}</h4>
            <ul>
              {item.links.map((link, index) => (
                <li key={index} className="my-1 text-[15px]">
                  <a href={link.linkTo}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <FooterReservedRights />
    </motion.div>
  );
}
