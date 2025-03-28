import { useRef, useState } from "react";
import { BsBackpack2Fill } from "react-icons/bs";
import { Button } from "@root/src/components/ui/button";
import Input from "@root/src/components/Input";
import { Card, CardDescription } from "@root/src/components/ui/card";
import { Transition } from "@root/src/components/Transition";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, ShopState } from "@root/src/store";

const Inventory = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const shopItems = useSelector(
    (state: { shop: ShopState }) => state.shop.items,
  );
  const isInventoryEmpty = shopItems.length === 0;
  return (
    <div className="my-4">
      <div className="flex justify-around items-center">
        <Button variant="outline" onClick={() => setIsMounted(!isMounted)}>
          <BsBackpack2Fill />
        </Button>
        <div></div>
      </div>
      <Transition isMounted={isMounted}>
        <Card className="flex gap-4 flex-wrap mt-2">
          <NewItemInventory />
          {isInventoryEmpty ? (
            <p className="text-center">Inventory is empty</p>
          ) : (
            shopItems.map(({ id, title }) => (
              <InventoryItem key={id} label={title} id={id} />
            ))
          )}
        </Card>
      </Transition>
    </div>
  );
};

const NewItemInventory = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const handleOnClick = () => {
    const input = inputRef.current;
    if (!input) return;
    dispatch(
      addItem({
        title: input.value,
        price: 10,
      }),
    );
    input.value = "";
  };
  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleOnClick();
    }
  };
  return (
    <div className="flex gap-2">
      <Input
        placeholder="Item name"
        onKeyDown={handleOnKeyDown}
        ref={inputRef}
      />
      <Button onClick={handleOnClick}>Add</Button>
    </div>
  );
};

const InventoryItem = ({ label, id }: { label: string; id: number }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card className="p-5 relative">
        <div className="flex flex-col items-center justify-center">
          <CardDescription>{label}</CardDescription>
        </div>
        <Button
          className="absolute top-2 right-2"
          variant="destructive"
          onClick={() => dispatch(deleteItem(id))}
        >
          X
        </Button>
      </Card>
    </div>
  );
};

export default Inventory;
