import ScrollToTop from "@/hooks/useScroll"
import Header from "../shared/Header"
import Link from "next/link"

const FoodLists: React.FC = () => {
    return (
        <>
            <Header name="All Foods" />
            <div className="grid grid-cols-4 gap-4 mt-4">
                <div
                    className="bg-white p-4 shadow-md rounded-md"
                >
                    <img
                        src="https://picsum.photos/200/300"
                        alt="TOTO"
                        className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-lg font-medium mb-2">z</h3>
                    <p className="text-gray-600">r</p>
                    <div className="mt-4 flex justify-center align-top bg-blue-400 text-white rounded-lg">
                        <Link href="/">DETAIL</Link>
                    </div>
                </div>
                <div
                    className="bg-white p-4 shadow-md rounded-md"
                >
                    <img
                        src="https://picsum.photos/200/300"
                        alt="TOTO"
                        className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-lg font-medium mb-2">z</h3>
                    <p className="text-gray-600">r</p>
                    <div className="mt-4 flex justify-center align-top bg-blue-400 text-white rounded-lg">
                        <Link href="/">DETAIL</Link>
                    </div>
                </div>
                <div
                    className="bg-white p-4 shadow-md rounded-md"
                >
                    <img
                        src="https://picsum.photos/200/300"
                        alt="TOTO"
                        className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-lg font-medium mb-2">z</h3>
                    <p className="text-gray-600">r</p>
                    <div className="mt-4 flex justify-center align-top bg-blue-400 text-white rounded-lg">
                        <Link href="/">DETAIL</Link>
                    </div>
                </div>
                <div
                    className="bg-white p-4 shadow-md rounded-md"
                >
                    <img
                        src="https://picsum.photos/200/300"
                        alt="TOTO"
                        className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-lg font-medium mb-2">z</h3>
                    <p className="text-gray-600">r</p>
                    <div className="mt-4 flex justify-center align-top bg-blue-400 text-white rounded-lg">
                        <Link href="/">DETAIL</Link>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </>
    )
}

export default FoodLists