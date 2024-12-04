import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { useFormContext } from "react-hook-form";
import { XIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  icon?: React.ReactNode;
  clearable?: boolean;
  hint?: string;
  inputSize?: "sm" | "md" | "lg";
  state?:
    | "default"
    | "typing"
    | "hover"
    | "disabled"
    | "filled"
    | "success"
    | "error";
}

const inputVariants = cva(
  "flex items-center gap-2 rounded-[8px] transition-all duration-200 ease-in-out",
  {
    variants: {
      size: {
        sm: "h-[44px] text-xs px-4 py-3",
        md: "h-[52px] text-sm p-4",
        lg: "h-[60px] text-sm px-4 py-5",
      },
      state: {
        default: "border-[#1B0F0014] bg-elevation-200",
        typing: "border-[#1B0F004D] bg-elevation-200",
        hover: "border-[#1B0F004D] bg-elevation-250",
        disabled: "border-[#1B0F0014] bg-elevation-100 cursor-not-allowed",
        filled: "border-[#1B0F004D] bg-elevation-200",
        success: "border-green-500 bg-elevation-200",
        error: "border-red-500 bg-elevation-200",
      },
    },
    defaultVariants: {
      size: "md",
      state: "default",
    },
  }
);

const Input = ({
  className,
  type,
  label,
  required = false,
  id,
  icon,
  clearable,
  hint,
  inputSize,
  state,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useFormContext();

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(!!e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(!!e.target.value);
  };

  const clearField = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      setHasValue(false);
    }
  };

  return (
    <div className="relative">
      <div className={cn(inputVariants({ size: inputSize, state }), className)}>
        {icon && <span>{icon}</span>}
        <input
          type={type}
          id={id}
          className={`flex font-medium bg-transparent outline-none ${
            isFocused || hasValue ? "pt-3" : ""
          }`}
          ref={inputRef}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
        {clearable && hasValue && (
          <button
            type="button"
            onClick={clearField}
            className="absolute right-4"
          >
            <XIcon className="h-5 w-5 text-text-300" />
          </button>
        )}
      </div>
      <label
        htmlFor={id}
        className={cn(
          "absolute left-4 transition-all duration-200 ease-out flex items-center text-text-300 font-medium",
          inputSize === "sm" ? "text-xs" : "text-sm",
          isFocused || hasValue
            ? inputSize === "sm"
              ? "top-1 text-xs text-text-200"
              : "top-2 text-xs text-text-200"
            : "top-1/2 -translate-y-1/2",
          icon && 'pl-6'
        )}
      >
        {label}
        {required && (
          <span
            className={
              isFocused || hasValue ? "text-text-200" : "text-signal-error"
            }
          >
            *
          </span>
        )}
      </label>
      {hint && <div className="text-xs text-text-200 mt-[2px]">{hint}</div>}
    </div>
  );
};
Input.displayName = "Input";

export { Input };
