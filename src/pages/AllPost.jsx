import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";

function AllPosts() {
  // const [posts, setPosts] = useState([]);

  const posts = useSelector((state) => state.blog.blogData);
  // console.log(posts);
  // setPosts(selector);
  useEffect(() => {
    // setPosts(selector);
    // console.log(selector);
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts ? (
            posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard
                  $id={post.$id}
                  title={post.title}
                  featuredImage={post.featuredImage}
                />
              </div>
            ))
          ) : (
            <h1>Aabhi post nahi ha</h1>
          )}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
