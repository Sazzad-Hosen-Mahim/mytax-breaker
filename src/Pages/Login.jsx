import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    // alert(`Email: ${email}\nPassword: ${password}`);
  };
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-button/90">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 p-8 rounded shadow-md w-full max-w-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary-button text-white py-2 rounded mb-8 hover:bg-teal-950 cursor-pointer transition"
        >
          Login
        </button>
        <p className="text-primary-button-text">
          Do not have an account?{" "}
          <button
            className="text-blue-400 cursor-pointer font-semibold"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
};
export default Login;
