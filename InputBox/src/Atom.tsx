import { atom } from "recoil";

export type UserType = {
  userId: string;
  userPassword: string;
  duplicationName: boolean;
  id: number;
};

export const Atom = atom<UserType[]>({
  key: "usersState",
  default: [],
});
