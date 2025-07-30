import { FiHome, FiUser, FiBook, FiCpu, FiFolder, FiUsers, FiAward, FiPhone } from "react-icons/fi";

const Navbar = () => {
  const navItems = [
    { id: "home", icon: <FiHome size={22} />, href: "#landing-page" },
    { id: "about", icon: <FiUser size={22} />, href: "#about" },
    { id: "education", icon: <FiBook size={22} />, href: "#education" },
    { id: "skills", icon: <FiCpu size={22} />, href: "#skills" },
    { id: "projects", icon: <FiFolder size={22} />, href: "#projects" },
    { id: "organization", icon: <FiUsers size={22} />, href: "#organization" },
    { id: "certificates", icon: <FiAward size={22} />, href: "#experience" },
    { id: "contact", icon: <FiPhone size={22} />, href: "#contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white border border-[#4C5B5C] rounded-full shadow-[0_0_15px_rgba(76,91,92,0.2)] px-4 py-2 flex gap-4 z-50">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="text-[#4C5B5C] hover:text-[#0097A7] transition"
          aria-label={item.id}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
