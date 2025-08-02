import { useState } from "react";

type FocusableInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  placeholderOnFocus?: string;
};

export const FocusableInput = ({
  placeholder,
  placeholderOnFocus = "...",
  ...rest
}: FocusableInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <input
      {...rest}
      placeholder={isFocused ? placeholderOnFocus : placeholder}
      onFocus={(e) => {
        setIsFocused(true);
        rest.onFocus?.(e);
      }}
      onBlur={(e) => {
        setIsFocused(false);
        rest.onBlur?.(e);
      }}
    />
  );
};

type FocusableTextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    placeholderOnFocus?: string;
  };

export const FocusableTextarea = ({
  placeholder,
  placeholderOnFocus = "...",
  ...rest
}: FocusableTextareaProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <textarea
      {...rest}
      placeholder={isFocused ? placeholderOnFocus : placeholder}
      onFocus={(e) => {
        setIsFocused(true);
        rest.onFocus?.(e);
      }}
      onBlur={(e) => {
        setIsFocused(false);
        rest.onBlur?.(e);
      }}
    />
  );
};
