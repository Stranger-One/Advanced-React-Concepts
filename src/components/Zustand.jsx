import React, { useEffect } from 'react';
import useUserStore from '../zustand/store';
import axios from 'axios';

const Zustand = () => {
  const { users, loading, error, setUsers, setLoading, setError } =
    useUserStore();

  const handlefetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (users) {
      console.log('Fetched users:', users);
    }
  }, [users]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-6">Zustand Example</h1>
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

export default Zustand;
