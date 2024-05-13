import { useContext } from "react";
import Search from "@/components/Navigation/Search";
import Sidebar from "@/components/Navigation/Sidebar";
import Error from "@/components/Error/Error";
import Card from "@/components/Cards/Card";
import PaginationNav from "@/components/Navigation/Pagination";
import { ProjectContext } from "@/provider/Project";
import { ProviderState } from "@/types/provider.interface";

const Main = () => {
  const { page, setPage, pagPages, error } = useContext(
    ProjectContext
  ) as ProviderState;
  return (
    <section className="grid grid-cols-[12.5rem,_1fr] grid-rows-[6.25rem,1fr] gap-2">
      <Search />
      <Sidebar className="row-start-1 row-end-3 mobile:hidden" />
      {error ? (
        <Error />
      ) : (
        <>
          <Card />
          <PaginationNav
            showControls
            total={pagPages}
            page={page}
            variant="flat"
            color="success"
            onChange={setPage}
            className="m-2 flex justify-center w-[30rem]"
          />
        </>
      )}
    </section>
  );
};

export default Main;
