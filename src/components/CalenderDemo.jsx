import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward, IoMdAdd } from 'react-icons/io';
import { IoCheckmarkSharp, IoClose, IoCloseSharp } from 'react-icons/io5';
import { RiFocus3Line } from 'react-icons/ri';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const timeSlots = [
  {
    time: {
      start: '08:00 AM',
      end: '09:00 AM',
    },
    event: 'Meeting with client',
  },
  {
    time: {
      start: '09:00 AM',
      end: '10:00 AM',
    },
    event: 'Team Standup',
  },
  {
    time: {
      start: '10:00 AM',
      end: '11:00 AM',
    },
    event: 'Project Discussion',
  },
  // {
  //   time: {
  //     start: "11:00 AM",
  //     end: "12:00 PM",
  //   },
  //   event: "Code Review",
  // },
  // {
  //   time: {
  //     start: "12:00 PM",
  //     end: "01:00 PM",
  //   },
  //   event: "Lunch Break",
  // },
  // {
  //   time: {
  //     start: "01:00 PM",
  //     end: "02:00 PM",
  //   },
  //   event: "Development Work",
  // },
  // {
  //   time: {
  //     start: "02:00 PM",
  //     end: "03:00 PM",
  //   },
  //   event: "Testing",
  // },
  // {
  //   time: {
  //     start: "03:00 PM",
  //     end: "04:00 PM",
  //   },
  //   event: "Documentation",
  // },
  // {
  //   time: {
  //     start: "04:00 PM",
  //     end: "05:00 PM",
  //   },
  //   event: "Wrap Up",
  // },
];

const weekData = [
  {
    date: new Date('2025-05-12'),
    timeSlots: [
      {
        time: { start: '08:00 AM', end: '09:00 AM' },
        status: 'Done',
        note: '',
      },
      {
        time: { start: '09:00 AM', end: '10:00 AM' },
        status: 'Done',
        note: 'Team sync',
      },
      {
        time: { start: '10:00 AM', end: '11:00 AM' },
        status: 'Undone',
        note: 'Call client',
      },
    ],
  },
  {
    date: new Date('2025-05-13'),
    timeSlots: [
      {
        time: { start: '08:00 AM', end: '09:00 AM' },
        status: 'Done',
        note: 'Morning jog',
      },
      {
        time: { start: '09:00 AM', end: '10:00 AM' },
        status: 'Undone',
        note: '',
      },
      {
        time: { start: '10:00 AM', end: '11:00 AM' },
        status: 'available',
        note: '',
      },
    ],
  },
  {
    date: new Date('2025-05-14'),
    timeSlots: [
      {
        time: { start: '08:00 AM', end: '09:00 AM' },
        status: 'available',
        note: '',
      },
      {
        time: { start: '09:00 AM', end: '10:00 AM' },
        status: 'available',
        note: 'Doctor visit',
      },
      {
        time: { start: '10:00 AM', end: '11:00 AM' },
        status: 'available',
        note: '',
      },
    ],
  },
  {
    date: new Date('2025-05-15'),
    timeSlots: [
      {
        time: { start: '08:00 AM', end: '09:00 AM' },
        status: 'available',
        note: 'Yoga session',
      },
      {
        time: { start: '09:00 AM', end: '10:00 AM' },
        status: 'available',
        note: '',
      },
      {
        time: { start: '10:00 AM', end: '11:00 AM' },
        status: 'available',
        note: 'Call supplier',
      },
    ],
  },
  {
    date: new Date('2025-05-16'),
    timeSlots: [
      {
        time: { start: '08:00 AM', end: '09:00 AM' },
        status: 'available',
        note: '',
      },
      {
        time: { start: '09:00 AM', end: '10:00 AM' },
        status: 'available',
        note: 'Daily report',
      },
      {
        time: { start: '10:00 AM', end: '11:00 AM' },
        status: 'available',
        note: '',
      },
    ],
  },
  {
    date: new Date('2025-05-17'),
    timeSlots: [
      {
        time: { start: '08:00 AM', end: '09:00 AM' },
        status: 'available',
        note: '',
      },
      {
        time: { start: '09:00 AM', end: '10:00 AM' },
        status: 'available',
        note: '',
      },
      {
        time: { start: '10:00 AM', end: '11:00 AM' },
        status: 'available',
        note: 'Meeting with team',
      },
    ],
  },
  {
    date: new Date('2025-05-18'),
    timeSlots: [
      {
        time: { start: '08:00 AM', end: '09:00 AM' },
        status: 'available',
        note: '',
      },
      {
        time: { start: '09:00 AM', end: '10:00 AM' },
        status: 'available',
        note: '',
      },
      {
        time: { start: '10:00 AM', end: '11:00 AM' },
        status: 'available',
        note: '',
      },
    ],
  },
];

