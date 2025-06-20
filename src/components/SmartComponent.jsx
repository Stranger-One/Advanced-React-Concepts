import React, { useEffect, useState } from 'react';
import DumbComponent from './DumbComponent';

// This component is a smart component that uses the DumbComponent
const SmartComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      console.log(data);
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold text-center">Smart Component</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {posts.map((post) => (
          <DumbComponent key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default SmartComponent;
