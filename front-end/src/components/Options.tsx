import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useGlobalContext } from "@/context/GlobalContext";

type Props = {
  Icon: LucideIcon;
  name: string;
  id: number;
};

export default function Options({ Icon, name, id }: Props) {
  const [selected, setSelected] = useState(false);

  const { addService, removeService } = useGlobalContext();

  const onClick = () => {
    if (selected === false) {
      addService(id);
      setSelected(true);
    } else {
      removeService(id);
      setSelected(false);
    }
  };

  return (
    <div
      className={cn(
        ` hover:bg-zinc-800 py-4 cursor-pointer transition-colors rounded shadow ${
          selected ? "bg-zinc-800 border-[1px] border-white" : "bg-zinc-700"
        }`
      )}
      onClick={() => onClick()}
    >
      <div className="flex flex-col items-center justify-center">
        <Icon className="h-6 w-6 text-zinc-200 block mb-1" />
        <p className="text-white ">{name}</p>
      </div>
    </div>
  );
}
