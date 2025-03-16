import { Moon, Sun } from "lucide-react"

import { Button, ButtonType } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

export function ModeToggle({className, ...props}: ButtonType & {
    className?: string}) {
  const { theme, setTheme } = useTheme()

  const isDark = theme === "dark";
  return (
    <Button variant={"outline"} onClick={() => setTheme(isDark ? "light" : "dark")} className={cn("hover:cursor-pointer", className)} {...props}>{isDark ? <Sun /> : <Moon />}</Button>
  )
}
