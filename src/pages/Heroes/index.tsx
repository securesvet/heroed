import { Button } from "@ui/button";
import { Card } from "@ui/card";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

type HeroMain = {
  id: number;
  name: string;
  // image: string;
};
const Heroes = () => {
  const hero: HeroMain[] = [{ id: 1, name: "Lvinos" }];
  return (
    <div className="my-[var(--header-height)]">
      <div className="flex justify-center items-center">
        <div className="grid gap-4 text-center">
          <h1>Heroes</h1>
          <div className="flex flex-wrap gap-4">
            {hero.map(({ id, name }) => (
              <Card key={id}>{name}</Card>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link to="/hero/new">
          <Button className="py-10">
            <div className="flex gap-2 flex-col justify-center items-center">
              <p>Create new</p>
              <FaPlus />
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export { Heroes };
