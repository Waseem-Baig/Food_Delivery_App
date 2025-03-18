import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  FaEdit,
  FaSave,
  FaTimes,
  FaUser,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaHome,
  FaCog,
  FaBell,
} from "react-icons/fa";

const ProfilePage = () => {
  const { user, updateUser } = useAuth();
  const [currentView, setCurrentView] = useState("profile");
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    location: user?.location || "",
    email: user?.email || "",
    phone: user?.phone || "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSave = () => {
    updateUser(profileData);
    setCurrentView("profile");
  };

  const handleCancel = () => {
    setProfileData({
      name: user?.name || "",
      location: user?.location || "",
      email: user?.email || "",
      phone: user?.phone || "",
      password: "",
    });
    setCurrentView("profile");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-100 to-gray-300 xs:flex-col sm-xs:flex-col">
      {/* Sidebar */}
      <div className="bg-gradient-to-br from-red-400 to-red-600 w-auto p-6 shadow-2xl flex flex-col justify-between text-white">
        <div className="flex flex-col items-center">
          <img
            src={user?.profileImage || "https://via.placeholder.com/120"}
            alt="Profile"
            className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-lg transition-transform duration-300 transform hover:scale-105"
          />
          <h2 className="mt-4 text-2xl font-bold">{profileData.name}</h2>
          <p className="text-gray-200 text-sm">{profileData.location}</p>
        </div>

        <nav className="mt-10 space-y-3 xs:flex xs:flex-col xs:justify-center xs:items-center sm-xs:flex sm-xs:flex-col sm-xs:justify-center sm-xs:items-center">
          <button
            onClick={() => setCurrentView("profile")}
            className="flex items-center py-3 px-4 rounded-lg bg-white hover:bg-red-600 transition-all duration-300 shadow-lg w-[100%] text-red-500 hover:text-white xs:w-[60%] sm-xs:w-[60%] "
          >
            <FaHome className="mr-3" />
            Profile
          </button>
          <button
            onClick={() => setCurrentView("editProfile")}
            className="flex items-center py-3 px-4 rounded-lg bg-white hover:bg-red-600 transition-all duration-300 shadow-lg w-[100%] text-red-500 hover:text-white xs:w-[60%] sm-xs:w-[60%]"
          >
            <FaEdit className="mr-3" />
            Edit Profile
          </button>
          <button
            onClick={() => setCurrentView("changePassword")}
            className="flex items-center py-3 px-4 rounded-lg bg-white hover:bg-red-600 transition-all duration-300 shadow-lg w-[100%] text-red-500 hover:text-white xs:w-[60%] sm-xs:w-[60%]"
          >
            <FaCog className="mr-3" />
            Change Password
          </button>
          <button
            onClick={() => setCurrentView("notifications")}
            className="flex items-center py-3 px-4 rounded-lg bg-white hover:bg-red-600 transition-all duration-300 shadow-lg w-[100%] text-red-500 hover:text-white xs:w-[60%] sm-xs:w-[60%]"
          >
            <FaBell className="mr-3" />
            Notifications
          </button>
        </nav>

        <div className="mt-10 text-center text-sm">
          <p>&copy; 2024 Your Company</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-50 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="p-8">
            {currentView === "profile" && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaUser className="text-indigo-600 text-xl" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                      Name
                    </h3>
                    <p className="text-gray-600">{profileData.name}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-indigo-600 text-xl" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                      Location
                    </h3>
                    <p className="text-gray-600">{profileData.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-indigo-600 text-xl" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                      Email
                    </h3>
                    <p className="text-gray-600">{profileData.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaPhone className="text-indigo-600 text-xl" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                      Phone
                    </h3>
                    <p className="text-gray-600">{profileData.phone}</p>
                  </div>
                </div>

                <button
                  onClick={() => setCurrentView("editProfile")}
                  className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg flex items-center justify-center hover:bg-indigo-700 transition-all duration-300 shadow-md"
                >
                  <FaEdit className="mr-2" /> Edit Profile
                </button>
              </div>
            )}

            {currentView === "editProfile" && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaUser className="text-indigo-600 text-xl" />
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleChange}
                      className="mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-indigo-600 text-xl" />
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="location"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Location
                    </label>
                    <input
                      id="location"
                      type="text"
                      name="location"
                      value={profileData.location}
                      onChange={handleChange}
                      className="mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-indigo-600 text-xl" />
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleChange}
                      className="mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaPhone className="text-indigo-600 text-xl" />
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleChange}
                      className="mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={handleSave}
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg flex items-center justify-center hover:bg-indigo-700 transition-all duration-300 shadow-md xs:px-2 xs:py-2 xs:w-[45%] sm-xs:px-2 sm-xs:py-2"
                  >
                    <FaSave className="mr-2" /> Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-6 py-1 bg-gray-400 text-white rounded-lg flex items-center justify-center hover:bg-gray-500 transition-all duration-300 shadow-md xs:px-2 xs:py-2 xs:w-[45%] sm-xs:px-2 sm-xs:py-2"
                  >
                    <FaTimes className="mr-2" /> Cancel
                  </button>
                </div>
              </div>
            )}

            {currentView === "notifications" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  Notifications
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-600">No new notifications.</p>
                </div>
              </div>
            )}

            {currentView === "changePassword" && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaCog className="text-indigo-600 text-xl" />
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="currentPassword"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Current Password
                    </label>
                    <input
                      id="currentPassword"
                      type="password"
                      name="currentPassword"
                      className="mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaCog className="text-indigo-600 text-xl" />
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="newPassword"
                      className="text-sm font-semibold text-gray-700"
                    >
                      New Password
                    </label>
                    <input
                      id="newPassword"
                      type="password"
                      name="newPassword"
                      className="mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaCog className="text-indigo-600 text-xl" />
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="confirmNewPassword"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Confirm New Password
                    </label>
                    <input
                      id="confirmNewPassword"
                      type="password"
                      name="confirmNewPassword"
                      className="mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>

                <button
                  onClick={() => alert("Password Changed!")}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg flex items-center justify-center hover:bg-indigo-700 transition-all duration-300 shadow-md"
                >
                  <FaSave className="mr-2" /> Change Password
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
