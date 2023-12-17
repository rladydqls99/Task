import useInput from "../../hooks/useInput";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Atom, UserType } from "../../Atom";
import Button from "../button/Button";
import {
  Container,
  Headers,
  NameInput,
  PasswordInput,
  ButtonBox,
} from "./styles";

type PropsType = {
  userIndex: number;
  formState: number[];
  duplication: boolean;
  setConfirmState: React.Dispatch<React.SetStateAction<boolean>>;
  setFormState: React.Dispatch<React.SetStateAction<number[]>>;
  setPrintUsers: React.Dispatch<React.SetStateAction<UserType[]>>;
};

function FormComponent({
  userIndex,
  formState,
  duplication,
  setFormState,
  setConfirmState,
  setPrintUsers,
}: PropsType) {
  const [buttonState, setButtonState] = useState(false);
  const [users, setUsers] = useRecoilState(Atom);
  const [submit, setSubmit] = useState(true);

  // 이름 입력
  const {
    inputValue: name,
    onChange: onChangeName,
    validation: validName,
    duplication: InputDuplication,
  } = useInput("name", "");

  // 비밀번호 입력
  const {
    inputValue: password,
    onChange: onChangePassword,
    validation: validPassword,
  } = useInput("password", "");

  // Add User 버튼
  const onClickAddUser = () => {
    if (name.length > 2 && password.length > 5 && !InputDuplication) {
      const newUser = {
        userId: name,
        userPassword: password,
        duplicationName: false,
        id: userIndex,
      };
      setButtonState(true);
      setFormState([...formState, formState.length]);
      setUsers([...users, newUser]);
    }
  };

  // Confirm 버튼
  useEffect(() => {
    if (name.length > 2 && password.length > 5 && !InputDuplication) {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  }, [name, password, InputDuplication]);

  const onClickConfirm = () => {
    if (!submit) {
      const newUser = {
        userId: name,
        userPassword: password.slice(0, -3) + "***",
        duplicationName: false,
        id: userIndex,
      };
      setUsers([...users, newUser]);

      const printUsers = users.map((user) => ({
        ...user,
        userPassword: user.userPassword.slice(0, -3) + "***",
      }));
      printUsers.push(newUser);
      setPrintUsers(printUsers);
      setConfirmState(true);
    }
  };

  // x 버튼
  const onClickDelete = () => {
    const updateUsers = users.filter((user) => user.id !== userIndex);
    setUsers(updateUsers);
    setPrintUsers(updateUsers);

    const updatedFormState = formState.filter((index) => index !== userIndex);
    setFormState(updatedFormState);
  };

  return (
    <>
      <Container>
        <Headers>
          <h1>User - {userIndex}</h1>
          <Button
            type="X"
            size="small"
            onClick={onClickDelete}
            submit={false}
          />
        </Headers>
        <p>Name</p>
        <NameInput
          value={name}
          onChange={onChangeName}
          valid={validName ? 0 : 1}
        />
        {validName && <span>Name must be at least 3 charaters long.</span>}
        {(duplication || InputDuplication) && (
          <span>The name '{name}' is duplicated</span>
        )}
        <p>Password</p>
        <PasswordInput
          value={password}
          type="password"
          onChange={onChangePassword}
          valid={validPassword ? 0 : 1}
        />
        {validPassword && (
          <span>Password must be at least 6 charaters long.</span>
        )}
      </Container>
      {!buttonState && (
        <ButtonBox>
          <Button
            type="Add User"
            size="medium"
            onClick={onClickAddUser}
            submit={false}
          />
          <Button
            type="Confirm"
            size="medium"
            onClick={onClickConfirm}
            submit={submit}
          />
        </ButtonBox>
      )}
    </>
  );
}

export default FormComponent;
