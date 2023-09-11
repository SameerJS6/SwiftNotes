import Tooltip from "@/Shared/Tooltip/Tooltip";
import profilePicture from "../../assets/profile-picture.jpg";

type ProfileProps = {};

export default function Profile({}: ProfileProps) {
  return (
    <Tooltip content="My Profile">
      <div className="mt-1.5 h-7 w-7 overflow-hidden rounded-full border border-outline/50 bg-primary shadow-elevation-1">
        <img src={profilePicture} alt="Profile Picture" />
      </div>
    </Tooltip>
  );
}
