import React from "react";
import { FaTooth, FaBone, FaLungs, FaCalendarAlt, FaChartBar, FaClock, FaUserMd, FaComments, FaPhoneAlt, FaCog } from "react-icons/fa";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { IoMdChatboxes } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaUserPlus } from "react-icons/fa6";
import humanBody from "./images/human-body.png"

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-[#f4f7fe] text-[#1a1a1a] font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-md">
        <div className="text-2xl font-bold text-blue-600 mb-10">
          Health<span className="text-black">care.</span>
        </div>
        <nav className="flex flex-col gap-6 text-gray-700">
          <div className="flex items-center gap-3 text-blue-600 font-semibold">
            <MdDashboard size={20} /> Dashboard
          </div>
          <div className="flex items-center gap-3">
            <FaClock size={18} /> History
          </div>
          <div className="flex items-center gap-3">
            <FaCalendarAlt size={18} /> Calendar
          </div>
          <div className="flex items-center gap-3">
            <FaUserMd size={18} /> Appointments
          </div>
          <div className="flex items-center gap-3">
            <FaChartBar size={18} /> Statistics
          </div>
        </nav>

        <div className="mt-12 border-t pt-6 flex flex-col gap-6 text-gray-700">
          <div className="flex items-center gap-3">
            <IoMdChatboxes size={18} /> Chat
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt size={18} /> Support
          </div>
        </div>

        <div className="mt-12 pt-6 border-t flex items-center gap-3 text-gray-700">
          <FaCog size={18} /> Setting
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 border rounded-full shadow-sm"
            />
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <button className="bg-blue-600 text-white p-2 rounded-full">
              <FaUserPlus size={16} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="col-span-1">
            <div className="bg-white rounded-3xl p-4 shadow-md flex flex-col items-center relative">
              <img
                src={humanBody}
                alt="Human Anatomy"
                className="w-48"
              />
              <div className="absolute left-8 top-60 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                Healthy Leg
              </div>
              <div className="absolute top-20 right-1 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                ❤️ Healthy Heart
              </div>
            </div>

            <div className="mt-6 bg-white rounded-3xl p-4 shadow-md flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaLungs className="text-red-400" /> Lungs
                </div>
                <span className="text-sm text-gray-400">Date: 26 may 2025</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-red-500 h-2 w-1/2 rounded-full"></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaTooth className="text-green-500" /> Teeth
                </div>
                <span className="text-sm text-gray-400">Date: 26 may 2025</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-green-500 h-2 w-2/3 rounded-full"></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaBone className="text-orange-400" /> Bone
                </div>
                <span className="text-sm text-gray-400">Date: 26 may 2025</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-orange-400 h-2 w-1/3 rounded-full"></div>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-3xl p-4 shadow-md">
              <h3 className="font-semibold text-lg mb-2">Activity</h3>
              <div className="flex gap-2 items-end h-24">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-blue-300 w-3 rounded"
                    style={{ height: `${20 + Math.random() * 60}px` }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between text-xs mt-2 text-gray-500">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <span key={day}>{day}</span>
                ))}
              </div>
            </div>
          </div>

            {/* Right Section */}
            <div className="col-span-2">
                <div className="bg-white rounded-3xl p-6 shadow-md">
                    <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">May 2025</h3>
                    <div className="flex items-center space-x-3">
                        <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">&lt;</button>
                        <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">&gt;</button>
                       
                    </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 text-center text-sm mb-2 text-gray-500 font-medium">
                    {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day) => (
                        <div key={day}>{day}</div>
                    ))}
                    </div>

                    <div className="grid grid-cols-7 gap-2 text-center text-sm mb-4">
                    {[25, 26, 27, 28, 29, 30, 31].map((day, i) => (
                        <div
                        key={day}
                        className={`py-2 rounded-full ${i === 1 ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                        {day}
                        </div>
                    ))}
                    </div>

                    {/* Time slots */}
                    <div className="grid grid-cols-7 text-xs text-gray-500 mb-4">
                    {Array(7).fill('').map((_, i) => (
                        <div key={i} className="space-y-1">
                        <div className="bg-gray-100 rounded-md py-1">{['10:00', '09:00', '12:00', '11:00', '14:00', '12:00', '09:00'][i]}</div>
                        <div className="bg-gray-100 rounded-md py-1 text-gray-400">{['11:00', '10:00', '13:00', '--', '16:00', '15:00', '11:00'][i]}</div>
                        </div>
                    ))}
            </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-600 text-white p-4 rounded-xl">
                  <p className="text-sm">Dentist</p>
                  <p className="text-xs">09:00-11:00</p>
                  <p className="text-xs">Dr. A.k Gupta</p>
                </div>
                <div className="bg-blue-100 text-blue-800 p-4 rounded-xl">
                  <p className="text-sm">Physiotherapy Appointment</p>
                  <p className="text-xs">11:00-12:00</p>
                  <p className="text-xs">Dr. Sanjay Singh</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold mt-6 mb-2">The Upcoming Schedule</h3>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-100 p-4 rounded-xl w-48">
                  <p className="text-sm">Health checkup complete</p>
                  <p className="text-xs text-gray-600">11:00 AM</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-xl w-48">
                  <p className="text-sm">Ophthalmologist</p>
                  <p className="text-xs text-gray-600">14:00 PM</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-xl w-48">
                  <p className="text-sm">Cardiologist</p>
                  <p className="text-xs text-gray-600">12:00 AM</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-xl w-48">
                  <p className="text-sm">Neurologist</p>
                  <p className="text-xs text-gray-600">16:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
