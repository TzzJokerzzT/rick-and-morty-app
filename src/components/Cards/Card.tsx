import Cards from "@/components/Cards/Cards";
import { useContext } from "react";
import { ProjectContext } from "@/provider/Project";
import { ProviderState } from "@/types/provider.interface";
import { Character } from "@/types/services.interface";
import ScrollBar from "@/components/ScrollBar/ScrollBar";

const Card = () => {
  const { character, handleFavoriteToggle, isFavorite } = useContext(
    ProjectContext
  ) as ProviderState;

  return (
    <div className="flex flex-wrap justify-center m-6 gap-2 h-[38.7rem] mobile:col-span-2">
      <ScrollBar
        size={90}
        hideScrollBar
        className="w-full h-[37.5rem] flex justify-center items-start flex-wrap gap-2"
      >
        {character.map((character: Character) => (
          <Cards
            key={character.id}
            character={character}
            isFavorite={isFavorite}
            handlerSelected={handleFavoriteToggle}
          />
        ))}
      </ScrollBar>
    </div>
  );
};

export default Card;
