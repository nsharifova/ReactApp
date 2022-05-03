import React, { createContext, useContext } from 'react'

export const LanguageContext=createContext();
export const LanguageProvider=({children})=>{


        return (
          <LanguageContext.Provider value={"AZ"}>
             {children}
          </LanguageContext.Provider>
        )


}

export const useLanguage=()=>useContext(LanguageContext)

