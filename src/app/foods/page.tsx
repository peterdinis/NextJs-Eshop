import ProductsWrapper from "@/components/foods/ProductsWrapper";
import Navbar from "@/components/shared/Navbar";
import { NextPage } from "next";

const ProductsPage: NextPage = () => {
    return (
      <>
        <Navbar />
        <ProductsWrapper />
      </>
    )
}

export default ProductsPage;