import { useEffect, useRef } from "react";
import yo from "../assets/yo2.jpg";
import "./BlobImage.css";

export default function BlobImage({ src}) {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    blob.animate(
      [
        { borderRadius: "43% 57% 70% 30% / 30% 30% 70% 70%" },
        { borderRadius: "57% 43% 30% 70% / 60% 30% 70% 40%" },
        { borderRadius: "43% 57% 70% 30% / 30% 30% 70% 70%" },
      ],
      {
        duration: 8000,
        iterations: Infinity,
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-[#0f172a]">
      <div
        ref={blobRef}
        className="w-72 h-72 bg-cover bg-center shadow-xl transition-all duration-1000 ease-in-out imagen"
        style={{
          backgroundImage: `url(${yo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
    </div>
  );
}
