"use client"

import { Center, Heading } from "@chakra-ui/react";

interface IHeaderProps {
    name: string
}

const Header: React.FC<IHeaderProps> = ({name}: IHeaderProps) => {
    return (
        <Center mt={6}>
            <Heading>{name}</Heading>
        </Center>
    )
}

export default Header;