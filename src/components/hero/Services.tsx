import Link from "next/link";
import ServicesImages from "./ServicesImages";
import {AiFillCaretRight} from "react-icons/ai";

const Services = () => {
    return (
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
            <div className="lg:flex items-center justify-between">
                <div className="lg:w-1/3">
                    <h1 className="text-4xl font-semibold leading-9 text-gray-800">Our Services</h1>
                    <p className="text-base leading-6 mt-4 text-gray-600">Get inspired by our curated selection of luxiwood interiors. We hope get inspired to have luxiwood interior yourself. You’ll find tips here where you can buy a lot of cool furniture.</p>
                    <Link href="/foods" aria-label="view catalogue" className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 flex items-center hover:underline">
                        View Our foods
                       <AiFillCaretRight className="ml-1" />
                    </Link>
                </div>
                <ServicesImages />
            </div>
        </div>
    );
};

export default Services;
