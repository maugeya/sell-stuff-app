import { useState } from "react"

export default useApi = (apiFunc) => {
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const request = async () => {
    setLoading(true)
    const res = await apiFunc()
    setLoading(false)

    if (!res.ok) return setError(true)
    setError(false)
    setData(res.data)
  }

  return { data, error, loading, request }
}
