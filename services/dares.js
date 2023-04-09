import {getDares, getDare} from '../repositories/dares.js';
//Get all dares
export const getDaresService = async () => {
    try {
        const dares = await getDares();
        return dares;
    }
    catch (error) {
        throw new Error(error.message);
    }

}
export const getDareService = async (id) => {
    try {
        const dare = await getDare(id);
        return dare;
    }
    catch (error) {
        throw new Error(error.message);
    }

}