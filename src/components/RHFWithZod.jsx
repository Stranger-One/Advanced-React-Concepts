import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const RHFWithZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    // Handle form submission
    console.log('Form Data:', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-10 py-8 max-w-md mx-auto bg-gray-200 shadow-md rounded"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">
        React Hook Form Example
      </h2>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 font-semibold mb-2"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { required: 'Email is required' })}
          placeholder="Enter your email"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-semibold mb-2"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          {...register('password', { required: 'Password is required' })}
          placeholder="Enter your password"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold transition-colors duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default RHFWithZod;
