import { getUsers, getUser ,addUser,getUserByID, updateUser } from '../repositories/users.js';

export const getUsersService = async () => {
    try {
        const users = await getUsers();
        return users;
    }
    catch (error) {
        throw new Error(error.message);
    }

}

export const getUserService = async (username,password) => {
    try {
        const user = await getUser(username,password);
        return user;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

export const addUserService = async (user) => {
    try {
        const newUser = await addUser(user);
        return newUser;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

export const getUserByIDService = async (id) => {
    try {
        const user = await getUserByID(id);
        return user;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

export const updateUserService = async (id, user) => {
    try {
        const updatedUser = await updateUser(id, user);
        return updatedUser;
    }
    catch (error) {
        throw new Error(error.message);
    }
}