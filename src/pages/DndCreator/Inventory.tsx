import { useState } from "react";
import { useMountTransition } from "@root/src/hooks/useMountedTransition";
import { BsBackpack2Fill } from "react-icons/bs";
import { cn } from "@root/src/lib/utils";
import { Button } from "@root/src/components/ui/button";
import { FaPlus } from "react-icons/fa";
import Input from "@root/src/components/Input";
import { Card, CardDescription } from "@root/src/components/ui/card";

type ItemType = {
  id: number;
  label: string;
  img?: string;
};

const Inventory = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [items, setItems] = useState<ItemType[]>([
    { id: 1, label: "Shield" },
    { id: 2, label: "Sword" },
    { id: 3, label: "Beer" },
    { id: 4, label: "Boots" },
  ]);

  const hasTransitionedIn = useMountTransition(isMounted, 150);

  return (
    <div className="my-4">
      <div className="flex justify-around items-center">
        <Button variant="outline" onClick={() => setIsMounted(!isMounted)}>
          <BsBackpack2Fill />
        </Button>
      </div>
      {(hasTransitionedIn || isMounted) && (
        <div
          className={cn(
            "flex gap-4 transition-all -translate-y-1 opacity-0 ease-in-out flex-wrap",
            hasTransitionedIn && "translate-y-0 opacity-100",
            !isMounted && "-translate-y-1 opacity-0",
          )}
        >
          {items.map(({ id, label }, index) => (
            <InventoryItem key={`${id}${index}`} label={label} />
          ))}
          <NewItemInventory setItems={setItems} />
        </div>
      )}
    </div>
  );
};

const NewItemInventory = ({
  setItems,
}: {
  setItems: React.Dispatch<React.SetStateAction<ItemType[]>>;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [newItem, setNewItem] = useState<string>("");

  const addItem = () => {
    if (newItem.trim() === "") return;
    setItems((prevItems) => [...prevItems, { id: Date.now(), label: newItem }]);
    setNewItem("");
    setIsOpen(false);
  };

  return (
    <div>
      <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
        <FaPlus />
      </Button>
      {isOpen && (
        <div className="flex gap-2">
          <Input
            placeholder="Item name"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <Button onClick={addItem}>Add</Button>
        </div>
      )}
    </div>
  );
};

const InventoryItem = ({ label }: { label?: string }) => {
  return (
    <Card className="p-5 hover:opacity-80 transition-opacity hover:cursor-pointer flex flex-col items-center justify-center">
      <CardDescription>{label}</CardDescription>
    </Card>
  );
};

export default Inventory;
