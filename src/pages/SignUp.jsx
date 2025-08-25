import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [email,setemail]=useState("");
  const [pass,setpass]=useState("");
 const [name,setName] = useState("");
 const [confirmPass,setConfirmPass]=useState("");
 const user = auth.currentUser;
  const handlesignup=async(e)=>{
    e.preventDefault();
      if (pass !== confirmPass) {
      alert("Passwords do not match!");
      return;
    }
     try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
       navigate("/dashboard");
      await updateProfile(userCredential.user,{
        displayName : name
      })
      // alert(user.displayName);
      // const name = userCredential.user.displayName;
      setemail("");
      setpass("");
      setName("");
      setConfirmPass("");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="bg-white m-4 p-8 rounded-xl w-[330px] md:w-[350px] max-w-full mx-auto shadow-lg ">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Sign Up
      </h2>
      <form className="flex flex-col gap-6">
         <div className="flex gap-2">
          <label className="w-36" htmlFor="email">Name:</label>
         <input
          type="text"
          placeholder="Name"
          className="border px-2 py-1 rounded border-gray-300"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        /></div>
        <div className="flex gap-4">
        <label className="w-36" htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          className="border px-2 py-1 rounded border-gray-300"
          value={email}
          onChange={(e)=>setemail(e.target.value)}
        />
        </div>
          <div className="flex gap-4">
              <label className="w-36" htmlFor="email">Password:</label>
        <input
          type="password"
          placeholder="Password"
          className="border px-2 py-1 rounded border-gray-300"
           value={pass}
          onChange={(e)=>setpass(e.target.value)}
        /></div>
       
    <div className="flex md:flex-row items-center gap-2">
          <label htmlFor="confirm" className="md:w-32">Confirm Password:</label>
          <input
            id="confirm"
            type="password"
            placeholder="Confirm Password"
            className="flex-1 border px-2 py-1 rounded border-gray-300"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            required
          />
        </div>
        <button onClick={handlesignup} className="bg-red-500 py-2 rounded text-white hover:bg-red-400">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;


