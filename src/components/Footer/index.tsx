import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid place-items-center gap-2 bottom-0 left-0 right-0 w-full h-[var(--footer-height)] bg-primary-foreground border inset-shadow-sm">
      <div className="mt-1">
        <Link to="https://github.com/securesvet">github.com/securesvet</Link>
      </div>
      <div className="flex items-center justify-center">
        <FaRegCopyright />
        <p> {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
