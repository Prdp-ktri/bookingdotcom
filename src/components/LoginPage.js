import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://booking-backend-sc0y.onrender.com")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching login details", err));
  }, []);

  const loginUser = (e) => {
    e.preventDefault();
    let user = data.find((v) => v.email === email && v.password === pwd);
    if (user) {
      toast("Welcome to Booking.com!");
      navigate("/");
    } else {
      toast("Invalid buyer login credentials, Try again!");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">
        <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Sign in to Booking.com
          </h2>
          <form onSubmit={loginUser} className="space-y-5">
            <div>
              <label
                htmlFor="emailInp"
                className="block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                value={email}
                id="emailInp"
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="new-email"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="pwInp"
                className="block text-sm font-semibold text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                value={pwd}
                id="pwInp"
                onChange={(e) => setPwd(e.target.value)}
                required
                autoComplete="new-password"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-600 text-sm mt-6">
            Don’t have an account?{" "}
            <span
              className="text-blue-600 font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/newuser")}
            >
              Register here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
