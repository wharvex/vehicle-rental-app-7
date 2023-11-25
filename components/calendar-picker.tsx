// DatePickerComponent.jsx or DatePickerComponent.tsx
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
    />
  );
};

export default DatePickerComponent;

