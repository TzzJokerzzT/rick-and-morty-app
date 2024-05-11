import { Character } from "@/types/services.interface";
import { SetStateAction } from "react";

export interface ProviderProps {
  children: React.ReactNode;
}

export interface ProviderState {
  character: Character[];
  isValid: boolean;
  isFavoriteChar: Character[];
  isFavorite: { [key: number]: boolean };
  page: number;
  pagPages: number;
  isLoading: boolean;
  setPage: React.Dispatch<SetStateAction<number>>;
  localStorageStates: () => {
    email: string;
    password: string;
    isFavoriteChar: Character[];
    isFavorite: { [key: number]: boolean };
  };
  handleChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
  handleFavoriteToggle: (character: Character) => void;
  handleClear: () => void;
  handleStatus: (i: string) => void;
  handleGender: (i: string) => void;
  handleName: (i: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface FavoriteProps {
  [key: number]: boolean;
}
