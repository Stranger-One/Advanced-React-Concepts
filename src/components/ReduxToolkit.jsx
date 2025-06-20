import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/usersSlice';

const ReduxToolkit = () => {
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handlefetchUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-6">Redux Toolkit Example</h1>
      <button
        disabled={loading}
        onClick={handlefetchUsers}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer duration-300 disabled:opacity-50"
      >
        {loading ? 'Loading...' : 'Fetch Users'}
      </button>
      {error && <p className="text-red-500 mt-4">Error: {error}</p>}
    </div>
  );
};

export default ReduxToolkit;
