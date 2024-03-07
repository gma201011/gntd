import React, { useState } from "react";
import Icon from "../Icon/icon";
interface DatePickerProps {
  value?: Date,
  onChange?: (date: Date) => void,
}

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const { value = new Date(), onChange } = props;
  const [date, setDate] = useState(value);

  const monthNames = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ];


  const handlePreviousMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  }

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  }

  const renderDate = () => {
    const currentMonthDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstWeekDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    const monthDate = [];

    for (let i = 0; i < currentMonthDate; i++) {
      const clickHandler = onChange?.bind(null, new Date(date.getFullYear(), date.getMonth(), i + 1));
      if (i === date.getDate()) {
        monthDate.push(<div key={`date-${i + 1}`} className="day selected" onClick={clickHandler}>{i + 1}</div>);
      } else {
        monthDate.push(<div key={`date-${i + 1}`} className="day" onClick={clickHandler}>{i + 1}</div>);
      }
    }

    for (let i = 0; i < firstWeekDay; i++) {
      monthDate.unshift(<div className="empty disabled-date" key={`empty-front-${i}`}>{new Date(date.getFullYear(), date.getMonth(), 0 - i).getDate()}</div>)
    }

    const lastRowDateLength = monthDate.length % 7;

    for (let i = 0; i < (7 - lastRowDateLength); i++) {
      monthDate.push(<div className="empty disabled-date" key={`empty-back-${i}`}>{new Date(date.getFullYear(), date.getMonth() + 1, 1 + i).getDate()}</div>)
    }

    return monthDate;
  }


  return (
    <div className="date-picker">
      <div className="header">
        <Icon icon="chevron-left" onClick={handlePreviousMonth} />
        <div>{`${date.getFullYear()} 年 ${monthNames[date.getMonth()]}`}</div>
        <Icon icon="chevron-right" onClick={handleNextMonth} />
      </div>
      <div className="days">
        <div className="day">日</div>
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        {renderDate()}

      </div>
    </div>
  );
};

export default DatePicker;
