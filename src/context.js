

import * as React from 'react'
const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
  };

export const CountContext = React.createContext()


export const CountProvider=({children}) =>{
    const [us,setus] = React.useState({})
   const fun =()=>{
    setus("nooo")
   }
    
    const value = 'hira'
    return  ( <><CountContext.Provider value= {{us:us,user:function rain(param) {
      setus(param)
    }}} >{children}</CountContext.Provider></>)
  }
  