
import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ drawerOpen, toggleCartDrawer}) => {
    const navigate = useNavigate();
    const handleCheckout = () => {
        toggleCartDrawer();
        navigate("/checkout");
    }

    

  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform ${drawerOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 flex flex-col z-50`}>
        {/* Close tag */}
        <div className="flex justify-end p-4">
            <button onClick={toggleCartDrawer}>
                <IoMdClose className=" h-6 w-6 text-gray-600" />
            </button>
        </div>
        {/* Cart Content with Scrollable area */}
        <div className="flex-grow p-4 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4 ">Your Cart</h2>
            <CartContents />
        </div>
        {/* Checkout Button */}
        <div className="p-4 bg-white sticky bottom-0">
            <button onClick={handleCheckout} className="w-full bg-amber-600 text-white rounded-lg py-3 font-semibold hover:bg-amber-800 transition">Checkout</button>
            <p className="text-sm tracing-tighter text-gray-500 mt-2 text-center">Shipping, taxes and discounts calculated at checkout</p>
        </div>
    </div>
  )
}

export default CartDrawer