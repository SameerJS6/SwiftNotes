import { FormEvent, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Button } from "@/Shared/Button";
import { Link, useNavigate } from "react-router-dom";
import GoogleSignIn from "./GoogleSignIn";
import GithubSignIn from "./GithubSignIn";

type Props = {};

export default function Login({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      setLoading(false);
      navigate("/account");
    } catch (err: any) {
      setLoading(false);
      console.log("Error Code", err.code);
      console.log("Error", err.message);
    }
  };
  return (
    <article className="mx-auto w-full max-w-sm rounded-[2rem] bg-surfaceContainerLowest p-10 py-8 shadow-elevation-1">
      <h1 className="mb-6 text-display-sm capitalize text-onSurface">log in</h1>
      <div className="my-6 flex items-center gap-4">
        <GoogleSignIn />
        <span className="h-6 w-0.5 bg-outlineVariant"></span>
        <GithubSignIn />
      </div>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label
            className="text-label-lg capitalize text-onSurface"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            autoFocus
            required
            id="email"
            value={email}
            disabled={loading}
            className="rounded-md bg-surfaceContainerLow p-2.5 text-label-lg text-onSurface focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-onBackground focus-visible:ring-offset-2"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-label-lg capitalize text-onSurface"
            htmlFor="password"
          >
            password:
          </label>
          <input
            type="password"
            required
            id="password"
            value={password}
            disabled={loading}
            className="rounded-md bg-surfaceContainerLow p-2.5 text-label-lg text-onSurface focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-onBackground focus-visible:ring-offset-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <Button disabled={loading} variant="default" size="block">
            Log In
          </Button>
        </div>
      </form>

      <div className="mt-3 text-center text-label-md text-onSurface">
        <p>
          Don't have an Accout?{" "}
          <Link
            to="/signup"
            className={`text-label-lg capitalize text-primary hover:underline hover:underline-offset-1 ${
              loading
                ? "pointer-events-none opacity-50"
                : "pointer-events-auto opacity-100"
            }`}
          >
            sign up
          </Link>
        </p>
      </div>
    </article>
  );
}
