import CardsFavorite from "@/components/Cards/CardsFavorite";
import { useContext } from "react";
import { ProjectContext } from "@/provider/Project";
import { ProviderState } from "@/types/provider.interface";
import { Character } from "@/types/services.interface";
import ScrollBar from "@/components/ScrollBar/ScrollBar";

const CardFavorite = () => {
  const { handleFavoriteToggle, isFavorite, isFavoriteChar } = useContext(
    ProjectContext
  ) as ProviderState;
  return (
    <div className="flex flex-wrap justify-center gap-2 h-[53.5rem] mobile:col-span-2">
      <ScrollBar
        size={90}
        hideScrollBar
        className="w-full h-[40rem] flex justify-center items-start flex-wrap gap-2"
      >
        {isFavoriteChar.map((character: Character) => (
          <CardsFavorite
            key={character.id}
            favoriteChar={character}
            isFavorite={isFavorite}
            handlerSelected={handleFavoriteToggle}
          />
        ))}
      </ScrollBar>
    </div>
  );
};

export default CardFavorite;
