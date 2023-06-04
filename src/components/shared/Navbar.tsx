"use client"

import React, { useState } from 'react';
import {
  Box,
  Flex,
  Spacer,
  IconButton,
  useDisclosure,
  Collapse,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="gray.100" px={4} py={3}>
      <Flex maxW="1200px" mx="auto" align="center">
        <NextLink href="/" passHref>
          <Link fontSize="xl" fontWeight="bold" color="gray.700">
            Logo
          </Link>
        </NextLink>
        <Spacer />
        <IconButton
          aria-label="Toggle navigation"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: 'block', md: 'none' }}
          onClick={onToggle}
        />
        <Collapse in={isOpen} animateOpacity>
          <Flex
            mt={{ base: 4, md: 0 }}
            direction={{ base: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="flex-end"
            flexGrow={1}
          >
            <NextLink href="/about" passHref>
              <Link mr={{ base: 0, md: 4 }} mb={{ base: 2, md: 0 }}>
                About
              </Link>
            </NextLink>
            <NextLink href="/services" passHref>
              <Link mr={{ base: 0, md: 4 }} mb={{ base: 2, md: 0 }}>
                Services
              </Link>
            </NextLink>
            <NextLink href="/contact" passHref>
              <Link>Contact</Link>
            </NextLink>
          </Flex>
        </Collapse>
      </Flex>
    </Box>
  );
};

export default Navbar;