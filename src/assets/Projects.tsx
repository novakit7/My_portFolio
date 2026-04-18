import { useEffect } from "react";
export default function Projects() {
    useEffect(() => {
            document.title = "Projects | Kit Portfolio";
        }, []);
  return (
    <div>
      this is Project.
    </div>
  )
}
