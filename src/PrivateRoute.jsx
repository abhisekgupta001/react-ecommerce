// import React from "react";
// import { useAuth } from "./Context/AuthContext";
// import { Route, Navigate } from "react-router-dom";

// const PrivateRoute = ({ path, ...props }) => {
//   const { isLoggedIn } = useAuth();
//   return isLoggedIn ? (
//     <Route {...props} path={path} />
//   ) : (
//     <Navigate to="/login" state={{ from: path }} replace />
//   );
// };

// export default PrivateRoute;
