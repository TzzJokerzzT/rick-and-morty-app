import { useContext } from "react";
import Btn from "../Button/Button";
import InputSearch from "../Input/InputSearch";
import { ProjectContext } from "@/provider/Project";
import { ProviderState } from "@/types/provider.interface";

const Search = () => {
  const { handleName, handleSubmit } = useContext(
    ProjectContext
  ) as ProviderState;

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit;
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex justify-center items-center col-start-2 col-end-3"
    >
      <InputSearch
        type="text"
        label="Search"
        size="sm"
        className="w-[20rem]"
        placeholder="Search by Name"
        defaultValue=""
        onChange={(e) => handleName(e.target.value)}
      />
      <Btn type="submit">Search</Btn>
    </form>
  );
};

export default Search;
