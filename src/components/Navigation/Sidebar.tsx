import { Accordion, AccordionItem } from "@nextui-org/react";
import ButtonFilter from "../Button/ButtonFilter";
import { ProjectContext } from "@/provider/Project";
import { useContext } from "react";
import { ProviderState } from "@/types/provider.interface";
import { SidebarProps } from "@/types/component.interface";

const Sidebar = ({ className }: SidebarProps) => {
  const { handleStatus, handleGender, handleClear } = useContext(
    ProjectContext
  ) as ProviderState;

  const statusArr = ["Alive", "Dead", "Unknow"];
  const gender = ["Female", "Male", "Genderless", "Unknow"];

  return (
    <section className={className}>
      <div>
        <Accordion variant="splitted">
          <AccordionItem key="1" aria-label="Accordion 1" title="Status">
            {statusArr.map((items, index) => (
              <ButtonFilter
                key={index}
                color={
                  items === "Alive"
                    ? "success"
                    : items === "Dead"
                    ? "danger"
                    : items === "unknow"
                    ? "default"
                    : undefined
                }
                variant="ghost"
                size="md"
                onPress={() => handleStatus(items)}
                className="w-[8rem] m-[0.2rem]"
              >
                {items}
              </ButtonFilter>
            ))}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Gender">
            {gender.map((gender, index) => (
              <ButtonFilter
                key={index}
                color={
                  gender === "Female"
                    ? "primary"
                    : gender === "Male"
                    ? "warning"
                    : gender === "Genderless"
                    ? "secondary"
                    : gender === "Unknow"
                    ? "default"
                    : undefined
                }
                variant="ghost"
                size="sm"
                onPress={() => handleGender(gender)}
                className="w-[8rem] m-[0.2rem]"
              >
                {gender}
              </ButtonFilter>
            ))}
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex justify-center">
        <ButtonFilter
          color="primary"
          variant="shadow"
          size="lg"
          onPress={handleClear}
          className="w-[8rem] m-[2rem]"
        >
          Reset
        </ButtonFilter>
      </div>
    </section>
  );
};

export default Sidebar;
