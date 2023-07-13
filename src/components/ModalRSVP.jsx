import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import { useAppContext } from "../context/AppContextProvider";

const ModalRSVP = ({ isOpen, onClose, event }) => {
  const { dispatch } = useAppContext();

  const RSVPHandler = () => {
    dispatch({ type: "RSVP", payload: event.id });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} variant="red" isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="1rem">
        <ModalCloseButton />
        <ModalHeader textAlign="center" fontSize="1.5rem">
          Complete your RSVP
        </ModalHeader>
        <ModalBody pb={4} mt={4}>
          <FormControl isRequired>
            <FormLabel fontSize="1.2rem">Name: </FormLabel>
            <Input />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel fontSize="1.2rem">Email:</FormLabel>
            <Input />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button variant="myRed" onClick={RSVPHandler}>
            RSVP
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalRSVP;
