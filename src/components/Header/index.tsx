import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className="fixed top-0 left-0 right-0">
      <div className="flex justify-between items-center w-full h-[var(--header-height)] bg-neutral-50">
        <Link to="/">Header</Link>
        {location.pathname !== "/signup" && (
          <Link to="/signup">
            <Button>Sign up</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
