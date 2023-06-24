import Header from "../shared/Header";
import CategoriesLists from "./CategoriesLists";

const CategoriesWrapper: React.FC = () => {
    return (
        <>
            <Header name="All Categories" />
            <CategoriesLists />
        </>
    )
}

export default CategoriesWrapper;