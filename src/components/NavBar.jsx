import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import { Link } from "react-router-dom";

const NavBar = () => {
  const {
    state: { search },
    dispatch,
  } = useAppContext();

  const searchHandler = (e) => {
    dispatch({ type: "SEARCH", payload: e.target.value });
  };

  return (
    <Flex w="full" justifyContent="space-between">
      <Link to="/">
        <Text fontSize="1.2rem">Meetup</Text>
      </Link>
      <Box w="15rem">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FontAwesomeIcon icon={faMagnifyingGlass} color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="search by title and tags"
            value={search}
            onChange={searchHandler}
          />
        </InputGroup>
      </Box>
    </Flex>
  );
};

export default NavBar;
