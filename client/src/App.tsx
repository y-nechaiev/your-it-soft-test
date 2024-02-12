import { useAppDDispatch } from "./redux/hooks/hooks"
import { getTokenFromLocalStorage } from "./helpers/localstorage.helper";
import { AuthService } from "./services/auth.service";
import { login, logout } from "./redux/user/userSlice";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"

function App() {
  const dispatch = useAppDDispatch();

  const checkAuth = async () => {
    const token = getTokenFromLocalStorage();

    try {
      if (token) {
        const data = await AuthService.getProfile();
        
        if (data) {
          dispatch(login(data));
        } else {
          dispatch(logout());
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    checkAuth();
  }, [])

  return <RouterProvider router={router} />
}

export default App
