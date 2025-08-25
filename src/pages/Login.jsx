import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in user ID:", userCredential.user.uid);
      navigate("/dashboard");
    } catch (error) {
      console.error(error.message);
      alert("invalid")
    }
  };
  return (
    <div className="bg-white m-4 p-8 rounded-xl w-[320px] md:w-[350px] max-w-full shadow-lg mx-auto ">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Sign In
      </h2>
      <form className="flex flex-col gap-6">
        <div className="flex gap-4">
        <label className="w-28" htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          className="border px-2 py-1 rounded border-gray-300"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        </div>
          <div className="flex gap-4">
              <label className="w-28" htmlFor="email">Password:</label>
        <input
          type="password"
          placeholder="Password"
          className="border px-2 py-1 rounded border-gray-300"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        /></div>
        <button onClick={handleSignIn} className="bg-red-500 py-2 rounded text-white hover:bg-red-400">
          Submit
        </button>
        <button onClick={()=>navigate("/")} className="bg-green-500 text-white py-2">Sign Up</button>
      </form>
    </div>
  );
};

export default Login;


