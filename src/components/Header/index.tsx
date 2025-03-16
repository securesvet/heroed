import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useLocation } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

const Header = () => {
  const location = useLocation();
  return (
    <div className="fixed top-0 left-0 right-0">
      <div className="flex justify-between items-center w-full h-[var(--header-height)] bg-primary-foreground">
        <div className="ml-4">
        <Link to="/">Header</Link>
        </div>
        <div className="flex items-center justify-evenly w-60">
          <div className="flex w-38 justify-between">
            {!["/login", "/signup"].includes(location.pathname) && (
              <>
                <ButtonWithLink text="Sign in" link="/login" />
                <ButtonWithLink text="Sign up" link="/signup" />
              </>
            )}
          </div>
          <div className="">
            <ModeToggle size="sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

function ButtonWithLink({ text, link }: { text: string; link: string }) {
  return (
    <Link to={link}>
      <Button size="sm" variant={"outline"} className="text-sm">
        {text}
      </Button>
    </Link>
  );
}

export default Header;
