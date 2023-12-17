import FormComponent from "./component/form/Form";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { Atom, UserType } from "./Atom";
import styled from "styled-components";

function App() {
  const [confirmState, setConfirmState] = useState(false);
  const [formState, setFormState] = useState([0]);
  const [printUsers, setPrintUsers] = useState<UserType[]>([]);
  const users = useRecoilValue(Atom);

  return (
    <div>
      {formState.map((userIndex) => (
        <FormComponent
          key={userIndex}
          userIndex={userIndex}
          formState={formState}
          setFormState={setFormState}
          setConfirmState={setConfirmState}
          setPrintUsers={setPrintUsers}
          duplication={
            users && users[userIndex] ? users[userIndex].duplicationName : false
          }
        />
      ))}

      {confirmState && (
        <PrintContainer>
          {printUsers.map((user, index) => (
            <PrintBox key={index}>
              <p>Name: {user.userId}</p>
              <p>Password: {user.userPassword}</p>
            </PrintBox>
          ))}
        </PrintContainer>
      )}
    </div>
  );
}

export default App;

const PrintContainer = styled.div`
  width: 500px;
  background-color: lightgray;

  margin-top: 10px;
  padding: 10px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const PrintBox = styled.div`
  margin-bottom: 0px;

  p {
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 12px;
  }
`;
