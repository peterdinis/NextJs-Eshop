import ScrollToTop from "@/hooks/useScroll"
import Header from "../shared/Header"

const FoodLists: React.FC = () => {
    return (
        <>
         <Header name="All Foods" />
         <ScrollToTop />
        </>
    )
}

export default FoodLists