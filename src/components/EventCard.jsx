import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { getFormattedDate } from "../helper";

const EventCard = ({ event }) => {
  const formattedDate = getFormattedDate(event.eventStartTime);

  return (
    <Card w="20rem">
      <CardBody p={0}>
        <Box pos="relative">
          <Image
            src={event.eventThumbnail}
            alt={event.title}
            h="15rem"
            objectFit="cover"
            borderTopRadius="0.5rem"
          />

          <Text
            bg="white"
            p={2}
            borderRadius="lg"
            position="absolute"
            top="1rem"
            left="1rem"
          >
            {event.eventType} Event
          </Text>
        </Box>

        <Flex flexDir="column" gap={1} p={4}>
          <Box fontSize="0.9rem" color="gray.700">
            <Text>{formattedDate}</Text>
          </Box>
          <Heading fontSize="1.2rem">{event.title}</Heading>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default EventCard;
