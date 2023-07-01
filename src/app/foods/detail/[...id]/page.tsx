import FoodDetail from "@/components/foods/FoodDetail";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import { NextPage } from "next";

const FoodDetailPage: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header name="Food Detail" />
      <FoodDetail />
    </>
  );
};

export default FoodDetailPage;
