import React, { createContext, useContext, useState} from 'react';

const ResultContext = createContext();
const baseUrl = 'https://real-time-web-search.p.rapidapi.com/search';

export const ResultContextProvider = ({ children}) => {
    const[results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}` ,{
            method: 'GET',
	        headers: {
		        'X-RapidAPI-Key': '15cf23b90amsh6e687971577a962p187d3ajsn39133df81ee5',
	        	'X-RapidAPI-Host': 'real-time-web-search.p.rapidapi.com'
	            }               
        });
    
     const data = await response.json();
    //  console.log({data});
     setResults(data.data);
     setIsLoading(false);
    }

    return(
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);
