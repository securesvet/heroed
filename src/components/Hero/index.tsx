import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { debounce } from "../../../helpers/debounce";
import Input from "../Input";
import Popup from "../Popup";

const Hero = () => {
  const [heroName, setHeroName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    if (inputRef.current?.value === "") {
      inputRef.current.focus();
    }
  }, []);

  const handleOnChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setHeroName(e.target.value);
  }, 300);

  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    setPopup(true);
  };

  return (
    <div>
      <div className="w-full h-full text-center">
        <div className="flex items-center justify-center">
          {popup && (
            <Popup>
              <h1>{heroName}</h1>
            </Popup>
          )}
          <form onSubmit={submit}>
            <div className="grid items-center gap-4">
              <div className="flex items-center gap-4">
                <label className="text-xl">Hero name</label>
                <Input
                  placeholder="Hero name"
                  ref={inputRef}
                  onChange={handleOnChange}
                  className="text-2xl text-center w-2xs"
                ></Input>
              </div>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
