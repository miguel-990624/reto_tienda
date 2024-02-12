import { createContext, useContext, useEffect, useState } from "react"
import data from "./data.json"

const SearchContext = createContext(undefined);

export const SearchProvider = ({children}) => {
    const [mtg, setMtg] = useState([]);
    const [searchVal, setSearchVal] = useState("");
    const [cart, setCart] = useState([]);

    const promise = Promise.resolve(data);

    useEffect(() => {const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            promise.then(val => setMtg(val));
        }, 1000);
    });},[data]);

    const handleSearchClick = () => {
        if (searchVal === "") { setMtg(data); return;}
        const filterBySearch = mtg.filter((item) => {
            if (item.name.toLowerCase()
                .includes(searchVal.toLowerCase())) { return item.name; }
            else if (item.description.toLowerCase()
                .includes(searchVal.toLowerCase())) { return item.description; }
        })
        setMtg(filterBySearch);
        setSearchVal("");
    }

    const getItemQuantity =(id) => {
        return cart.find(item => item.id === id)?.quantity || 0
    }

    const increaseItemQuantity = (id) =>{
        setCart(currItem => {
            if (currItem.find(item => item.id === id) == null){
                return[...currItem, {id, quantity:1}]
            }
            else{
                return currItem.map(item => {
                    if(item.id === id){
                        return { ...item, quantity: item.quantity +1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    const decreaseItemQuantity = (id) =>{
        setCart(currItem => {
            if (currItem.find(item => item.id === id) == null){
                return[...currItem, {id, quantity:1}]
            }
            else{
                return currItem.map(item => {
                    if(item.id === id){
                        return { ...item, quantity: item.quantity -1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    const removeItem = (id) =>{
        setCart(currItem => {
            return currItem.filter(item => item.id !== id)
        })
    }

    return (
        <SearchContext.Provider
        value={{
            mtg,
            searchVal,
            cart,
            setSearchVal,
            handleSearchClick,
            getItemQuantity,
            increaseItemQuantity,
            decreaseItemQuantity,
            removeItem,
        }}>
            {children}
        </SearchContext.Provider>
    );
}

export const useSearchContext = () => useContext(SearchContext);