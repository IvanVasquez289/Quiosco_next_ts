"use client";
import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={()=> router.back()}
      className="bg-amber-500 w-full lg:w-auto px-10 py-3 text-xl text-center font-bold cursor-pointer"
    >
      Volver
    </button>
  );
};

export default GoBackButton;