// Note Popup Component
const NotePopup = ({ data }) => {
  const [message, setMessage] = useState('');

  const handleNoteSave = () => {
    console.log('Note saved', { ...data, message });
    setShowNotePopup(false);
  };
  const handleNoteCancel = () => {
    setShowNotePopup(false);
  };
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-slate-800/60 flex items-center justify-center z-30">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add Note</h2>
        <textarea
          className="w-full h-32 p-2 border border-gray-300 rounded"
          placeholder="Type your note here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          cols={50}
        ></textarea>
        <div className="w-full flex justify-between items-center mt-4">
          <button
            onClick={handleNoteCancel}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-600"
          >
            Cancle
          </button>
          <button
            onClick={handleNoteSave}
            disabled={!message}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
};

const CalenderDemo = () => {
  const [currentWeekStart, setCurrentWeekStart] = useState(
    getMonday(new Date())
  );
  const [currentWeekShow, setCurrentWeekShow] = useState(
    getWeekDates(currentWeekStart)
  );
  const [showNotePopup, setShowNotePopup] = useState(false);
  const [noteData, setNoteData] = useState({});

  // Get the current date
  const currentDate = new Date();

  // Get Monday of the given week
  function getMonday(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - (day === 0 ? 6 : day - 1);
    return new Date(d.setDate(diff));
  }

  // Generate 7-day week from a start date
  function getWeekDates(startDate) {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  }

  // Go to this week
  const handleToday = () => {
    const today = new Date();
    setCurrentWeekStart(getMonday(today));
    setCurrentWeekShow(getWeekDates(today));
  };

  // Go to previous week
  const handlePrevWeek = () => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(currentWeekStart.getDate() - 7);
    setCurrentWeekStart(getMonday(newDate));
    setCurrentWeekShow(getWeekDates(newDate));
  };

  // Go to next week
  const handleNextWeek = () => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(currentWeekStart.getDate() + 7);
    setCurrentWeekStart(getMonday(newDate));
    setCurrentWeekShow(getWeekDates(newDate));
  };

  const weekDates = getWeekDates(currentWeekStart);
  const monthYear = currentWeekStart.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });

  // Get the previous days of the week
  const getPrevDaysOfWeek = () => {
    return weekDates.filter(
      (date) =>
        new Date(date).setHours(0, 0, 0, 0) <=
        new Date(currentDate).setHours(0, 0, 0, 0)
    );
  };

  const prevDays = getPrevDaysOfWeek();

  // Done/Undone button click handler
  const handleProgressClick = (data) => {
    console.log('Progress clicked', data);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-slate-800">
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Calendar Demo
      </h1>

      <div className="w-full max-w-[1000px] mx-auto bg-slate-900 shadow-xl rounded-xl border border-slate-600">
        {/* Header */}
        <div className="w-full h-14 bg-slate-800 flex items-center justify-between px-6">
          <h1 className="text-2xl font-semibold capitalize text-white">
            {monthYear}
          </h1>
          <div className="flex items-center gap-2 text-white text-2xl">
            {/* Today Button */}
            <button
              onClick={handleToday}
              className={`p-2  rounded-full hover:bg-slate-600 cursor-pointer ${
                weekDates.find(
                  (date) =>
                    date.getDate() === currentDate.getDate() &&
                    date.getMonth() === currentDate.getMonth() &&
                    date.getFullYear() === currentDate.getFullYear()
                )
                  ? 'bg-slate-700 opacity-60 pointer-events-none select-none'
                  : 'bg-slate-500'
              }`}
            >
              <RiFocus3Line />
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrevWeek}
              className="p-2 bg-slate-700 rounded-full hover:bg-slate-600 cursor-pointer"
            >
              <IoIosArrowBack />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNextWeek}
              disabled={currentWeekShow.find(
                (date) =>
                  date.getDate() === currentDate.getDate() &&
                  date.getMonth() === currentDate.getMonth() &&
                  date.getFullYear() === currentDate.getFullYear()
              )}
              className="p-2 bg-slate-700 rounded-full hover:bg-slate-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        <div className="flex h-[70vh] overflow-auto custom-scrollbar">
          <div className="w-full">
            {/* Day Headings */}
            <div className="grid grid-cols-8 gap-px sticky top-0 bg-slate-800 text-white font-semibold text-sm">
              <div className="bg-slate-700 text-center py-2">Time</div>
              {weekDays.map((day, index) => (
                <div key={index} className="text-center py-2 bg-slate-700">
                  {day}
                </div>
              ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-8 gap-px sticky top-0 bg-slate-800 text-white font-medium text-sm z-20">
              <div className="bg-slate-700 py-2 text-center">Date</div>
              {weekDates.map((date, index) => (
                <div key={index} className="py-2 text-center bg-slate-700">
                  <div
                    className={`w-8 h-8 mx-auto flex items-center justify-center rounded-full ${
                      date.getMonth() === currentDate.getMonth() &&
                      date.getDate() === currentDate.getDate() &&
                      date.getFullYear() === currentDate.getFullYear()
                        ? 'bg-slate-500 text-white'
                        : 'text-slate-300'
                    }`}
                  >
                    {date.getDate()}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-8 text-white text-sm border border-slate-700">
              {/* Time Slots Column */}
              <div
                className="grid"
                style={{
                  gridTemplateRows: `repeat(${timeSlots.length}, minmax(0, 1fr))`,
                }}
              >
                {timeSlots.map((slot, i) => (
                  <div
                    key={i}
                    className="p-2 text-center font-medium flex flex-col items-center justify-center border-b border-slate-700"
                  >
                    <span className="leading-tight">{slot.time.start}</span>
                    <span className="leading-tight"> - </span>
                    <span className="leading-tight">{slot.time.end}</span>
                  </div>
                ))}
              </div>

              {/* Body */}
              {weekDates.map((date, j) => (
                /* Week Days Columns */
                <div
                  key={j}
                  className={`${
                    // Highlight today
                    date.getMonth() === currentDate.getMonth() &&
                    date.getDate() === currentDate.getDate() &&
                    date.getFullYear() === currentDate.getFullYear()
                      ? 'bg-slate-900'
                      : 'bg-slate-800 opacity-60 pointer-events-none select-none'
                  } grid `}
                  style={{
                    gridTemplateRows: `repeat(${timeSlots.length}, minmax(0, 1fr))`,
                  }}
                >
                  {timeSlots.map((slot, i) => (
                    /* Time Slots Rows */
                    <div
                      className="border-b border-l border-gray-300 flex flex-col items-center justify-center "
                      key={`${j}-${i}`}
                    >
                      {/* 
                      <p>{date.getDate()}</p>
                      <p>{slot.time.start}</p>
                      <p>{slot.time.end}</p>
                       */}
                      {weekData.map(
                        (day) =>
                          day.date.getDate() === date.getDate() &&
                          day.date.getMonth() === date.getMonth() &&
                          day.date.getFullYear() === date.getFullYear() &&
                          day.timeSlots.map(
                            (timeSlot, index) =>
                              timeSlot.time.start === slot.time.start &&
                              timeSlot.time.end === slot.time.end && (
                                <div
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  {timeSlot.status === 'available' ? (
                                    <div className="flex flex-col justify-center p-2 items-center gap-2 ">
                                      {/* Actions */}
                                      <div className="flex items-center gap-2 ">
                                        <button
                                          type="button"
                                          onClick={() =>
                                            handleProgressClick({
                                              status: 'Undone',
                                              date: new Date(),
                                              timeSlot: slot.time,
                                              event: slot.event,
                                            })
                                          }
                                          className="p-2 bg-red-700 rounded-full hover:bg-red-600 cursor-pointer "
                                        >
                                          <IoCloseSharp />
                                        </button>
                                        <button
                                          type="button"
                                          onClick={() =>
                                            handleProgressClick({
                                              status: 'Done',
                                              date: new Date(),
                                              timeSlot: slot.time,
                                              event: slot.event,
                                            })
                                          }
                                          className="p-2 bg-green-700 rounded-full hover:bg-green-600 cursor-pointer"
                                        >
                                          <IoCheckmarkSharp />
                                        </button>
                                      </div>
                                      {/* Note */}
                                      {/* <div className="">
                                        <button
                                          onClick={() => {
                                            setShowNotePopup(true);
                                            setNoteData({
                                              date: date,
                                              timeSlot: slot.time,
                                              event: slot.event,
                                            });
                                          }}
                                          className="flex items-center gap-2 px-2 py-1 bg-slate-700 rounded-full hover:bg-slate-600 text-sm cursor-pointer"
                                        >
                                          <IoMdAdd /> <span>Add Note</span>
                                        </button>
                                      </div> */}
                                    </div>
                                  ) : timeSlot.status === 'Done' ? (
                                    <button
                                      type="button"
                                      disabled
                                      className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                      <FaCheck />
                                    </button>
                                  ) : (
                                    <button
                                      type="button"
                                      disabled
                                      className="p-2 bg-red-700 rounded-full hover:bg-red-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                      <IoCloseSharp />
                                    </button>
                                  )}
                                </div>
                              )
                          )
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showNotePopup && <NotePopup data={noteData} />}
    </div>
  );
};

export default CalenderDemo;
