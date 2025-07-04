import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "http://localhost:3000/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-button/90">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 p-8 rounded shadow-md w-full max-w-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>

        {success ? (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
            Password reset link has been sent to your email if it exists in our
            system.
            <Link to="/login" className="text-blue-500 ml-2 font-bold text-lg">
              Login
            </Link>
          </div>
        ) : (
          <>
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

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-primary-button text-white py-2 rounded mb-8 hover:bg-teal-950 cursor-pointer transition ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Sending..." : "Forgot Password"}
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
