import { useState } from "react";
import { BsBackpack2Fill } from "react-icons/bs";
import { Button } from "@root/src/components/ui/button";
import Input from "@root/src/components/Input";
import { Card, CardDescription } from "@root/src/components/ui/card";
import { Transition } from "@root/src/components/Transition";
import { RxCross2 } from "react-icons/rx";

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

  return (
    <div className="my-4">
      <div className="flex justify-around items-center">
        <Button variant="outline" onClick={() => setIsMounted(!isMounted)}>
          <BsBackpack2Fill />
        </Button>
        <div>
          <NewItemInventory setItems={setItems} />
        </div>
      </div>
      <Transition isMounted={isMounted}>
        <Card className="flex gap-4 flex-wrap">
          {items.map(({ id, label }, index) => (
            <InventoryItem key={`${id}${index}`} label={label} />
          ))}
        </Card>
      </Transition>
    </div>
  );
};

const NewItemInventory = ({
  setItems,
}: {
  setItems: React.Dispatch<React.SetStateAction<ItemType[]>>;
}) => {
  const [newItem, setNewItem] = useState<string>("");

  const addItem = () => {
    if (newItem.trim() === "") return;
    setItems((prevItems) => [...prevItems, { id: Date.now(), label: newItem }]);
    setNewItem("");
  };

  return (
    <div className="flex gap-2">
      <Input
        placeholder="Item name"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <Button onClick={addItem}>Add</Button>
    </div>
  );
};

const InventoryItem = ({ label }: { label?: string }) => {
  return (
    <div>
      <Card className="p-5 relative">
        <div className="w-10 absolute top-0 right-0">
          <Button className="" variant="destructive">
            <RxCross2 />
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <CardDescription>{label}</CardDescription>
        </div>
      </Card>
    </div>
  );
};

export default Inventory;
