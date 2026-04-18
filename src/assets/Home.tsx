import { useEffect } from "react";
export default function Home() {
    useEffect(() => {
        document.title = "Home | Kit Portfolio";
    }, []);
  return (
    <div>
      this is home.
    </div>
  )
}
