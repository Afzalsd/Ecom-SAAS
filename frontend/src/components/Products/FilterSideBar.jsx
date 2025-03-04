import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"


const FilterSideBar = () => {
    const [searchParms, setSearchParms] = useSearchParams();
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        category: "",
        gender: "",
        color: "",
        size: [],
        material: [],
        brand: [],
        minPrice: 0,
        maxPrice: 100,
    });

    const [priceRange, setPriceRange] = useState([0, 100]);

    const categories = ["Top Wear", "Bottom Wear"];
    const colors = ["Red", "Blue", "Green", "Yellow","Black", "White","Grey","Pink","Beige","Navy"];
    const sizes = ["S", "M", "L", "XL", "XXL"];
    const materials = ["Cotton", "Polyester", "Silk", "Wool","Denim","Linen","Viscose","Fleece"];
    const brands = ["Urban Trends", "Modern Fit", "Street Style", "Fashionista","ChicStyle","Beach Breez"];

    const genders = ["Men","Women"];

    useEffect(() => {
        const params = Object.fromEntries([...searchParms]);
        //{Category: "Top Wear"}

        setFilters({
            category: params.category || "",
            gender: params.gender || "",
            color: params.color || "",
            size: params.size ? params.size.split(",") : [],
            material: params.material ? params.material.split(",") : [],
            brand: params.brand ? params.brand.split(",") : [],
            minPrice: params.minPrice || 0,
            maxPrice: params.maxPrice || 100,
        });
        setPriceRange([0, params.maxPrice || 100]);
    }, [searchParms]);

    const handleFilterChange = (e) => {
        const { name, value, checked, type } = e.target;
        console.log(name, value, checked, type);
        let newFilters = { ...filters };
        if (type === "checkbox") {
            if (checked) {
                newFilters[name] = [...(newFilters[name] || []), value];
            } else {
                newFilters[name] = newFilters[name].filter((item) => item !== value);
            }
        } else {
            newFilters[name] = value;
        }
        setFilters(newFilters);
        updateURLParams(newFilters);
        
    };

    const updateURLParams = (newFilters) => {
        const params = new URLSearchParams();
        Object.keys(newFilters).forEach((key) => {
            if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
                params.append(key, newFilters[key].join(","));
            } else {
                params.append(key, newFilters[key]);
            }
        });
        setSearchParms(params);
        navigate(`?${params.toString()}`); //?catrgory=Top+Wear&size=S%2CM%2CL
    }

    const handlePricechange = (e) => {
        const newPrice = e.target.value;
        setPriceRange([0, newPrice]);
        const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
        setFilters(newFilters);
        updateURLParams(newFilters);
    }



  return (
    <div className="p-4">
        <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

        {/* Category */}
        <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">Category</label>
            {categories.map((category) =>(
                <div key={category} className="flex items-center mb-1">
                    <input type="radio" value={category} onChange={handleFilterChange} checked={filters.category === category} name="category" className="mr-2 h-4 w-4 text-blue-500 focus:text-blue-400 border-gray-300" />
                    <span className="text-gray-700">{category}</span>
                </div>
            ))}
        </div>

        {/* Gender */}
        <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">Gender</label>
            {genders.map((gender) =>(
                <div key={gender} className="flex items-center mb-1">
                    <input type="radio" value={gender} onChange={handleFilterChange} checked={filters.gender === gender} name="gender" className="mr-2 h-4 w-4 text-blue-500 focus:text-blue-400 border-gray-300" />
                    <span className="text-gray-700">{gender}</span>
                </div>
            ))}
        </div>

        {/* Color */}
        <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">
                Color
            </label>
            <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                <button key={color} value={color} onClick={handleFilterChange} name="color" className={`h-8 w-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${filters.color === color ? "ring-2 ring-blue-500" : ""}`} style={{backgroundColor: color.toLowerCase() }}>

                    </button>
                ))}
            </div>
        </div>

        {/* Size */}
        <div className="mb-6">
            <label className="block text-gray-600 font-md m-2">Size</label>
            {sizes.map((size) => (
                <div key={size} className="flex items-center mb-1">
                    <input type="checkbox" value={size} onChange={handleFilterChange} checked={filters.size.includes(size)} name="size" className="mr-2 h-4 w-4 text-blue-500 focus:text-blue-400 border-gray-300" />
                    <span className="text-gray-700">{size}</span>
                </div>
            ))}

        </div>

        {/* Material */}
        <div className="mb-6">
            <label className="block text-gray-600 font-md m-2">Material</label>
            {materials.map((material) => (
                <div key={material} className="flex items-center mb-1">
                    <input type="checkbox" value={material} checked={filters.material.includes(material)} onChange={handleFilterChange} name="material" className="mr-2 h-4 w-4 text-blue-500 focus:text-blue-400 border-gray-300" />
                    <span className="text-gray-700">{material}</span>
                </div>
            ))}

        </div>


        {/* Brand */}
        <div className="mb-6">
            <label className="block text-gray-600 font-md m-2">Brand</label>
            {brands.map((brand) => (
                <div key={brand} className="flex items-center mb-1">
                    <input type="checkbox" value={brand} onChange={handleFilterChange} checked={filters.brand.includes(brand)} name="brand" className="mr-2 h-4 w-4 text-blue-500 focus:text-blue-400 border-gray-300" />
                    <span className="text-gray-700">{brand}</span>
                </div>
            ))}

        </div>

        {/* Price Range */}
        <div className="mb-8">
            <label className="block text-gray-600 font-medium mb-2">Price Range</label>
            <input type="range" min="0" max="100" value={priceRange[1]} onChange={handlePricechange}  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" />
            <div className="flex justify-between text-gray-600 mt-2">
                <span>$0</span>
                <span>${priceRange[1]}</span>

            </div>

        </div>
    </div>
  )
}

export default FilterSideBar