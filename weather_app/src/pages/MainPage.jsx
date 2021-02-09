import React from 'react';
import CurrentDayInfo from '../containers/CurrentDayInfo';
import HoursInfo from '../containers/HoursInfo';
import WeekInfo from '../containers/WeekInfo';

export default function MainPage() {
  return (
    <div>
      <CurrentDayInfo />
      <HoursInfo />
      <WeekInfo />
    </div>
  );
}
