import character from "@/assets/sprites/character1.png";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCoins } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="grid gap-5">
      <Input className="text-xl" placeholder="Hero Name" />
      <div className="relative">
        <div className="absolute top-0 right-0">
          <Money amount={0} />
          <Link to="/hero/new">
            <Button
              variant="link"
              className="hover:cursor-pointer transition-opacity hover:opacity-50"
            >
              <FaEdit />
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <img src={character} className="w-40"></img>
        </div>
      </div>
    </div>
  );
};

const Money = ({ amount = 0 }: { amount: number }) => {
  return (
    <Button
      className="flex items-center gap-2 justify-center"
      variant="secondary"
    >
      <FaCoins />
      {amount}
    </Button>
  );
};

export default Hero;
