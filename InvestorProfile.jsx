import { useState } from "react";

export default function InvestorProfile() {
  const [formData, setFormData] = useState({
    name: "John Capital",
    bio: "Angel investor focused on early-stage startups.",
    interests: "FinTech, EdTech, SaaS",
    portfolio: "EduBoost, PayLink",
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setProfileImage(imgURL);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Investor Profile:", formData);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex justify-center items-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Investor Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div className="flex items-center gap-5">
            <img
              src={profileImage || "https://via.placeholder.com/100x100.png?text=Upload"}
              alt="Profile"
              className="h-24 w-24 rounded-full object-cover border"
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Profile Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="text-sm text-gray-700"
              />
            </div>
          </div>

          {/* Full Name */}
          <InputField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          {/* Bio */}
          <InputField
            label="Bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            multiline
          />

          {/* Interests */}
          <InputField
            label="Investment Interests"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
          />

          {/* Portfolio */}
          <InputField
            label="Portfolio Companies"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
          />

          {/* Save */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}

function InputField({ label, name, value, onChange, multiline }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={4}
          className="w-full border rounded-lg p-3 resize-none focus:ring-2 focus:ring-indigo-300"
        />
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-300"
        />
      )}
    </div>
  );
}
