import { Character } from "./services.interface";

export interface ButtonProps {
  type: "button" | "submit" | "reset";
  children: string;
}

export interface InputProps {
  type: "email" | "password" | "text";
  label: string;
  placeholder?: string;
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputSearchProps {
  type: "email" | "password" | "text";
  label: string;
  size: "sm" | "md" | "lg";
  className: string;
  placeholder?: string;
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CardsProps {
  key: React.Key | boolean;
  character: Character;
  isFavorite: { [key: number]: boolean };
  handlerSelected: (character: Character) => void;
}

export interface FavoriteCardProps {
  key: React.Key | boolean;
  favoriteChar: Character;
  isFavorite: { [key: number]: boolean };
  handlerSelected: (character: Character) => void;
}

export interface ButtonCardsProps {
  color:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
  radius: "lg" | "none" | "sm" | "md" | "full" | undefined;
  size: "lg" | "sm" | "md" | undefined;
  variant:
    | "shadow"
    | "bordered"
    | "solid"
    | "light"
    | "flat"
    | "faded"
    | "ghost"
    | undefined;
  className: string;
  children: React.ReactNode;
  onClick: (character: React.MouseEventHandler<HTMLButtonElement>) => void;
  ///MouseEventHandler<HTMLButtonElement>
}

export interface ButtonFilterProps {
  variant:
    | "shadow"
    | "bordered"
    | "solid"
    | "light"
    | "flat"
    | "faded"
    | "ghost"
    | undefined;
  color:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
  size: "sm" | "md" | "lg";
  isDisable: boolean;
  onClick: (i: string) => void;
  children: React.ReactNode;
}

export interface ModalProps {
  character: Character;
}

export interface LikeProps {
  size?: number;
  height?: number;
  width?: number;
}

export interface PaginationProps {
  showControls: boolean;
  total: number;
  page: number;
  variant: "flat";
  color: "success";
  onChange?: React.Dispatch<React.SetStateAction<number>>;
  className: string;
}
