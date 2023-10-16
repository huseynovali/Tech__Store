import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

function PrivateRoutes() {
  const [loading, setLoading] = useState(true);

  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setIsTrue(true);
    }, 1000);
  }, []);

  if (loading) {
    return <p>Loading ... </p>;
  }

  if (isTrue) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
}

export default PrivateRoutes;
