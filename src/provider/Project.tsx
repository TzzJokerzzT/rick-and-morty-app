import { useEffect, useState, createContext } from "react";
import { fecthAPI } from "@/services/API";
import {
  FavoriteProps,
  ProviderProps,
  ProviderState,
} from "@/types/provider.interface";
import { Character } from "@/types/services.interface";
import { user } from "@/services/user";

export const ProjectContext = createContext<ProviderState | undefined>(
  undefined
);

export const ProjectProvider = ({ children }: ProviderProps) => {
  ///States
  const [character, setCharacter] = useState<Character[]>([]);
  const [email, setEmail] = useState<string>("hola");
  const [password, setPassword] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFavoriteChar, setIsFavoriteChar] = useState<Character[]>([]);
  const [isFavorite, setIsFavorite] = useState<FavoriteProps>([]);
  const [page, setPage] = useState<number>(1);
  const [pagPages, setPagPages] = useState<number>(0);
  const [status, setStatus] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [name, setName] = useState<string>("");
  /// LocalStorage
  const localStorageStates = () => {
    const states = {
      email,
      password,
      isFavoriteChar,
      isFavorite,
    };
    const statesJSON = JSON.stringify(states);
    localStorage.setItem("appStates", statesJSON);
    return { email, password, isFavoriteChar, isFavorite };
  };

  const getStatesLocalStorage = () => {
    const statesJSON = localStorage.getItem("appStates");
    if (!statesJSON) return;
    const states = JSON.parse(statesJSON);
    setEmail(states.email);
    setPassword(states.password);
    setIsFavoriteChar(states.isFavoriteChar);
    setIsFavorite(states.isFavorite);
  };

  ///Handler Function
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    email === user.email && password === user.password
      ? setIsValid(true)
      : setIsValid(false);
  };

  const handleFavoriteToggle = (character: Character) => {
    if (isFavoriteChar.some((fav) => fav.id === character.id)) {
      setIsFavoriteChar(
        isFavoriteChar.filter((fav) => fav.id !== character.id)
      );
    } else {
      setIsFavoriteChar([...isFavoriteChar, character]);
    }
    setIsFavorite((prev) => ({
      ...prev,
      [Number(character.id)]: !prev[Number(character.id)],
    }));
  };

  const handleClear = () => {
    setPage(1);
  };

  const handleStatus = (i: string) => {
    setStatus(i.toLowerCase());
  };

  const handleGender = (i: string) => {
    setGender(i.toLowerCase());
  };

  const handleName = (i: string) => {
    setName(i.toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // ///Use Effect
  useEffect(() => {
    getStatesLocalStorage();
    setIsLoading(true);
    const fetchData = async () => {
      const data = await fecthAPI(page, status, gender, name);
      setCharacter(data.results);
      setPagPages(data.info.pages);
    };
    fetchData();
    setIsLoading(false);
  }, [page, status, gender, name]);

  return (
    <ProjectContext.Provider
      value={{
        character,
        isValid,
        isFavoriteChar,
        isFavorite,
        page,
        pagPages,
        isLoading,
        localStorageStates,
        setPage,
        handleChangeEmail,
        handleChangePassword,
        handleSubmitForm,
        handleFavoriteToggle,
        handleClear,
        handleStatus,
        handleGender,
        handleName,
        handleSubmit,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
