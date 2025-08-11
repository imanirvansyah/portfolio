"use client"

import { useState } from "react";

export const ModalWIP = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;
  return (
    <div id="wipModal" className="modal-overlay">
      <div className="modal-content">
        <h2>🚧 Pardon the Pixels</h2>
        <p>
          This portfolio is still taking shape — I’m adding more projects,
          polishing visuals, and tweaking interactions over time.<br /><br />
          Feel free to look around, but come back later to see the full
          experience.<br />
          <em>Creative work takes time… and coffee. ☕</em>
        </p>
        <div className="progress-bar">
          <div className="progress" style={{ width: "60%" }}></div>
        </div>
        <small>~60% Complete</small>
        <button className="modal-close" id="closeModal" onClick={() => setShow(false)}>
          Got it!
        </button>
      </div>
    </div>
  )
}