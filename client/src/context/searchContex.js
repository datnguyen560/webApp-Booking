import { createContext } from "react"

const INITIAL_VALUE = {
    city: undefined,
    dates: [],
    options:  {
        adult: undefined,
        children: undefined,
        room: undefined
    }
}
export const SearchContext = createContext(INITIAL_VALUE)