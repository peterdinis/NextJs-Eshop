import Image from "next/image";
import FirstImage from "../images/firstImage.jpg";

/* TODO: Add img to file image later */

const ServicesImages: React.FC = () => {
    return (
        <div className="lg:w-7/12 lg:mt-0 mt-8">
            <div className="w-full h-full bg-red-200">
                <Image src={FirstImage} alt="Image" className="w-full sm:block hidden" />
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D&w=1000&q=80" className="w-full" alt="kitchen" />
                <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D&w=1000&q=80" className="w-full" alt="sitting room" />
            </div>
        </div>
    )
}

export default ServicesImages;