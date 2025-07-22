import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const mockEntrepreneurs = [
  {
    id: 1,
    name: "Umair Khan",
    startup: "GreenTech Solutions",
    pitch: "Building sustainable agriculture with AI-powered irrigation.",
  },
  {
    id: 2,
    name: "Ali Raza",
    startup: "EduVerse",
    pitch: "Revolutionizing online learning with immersive experiences.",
  },
  {
    id: 3,
    name: "Fatima Zubair",
    startup: "HealthTrack",
    pitch: "Remote monitoring for chronic health conditions.",
  },
];

export default function InvestorDashboard() {
  const [entrepreneurs, setEntrepreneurs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setEntrepreneurs(mockEntrepreneurs);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-600 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white mb-8">Entrepreneur Directory</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {entrepreneurs.map((entrepreneur) => (
          <div
            key={entrepreneur.id}
            className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-800">{entrepreneur.name}</h2>
            <p className="text-indigo-600 font-medium">{entrepreneur.startup}</p>
            <p className="text-gray-600 mt-2 text-sm">{entrepreneur.pitch}</p>
            <button
              onClick={() => navigate(`/profile/entrepreneur/${entrepreneur.id}`)}
              className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
