import { CardsProps } from "@/types/component.interface";
import { Card, Avatar, Badge } from "@nextui-org/react";
import ModalWindow from "../Modal/ModalWindow";
import { Like } from "@/components/svg/Like";
import { LikeFilled } from "@/components/svg/LikeFilled";

const Cards = ({ character, handlerSelected, isFavorite }: CardsProps) => {
  return (
    <Badge
      color={isFavorite[character.id] ? "default" : "success"}
      size="lg"
      variant="solid"
      onClick={() => handlerSelected(character)}
      content={isFavorite[character.id] ? <LikeFilled /> : <Like />}
    >
      <Card
        className="w-[22.5rem] h-[9.4rem] rounded-xl flex-row items-center justify-between p-4 gap-4 border-solid border-2 border-[#004643]
        mobile:w-[20rem]"
        radius="lg"
      >
        <Badge
          content={
            character.status === "Alive"
              ? "Alive"
              : character.status === "Dead"
              ? "Dead"
              : character.status === "unknown"
              ? "Unknown"
              : undefined
          }
          variant="shadow"
          color={
            character.status === "Alive"
              ? "success"
              : character.status === "Dead"
              ? "danger"
              : character.status === "unknown"
              ? "default"
              : undefined
          }
        >
          <Avatar
            isBordered
            color={
              character.status === "Alive"
                ? "success"
                : character.status === "Dead"
                ? "danger"
                : character.status === "unknown"
                ? "default"
                : undefined
            }
            radius="lg"
            src={character.image}
            className="w-20 h-20"
            alt={`${character.name} picture`}
          />
        </Badge>

        <div className="flex flex-col w-64">
          <h4 className="font-bold text-center">{character.name}</h4>
          <p className="text-center">
            <strong>Gender:</strong> {character.gender}
          </p>
        </div>

        <ModalWindow character={character} />
      </Card>
    </Badge>
  );
};

export default Cards;
