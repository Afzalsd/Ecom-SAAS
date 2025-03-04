import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const OrderDetailsPage = () => {
    const {id} = useParams();
    const [orderDetails, setOrderDetails] = useState(null);


    useEffect(() => {
        const mockOrderDetails = {
            _id : id,
            createdAt : new Date(),
            isPaid: true,
            isDelivered: false,
            paymentMethod : "PayPal",
            shippingMethod: "Standard",
            shippingAddress: {
                city: "New York",
                country: "USA",
            },
            orderItems: [
                {
                    productId: "1",
                    name: "Jacket",
                    price: 120,
                    quantity: 1,
                    image: "https://picsum.photos/500/500?random=54",
                },
                {
                    productId: "2",
                    name: "Shirt",
                    price: 150,
                    quantity: 2,
                    image: "https://picsum.photos/500/500?random=57",
                },
            ],
        };
        setOrderDetails(mockOrderDetails);
    },[id]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <h2 className="text-2xl font-bold md:text-3xl mb-6">Order Details</h2>
        {!orderDetails ? (<p>No order details found</p>) : (
            <div className="p-4 sm:p-6 rounded-lg border">
                {/* Order info */}
                <div className="flex flex-col msm:flex-row justify-between mb-8">
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold">Order ID: #{orderDetails._id}</h3>
                        <p className="text-gray-600">
                            {new Date(orderDetails.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end mt-0 sm:mt-0">
                        <span className={`${orderDetails.isPaid ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"} px-3 py-1 rounded-full text-sm font-medium mb-2`}>
                            {orderDetails.isPaid ? "Approved" : "Pending"}
                        </span>
                        <span className={`${orderDetails.isDelivered ? "text-green-700 bg-green-100" : "text-yellow-700 bg-yellow-100"} px-3 py-1 rounded-full text-sm font-medium mb-2`}>
                            {orderDetails.isDelivered ? "Delivered" : "Pending Delivery"}
                        </span>
                    </div>

                </div>
                {/* Customer, Payment, shipping info */}
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-col-3 gap-8">
                    <div>
                        <h4 className="text-lg font-semibold mb-2">
                            Pyament Info
                        </h4>
                        <p>Payment Method: {orderDetails.paymentMethod}</p>
                        <p>Status: {orderDetails.isPaid ? "Paid" : "Unpaid"}</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-2">
                            Shipping Info
                        </h4>
                        <p>Shipping Method: {orderDetails.shippingMethod}</p>
                        <p>Address: {" "}
                            {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}
                        </p>
                    </div>


                </div>
                {/* Product List */}
                <div className="overflow-x-auto">
                    <h4 className="text-lg font-semibold mb-4">Products</h4>
                    <table className="min-w-full text-gray-600 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-3">Name</th>
                                <th className="py-2 px-3">Unit Price</th>
                                <th className="py-2 px-3">Quantity</th>
                                <th className="py-2 px-3">Total</th>
                            </tr>

                        </thead>
                        <tbody>
                            {orderDetails.orderItems.map((item) => (
                                <tr key={item.productId} className="border-b">
                                    <td className="py-2 px-4 flex items-center">
                                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover mr-4 rounded-lg " />
                                        <Link to={`/product/${item.productId}`} className="text-blue-500 hover:underline">{item.name}</Link>
                                    </td>
                                    <td className="py-2 px-4">${item.price}</td>
                                    <td className="py-2 px-4">${item.quantity}</td>
                                    <td className="py-2 px-4">${item.price * item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
                {/* Back to Orders Link */}
                <Link to="/my-orders" className="text-blue-500 hover:underline">Bcak to My Orders</Link>
            </div>
        )}
    </div>
  )
}

export default OrderDetailsPage