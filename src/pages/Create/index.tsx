import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ui/carousel";

import char1 from "@/assets/sprites/character1.png";
import char2 from "@/assets/sprites/character2.png";
import char3 from "@/assets/sprites/character3.png";

const characterSprites = [char1, char2, char3];

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
