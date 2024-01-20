import "material-symbols/rounded.css";

export default function Home() {
  return (
    <button className="inline-flex items-center rounded-3xl bg-white px-4 py-2 text-black transition-all duration-300 ease-in-out hover:bg-opacity-85 active:rounded-2xl">
      Login
      <span className="material-symbols-rounded optical-24 ml-1">login</span>
    </button>
  );
}
