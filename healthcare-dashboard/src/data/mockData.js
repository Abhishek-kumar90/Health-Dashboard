export const healthStats = [
  {
    label: "Lungs",
    date: "26 Oct 2021",
    status: "Unhealthy",
    color: "red",
  },
  {
    label: "Teeth",
    date: "26 Oct 2021",
    status: "Healthy",
    color: "green",
  },
  {
    label: "Bone",
    date: "26 Oct 2021",
    status: "Weak",
    color: "orange",
  },
];

export const appointments = {
  dentist: {
    day: "Tuesday",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
  },
  physio: {
    day: "Thursday",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
  },
  upcoming: {
    thursday: [
      { label: "Health checkup complete", time: "11:00 AM" },
      { label: "Ophthalmologist", time: "14:00 PM" },
    ],
    saturday: [
      { label: "Cardiologist", time: "12:00 AM" },
      { label: "Neurologist", time: "16:00 PM" },
    ],
  },
};

export const activity = [
  { day: "Mon", values: [5, 6] },
  { day: "Tues", values: [4, 8] },
  { day: "Wed", values: [6, 7] },
  { day: "Thurs", values: [3, 5] },
  { day: "Fri", values: [8, 9] },
  { day: "Sat", values: [5, 6] },
  { day: "Sun", values: [4, 4] },
];
