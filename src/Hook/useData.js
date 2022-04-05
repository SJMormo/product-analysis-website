import { useEffect, useState } from "react";

const useData = () => {
    const [fetchData, setFetchData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFetchData(data));
    }, [])

    return [fetchData, setFetchData];
}

export default useData;