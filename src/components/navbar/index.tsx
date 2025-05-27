"use client"
import Image from "next/image";
import { Link } from "../link";
import { useEffect, useState } from "react";
import { getCurrentTimeInTimezone } from "@/utils/time";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Image src="/logo.svg" alt="website-logo" width={130} height={50} />
      </div>
      <ul className="menus" >
        <li className="menu-item">
          <Link href="#project-section" label="Works" />
        </li>
        <li className="menu-item">
          <Link href="/" label="Experiences" />
        </li>
        <li className="menu-item">
          <Link href="/" label="About" />
        </li>
      </ul>
      <CurrentTime />
    </div>
  )
}



export const CurrentTime = () => {
  const [time, setTime] = useState(getCurrentTimeInTimezone());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTimeInTimezone());
    }, 1000); // Update every 1 second

    return () => clearInterval(interval);
  }, []);

  return <p className="time">{time}</p>;
};