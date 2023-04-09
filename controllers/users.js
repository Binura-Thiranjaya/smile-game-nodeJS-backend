import { getUsersService, getUserService ,addUserService,getUserByIDService, updateUserService} from '../services/users.js';
export const getUsersController = async (req, res) => {
    try {
        const users = await getUsersService();
        res.send(users);
        // res.send('Welcome to SMILE GAME: getUsersController')
    } catch (error) {
        throw new Error(error.message);
    }
    
}
export const getUserController = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await getUserService(username, password);
        res.status(200).send(user);
    } catch (error) {
        throw new Error(error.message);
    }
    
}
export const addUserController = async (req, res) => {
    try{
        const user = await addUserService(req.body);
        res.status(200).send(user);
    }
    catch(error){
        throw new Error(error.message);
    }
}
export const getUserByIDController = async (req, res) => {
    try{
        const user = await getUserByIDService(req.params.id);
        res.status(200).send(user);
    }
    catch(error){
        throw new Error(error.message);
    }
}

export const updateUserController = async (req, res) => {
    try{
        const user = await updateUserService(req.params.id, req.body);
        res.status(200).send(user);
    }
    catch(error){
        throw new Error(error.message);
    }
}