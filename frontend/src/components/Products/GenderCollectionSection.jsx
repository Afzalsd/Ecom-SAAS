import { Link } from "react-router-dom";
import mensCollectionImage from "../../assets/mens-collection.webp";
import womensCollectionImage from "../../assets/womens-collection.webp";

const GenderCollectionSection = () => {
  return (
    <section className="py-6 px-4 lg:px-0">
        <div className="container mx-auto flex flex-col lg:flex-row gap-8 lg:px-7">
            {/* womens Collection */}
            <div className="relative flex-1">
                <img src={womensCollectionImage} alt="Womens Collection" className="w-full h-[700px]object-cover" />
                <div className="absolute bottom-8 left-8 bg-white/90 p-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3"> Womens Collection</h2>
                    <Link to="/Collection/all?gender=Women" className="text-gray-900 underline">
                        Shop Now
                    </Link>
                </div>
            </div>
            {/* Mens Collection */}
            <div className="relative flex-1">
            <img src={mensCollectionImage} alt="Mens Collection" className="w-full h-full object-cover" />

                <div className="absolute bottom-8 left-8 bg-white/90 p-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3"> Mens Collection</h2>
                    <Link to="/Collection/all?gender=Men" className="text-gray-900 underline">
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>

    </section>
  )
}

export default GenderCollectionSection