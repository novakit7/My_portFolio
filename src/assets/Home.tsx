import { useEffect } from "react";
export default function Home() {
    useEffect(() => {
        document.title = "Home | Kit Portfolio";
    }, []);
  return (
    <>
      <h1>Kit - Web Developer Portfolio</h1>
      <h2>Projects</h2>
      <h2>Skills</h2>
    </>
  )
}
