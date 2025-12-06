import React from "react";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import ForbiddenPage from "../Components/ForbiddenPage";

const AdminRoute = ({children}) => {
  const { loading } = useAuth();
  const { role, roleLoading } = useRole();
//   if (loading || roleLoading) {
//     return (
//       <div className="h-screen flex justify-center items-center">
//         <span className="loading loading-infinity loading-xl"></span>
//       </div>
//     );
//   }
  if (role !== "admin") {
    return <ForbiddenPage></ForbiddenPage>
  }

  return children;
};

export default AdminRoute;
