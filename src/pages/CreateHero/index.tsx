import character from "@/assets/sprites/character1.png";

const CreateHero = () => {
  return (
    <div className="my-[var(--header-height)]">
      <img src={character}></img>
    </div>
  );
};

export { CreateHero };
