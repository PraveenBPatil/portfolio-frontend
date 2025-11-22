import profile from "../assets/profile.jpeg";

export default function FloatingProfile() {
  return (
    <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-xl border-4 border-purple-500/40">
      <img src={profile} alt="profile" className="w-full h-full object-cover" />
    </div>
  );
}
