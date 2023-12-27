import { navItems } from "../../constants/navItems";
import NavLink from "../Atoms/NavLink";

export default function NavLinks() {
  return (
    <>
      {navItems.map((item) => (
        <NavLink key={item.name} href={item.href} name={item.name} />
      ))}
    </>
  );
}
