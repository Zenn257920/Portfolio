import { forwardRef, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

const Select = forwardRef<HTMLSelectElement, ComponentProps<"select">>(
  ({ className, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        "flex h-10 w-full appearance-none rounded-md border border-transparent bg-zinc-950 px-3 py-2 text-sm text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  ),
);
Select.displayName = "Select";

export { Select };
