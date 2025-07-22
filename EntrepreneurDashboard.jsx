import { useEffect, useState } from "react";

export default function EntrepreneurDashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Simulated API call
    const mockRequests = [
      {
        id: 1,
        investorName: "Alice Ventures",
        message: "Interested in your startup. Let’s talk!",
        status: "Pending",
        avatar: "https://i.pravatar.cc/150?img=10",
      },
      {
        id: 2,
        investorName: "Bright Capital",
        message: "Can we schedule a call this week?",
        status: "Accepted",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      {
        id: 3,
        investorName: "Vision Fund",
        message: "Need more details about your product.",
        status: "Declined",
        avatar: "https://i.pravatar.cc/150?img=15",
      },
    ];
    setRequests(mockRequests);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 p-6 text-white flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Collaboration Requests
        </h2>

        {requests.length === 0 ? (
          <p className="text-center text-gray-500">No requests yet.</p>
        ) : (
          <ul className="space-y-4">
            {requests.map((req) => (
              <li
                key={req.id}
                className="bg-gray-50 p-4 rounded-lg flex items-center justify-between hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={req.avatar}
                    alt={req.investorName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {req.investorName}
                    </h3>
                    <p className="text-gray-600 text-sm">{req.message}</p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    req.status === "Accepted"
                      ? "bg-green-100 text-green-700"
                      : req.status === "Declined"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {req.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
