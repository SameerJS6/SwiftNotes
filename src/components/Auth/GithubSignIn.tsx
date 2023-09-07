import { Button } from "@/Shared/Button";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

type GithubSignInProps = {};

export default function GithubSignIn({}: GithubSignInProps) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { githubLogin } = useAuth();

  const signInWithGithub = async () => {
    try {
      setLoading(true);
      await githubLogin();
      setLoading(false);
      navigate("/account");
    } catch (err: any) {
      setLoading(false);
      console.log(err.code, err.message);
    }
  };
  return (
    <Button
      size="block"
      disabled={loading}
      rippleColour="rgba(var(--inverse-surface), 0.1)"
      onClick={signInWithGithub}
      className="group gap-2 rounded-xl border border-onSurface/10 bg-surfaceContainerLow text-label-lg text-onSurface hover:border-onSurface/25 hover:bg-secondaryContainer/70 active:rounded-3xl active:bg-secondaryContainer active:text-onSecondaryContainer "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="24px"
        height="24px"
        viewBox="0 0 24 23"
        version="1.1"
        className="h-6 w-6 fill-onSurface group-active:fill-onSecondaryContainer"
      >
        <g id="surface1">
          <path d="M 11.964844 0 C 5.347656 0 0 5.269531 0 11.792969 C 0 17.003906 3.425781 21.417969 8.179688 22.976562 C 8.773438 23.09375 8.992188 22.722656 8.992188 22.410156 C 8.992188 22.136719 8.972656 21.203125 8.972656 20.226562 C 5.644531 20.929688 4.953125 18.820312 4.953125 18.820312 C 4.417969 17.453125 3.625 17.101562 3.625 17.101562 C 2.535156 16.378906 3.703125 16.378906 3.703125 16.378906 C 4.914062 16.457031 5.546875 17.589844 5.546875 17.589844 C 6.617188 19.386719 8.339844 18.878906 9.03125 18.566406 C 9.132812 17.804688 9.449219 17.277344 9.785156 16.984375 C 7.132812 16.710938 4.339844 15.695312 4.339844 11.167969 C 4.339844 9.878906 4.8125 8.824219 5.566406 8.003906 C 5.445312 7.710938 5.03125 6.5 5.683594 4.878906 C 5.683594 4.878906 6.695312 4.566406 8.972656 6.089844 C 9.949219 5.832031 10.953125 5.703125 11.964844 5.699219 C 12.972656 5.699219 14.003906 5.835938 14.957031 6.089844 C 17.234375 4.566406 18.242188 4.878906 18.242188 4.878906 C 18.898438 6.5 18.480469 7.710938 18.363281 8.003906 C 19.136719 8.824219 19.589844 9.878906 19.589844 11.167969 C 19.589844 15.695312 16.796875 16.691406 14.125 16.984375 C 14.558594 17.355469 14.933594 18.058594 14.933594 19.171875 C 14.933594 20.753906 14.914062 22.019531 14.914062 22.410156 C 14.914062 22.722656 15.132812 23.09375 15.726562 22.976562 C 20.480469 21.414062 23.910156 17.003906 23.910156 11.792969 C 23.929688 5.269531 18.558594 0 11.964844 0 Z M 11.964844 0 " />
        </g>
      </svg>
      github
    </Button>
  );
}
