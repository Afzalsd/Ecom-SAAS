import { Link } from "react-router-dom";
import heroImg from "../../assets/rabbit-hero.webp";

const Hero = () => {
  return (
    <section className="relative ">
        <img src={heroImg} alt="Red Rabbit" className="w-full md:h-[400px]  lg:h-[750px] object-cover" />
        <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
            <div className="text-center text-white p-6">
            <h1 className="4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
                vacation <br />Ready
            </h1>
                <p className="text-sm tracking-tighter md:text-lg mb-6"> Explore our vacation-ready outfits with fast worldwide shipping</p>
                <Link to="#" className="bg-white text-gray-950 p-6 py-2 rounded-sm text-lg">
                    Shop Now
                </Link>
            </div>

        </div>
    </section>
  )
}

export default Hero