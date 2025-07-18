import { FormatContext } from '../content/FormatProvider'
import { useContext } from 'react'

/**
 * Custom hook that returns the current value of the BlogContext.
 * @returns {Object} The current value of the BlogContext.
 */
const useFormat = () => {
    return useContext(FormatContext)
}

export default useFormat