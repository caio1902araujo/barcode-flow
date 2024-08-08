"use client";
import { Separator } from "@radix-ui/react-separator";
import { Input } from "../ui/input";
import { root, separator, search, listItems } from "./styles";
import { useState } from "react";
import { AsideOptionsItem } from "./item";

export type AsideOptionsProps = {
  listOptions: string[];
  isFullScreen?: boolean;
};

export function AsideOptions({
  listOptions,
  isFullScreen = false,
}: AsideOptionsProps) {
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState(listOptions);

  function handleFilterOptions(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.toLowerCase();
    if (value.trim().length) {
      const filteredOptions = listOptions.filter((option) => {
        const optionLowerCase = option.toLowerCase();
        return optionLowerCase.includes(value);
      });
      setOptions(filteredOptions);
    } else {
      setOptions(listOptions);
    }
  }

  return (
    <aside className={root({ isFullScreen })}>
      <Input className={search()} onChange={handleFilterOptions} />

      <Separator className={separator()} />

      <ul className={listItems()}>
        {options.map((option) => (
          <AsideOptionsItem key={option}>{option}</AsideOptionsItem>
        ))}
      </ul>
    </aside>
  );
}
