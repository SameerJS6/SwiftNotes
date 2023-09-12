import Login from "@/Auth/Login";
import SignUp from "@/Auth/SignUp";
import { buttonVariants } from "@/Shared/Button";
import { Link, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import ProtectedRoutes from "@/ProtectedRoutes";
import Header from "@/UI/Header";
import Sidebar from "@/UI/Sidebar";
import { useState } from "react";
import Fab from "@/UI/FAB";
import NotFound from "./pages/NotFound";

type Props = {};

export default function App({}: Props) {
  const { logout, currentUser } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Header setSidebarOpen={setSidebarOpen} />
      {currentUser && (
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      )}

      {currentUser && <Fab />}

      {currentUser && (
        <div className="my-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/home"
            className={buttonVariants({
              variant: "default",
              size: "icon",
              elevation: "elevatedLow",
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          {/* Account Button  */}
          <Link
            to="/account"
            className={buttonVariants({
              variant: "default",
              size: "icon",
              elevation: "elevatedLow",
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
            </svg>
          </Link>

          {/* Log Out Button  */}
          <Link
            to="/"
            className={`${
              !currentUser
                ? "pointer-events-none opacity-50"
                : "pointer-events-auto opacity-100"
            } ${buttonVariants({ variant: "ghost", size: "default" })}`}
            onClick={logout}
          >
            log out
          </Link>
        </div>
      )}

      <main className="px-4">
        <Routes>
          <Route
            path="/"
            element={
              <h1 className="text-center text-display-lg text-onSurface">
                This is Landing Page
              </h1>
            }
          />
          <Route
            path="/home"
            element={
              <h1 className="text-center text-display-lg text-onSurface">
                This is Home Page
              </h1>
            }
          ></Route>
          <Route
            path="/reminder"
            element={
              <h1 className="text-center text-display-lg text-onSurface">
                This is Reminders Page
              </h1>
            }
          ></Route>
          <Route
            path="/edit-label"
            element={
              <h1 className="text-center text-display-lg text-onSurface">
                This is Edit Label Page
              </h1>
            }
          ></Route>
          <Route
            path="/trash"
            element={
              <h1 className="text-center text-display-lg text-onSurface">
                This is Trash Page
              </h1>
            }
          ></Route>
          <Route
            path="/create-note"
            element={
              <h1 className="text-center text-display-lg text-onSurface">
                Create New Note Page
              </h1>
            }
          ></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>

          <Route
            path="/account"
            element={
              <ProtectedRoutes>
                <h1 className="text-center text-display-lg text-onSurface">
                  This is Account Page
                </h1>
              </ProtectedRoutes>
            }
          />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </>
  );
}
