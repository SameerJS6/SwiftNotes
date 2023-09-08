import profilePicture from "../../assets/profile-picture.jpg";

type ProfileProps = {};

export default function Profile({}: ProfileProps) {
  return (
    <img
      src={profilePicture}
      alt="Profile Picture"
      className="h-7 w-7 rounded-full border border-outline/50 bg-primary shadow-elevation-1"
    />
  );
}
