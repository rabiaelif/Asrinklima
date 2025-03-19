import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return <div className="h-screen w-screen gap-3 flex justify-center items-center text-red">
    <FaSpinner className="animate-spin"/>
    Yükleniyor...</div>;
}
