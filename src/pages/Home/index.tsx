import { Link } from "react-router-dom";
import { Button } from "@ui/button";

const Home = () => {
  return (
    <div className="h-screen grid place-items-center gap-2">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="m-4">
          <h1 className="text-3xl">Create your own Hero for game sessions</h1>
        </div>
        <Link to="/hero">
          <Button>Create</Button>
        </Link>
      </div>
    </div>
  );
};

export { Home };
