import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import { NextPage } from "next";

const FoodDetailPage: NextPage = () => {
    return (
        <>
         <Navbar />
         <Header name="Food Detail" />
        </>
    )
}

export default FoodDetailPage;