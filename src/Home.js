import React, {useEffect, useState} from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [isPending, setIsPending] = useState(true);


    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => {
                console.log(res);
                // if (res.ok) {
                    return res.json();
                // }
            })
            .then((data) => {
                setBlogs(data);
                setIsPending(false);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }, []);


    return (
        <div className="home">
            {isPending && <div>Loading .....</div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
        </div>
    );
};

export default Home;