import { useState, useRef, useEffect } from 'react';
import searchList from '../data/search-list.json';
import { useHistory } from "react-router-dom";


const useForm = () => {
    const [inputActive, setInputActive] = useState(false);
    const [inputData, setInputData] = useState("");
    const [displayData, setDisplayData] = useState([]);
    const refInput = useRef(null);

    let history = useHistory();


    const inputIn = () => {
        setInputActive(true);
    }

    const inputOut = e => {
        if (refInput.current && !refInput.current.contains(e.target)) {
            setInputActive(false);
        }
    }
   
    const inputEmpty = e => {
        if (e.target.value === '') setInputActive(false);
        else setInputActive(true);
    }

    const updateInput = (e) => {
        setInputData(e.target.value);
    }

    const search = (e) => {
        e.preventDefault();
        if(inputData !== "") {
            const page = '/search/' + inputData;
            history.push(page)
        }
    }

    useEffect(() => {
        const readData = () => {
            const text = inputData.toLowerCase(); 
            const dataFiltered = searchList.filter(r => r.altText.toLowerCase().includes(text));
            setDisplayData(dataFiltered);
        }
        readData();
    }, [inputData])

    useEffect(() => {
        document.addEventListener('change', inputEmpty, true)
        document.addEventListener('click', inputOut, true);
        return () => {
            document.addEventListener('change', inputEmpty, true)
            document.addEventListener('click', inputOut, true);
        }
    });

    return { inputActive, refInput, inputIn, displayData, updateInput, search };
}

export default useForm;
