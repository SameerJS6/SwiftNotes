import { Button } from "@/Shared/Button";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type GoogleSignInProps = {};

export default function GoogleSignIn({}: GoogleSignInProps) {
  const [loading, setLoading] = useState(false);

  const { googleLogin } = useAuth();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      await googleLogin();
      setLoading(false);
      navigate("/account");
    } catch (err: any) {
      setLoading(false);
      console.log(err.code, err.message);
    }
  };

  return (
    <Button
      onClick={signInWithGoogle}
      size="block"
      disabled={loading}
      className="group gap-2 rounded-xl bg-surfaceContainerLow text-label-lg text-onSurface hover:bg-secondaryContainer/70 active:rounded-3xl active:bg-secondaryContainer active:text-onSecondaryContainer "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-6 w-6 fill-onSurface"
      >
        {" "}
        <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
      </svg>
      google
    </Button>
  );
}
