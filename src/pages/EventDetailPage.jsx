import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { getFormattedDate } from "../helper";
import ModalRSVP from "../components/ModalRSVP";

const EventDetailPage = () => {
  const { id: eventId } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    state: { events },
  } = useAppContext();

  const event = events.find(({ id }) => id === eventId);

  console.log(event?.RSVP);
  return (
    <Flex as="main" flexDir="column" gap={4} p={8}>
      <NavBar />
      <Divider />
      <Grid gridTemplateColumns={"3fr 2fr"}>
        <GridItem>
          <Flex p={4} gap={8} flexDir="column">
            <Heading>{event.title}</Heading>
            <Flex flexDir="column">
              <Text>Hosted By:</Text>
              <Text fontWeight="bold">{event.hostedBy}</Text>
            </Flex>
            <Box height="20rem">
              <Image
                src={event.eventThumbnail}
                alt="Dan Abramov"
                h="full"
                objectFit="cover"
              />
            </Box>
            <Heading fontSize="1.5rem">Details</Heading>
            <Text w="30rem">{event.eventDescription}</Text>

            <Flex flexDir="column" gap={2}>
              <Heading fontSize="1.5rem">Additional Information:</Heading>
              <Text>Dress code: {event.additionalInformation.dressCode}</Text>
              <Text>
                Age Restrictions: {event.additionalInformation.ageRestrictions}
              </Text>
            </Flex>
            <Heading fontSize="1.5rem">Event Tags:</Heading>
            <Flex gap={2}>
              {event.eventTags.map((tag, i) => (
                <Tag key={i} size="lg" bg="red.400" color="white">
                  {tag}
                </Tag>
              ))}
            </Flex>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex flexDir="column" gap={8} alignItems="center">
            <Card w="25rem">
              <CardHeader>
                <Text>{`${getFormattedDate(event.eventStartTime)} to`}</Text>
                <Text>{getFormattedDate(event.eventEndTime)}</Text>
              </CardHeader>
              <CardBody>
                <Text>{event.location}</Text>
                <Text>{event.address}</Text>
              </CardBody>
              <CardFooter>₹{event.price}</CardFooter>
            </Card>
            <Heading fontSize="1.5rem">{`Speakers: (${event.speakers.length})`}</Heading>
            <Flex gap={4}>
              {event.speakers.map((speaker) => {
                return (
                  <Flex gap={2}>
                    <Flex
                      flexDir="column"
                      p={4}
                      alignItems="center"
                      border="1px solid #f7f7f7"
                      boxShadow="0 0 8px 0 rbga(0,0,0,0.3)"
                      borderRadius="lg"
                    >
                      <Avatar src={speaker.image} size="md" />
                      <Text fontWeight="bold">{speaker.name}</Text>
                      <Text>{speaker.designation}</Text>
                    </Flex>
                  </Flex>
                );
              })}
            </Flex>

            <Button
              variant="myRed"
              alignSelf="center"
              w="10rem"
              onClick={onOpen}
              disabled={event?.RSVP}
            >
              {event?.RSVP ? "Already RSVPed" : "RSVP"}
            </Button>
            <ModalRSVP isOpen={isOpen} onClose={onClose} event={event} />
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default EventDetailPage;
