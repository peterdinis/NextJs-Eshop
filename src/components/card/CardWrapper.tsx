"use client"

import Header from "../shared/Header"
import EmptyCard from "./EmptyCard"

const CardWrapper: React.FC = () => {
    return (
        <>
            <Header name="My Card" />
            <EmptyCard />
        </>
    )
}

export default CardWrapper