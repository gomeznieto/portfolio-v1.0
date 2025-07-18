import { useContext } from "react"
import { postContext } from "../content/PostProvider"

const usePost = () => {
    return useContext(postContext)
}

export default usePost;