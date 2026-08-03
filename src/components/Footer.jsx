import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-6 text-center px-6">
      <p className="font-medium">{profile.quote}</p>
      <p className="text-sm text-white/60 mt-2">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
