import { Like } from "@/components/svg/Like";
import { FavoriteCardProps } from "@/types/component.interface";
import { LikeFilled } from "@/components/svg/LikeFilled";
import { Card, Avatar, Badge } from "@nextui-org/react";

const CardsFavorite = ({
  favoriteChar,
  isFavorite,
  handlerSelected,
}: FavoriteCardProps) => {
  return (
    <div>
      <Badge
        color={isFavorite[favoriteChar.id] ? "default" : "success"}
        size="lg"
        variant="solid"
        onClick={() => handlerSelected(favoriteChar)}
        content={isFavorite[favoriteChar.id] ? <LikeFilled /> : <Like />}
      >
        <Card
          className="w-[360px] h-[150px] rounded-xl flex-row items-center justify-between p-4 gap-4 border-solid border-2 border-[#004643]"
          radius="lg"
        >
          <Badge
            content={
              favoriteChar.status === "Alive"
                ? "Alive"
                : favoriteChar.status === "Dead"
                ? "Dead"
                : favoriteChar.status === "unknown"
                ? "Unknown"
                : undefined
            }
            variant="shadow"
            color={
              favoriteChar.status === "Alive"
                ? "success"
                : favoriteChar.status === "Dead"
                ? "danger"
                : favoriteChar.status === "unknown"
                ? "default"
                : undefined
            }
          >
            <Avatar
              isBordered
              color={
                favoriteChar.status === "Alive"
                  ? "success"
                  : favoriteChar.status === "Dead"
                  ? "danger"
                  : favoriteChar.status === "unknown"
                  ? "default"
                  : undefined
              }
              radius="lg"
              src={favoriteChar.image}
              className="w-20 h-20"
              alt={`${favoriteChar.name} picture`}
            />
          </Badge>

          <div className="flex flex-col w-64">
            <h4 className="font-bold text-center">{favoriteChar.name}</h4>
            <p className="text-center">
              <strong>Gender:</strong> {favoriteChar.gender}
            </p>
          </div>
        </Card>
      </Badge>
    </div>
  );
};

export default CardsFavorite;
