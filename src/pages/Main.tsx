import Card from "@/components/Cards/Card";
import PaginationNav from "@/components/Navigation/Pagination";
import Search from "@/components/Navigation/Search";
import Sidebar from "@/components/Navigation/Sidebar";
import { useContext } from "react";
import { ProjectContext } from "@/provider/Project";
import { ProviderState } from "@/types/provider.interface";

const Main = () => {
  const { page, setPage, pagPages } = useContext(
    ProjectContext
  ) as ProviderState;
  return (
    <section className="grid grid-cols-[200px,_1fr] grid-rows-[100px,1fr] gap-2 h-full">
      <Search />
      <Sidebar />
      <Card />
      <PaginationNav
        showControls
        total={pagPages}
        page={page}
        variant="flat"
        color="success"
        onChange={setPage}
        className="m-2"
      />
    </section>
  );
};

export default Main;
