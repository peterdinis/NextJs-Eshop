import CategoriesWrapper from "@/components/category/CategoriesWrapper";
import Navbar from "@/components/shared/Navbar";
import { NextPage } from "next";

const CategoriesPage: NextPage = () =>{
    return (
        <>
            <Navbar />
            <CategoriesWrapper />
        </>
    )
}

export default CategoriesPage;