import { CHANGE_LANG } from "../Constants/LanguageConstants"

export const changeLanguageACTION=(lang)=> async (dispatch,getState)=>{
dispatch({
    type:CHANGE_LANG,
    payload:
    lang
    
})
localStorage.setItem("mainLang",JSON.stringify(getState().language))
}