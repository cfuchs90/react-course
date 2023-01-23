import {useEffect, useState} from "react";

const useFetch = function (url) {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("could not fetch data for that resource");
                }

                return res.json();
            })
            .then((data) => {
                setData(data);
                setError(null);
                setIsPending(false);
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
                setIsPending(false);
            })
    }, [url]);

    return {
        data: data,
        error: error,
        isPending: isPending
    }
}

export default useFetch;