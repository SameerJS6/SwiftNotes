import { Button } from "@/Shared/Button";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

type Props = {};

export default function SignUp({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPasssword, setConfrimPasssword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (password !== confrimPasssword)
      return setError("Passsword do not match");
    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      navigate("/account");
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      console.error(err.code, err.message);
    }
  };

  return (
    <>
      <article className="mx-auto w-full max-w-sm rounded-[2rem] bg-surfaceContainerLowest p-10 py-8 shadow-elevation-1">
        <h1 className="mb-6 text-display-sm text-onSurface">Sign Up</h1>
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
              className="rounded-md bg-surfaceContainerLow p-2.5 text-label-lg text-onSurface focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-onBackground focus-visible:ring-offset-2"
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
          <div className="flex flex-col gap-2">
            <label
              className="text-label-lg capitalize text-onSurface"
              htmlFor="confrimPassword"
            >
              password confirmation:
            </label>
            <input
              type="text"
              required
              id="confrimPassword"
              value={confrimPasssword}
              disabled={loading}
              className="rounded-md bg-surfaceContainerLow p-2.5 text-label-lg text-onSurface focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-onBackground focus-visible:ring-offset-2"
              onChange={(e) => setConfrimPasssword(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <Button disabled={loading} variant="default" size="block">
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
          </div>
        </form>

        <div className="mt-3 text-center text-label-md text-onSurface">
          <p>
            Already have an Account?{" "}
            <Link
              to="/login"
              className={`text-label-lg text-primary hover:underline hover:underline-offset-1 ${
                loading
                  ? "pointer-events-none opacity-50"
                  : "pointer-events-auto opacity-100"
              }`}
            >
              Log In
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
