import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Home = () => {
  return (
    <div className="h-[calc(100vh-var(--header-height))] grid place-items-center gap-2">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl">Create your own Hero for game sessions</h1>
        <Link to="/create">
          <Button>Create</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
