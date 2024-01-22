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
import { FaGithub } from "react-icons/fa6";
function CardProject(data) {
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
            <a href={data.link}>
              <ButtonCard icon={<FaGithub />} btnName="Github" />
            </a>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default CardProject;
