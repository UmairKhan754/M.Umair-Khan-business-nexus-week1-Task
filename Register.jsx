import { useState } from "react";
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import InputField from "../components/InputField";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    else if (formData.name.length < 3)
      newErrors.name = "At least 3 characters";

    if (!formData.email)
      newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.password)
      newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Min 8 characters";
    else if (!/[A-Z]/.test(formData.password))
      newErrors.password = "Must include uppercase letter";
    else if (!/[0-9]/.test(formData.password))
      newErrors.password = "Must include a number";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm password";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1500));
      console.log("Registered:", formData);
      alert("Account created successfully!");
    } catch (err) {
      console.error("Error:", err);
      alert("Registration failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-700 to-pink-600 p-6 text-center">
          <h2 className="text-3xl font-bold text-white">Create Account</h2>
          <p className="text-white/90 mt-2 text-sm">Join the platform today</p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              id="name"
              label="Full Name"
              type="text"
              icon={<FaUser />}
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              error={errors.name}
            />
            <InputField
              id="email"
              label="Email Address"
              type="email"
              icon={<FaEnvelope />}
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              error={errors.email}
            />
            <InputField
              id="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              icon={<FaLock />}
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              error={errors.password}
              toggleEye
              showEye={showPassword}
              setShowEye={setShowPassword}
              hint="Min 8 chars, 1 uppercase, 1 number"
            />
            <InputField
              id="confirmPassword"
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              icon={<FaLock />}
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              error={errors.confirmPassword}
              toggleEye
              showEye={showConfirmPassword}
              setShowEye={setShowConfirmPassword}
            />

            {/* Terms */}
            <div className="flex items-start text-sm">
              <input
                type="checkbox"
                required
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label className="ml-2 text-gray-700">
                I agree to the{" "}
                <a href="/terms" className="text-indigo-600 hover:underline">
                  Terms
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-indigo-600 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 text-white font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 transition ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  <span>Creating...</span>
                </div>
              ) : (
                "Register"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-indigo-600 hover:text-indigo-500 font-medium"
            >
              Login here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
