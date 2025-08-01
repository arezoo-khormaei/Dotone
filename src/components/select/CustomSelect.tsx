import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import React from "react";
import classNames from "classnames";

type CustomSelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  error?: string;
  placeholder?: string;
};

export const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onChange,
  options,
  placeholder = "Select an option",
  error,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <Select.Root value={value} onValueChange={onChange} dir="rtl">
        <Select.Trigger
          className={classNames(
            "flex items-center justify-between text-sm font-light outline-none",
            {
              "border-gray-300": !error,
              "border-red-500": error,
            }
          )}
        >
          <Select.Value placeholder={placeholder} />
          <Select.Icon className="ml-2 text-gray-400">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Content
          position="popper"
          side="bottom"
          align="start"
          sideOffset={5}
          avoidCollisions
          style={{ width: "var(--radix-select-trigger-width)" }}
          className="bg-white rounded-md shadow-lg border border-gray-200 z-50 overflow-hidden w-full"
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
                  "px-4 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 flex items-center gap-2 outline-none",
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
