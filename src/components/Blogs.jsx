import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
    const { posts, loading } = useContext(AppContext);

    return (
        <div className="container mx-auto py-4">
            {loading ? (
                <Spinner />
            ) : posts.length === 0 ? (
                <div>
                    <p className="text-lg font-bold">NO POST FOUND</p>
                </div>
            ) : (
                posts.map((post) => (
                    <div key={post.id} className="my-4 p-4 border border-gray-300 rounded">
                        <p className="text-xl font-bold">{post.title}</p>
                        <p>
                            By <span className="font-bold">{post.author}</span> on{" "}
                            <span className="italic">{post.category}</span>
                        </p>
                        <p>Posted on {post.date}</p>
                        <p>{post.content}</p>
                        <div className="mt-2">
                            {post.tags.map((tag, index) => (
                                <span key={index} className="mr-2 text-blue-500">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Blogs;
