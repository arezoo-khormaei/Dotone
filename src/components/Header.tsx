import { Link } from "react-router-dom";
import LanguageDropdown from "./select/LanguageDropdown";
import { useTranslation } from "react-i18next";
import type { IMenuItem } from "../types/generalTypes";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuList: IMenuItem[] = [
    {
      id: 1,
      label: t("about"),
      linkTo: "about",
    },
    {
      id: 2,
      label: t("companies"),
      linkTo: "companies",
    },
    {
      id: 3,
      label: t("blog"),
      linkTo: "blog",
    },
    {
      id: 4,
      label: t("contact_us"),
      linkTo: "contactUs",
    },
    {
      id: 5,
      label: t("careers"),
      linkTo: "",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector("header")?.clientHeight || 0;

      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top + window.pageYOffset;

      const computedStyle = window.getComputedStyle(element);
      const paddingTop = parseFloat(computedStyle.paddingTop) || 0;

      const scrollPosition = elementTop + paddingTop - headerHeight;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full flex relative z-50 flex-col md:flex-row justify-between items-center shadow-bottom bg-black text-white px-6 md:px-12 lg:px-24 py-4">
      <div className="w-full md:w-auto flex justify-between items-center">
        <Link to="/" className="focus:outline-none">
          <img src="/logo.svg" alt="logo" className="h-10" />
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <LanguageDropdown mobile />
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none mx-6"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        {menuList.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.linkTo)}
            className="mr-7 transition-all hover:text-gray-400 cursor-pointer focus:outline-none"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Desktop Language Dropdown */}
      <div className="hidden md:block">
        <LanguageDropdown />
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden w-full bg-black py-4 flex flex-col items-center space-y-4">
          {menuList.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.linkTo)}
              className="w-full text-center py-2 transition-all hover:text-gray-400 cursor-pointer focus:outline-none"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
