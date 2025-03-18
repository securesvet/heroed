import { Input } from "@ui/input";
import { ChangeEvent, useEffect, useState } from "react";
import { Label } from "@ui/label";
import { Separator } from "@ui/separator";
import { Avatar, AvatarFallback } from "@ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { BsBackpack2Fill } from "react-icons/bs";
import { Button } from "@root/src/components/ui/button";
import Hero from "./Hero";

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
      <div className="flex gap-4 items-center">
        <Avatar className="rounded-none ">
          <AvatarImage
            src={"https://avatars.githubusercontent.com/u/67125915?v=4"}
          />
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <Input className="text-xl" placeholder="Hero Name" />
      </div>
    </div>
  );
};

const Inventory = () => {
  const items: string[] = ["backpack"];
  return (
    <div>
      <Button variant="outline">
        <BsBackpack2Fill />
      </Button>
      {items.map((item, index) => {
        return <InventoryItem key={`${item}${index}`} label={item} />;
      })}
    </div>
  );
};

const InventoryItem = ({ label }: { label?: string }) => {
  return (
    <div>
      <p>{label}</p>
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
          className="w-10 h-10 p-0 text-center text-2xl md:text-2xl"
          max={30}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <Separator />
      <div className="flex gap-6 items-center justify-between text-center">
        <p>Check</p>
        <Input
          type="number"
          className="w-10 h-10 p-0 text-center text-2xl md:text-2xl"
          max={10}
          min={-5}
          value={check}
          disabled
        />
        <p className="whitespace-nowrap">Save Throw</p>
        <Input
          type="number"
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
