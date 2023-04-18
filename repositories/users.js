import fakeUser from "../data/fakeUsers.json" assert { type: "json" };
import User from "../models/user.js";
import bcrypt from "bcrypt";

export const getUsers = async () => {
  const users = await User.find();
  return users;
};

export const getUser = async (username, password) => {
  const users = await User.find();
  const user = users.find(
    (user) => user.name === username
  );
  if (user) {
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      return user;
    } else {
      return "Password is incorrect";
    }
  } else {
    return "No user found";
  }
};

export const addUser = async (user) => {
    //Check if user already exists
    const users = await User.find();
    const userExists = users.find(
        (users) =>  user.email === users.email
    );
    if (userExists) {
        return "User already exists";
    }else{

    const newUser = new User(user);
    const password = newUser.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    newUser.password = hashedPassword;
    const result = await newUser.save();
    return result;
    }
    
    // const users = await User.find();
    // const userExists = users.find(
    //     (users) =>  user.email === users.email
    // );
    // if (userExists) {
    //     return "User already exists";
    // }
    // else{
    //     const newUser = new User(user);
    //     const result = await newUser.save();
    //     return result;
    // }
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
//edit the user  with the id and using the user object and encrypt the password
  const users = await User.find();
  const userExists = users.find(
    (users) =>  id === users.id
  );
  if (userExists) {
    const password = user.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    userExists.name = user.name;
    userExists.email = user.email;
    userExists.password = hashedPassword;
    userExists.save();
    return userExists;
  }
  else{
    return "User does not exist";
  }
      
  // const users = await User.find();
  // const userExists = users.find(
  //   (users) =>  id === users.id 
  // );
  // if (userExists) {
  //   userExists.name = user.name;
  //   userExists.email = user.email;
  //   userExists.password = user.password;
  //   userExists.save();
  //   return userExists;
  // }
  // else{
  //   return "User does not exist";
  // }
}

