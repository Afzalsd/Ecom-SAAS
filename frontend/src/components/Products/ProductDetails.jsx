import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
    name: "Stylish Jacket",
    price: 120,
    originalPrice: 150,
    description : "This is a stylish jacket that you can wear in any season. It is made of high quality material and is very comfortable to wear.",
    brand: "FashionBrand",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Red"],
    images: [
        {
            url: "https://picsum.photos/500/500?random=10",
            altText: "Stylish Jacket 1",
        },
        {
            url: "https://picsum.photos/500/500?random=15",
            altText: "Stylish Jacket 2",
        },
    ]
}

const similarProducts = [
    {
        _id: 1,
        name: "Product 1",
        price: 100,
        images: [{url: "https://picsum.photos/500/500?random=11", altText: "Product 1"}]
    },
    {
        _id: 2,
        name: "Product 2",
        price: 100,
        images: [{url: "https://picsum.photos/500/500?random=22", altText: "Product 2"}]
    },
    {
        _id: 3,
        name: "Product 3",
        price: 100,
        images: [{url: "https://picsum.photos/500/500?random=24", altText: "Product 3"}]
    },
    {
        _id: 4,
        name: "Product 4",
        price: 100,
        images: [{url: "https://picsum.photos/500/500?random=29", altText: "Product 4"}]
    },
];

const ProductDetails = () => {
    const [mainImage, setMainImage] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        if (selectedProduct.images.length > 0) {
            setMainImage(selectedProduct.images[0].url);
        }
    }, [selectedProduct]);

    const handleQuantityChange = (type) => {
        if (type === "plus") {
            setQuantity((prev) => prev + 1);
        }
        if (type === "minus" && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
        
    }
    
    const handleAddToCart = () => {
        if(!selectedSize || !selectedColor) {
            toast.error("Please select size and color", {duration: 1000});
            return;
        }
        setIsButtonDisabled(true);
        setTimeout(() => {
            toast.success("Product added to cart", {duration: 1000});
            setIsButtonDisabled(false);

        }, 500);
    };
  return (
    <div className="p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-lg p-8">
            <div className="flex flex-col md:flex-row">
                {/**Left Thumbnails */}
                <div className="hidden md:flex flex-col space-y-4 mr-6">
                    {selectedProduct.images.map((image, index) => (
                        <img  key={index} src={image.url} alt={image.altText || `Thumbnail ${index }`} className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                        onClick={() =>setMainImage(image.url)} />
                    ))}
                </div>
                {/**Main Image */}
                <div className="md:w-1/2">
                    <div className="mb-4">
                        <img src={mainImage} alt={selectedProduct.images[0]?.altText || "Main Image"} className="w-full h-auto object-cover rounded-lg" />

                    </div>
                </div>
                {/**mobile Thumbnails */}
                <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
                    {selectedProduct.images.map((image, index) => (
                        <img  key={index} src={image.url} alt={image.altText || `Thumbnail ${index }`} className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                        onClick={() =>setMainImage(image.url)} />
                    ))}
                </div>
                {/**Right Session */}
                <div className="md:w-1/2 md:ml-10">
                    <h1 className="text-2xl md:text-3xl font-semibold mb-2">{selectedProduct.name}</h1>
                    <p className="text-lg text-gray-600 mb-1 line-through">
                        {selectedProduct.originalPrice && `${selectedProduct.originalPrice}`}
                    </p>
                    <p className="text-xl text-gray-500 mb-2">
                        ${selectedProduct.price}
                    </p>
                    <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                    <div className="mb-4">
                        <p className="text-gray-700">color:</p>
                        <div className="flex gap-2 mt-2">
                            {selectedProduct.colors.map((color, index) => (
                                <button key={index} 
                                
                                onClick={() => setSelectedColor(color)} 

                                className={`w-8 h-8 rounded-full border ${selectedColor === color ? "border-black border-4" : "border-gray-300"}`} style={{backgroundColor: color.toLocaleLowerCase(), filter: "brightness(0.5)"}}></button>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-700">size:</p>
                        <div className="flex gap-2 mt-2">
                            {selectedProduct.sizes.map((size) => (
                                <button key={size}
                                 onClick={() => setSelectedSize(size)}
                                 className={`px-2 py-2 rounded border ${selectedSize === size ? "bg-black text-white" : "" }`}>{size}</button>
                            ))}
                        </div>
                    </div>
                    <div className="mb-6">
                        <p className="text-gray-700">Quantity:</p>
                        <div className="flex items-center gap-4 mt-2">
                            <button 
                             onClick={() => handleQuantityChange("minus")}
                            className="px-2 py-1 bg-gray-200 rounded text-lg">-</button>
                            <span className="text-lg">{quantity}</span>
                            <button 
                             onClick={() => handleQuantityChange("plus")}
                            className="px-2 py-1 bg-gray-200 rounded text-lg">+</button>
                        </div>
                    </div>
                    <button 
                     onClick={handleAddToCart}
                        disabled={isButtonDisabled}
                        className={`w-full py-2 px-6 bg-black text-white rounded-full mb-4 
                        ${isButtonDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900"}`}>
                            {isButtonDisabled ? "Adding..." :  "Add to Cart"}
                    </button>
                    <div className="mt-10 text-gray-700">
                        <h3 className="text-xl font-bold mb-4">Charecteristics:</h3>
                        <table className="w-full text-left text-sm text-gray-600">
                            <tbody>
                                <tr>
                                    <td className="py-1">Brand</td>
                                    <td className="py-1">{selectedProduct.brand}</td>
                                </tr>
                                <tr>
                                    <td className="py-1">Material</td>
                                    <td className="py-1">{selectedProduct.material}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <h2 className="text-2xl text-center font-medium mb-4">You May Also Like</h2>
                <ProductGrid products={similarProducts} />

            </div>

        </div>
    
    </div>
  )
}

export default ProductDetails