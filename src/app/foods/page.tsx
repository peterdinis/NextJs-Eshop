import FoodLists from "@/components/foods/FoodLists";
import Navbar from "@/components/shared/Navbar";
import { NextPage } from "next";

const FoodsPage: NextPage = () => {
    return (
      <>
        <Navbar />
        <FoodLists />
      </>
    )
}

export default FoodsPage;