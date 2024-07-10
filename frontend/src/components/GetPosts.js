import React, {useEffect, useState} from 'react';
import axios from "axios";

// Let's try get default posts
export default function GetPosts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // GET All posts from API
        let postUrl = `${process.env.REACT_APP_WP_API_ROOT}/posts`;
        axios.get(postUrl)
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.log(`Cannot get posts: `, error);
            });
    }, []);

    // Load posts when it's done
    return (
        <React.Fragment>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Content</th>
                </tr>
                </thead>
                <tbody>
                {posts
                    ? posts.map(post => (
                        <tr key={post.id}>
                            <td data-testid='title'>{post.title.rendered}</td>
                            <td data-testid='content'>{post.content.rendered}</td>
                        </tr>
                    ))
                    : <p>Loading Review ...</p>}
                </tbody>
            </table>
        </React.Fragment>
    )
        ;
}