import React from "react";
import { Flex, Spacer, Image, Text, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsSearch, BsBasket3 } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
  return (
    <Flex
      bg="white"
      borderBottom="0.25px solid #b1b3b5"
      p={1}
      align="center"
      justify="center"
      wrap="nowrap"
    >
      <Link to="/">
        <Image
          src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_192x32.png?v=1647508945"
          alt="Flat heads icon"
          height="25px"
          m={5}
        />
      </Link>
      <Spacer />
      <Link to="/collections/all">
        <Text px={4} py={2} fontSize="xl">
          SHOP
        </Text>
      </Link>
      <Link to="/collections/all">
        <Text px={4} py={2}>
          WOMEN
        </Text>
      </Link>
      <Link to="/collections/all">
        <Text px={4} py={2}>
          MEN
        </Text>
      </Link>
      <Link to="/collections/all">
        <Text px={4} py={2}>
          NEW ARRIVALS
        </Text>
      </Link>
      <Link to="/collections/all">
        <Text px={4} py={2}>
          ABOUT
        </Text>
      </Link>
      <Link to="/collections/all">
        <Text px={4} py={2}>
          HELP
        </Text>
      </Link>
      <Spacer />
      <Icon boxSize="20px" mx={6} as={BsSearch} />
      <Icon boxSize="20px" mx={6} as={RiUserLine} />
      <Flex align="center">
        <Icon boxSize="20px" mx={6} as={BsBasket3} />
        <Text>(1)</Text>
        {/* <Text>{cart ? cart.length : 0}</Text */}
      </Flex>
      <Spacer />
    </Flex>
  );
};

export { NavBar };
