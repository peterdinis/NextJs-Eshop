import ScrollToTop from "@/hooks/useScroll";
import CustomInput from "../shared/CustomInput";

const CategoriesLists: React.FC = () => {
  return (
    <>
      <CustomInput
        type={"text"}
        placeholder={"Search"}
        style={
          "p-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-400"
        }
        value={undefined}
      />
      <ScrollToTop />
    </>
  );
};

export default CategoriesLists;
