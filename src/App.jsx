import { Route, Routes } from "react-router-dom"
import { Register } from "./components/auth/Register"
import { Login } from "./components/auth/Login"
import { ApplicationView } from "./views/ApplicationView"
import{Authorized} from "./views/Authorized"


export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationView />
          </Authorized>
        }
      />
    </Routes>
  )
}
