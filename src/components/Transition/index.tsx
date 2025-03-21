import { ReactNode } from "react";
import { useMountTransition } from "@root/src/hooks/useMountedTransition";
import { cn } from "@root/src/lib/utils";

const Transition = ({
  isMounted,
  delay = 150,
  children,
  className,
}: {
  isMounted: boolean;
  delay?: number;
  children?: ReactNode;
  className?: string;
}) => {
  const hasTransitionedIn = useMountTransition(isMounted, delay);
  const defaultTransition = cn(
    hasTransitionedIn && "translate-y-0 opacity-100",
    !isMounted && "-translate-y-1 opacity-0",
  );
  return (
    <div>
      {(hasTransitionedIn || isMounted) && (
        <div
          className={cn(
            "transition-[translate,_opacity] -translate-y-1 opacity-0 ease-in-out",
            defaultTransition,
            className,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export { Transition };
