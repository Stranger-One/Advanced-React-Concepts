import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useUserStore = create(
  devtools(
    (set) => ({
      users: null,
      loading: false,
      error: null,
      setUsers: (users) => set({ users }),
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
    }),
    {
      name: 'usersStore',
    }
  )
);

export default useUserStore;
