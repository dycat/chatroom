import { User, users } from "./user";

const { addUser, isUserExist } = require("./user");
const newUser: User = { username: "Ian", room: "Dev", id: "abcde" };
const newUser2: User = { username: "Yan", room: "Dev", id: "abcdef" };
const fakeUser: User = { username: "Ian", room: "Dev", id: "abcde" };
// let {users} = require("./user");



beforeEach(() => {
    users.length = 0
})

test("add a user", () => {
  addUser(newUser);
  expect(users.length).toBe(1);
});

test("Can detect a user exist", () => {
  expect(isUserExist(newUser)).toBeFalsy();

  addUser(newUser);
  expect(isUserExist(fakeUser)).toBeTruthy();
});
