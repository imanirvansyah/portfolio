import Image from "next/image";
import { Link } from "../link";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Image src="/logo.svg" alt="website-logo" width={130} height={50} />
      </div>
      <ul className="menus" >
        <li className="menu-item">
          <Link href="/#" label="Works" />
        </li>
        <li className="menu-item">
          <Link href="/#" label="Experiences" />
        </li>
        <li className="menu-item">
          <Link href="/#" label="About" />
        </li>
      </ul>
      <div className="time">05:54PM GMT+7</div>
    </div>
  )
}