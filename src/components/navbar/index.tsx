"use client"
import { getCurrentTimeInTimezone } from "@/utils/time";
import { useEffect, useState } from "react";
import { Link } from "../link";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h3>IMNIRVNSYH</h3>
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
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p className="time">{time}</p>;
};