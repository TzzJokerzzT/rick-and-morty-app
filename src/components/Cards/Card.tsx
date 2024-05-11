import Cards from "@/components/Cards/Cards";
import { useContext } from "react";
import { ProjectContext } from "@/provider/Project";
import { ProviderState } from "@/types/provider.interface";
import { Character } from "@/types/services.interface";

const Card = () => {
  const { character, handleFavoriteToggle, isFavorite } = useContext(
    ProjectContext
  ) as ProviderState;

  return (
    <div className="flex flex-wrap items-center justify-center p-2 gap-2 overflow-auto h-screen">
      {character.map((character: Character) => (
        <Cards
          key={character.id}
          character={character}
          isFavorite={isFavorite}
          handlerSelected={handleFavoriteToggle}
        />
      ))}
    </div>
  );
};

export default Card;
