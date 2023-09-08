import { FormEvent, useLayoutEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Button } from "@/Shared/Button";
import { Link, useNavigate } from "react-router-dom";
import GoogleSignIn from "./GoogleSignIn";
import GithubSignIn from "./GithubSignIn";
import Input from "@/Shared/Input";
import Label from "@/Shared/Label";

type Props = {};

export default function Login({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login, currentUser } = useAuth();

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
      console.log(error); //Added to Avoid the Error by TypeScript Engine
      console.log("Error Code", err.code);
      console.log("Error", err.message);
    }
  };

  useLayoutEffect(() => {
    if (currentUser) {
    return  navigate('/account')
    }
  }, [currentUser])
  return (
    <article className="mx-auto w-full max-w-sm rounded-[2rem] bg-surfaceContainerLowest p-10 py-8 shadow-elevation-1 transition-all duration-250 ease-in-out">
      <h1 className="mb-6 text-display-sm capitalize text-onSurface">log in</h1>

      <div className="my-8 flex items-center gap-4">
        <GoogleSignIn />
        <span className="h-6 w-0.5 bg-outlineVariant"></span>
        <GithubSignIn />
      </div>

      <form className="grid gap-5" onSubmit={handleSubmit}>
        <div className="relative">
          <Input
            type="email"
            autoFocus
            required
            id="email"
            autoComplete="off"
            value={email}
            disabled={loading}
            className="rounded-3xl focus:rounded-xl"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label
            className="text-label-md peer-focus:text-[12px] peer-focus:font-medium peer-focus:leading-4 peer-focus:tracking-[0.03125em] peer-focus:text-primary"
            htmlFor="email"
          >
            Email
          </Label>
        </div>
        <div className="relative">
          <Input
            type="password"
            required
            id="password"
            value={password}
            disabled={loading}
            className="rounded-3xl focus:rounded-xl"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Label
            className="text-label-md peer-focus:text-[12px] peer-focus:font-medium peer-focus:leading-4 peer-focus:tracking-[0.03125em] peer-focus:text-primary"
            htmlFor="password"
          >
            Password
          </Label>
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
