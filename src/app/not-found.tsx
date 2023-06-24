import Navbar from "@/components/shared/Navbar";
import NotFoundComponent from "@/components/shared/NotFoundComponent";
import { NextPage } from "next";

const NotFoundPage: NextPage = () => {
    return (
        <>
            <Navbar />
            <NotFoundComponent />
        </>
    )
}

export default NotFoundPage;