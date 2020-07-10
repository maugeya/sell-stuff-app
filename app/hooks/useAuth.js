import { useContext } from "react"
import AuthContext from "../auth/context"
import authStorage from "../auth/storage"

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext)

  const logout = () => {
    setUser(null)
    authStorage.removeToken()
  }

  return { user, setUser, logout }
}
