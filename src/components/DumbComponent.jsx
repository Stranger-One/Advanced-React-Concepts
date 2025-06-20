import React from 'react';

const DumbComponent = ({ post }) => {
  return (
    <div className="max-w-md w-full mx-auto bg-white shadow-md rounded-xl p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Post #{post.id}
      </h2>
      <h3 className="text-lg font-bold text-indigo-600 mb-2 line-clamp-1">
        {post.title}
      </h3>
      <p className="text-gray-700 whitespace-pre-line line-clamp-2">
        {post.body}
      </p>
      <p className="text-sm text-gray-500 mt-4">User ID: {post.userId}</p>
    </div>
  );
};

export default DumbComponent;
