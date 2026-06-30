import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-10 items-center justify-center rounded-[5px] px-5 text-center text-[14px] font-semibold leading-[18px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-coral text-white shadow-[0_8px_18px_0_rgba(15,31,28,0.07)] hover:bg-[#dc5f4e]",
        secondary:
          "border border-transparent bg-[rgba(233,104,85,0.22)] text-coral hover:bg-[rgba(233,104,85,0.3)]",
        "secondary-dark":
          "border border-white/80 bg-transparent text-white hover:bg-white/10",
        footer:
          "h-11 rounded-[8px] bg-coral px-6 text-white shadow-[0_8px_18px_-8px_rgba(0,0,0,0.18)] hover:bg-[#df5f52]",
      },
      size: {
        default: "min-w-[119px]",
        compact: "min-w-[102px]",
        wide: "min-w-[146px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
