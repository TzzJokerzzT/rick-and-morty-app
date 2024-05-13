import { ModalProps } from "@/types/component.interface";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Image,
  Divider,
} from "@nextui-org/react";

const ModalWindow = ({ character }: ModalProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button color="success" onPress={onOpen}>
        Info
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {character.name}
              </ModalHeader>
              <ModalBody>
                <Image
                  className="border-solid border-2 border-[#0F8F2E] ml-[3.2rem]"
                  width={300}
                  src={character.image}
                  alt={`${character.name} photo`}
                />
                <Divider className="my-4" />
                <p>
                  <strong>Status:</strong> {character.status}
                </p>
                <p>
                  <strong>Species:</strong> {character.species}
                </p>
                <p>
                  <strong>Type:</strong>{" "}
                  {character.type === "" ? "N/A" : character.type}
                </p>
                <p>
                  <strong>Gender: </strong>
                  {character.gender}
                </p>
                <p>
                  <strong>Origin:</strong> {character.origin.name}
                </p>
                <Divider />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalWindow;
