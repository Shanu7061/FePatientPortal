import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks";

interface Props {
  children: ReactNode;
}

export default function ProtectedLayout({ children }: Props) {
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
