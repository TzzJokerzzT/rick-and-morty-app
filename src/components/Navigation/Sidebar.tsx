import { Accordion, AccordionItem } from "@nextui-org/react";
import ButtonFilter from "../Button/ButtonFilter";
import { ProjectContext } from "@/provider/Project";
import { useContext } from "react";
import { ProviderState } from "@/types/provider.interface";

const Sidebar = () => {
  const { handleStatus, handleGender } = useContext(
    ProjectContext
  ) as ProviderState;

  const status = ["Alive", "Dead", "Unknow"];
  const gender = ["Female", "Male", "Genderless", "Unknow"];

  return (
    <div className="row-start-1 row-end-3">
      <Accordion variant="splitted" className="flex flex-col my-2 ">
        <AccordionItem
          className="sticky"
          key="1"
          aria-label="Accordion 1"
          title="Status"
        >
          {status.map((status, index) => (
            <ButtonFilter
              key={index}
              color={
                status === "Alive"
                  ? "success"
                  : status === "Dead"
                  ? "danger"
                  : status === "unknow"
                  ? "default"
                  : undefined
              }
              variant="ghost"
              size="sm"
              onPress={() => handleStatus(status)}
            >
              {status}
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
            >
              {gender}
            </ButtonFilter>
          ))}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Sidebar;
