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
} from "@chakra-ui/react";
import ButtonCard from "../button/ButtonCard";
import { FaLinkedin } from "react-icons/fa6";
function CardPortfolio(data) {
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
            <a href="#">
              <ButtonCard btnName="Linkedin" icon={<FaLinkedin />} />
            </a>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default CardPortfolio;
