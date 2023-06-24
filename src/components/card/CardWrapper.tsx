"use client"

import ScrollToTop from "@/hooks/useScroll"
import Header from "../shared/Header"
import EmptyCard from "./EmptyCard"

const CardWrapper: React.FC = () => {
    return (
        <>
            <Header name="My Card" />
            <EmptyCard />
            <ScrollToTop />
        </>
    )
}

export default CardWrapper