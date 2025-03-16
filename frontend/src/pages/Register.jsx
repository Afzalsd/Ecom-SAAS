import { useState } from "react";
import { Link } from "react-router-dom";
import register from "../assets/register.webp";
import { registerUser } from "../redux/slice/authSlice";
import { useDispatch } from "react-redux";


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({ name, email, password }));
        // setName("");
        // setEmail("");
        // setPassword("");
    };

  return (
    <div className="flex">
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
          <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm border">
              <div className="flex justify-center mb-6">
                  <h2 className="text-xl font-medium">Red Rabbit</h2>

                  </div>
              <h2 className="text-2xl font-bold mb-6 text-center">Hey there! 👋</h2>
              <p className="text-center mb-6">Enter your email and password to Login.</p>
                <div className="mb-4">
                    <lable className="block text-sm font-semibold mb-2">Name</lable>
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your Name"
                        className="w-full p-2 border rounded"
                     />
                </div>
                <div className="mb-4">
                    <lable className="block text-sm font-semibold mb-2">Email</lable>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full p-2 border rounded"
                     />
                </div>
                <div className="mb-4">
                <lable className="block text-sm font-semibold mb-2">Password</lable>
                <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full p-2 border rounded"
                     />
                </div>
                <button
                    type="submit"
                    className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition">
                    Sign Up
                </button>
                <p className="mt-6 text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">Sign In</Link>
                </p>
            </form>
        </div>
        <div className="hidden md:block w-1/2 bg-gray-800">
            <div className="h-full flex flex-col justify-center items-center">
                <img src={register} alt="register" className="w-full h-[750px] object-cover" draggable="false" />
            </div>
        </div>
    </div>
  )
}

export default Register