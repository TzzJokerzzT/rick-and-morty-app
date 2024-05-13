import { useEffect, useState, createContext } from "react";
import { fecthAPI } from "@/services/API";
import { ProviderProps, ProviderState } from "@/types/provider.interface";
import { Character } from "@/types/services.interface";
import { user } from "@/services/user";
import { useLocalStorage } from "@/hook/useLocalStorage";

export const ProjectContext = createContext<ProviderState | undefined>(
  undefined
);

export const ProjectProvider = ({ children }: ProviderProps) => {
  ///States
  const [character, setCharacter] = useState<Character[]>([]);
  // const [email, setEmail] = useState<string>("");
  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword] = useLocalStorage("password", "");
  // const [isValid, setIsValid] = useState<boolean>(true);
  const [isValid, setIsValid] = useLocalStorage("isValid", false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [isFavoriteChar, setIsFavoriteChar] = useState<Character[]>([]);
  const [isFavoriteChar, setIsFavoriteChar] = useLocalStorage(
    "isFavoriteChar",
    []
  );
  // const [isFavorite, setIsFavorite] = useState<FavoriteProps>([]);
  const [isFavorite, setIsFavorite] = useLocalStorage("isFavorite", {});
  // const [page, setPage] = useState<number>(1);
  const [page, setPage] = useLocalStorage("page", 1);
  // const [pagPages, setPagPages] = useState<number>(0);
  const [pagPages, setPagPages] = useLocalStorage("pagPages", 0);
  // const [status, setStatus] = useState<string>("");
  const [status, setStatus] = useLocalStorage("status", "");
  // const [gender, setGender] = useState<string>("");
  const [gender, setGender] = useLocalStorage("gender", "");
  // const [name, setName] = useState<string>("");
  const [name, setName] = useLocalStorage("name", "");
  const [error, setError] = useState(false);
  ///Handler Function
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogOut = () => {
    setEmail("");
    setPassword("");
    setIsValid(false);
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    email === user.email && password === user.password
      ? setIsValid(true)
      : setIsValid(false);
  };

  const handleFavoriteToggle = (character: Character) => {
    const newIsFavorite = { ...isFavorite };
    if (isFavoriteChar.some((fav: Character) => fav.id === character.id)) {
      setIsFavoriteChar(
        isFavoriteChar.filter((fav: Character) => fav.id !== character.id)
      );
      delete newIsFavorite[Number(character.id)];
    } else {
      setIsFavoriteChar([...isFavoriteChar, character]);
      newIsFavorite[character.id] = true;
    }
    setIsFavorite(newIsFavorite);
  };

  const handleClear = () => {
    setPage(1);
    setPagPages(0);
    setStatus("");
    setGender("");
    setName("");
    setError(false);
    // window.location.reload();
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
    setIsLoading(true);
    fecthAPI(page, status, gender, name).then((data) => {
      try {
        if (data.error) throw new Error("OCURRIO UN ERROR");
        setCharacter(data.results);
        setPagPages(data.info.pages);
      } catch (error) {
        setError(true);
      }
    });
    setIsLoading(false);
  }, [page, name, status, gender, setPagPages]);

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
        error,
        setPage,
        name,
        handleChangeEmail,
        handleChangePassword,
        handleLogOut,
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
