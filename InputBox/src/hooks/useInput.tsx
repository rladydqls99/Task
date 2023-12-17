import { useState } from "react";
import { useRecoilState } from "recoil";
import { Atom } from "../Atom";

function useInput(type: string, initialValue: string) {
  const [inputValue, setInputValue] = useState(initialValue);
  const [validation, setValidation] = useState(false);
  const [duplication, setDuplication] = useState(false);
  const [users, setUsers] = useRecoilState(Atom);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    let length = 0;
    if (type === "name") {
      length = 3;
    } else {
      length = 6;
    }
    if (value.length < length) {
      setValidation(true);
    } else {
      setValidation(false);
    }
    if (type === "name") {
      const isUserIdExists = users.some((user) => user.userId === value);
      const updatedUsers = users.map((user) => ({
        ...user,
        duplicationName: user.userId === value,
      }));

      setUsers(updatedUsers);

      if (isUserIdExists) {
        setDuplication(true);
      } else {
        setDuplication(false);
      }
    }

    setInputValue(value);
  };

  return { inputValue, onChange, validation, duplication };
}

export default useInput;
