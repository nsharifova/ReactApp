import { CHANGE_LANG } from "../Constants/LanguageConstants";

export const LanguageReducers=(state={language:""},{type,payload})=>{
    switch (type) {
        case CHANGE_LANG:
            if(payload){
                return{
                    ...state,
                    language:payload,
                 }
            }
            
       
    break;
        default:
            return state;
           
    }
}