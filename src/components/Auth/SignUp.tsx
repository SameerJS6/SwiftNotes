import { Button } from "@/Shared/Button";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Input from "@/Shared/Input";
import Label from "@/Shared/Label";

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
      console.log(error); //Added to Avoid the Error by TypeScript Engine
      console.error(err.code, err.message);
    }
  };

  return (
    <>
      <article className="mx-auto w-full max-w-sm rounded-[2rem] bg-surfaceContainerLowest p-10 py-8 shadow-elevation-1">
        <h1 className="mb-6 text-display-sm text-onSurface">Sign Up</h1>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="relative">
            <Input
              type="email"
              autoFocus
              required
              autoComplete="off"
              id="email"
              value={email}
              disabled={loading}
              className="focus:rounded-xl"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label
              className="text-label-md peer-placeholder-shown:left-5 peer-focus:text-[12px] peer-focus:font-medium peer-focus:leading-4 peer-focus:tracking-[0.03125em] peer-focus:text-primary"
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
              className="focus:rounded-xl"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Label
              className="text-label-md peer-placeholder-shown:left-5 peer-focus:text-[12px] peer-focus:font-medium peer-focus:leading-4 peer-focus:tracking-[0.03125em] peer-focus:text-primary"
              htmlFor="password"
            >
              Password
            </Label>
          </div>
          <div className="relative">
            <Input
              type="text"
              required
              id="confrimPassword"
              value={confrimPasssword}
              disabled={loading}
              className="focus:rounded-xl"
              onChange={(e) => setConfrimPasssword(e.target.value)}
            />
            <Label
              className="text-label-md peer-placeholder-shown:left-5 peer-focus:text-[12px] peer-focus:font-medium peer-focus:leading-4 peer-focus:tracking-[0.03125em] peer-focus:text-primary"
              htmlFor="confrimPassword"
            >
              Password Confirmation
            </Label>
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
