export interface User {
  id: string;
  username: string;
  room: string;
}

export var users: User[] = [];

export function getRoomUsers(room: string): User[] {
  return users.filter((user) => user.room === room);
}

export function addUser(user: User): User {
  users.push(user);
  return user;
}

export function removeUser(user: User): User {
  users = users.filter(
    (user_in_room) => user_in_room.username === user.username
  );
  return user;
}

export function getCurrentUser(id: string): User {
    return users.filter(user => user.id === id)[0];
}