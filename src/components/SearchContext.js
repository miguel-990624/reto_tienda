import { createContext, useContext, useState } from "react"
import data from "./data.json"

const SearchContext = createContext(undefined);

export const SearchProvider = ({children}) => {
    const val = data;
    const [mtg, setMtg] = useState(val); 
    const [searchVal, setSearchVal] = useState(""); 

    const handleSearchClick = () => { 
        if (searchVal === "") { setMtg(val); return;} 
        const filterBySearch = val.filter((item) => { 
            if (item.name.toLowerCase() 
                .includes(searchVal.toLowerCase())) { return item.name; }
            else if (item.description.toLowerCase() 
                .includes(searchVal.toLowerCase())) { return item.description; }
            else{
                return console.error();
            } 
        }) 
        setMtg(filterBySearch);
        setSearchVal("");
    } 

    return (
        <SearchContext.Provider
        value={{
            val,
            mtg,
            searchVal,
            setSearchVal,
            handleSearchClick,
        }}>
            {children}
        </SearchContext.Provider>
    );
}

export const useSearchContext = () => useContext(SearchContext);