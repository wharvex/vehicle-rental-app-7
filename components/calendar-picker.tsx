import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CalendarPickerProps {
    selectedDate: Date;
    onChange: (date: Date) => void;
    closureDates: Date[];
}

const DatePickerComponent = ({ selectedDate, onChange, closureDates }: CalendarPickerProps) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      excludeDates={closureDates}
      minDate={new Date()}
      className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />
  );
};

export default DatePickerComponent;

