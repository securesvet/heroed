import character from "@/assets/sprites/character1.png";
import { Card } from "@root/src/components/ui/card";
import { Input } from "@ui/input";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";

const Hero = () => {
  const [showEditButton, setShowEditButton] = useState<boolean>(false);

  return (
    <div className="grid gap-10">
      <Input className="text-xl" placeholder="Hero Name" />
      <div className="relative">
        <Card
          className="flex items-center justify-center hover:cursor-pointer hover:opacity-50 transition-opacity bg-transparent"
          onMouseMove={() => setShowEditButton(true)}
          onMouseLeave={() => setShowEditButton(false)}
        >
          {showEditButton && (
            <div className="absolute">
              <FaEdit />
            </div>
          )}
          <img src={character} className="w-40"></img>
        </Card>
      </div>
    </div>
  );
};

export default Hero;
