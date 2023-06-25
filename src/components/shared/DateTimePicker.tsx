import { useDate } from "../../hooks/useDate";

function DateTimePicker() {
  const { date, time } = useDate();
  return (
    <span className="mt-6 text-white shadow-xl font-bold text-xl ml-8">
      Time: {date} {time}
    </span>
  );
}

export default DateTimePicker;