import {createContext, useContext } from "react";
import { toast } from "react-toastify";


const ToastContext = createContext("");

const ToastProvider = ({children}) =>{


    const toastFn = (toastMsg) => {
            toast(toastMsg, {
            position: "bottom-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
          });
        };
    
    const value = {
        toastFn,
    }

    return(
        <ToastContext.Provider value={value}>
            {children}
        </ToastContext.Provider>
    )
}


const useToast = () => useContext(ToastContext);

export {useToast, ToastProvider}