import Image from "next/image";

export const LandingSection = () => {
  return (
    <section className="section">
      <Image src="/cube.svg" alt="website-logo" width={450} height={450} className="display-item" />
      <div className="title">
        <h1>CREATIVE DEVELOPER</h1>
        <p>Hi, I am Iman a Frontend developer that love to make unforgettable experience through the web, let&apos;s cook idea into masterpiece together</p>
      </div>
    </section>
  )
}