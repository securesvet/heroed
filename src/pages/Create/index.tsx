import { Input } from "@ui/input";
import { ChangeEvent, useEffect, useState } from "react";
import { Label } from "@ui/label";
import { Separator } from "@ui/separator";
import { Avatar, AvatarFallback } from "@ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { BsBackpack2Fill } from "react-icons/bs";
import { Button } from "@root/src/components/ui/button";
import Hero from "./Hero";
import { Card, CardDescription } from "@ui/card";
import { FaPlus } from "react-icons/fa6";
import { useMountTransition } from "@/hooks/useMountedTransition";
import { cn } from "@root/src/lib/utils";

const CharacterCreator = () => {
  const labels = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma",
  ];

  return (
    <div className="my-[var(--header-height)]">
      <div className="grid grid-cols-1 place-items-center md:grid-cols-3">
        <div className="">
          <Hero />
          <Inventory />
        </div>
        <div className="grid">
          <div className="py-4">
            <AvatarHeader />
          </div>
          <div className="flex flex-col gap-4">
            {labels.map((label, index) => (
              <Charachteristics key={index} label={label.toUpperCase()} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AvatarHeader = () => {
  return (
    <div className="flex">
      <Avatar className="rounded-none ">
        <AvatarImage
          src={"https://avatars.githubusercontent.com/u/67125915?v=4"}
        />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
    </div>
  );
};

type ItemType = {
  id: number;
  label: string;
  img?: string;
};

const Inventory = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const items: ItemType[] = [
    {
      id: 1,
      label: "Shield",
    },
    {
      id: 2,
      label: "Sword",
    },
    {
      id: 3,
      label: "Beer",
    },
    {
      id: 4,
      label: "Boots",
    },
  ];
  const hasTransitionedIn = useMountTransition(isMounted, 150);
  return (
    <div>
      <div className="flex justify-around items-center">
        <Button variant="outline" onClick={() => setIsMounted(!isMounted)}>
          <BsBackpack2Fill />
        </Button>
        <NewItemInventory />
      </div>
      <div className="grid grid-cols-4">
        <div className="max-w-40 max-h-40">
          {(hasTransitionedIn || isMounted) &&
            items.map(({ id, label }, index) => {
              return (
                <div
                  className={cn(
                    "transition-all -translate-y-1 opacity-0 ease-in-out",
                    hasTransitionedIn && "translate-y-0 opacity-100",
                    !isMounted && "-translate-y-1 opacity-0",
                  )}
                >
                  <InventoryItem key={`${id}${index}`} label={label} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

const NewItemInventory = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
        <FaPlus />
      </Button>
      {isOpen && <Input placeholder="Item name" />}
    </div>
  );
};

const InventoryItem = ({ label }: { label?: string }) => {
  return (
    <div className="aspect-square">
      <Card className="hover:opacity-80 transition-opacity hover:cursor-pointer flex flex-col items-center justify-center">
        <CardDescription>{label}</CardDescription>
      </Card>
    </div>
  );
};

const Charachteristics = ({ label }: { label?: string }) => {
  const [value, setValue] = useState<string>("10");

  const [check, setCheck] = useState<string>("0");

  const [saveThrow, setSavingThrow] = useState<string>("0");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, min, max } = e.target;

    // Remove leading zeros while typing
    if (Math.abs(Number(value)).toString().startsWith("0")) {
      setValue((value) => value.slice(1));
    }

    const valueInput = Math.max(
      Number(min),
      Math.min(Number(max), Number(value)),
    ).toString();

    setValue(valueInput);
  };

  useEffect(() => {
    const checkValue = Math.max(
      -5,
      Math.min(10, Math.floor((Number(value) - 10) / 2)),
    ).toString();

    setCheck(checkValue);
    setSavingThrow(checkValue);
  }, [value]);

  const handleBlur = () => {
    if (value === undefined || value == "0") {
      setValue("10");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-6 justify-between text-2xl">
        <Label className="font-bold text-2xl">{label}</Label>
        <Input
          type="number"
          pattern="\d*"
          className="w-10 h-10 p-0 text-center text-2xl md:text-2xl"
          max={30}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={(e) => e.target.select()}
        />
      </div>
      <Separator />
      <div className="flex gap-6 items-center justify-between text-center">
        <p>Check</p>
        <Input
          type="number"
          pattern="\d*"
          className="w-10 h-10 p-0 text-center text-2xl md:text-2xl"
          max={10}
          min={-5}
          value={check}
          disabled
        />
        <p className="whitespace-nowrap">Save Throw</p>
        <Input
          type="number"
          pattern="\d*"
          className="w-10 h-10 p-0 text-center text-2xl md:text-2xl"
          max={10}
          min={-5}
          value={saveThrow}
          disabled
        />
      </div>
    </div>
  );
};

export default CharacterCreator;
