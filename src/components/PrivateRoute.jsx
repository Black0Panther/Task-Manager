import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase"; // adjust path to your firebase.js

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/signin" replace />;

  return children;
};

export default PrivateRoute;
