import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export declare interface CalendarProps {
  date: Date;
  setDate: (date: Date) => void;
  calendarContainer?: React.FC;
  inline?: boolean;
  withPortal?: boolean;
}

export default function MCalendar({
  setDate,
  date,
  calendarContainer,
  inline,
  withPortal,
}: CalendarProps) {
  return (
    <DatePicker
      selected={date}
      onChange={(value: Date) => setDate(value)}
      calendarContainer={calendarContainer}
      inline={inline}
      withPortal={withPortal}
    />
  );
}
