import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import classNames from "classnames";

type CustomSelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  error?: string;
  placeholder?: string;
  containerRef?: React.RefObject<HTMLDivElement | null>;
};

export const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onChange,
  options,
  placeholder = "یک گزینه را انتخاب کنید...",
  error,
  containerRef,
}) => {
  const [dropdownWidth, setDropdownWidth] = useState<number>(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (containerRef?.current) {
      const updateWidth = () =>
        setDropdownWidth(
          (containerRef?.current && containerRef?.current?.offsetWidth - 16) ||
            0
        );

      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }
  }, [containerRef]);

  return (
    <div className="flex flex-col gap-1 w-full">
      <Select.Root
        value={value}
        onValueChange={onChange}
        dir="rtl"
        onOpenChange={setOpen}
      >
        <Select.Trigger
          className={classNames(
            "flex items-center justify-between font-light outline-none text-xs xl:text-sm text-ellipsis text-nowrap",
            {
              "border-gray-300": !error,
              "border-red-500": error,
            }
          )}
        >
          <Select.Value placeholder={placeholder} />
          <Select.Icon className="ml-2 text-gray-400">
            <ChevronUpIcon
              className={`ml-2 text-gray-400 transition-all duration-300 w-5 h-5 ${
                open ? "scale-y-[1]" : "scale-y-[-1]"
              }`}
            />
          </Select.Icon>
        </Select.Trigger>

        <Select.Content
          position="popper"
          side="bottom"
          align="end"
          sideOffset={12}
          avoidCollisions
          style={{ width: dropdownWidth }}
          className="bg-white py-2 px-3 rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden w-full"
        >
          <Select.ScrollUpButton className="flex justify-center items-center h-6 bg-gray-100 text-gray-500">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-1">
            {options.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className={classNames(
                  "px-4 py-2 xl:text-sm text-xs text-nowrap rounded-lg cursor-pointer hover:bg-gray-100 flex items-center gap-2 outline-none",
                  {
                    "bg-gray-100": value === option.value,
                  }
                )}
              >
                <Select.ItemText>{option.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <CheckIcon className="text-green-500 ml-auto" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="flex justify-center items-center h-6 bg-gray-100 text-gray-500">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Root>
    </div>
  );
};
