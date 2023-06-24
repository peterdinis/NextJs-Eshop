const ServicesImages: React.FC = () => {
    return (
        <div className="lg:w-7/12 lg:mt-0 mt-8">
        <div className="w-full h-full bg-red-200">
            <img src="https://i.ibb.co/cbyDY74/pexels-max-vakhtbovych-6782351-1-1.png" alt="apartment design" className="w-full sm:block hidden" />
            <img src="https://i.ibb.co/ZVPGjGJ/pexels-max-vakhtbovych-6782351-1.png" alt="apartment design" className="sm:hidden block w-full" />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
            <img src="https://i.ibb.co/4Jrp5TB/pexels-max-vakhtbovych-6782370-1.png" className="w-full" alt="kitchen" />
            <img src="https://i.ibb.co/0Jv3FSy/pexels-max-vakhtbovych-6436799-1-1.png" className="w-full" alt="sitting room" />
        </div>
    </div>
    )
}

export default ServicesImages;