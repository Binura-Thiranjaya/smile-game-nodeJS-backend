import {getDaresService, getDareService} from '../services/dares.js';
//Get all dares
export const getDaresController = async (req, res) => {
    try {
        const dares = await getDaresService();
        res.send(dares);
    } catch (error) {
        throw new Error(error.message);
    }
    
}
export const getDareController = async (req, res) => {
    try {
        const dare = await getDareService(req.params.id);
        res.send(dare);
    } catch (error) {
        throw new Error(error.message);
    }
    
}
