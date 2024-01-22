import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";
import ButtonCard from "../button/ButtonCard";
import { FaLinkedin } from "react-icons/fa6";
function CardPortfolio(data) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="shadow-lg">
        <Card maxW="sm">
          <CardBody>
            <Image
              src={data.image}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />

            <Stack>
              <Heading size="md" paddingTop={"10px"}>
                {data.title}
              </Heading>
              <Text>{data.desc}</Text>
            </Stack>
          </CardBody>
          <CardFooter>
            {/* <ButtonCard
              onClick={onOpen}
              btnName="Linkedin"
              icon={<FaLinkedin />}
            /> */}

            <Button
              _hover={{
                background: "darkRed",
                width: "100px",
                transitionDuration: "500ms",
              }}
              bg={"#EF4444"}
              color={"white"}
              onClick={onOpen}
            >
              Open
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{data.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={data.modalImg} alt="Sertifikat" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CardPortfolio;
