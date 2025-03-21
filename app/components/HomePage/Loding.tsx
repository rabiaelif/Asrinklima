import { FaSpinner } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function LoadingHome() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="h-screen w-screen gap-3 flex justify-center items-center z-100 text-red">
      <FaSpinner className="animate-spin" />
      Yükleniyor...</div>
  );
}

