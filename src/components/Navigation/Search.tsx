import { useContext } from "react";
import ButtonSearch from "../Button/Button";
import InputSearch from "../Input/InputSearch";
import { ProjectContext } from "@/provider/Project";
import { ProviderState } from "@/types/provider.interface";

const Search = () => {
  const { name, handleName, handleSubmit } = useContext(
    ProjectContext
  ) as ProviderState;

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit;
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex justify-center items-center col-start-2 col-end-3 mobile:col-start-1 col-end-3"
    >
      <InputSearch
        type="text"
        label="Search"
        size="sm"
        className="w-[20rem]"
        placeholder="Search by Name"
        value={name}
        onChange={(e) => handleName(e.target.value)}
      />
      <ButtonSearch className="ml-2" size="lg" type="submit">
        Search
      </ButtonSearch>
    </form>
  );
};

export default Search;
