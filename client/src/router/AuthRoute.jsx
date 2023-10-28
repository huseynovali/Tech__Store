import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

function AuthRoutes() {
  const [loading, setLoading] = useState(false);

  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    //   setIsTrue(true);
    //   setLoading(false);
    // }, 1000);
  }, []);

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (isTrue) {
    return <Navigate to="/profile" />;
  }
  return <Outlet />;
}

export default AuthRoutes;
