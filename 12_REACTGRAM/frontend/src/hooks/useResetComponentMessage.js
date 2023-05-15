//redux
import { resetMessage } from "../slice/photoSlice";

export const useResetComponentMessage = (dispatch) => {
    return () => {
      setTimeout(() => {
        dispatch(resetMessage())
      }, 2000)
    }
}