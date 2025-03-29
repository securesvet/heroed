import { Input } from "@ui/input";
import { ChangeEvent, useEffect, useRef } from "react";
import { Label } from "@ui/label";
import { Separator } from "@ui/separator";
import Hero from "./Hero";
import Inventory from "./Inventory";
import { useDispatch, useSelector } from "react-redux";
import { AttributesState, changeValue } from "@root/src/store";

const DndCreator = () => {
  const attributes = useSelector(
    (store: { attributes: AttributesState }) => store.attributes,
  );
  return (
    <div className="my-[var(--header-height)]">
      <div className="grid grid-cols-1 place-items-center md:grid-cols-[1fr_5fr]">
        <div className="w-full h-full">
          <Hero />
          <Inventory />
        </div>
        <div className="grid">
          <div className="py-4"></div>
          <div className="flex flex-col flex-wrap h-[900px] gap-4">
            {attributes.map((attribute, index) => (
              <Charachteristics
                key={index}
                label={attribute.name.toUpperCase()}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Charachteristics = ({ label }: { label: string }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const currentAttribute = useSelector(
    (store: { attributes: AttributesState }) =>
      store.attributes.find(
        (attr) => attr.name.toLowerCase() === label.toLowerCase(),
      ),
  );

  useEffect(() => {
    if (inputRef.current && currentAttribute) {
      inputRef.current.value = currentAttribute.value.toString();
    }
  }, [currentAttribute]);

  console.log(currentAttribute);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!inputRef.current) return;
    e.preventDefault();
    const { value, min, max } = e.target;

    if (Math.abs(Number(value)).toString().startsWith("0")) {
      inputRef.current.value = value.slice(1);
    }

    inputRef.current.value = Math.max(
      Number(min),
      Math.min(Number(max), Number(value)),
    ).toString();

    dispatch(
      changeValue({ name: label, value: Number(inputRef.current.value) }),
    );
  };

  const handleBlur = () => {
    if (!inputRef.current) return;
    if (
      inputRef.current.value === undefined ||
      inputRef.current.value === "0"
    ) {
      inputRef.current.value = "10";
    }
    dispatch(
      changeValue({ name: label, value: Number(inputRef.current.value) }),
    );
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
          min={0}
          ref={inputRef}
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
          value={currentAttribute?.checkValue}
          disabled
        />
        <p className="whitespace-nowrap">Save Throw</p>
        <Input
          type="number"
          pattern="\d*"
          className="w-10 h-10 p-0 text-center text-2xl md:text-2xl"
          value={currentAttribute?.saveThrowValue}
          disabled
        />
      </div>
      <div className="flex flex-col gap-2">
        {currentAttribute?.children.map((subAttributes, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-primary-foreground p-2 rounded-xl hover:opacity-85 hover:cursor-pointer"
          >
            <p>{subAttributes.name}</p>
            <p className="font-bold">
              {subAttributes.value > 0 ? "+" : ""}
              {subAttributes.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { DndCreator };
