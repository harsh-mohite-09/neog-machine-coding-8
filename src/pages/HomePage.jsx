import React from "react";
import { Divider, Flex, Heading, Select, SimpleGrid } from "@chakra-ui/react";
import { useAppContext } from "../context/AppContextProvider";
import { getFilteredEvents, getSearchedEvents } from "../helper";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const HomePage = () => {
  const {
    state: { events, filter, search },
    dispatch,
  } = useAppContext();

  const filterHandler = (e) => {
    dispatch({ type: "FILTER", payload: e.target.value });
  };

  const filteredEvents = getFilteredEvents(events, filter);
  const eventList = getSearchedEvents(filteredEvents, search);

  return (
    <Flex as="main" flexDir="column" gap={4} p={8}>
      <NavBar />
      <Divider />
      <Flex justifyContent="space-between" alignItems="center">
        <Heading>Meetup Events</Heading>
        <Select value={filter} w="15rem" onChange={filterHandler}>
          <option value="Both">Both</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </Select>
      </Flex>
      <SimpleGrid minChildWidth="20rem" spacing={10} justifyItems="center">
        {eventList.map((event) => (
          <Link to={`/event/${event.id}`} key={event.id}>
            <EventCard event={event} />
          </Link>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default HomePage;
