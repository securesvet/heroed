import { InputHTMLAttributes, Ref } from "react";
import { cn } from "@/lib/utils";

type InputType = InputHTMLAttributes<HTMLInputElement> & { ref?: Ref<HTMLInputElement> };
const Input = ({
  className,
  ref,
  ...props
}: InputType) => {
  return (
    <div>
      <input
        ref={ref}
        {...props}
        className={cn(
          className,
          `border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500`
        )}
      ></input>
    </div>
  );
};

export default Input;
export type { InputType };
