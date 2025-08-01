import FooterReservedRights from "./FooterReservedRights";

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
    <div className="md:px-28 md:pb-14 p-7">
      <div className="w-full md:flex grid grid-cols-3 md:justify-center justify-between items-center md:gap-[220px] my-11">
        {info.map((item) => (
          <div className="flex flex-col gap-2 justify-center items-center col-span-1 text-center">
            <img src={item.image} className="md:w-10 w-6 md:h-10 h-6" />
            <p className="text-xs md:text-lg">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="md:flex grid grid-cols-2 justify-center items-center md:gap-[220px] gap-12 my-16">
        {footerLinks.map((item) => (
          <div className="flex flex-col justify-center items-start">
            <h4 className="font-semibold">{item.title}</h4>
            <ul>
              {item.links.map((link) => (
                <li className="my-1 text-[15px]">
                  <a href={link.linkTo}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <FooterReservedRights />
    </div>
  );
}
