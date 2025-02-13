"use client";
import { PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const PlaceholderDocument = () => {
  const router = useRouter();
  const handleClick = ()=>{
    //user ? pro or pro and if file over limit push to upgrade?
    router.push("/dashboard/upload");
  }
  return (
    <Button
      className="flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400"
      onClick={handleClick}
    >
      <PlusCircleIcon className="h-16 w-16" />
      <p>Add a document</p>
    </Button>
  );
};
export default PlaceholderDocument;
