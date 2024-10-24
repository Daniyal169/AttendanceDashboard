import { createContext, useContext } from "react";


export const UpdateContext = createContext({
    totalStudent: 10,
    presentStudent: 10,
    absentStudent: 0,
    leaveStudent: 0,
    date: "",
    presentPercent: () => { },
    absentPercent: () => { },
    leavePercent: () => { },
})

export const useUpdate = () => {
    return useContext(UpdateContext)
}


export const UpdateProvider = UpdateContext.Provider;