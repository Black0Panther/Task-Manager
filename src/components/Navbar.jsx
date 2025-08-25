import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
const Navbar=()=>{
     const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/signin");
  };
    return <>
    
   <header className="bg-gray-800 py-4 px-6 flex items-center justify-between">
     {user ? (
          <>
            <span className="mr-4">{user.displayName || user.email}</span>
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
              <>
        <div className="text-white text-sm md:text-xl font-semibold">Task Manager</div>
        <nav className="text-white text-sm md:text-lg space-x-2.5 md:space-x-6">
            <a href="/">Home</a>
            <a href="">Dashboard</a>
        </nav>
        </>)}
   </header>
    
    </>
}

export default Navbar