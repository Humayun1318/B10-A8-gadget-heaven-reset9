import { toast } from "react-toastify"



export const successToast = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 5000,
  })
}
export const warningToast = (message) => {
  toast.warn(message, {
    position: "top-right",
    theme: "colored",
    autoClose: 5000,
  })
}
export const infoToast = (message) => {
  toast.info(message, {
    position: "top-right",
    theme: "colored",
    autoClose: 5000,
  })
}
