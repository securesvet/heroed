import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const characterSprites = [
  "/heroed/sprites/character1.png",
  "/heroed/sprites/character2.png",
  "/heroed/sprites/character3.png",
];

const CharacterCreator = () => {
  return (
    <div className="h-screen grid place-items-center gap-2">
      <Carousel className="flex justify-center items-center h-full w-1/2">
        <div className="w-40 h-40">
          <CarouselContent>
            {characterSprites.map((sprite, index) => (
              <CarouselItem key={index}>
                <img src={sprite} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CharacterCreator;
