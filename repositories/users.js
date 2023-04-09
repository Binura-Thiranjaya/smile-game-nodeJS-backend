import fakeUser from "../data/fakeUsers.json" assert { type: "json" };
import User from "../models/user.js";

export const getUsers = async () => {
  const users = await User.find();
  return users;
};

export const getUser = async (username, password) => {
  const users = await User.find();
  const user = users.find(
    (user) => user.name === username && user.password === password
  );
  if (user) {
    return user;
  } else {
    return "No user found";
  }
};

export const addUser = async (user) => {
    //check if user already exists
    const users = await User.find();
    const userExists = users.find(
        (users) =>  user.email === users.email
    );
    if (userExists) {
        return "User already exists";
    }
    else{
        const newUser = new User(user);
        const result = await newUser.save();
        return result;
    }
};

export const getUserByID = async (id) => {
  const users = await User.find();
  const user = users.find(
    (user) => user.id === id
  );
  if (user) {
    return user;
  } else {
  return "id";
  }
};

export const updateUser = async (id, user) => {
//edit the user  with the id and using the user object
  const users = await User.find();
  const userExists = users.find(
    (users) =>  id === users.id 
  );
  if (userExists) {
    userExists.name = user.name;
    userExists.email = user.email;
    userExists.password = user.password;
    userExists.save();
    return userExists;
  }
  else{
    return "User does not exist";
  }
}

