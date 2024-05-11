import CardsFavorite from "@/components/Cards/CardsFavorite";
import { useContext } from "react";
import { ProjectContext } from "@/provider/Project";
import { ProviderState } from "@/types/provider.interface";
import { Character } from "@/types/services.interface";

const CardFavorite = () => {
  const {
    // isFavoriteChar,
    handleFavoriteToggle,
    isFavorite,
    localStorageStates,
  } = useContext(ProjectContext) as ProviderState;
  const storedData = localStorageStates();
  console.log(storedData.isFavoriteChar);
  return (
    <div className="flex flex-wrap justify-center gap-4 m-2">
      {storedData.isFavoriteChar.map((character: Character) => (
        <CardsFavorite
          key={character.id}
          favoriteChar={character}
          isFavorite={isFavorite}
          handlerSelected={handleFavoriteToggle}
        />
      ))}
    </div>
  );
};

export default CardFavorite;
