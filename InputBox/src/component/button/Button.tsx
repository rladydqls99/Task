import { Btn } from "./styles";

type ButtonType = {
  type: string;
  size: string;
  onClick(): void;
  submit: boolean;
};
function Button({ type, size, onClick, submit }: ButtonType) {
  let style;
  switch (size) {
    case "medium":
      style = {
        height: "25px",
        width: "80px",
        border: "1.5px solid black",
      };
      break;
    case "small":
      style = {
        height: "24px",
        width: "24px",
        border: "2px solid black",
      };
      break;
    default:
      style = {
        height: "25px",
        width: "80px",
        border: "1.5px solid black",
      };
      break;
  }

  return (
    <Btn
      onClick={onClick}
      style={style}
      submit={submit ? 0 : 1}
      disabled={submit ? true : false}
    >
      {type}
    </Btn>
  );
}

export default Button;
