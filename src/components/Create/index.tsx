import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const characterSprites = [
  "/sprites/character1.png",
  "/sprites/character2.png",
  "/sprites/character3.png",
];

const CharacterCreator = () => {
  return (
    <Carousel className="flex justify-center items-center h-full w-1/2">
      <CarouselContent>
        {characterSprites.map((sprite, index) => (
          <CarouselItem key={index}>
            <img src={sprite} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CharacterCreator;
