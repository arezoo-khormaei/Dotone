import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const languages = [
  { code: "en", label: "English", short: "En" },
  { code: "fa", label: "فارسی", short: "فا" },
  { code: "ar", label: "العربية", short: "Ar" },
  { code: "ru", label: "Русский", short: "Ru" },
  { code: "tr", label: "Türkçe", short: "Tr" },
];

export default function LanguageDropdown({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  const { i18n } = useTranslation();
  const currentLang = languages.find((l) => l.code === i18n.language);
  const otherLanguages = languages.filter((l) => l.code !== i18n.language);

  const [open, setOpen] = useState(false);

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  if (mobile) {
    return (
      <select
        value={i18n.language}
        onChange={(e) => handleSelect(e.target.value)}
        className="bg-black text-white border-none outline-none text-sm"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.short}
          </option>
        ))}
      </select>
    );
  }

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button
          className={`outline-none min-w-[6rem] inline-flex items-center justify-center gap-1 border bg-white px-3 py-2 text-base font-medium text-black shadow transition ${
            open ? "rounded-t-xl border-gray-300" : "rounded-xl border-gray-300"
          }`}
          aria-label="Change language"
        >
          {currentLang?.short || "??"}
          <ChevronDownIcon
            className={`h-5 w-5 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        {open && (
          <DropdownMenu.Content
            side="bottom"
            align="center"
            sideOffset={-1}
            className="z-50 min-w-[6rem] rounded-b-xl border border-t-0 border-gray-300 bg-white shadow animate-in fade-in slide-in-from-top-1 duration-300"
          >
            <div className="h-px bg-gray-200 mx-2" />

            <div className="flex justify-between px-3 py-2 text-sm text-black bg-gray-50">
              <span>{currentLang?.label}</span>
              <span>{currentLang?.short}</span>
            </div>

            {otherLanguages.map((lang) => (
              <DropdownMenu.Item
                key={lang.code}
                onSelect={() => handleSelect(lang.code)}
                className="flex justify-between cursor-pointer select-none px-3 py-2 text-sm text-black hover:bg-gray-100 focus:outline-none"
              >
                <span>{lang.label}</span>
                <span>{lang.short}</span>
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        )}
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
