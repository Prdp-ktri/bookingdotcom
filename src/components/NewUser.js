import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function NewUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [details, setDetails] = useState([]);
  const navigate = useNavigate();

  const handleNewUser = (e) => {
    e.preventDefault();

    let obj = {
      name,
      email,
      password,
    };
    console.log(obj);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify(obj),
    }).then((res) => {
      if (res) {
        toast("User added for making bookings on booking.com");
        navigate("/login");
      }
    });
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">
        <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Create Your Account
          </h2>
          <form onSubmit={handleNewUser} className="space-y-5">
            <div>
              <label
                htmlFor="nameInp"
                className="block text-sm font-semibold text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                value={name}
                id="nameInp"
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="new-name"
                placeholder="Enter your full name"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
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
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="passwordInp"
                className="block text-sm font-semibold text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                id="passwordInp"
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
                placeholder="Create a password"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Register New User
            </button>
          </form>
          <p className="text-center text-gray-600 text-sm mt-6">
            Already have an account?{" "}
            <span
              className="text-blue-600 font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/loginpage")}
            >
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
