'use client';

import React, { useState } from 'react';
// import "./calendar.css"; // Ensure you have this CSS file

interface CalendarProps {
  selected?: Date | null;
  onSelect?: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selected, onSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (day: number, offset: number) => {
    const newSelectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, day);
    onSelect?.(newSelectedDate);
  };

  const renderDays = () => {
    const days = [];
    const totalDays = daysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    const prevMonthDays = daysInMonth(currentDate.getFullYear(), currentDate.getMonth() - 1);
    const firstDay = firstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());
    const totalCells = Math.ceil((firstDay + totalDays) / 7) * 7;

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(
        <div key={`prev-${i}`} className="calendar-cell prev-month" onClick={() => handleDateClick(prevMonthDays - i, -1)}>
          {prevMonthDays - i}
        </div>
      );
    }

    for (let day = 1; day <= totalDays; day++) {
      const isSelected = selected && selected.getDate() === day && selected.getMonth() === currentDate.getMonth();
      const isToday = today.getDate() === day && today.getMonth() === currentDate.getMonth() && today.getFullYear() === currentDate.getFullYear();
      days.push(
        <div
          key={day}
          className={`calendar-cell day ${isSelected ? 'selected' : isToday ? 'today' : ''}`}
          onClick={() => handleDateClick(day, 0)}
        >
          {day}
        </div>
      );
    }

    for (let i = totalDays + firstDay; i < totalCells; i++) {
      days.push(
        <div key={`next-${i}`} className="calendar-cell next-month" onClick={() => handleDateClick(i - totalDays - firstDay + 1, 1)}>
          {i - totalDays - firstDay + 1}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <span>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="calendar-cell header">{day}</div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
