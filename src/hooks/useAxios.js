import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from 'uuid';

function useAxios() {
    const [cards, setCards] = useState([]);
    const addCard = async (url) => {
      const response = await axios.get(url);
      setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    }
    return [cards, addCard];
}
export default useAxios;