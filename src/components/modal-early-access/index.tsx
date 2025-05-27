import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ModalEarlyAccess = ({ timeline, onClose }: { timeline: any, onClose: () => void }) => {

  const trigerAnimation = (tl: gsap.core.Timeline) => {
    tl.to(".modal-container", {
      opacity: 1,
      y: 0,
      ease: "hop",
      duration: 2
    }, "<")
      .to(".modal", {
        opacity: 1,
        y: 0,
        ease: "hop",
      })
  }

  useEffect(() => {
    if (!timeline) return;
    trigerAnimation(timeline);
  }, []);

  return (
    <div className="modal-container">
      <div className="modal">
        <h2>Working In Progress</h2>
        <p>But nothing to worry about because, once it is finished. it will be more WAY WAY better than before</p>
        <button className="button" onClick={onClose}>Mmmm, Okay</button>
      </div>
    </div>
  )
}