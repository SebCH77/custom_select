import { useState } from "react";
import * as SC from "./styles";

const race = [
  "Cita valoración Pre-Anestésica",
  "Más de un procedimiento",
  "Autorización en trámite",
  "Pendiente autorización",
  "Autorizado",
  "Oncología",
  "Urgente",
];

export const SelectWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [haveText, sethaveText] = useState("");

  console.log("haveText =>>", haveText);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const itemList = (props: any) => {
    const list = props.map((item: any, index: any) => (
      <SC.DropdownItem onClick={() => sethaveText(item)} key={index}>
        <input className="input__option" type="text" readOnly value={item}></input>
      </SC.DropdownItem>
    ));

    return <SC.DropdownItems isOpen={isOpen}> {list} </SC.DropdownItems>;
  };

  return (
    <SC.Dropdown onClick={handleClick}>
      <SC.DropdownText isOpen={isOpen}>
        <input className="input__option" type="text" readOnly value={!haveText ? "Estado" : haveText} />
      </SC.DropdownText>
      {itemList(race)}
    </SC.Dropdown>
  );
};
