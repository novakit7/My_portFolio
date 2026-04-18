import { useEffect } from "react";
export default function About() {
    useEffect(() => {
        document.title = "About | Kit Portfolio";
    }, []);
  return (
    <div>
      this is about.
    </div>
  )
}
