import Dares from '../data/dare.json' assert { type: "json" };

export const getDares = async ()=> {
    try{
        return Dares.dares
    }catch(error){
        throw new Error(error.message);
    }
}

export const getDare = async (id) => {
    try{
        return Dares.dares[id]
    }catch(error){
        throw new Error(error.message);
    }
}
