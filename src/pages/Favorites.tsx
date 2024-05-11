import CardFavorite from "@/components/Cards/CardFavorite";
import PaginationNav from "@/components/Navigation/Pagination";
import { ProjectContext } from "@/provider/Project";
import { ProviderState } from "@/types/provider.interface";
import { useContext } from "react";

const Favorites = () => {
  const { isFavoriteChar, pagPages } = useContext(
    ProjectContext
  ) as ProviderState;
  return (
    <section className="flex justify-center items-center gap-2 h-full">
      <CardFavorite />
      <PaginationNav
        showControls
        total={isFavoriteChar.length}
        page={pagPages}
        variant="flat"
        color="success"
        className="m-2"
      />
    </section>
  );
};

export default Favorites;
