import React, { useState } from "react";

const DashboardSettings = () => {
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!newPassword || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simulate API call
    // Payload: { token, newPassword }
    setTimeout(() => {
      setSuccess("Password reset successfully!");
      setToken("");
      setNewPassword("");
      setConfirmPassword("");
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto  lg:mt-36 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Reset Password</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="font-medium">
          New Password
          <input
            type="password"
            className="mt-1 block w-full border rounded px-3 py-2"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </label>
        <label className="font-medium">
          Confirm Password
          <input
            type="password"
            className="mt-1 block w-full border rounded px-3 py-2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {error && <div className="text-red-600">{error}</div>}
        {success && <div className="text-green-600">{success}</div>}
        <button
          type="submit"
          className="bg-blue-900 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default DashboardSettings;
