import { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

type ProtectedRoutesProps = {
  children: ReactNode;
};

export default function ProtectedRoutes({ children }: ProtectedRoutesProps) {
  const { currentUser } = useAuth();
  if (!currentUser) return <Navigate to="/login" replace />;
  return children;
}
