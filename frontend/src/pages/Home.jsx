import Hero from "../components/Layout/Hero"
import FeaturedCollection from "../components/Products/FeaturedCollection"
import Features from "../components/Products/Features"
import GenderCollectionSection from "../components/Products/GenderCollectionSection"
import NewArrivals from "../components/Products/NewArrivals"
import ProductDetails from "../components/Products/ProductDetails"
import ProductGrid from "../components/Products/ProductGrid"

const placeholderProducts = [
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
  {
    _id: 5,
    name: "Product 5",
    price: 100,
    images: [{url: "https://picsum.photos/500/500?random=45", altText: "Product 5"}]
  },
  {
    _id: 6,
    name: "Product 6",
    price: 100,
    images: [{url: "https://picsum.photos/500/500?random=23", altText: "Product 6"}]
  },
  {
    _id: 7,
    name: "Product 7",
    price: 100,
    images: [{url: "https://picsum.photos/500/500?random=29", altText: "Product 7"}]
  },
  {
    _id: 8,
    name: "Product 8",
    price: 100,
    images: [{url: "https://picsum.photos/500/500?random=30", altText: "Product 8"}]
  },
]


const Home = () => {
  return (
    <div>
        <Hero />
        <GenderCollectionSection />
        <NewArrivals />

        {/**Best Sellers */}
        <h2 className="text-3xl text-center mb-4 font-bold"> Best Seller</h2>
        <ProductDetails />

        <div className="conatiner mx-auto">
          <h2 className="text-3xl text-center mb-4 font-bold"> Top Wears for Women</h2>
          <ProductGrid products={placeholderProducts} />
        </div>
        <FeaturedCollection />
        <Features />
    </div>
  )
}

export default Home