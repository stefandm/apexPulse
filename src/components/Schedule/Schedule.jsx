import DayCard from "./DayCard";

function Schedule() {

  const monday = [
    ['10-11: Basics'],
    ['11-12: Strength and conditioning'],
    ['17-18: Juniors(12-17years)'],
    ['18-19: Advanced'],
    ['19-20: Sparring']
  ];

  const tuesday = [
    ['10-11: Advanced'],
    ['11-12: Sparring'],
    ['17-18: Juniors(12-17years)'],
    ['18-19: Basics'],
    ['19-20: Strength and conditioning']
  ];

  const wednesday = [
    ['10-11: All ages'],
    ['11-12: Outdoor Cardio'],
    ['17-18: Juniors(12-17years)'],
    ['18-19: Mobility'],
    ['19-20: Open mat']
  ];

  const thursday = [
    ['10-11: Basics'],
    ['11-12: Strength and conditioning'],
    ['17-18: Juniors(12-17years)'],
    ['18-19: Advanced'],
    ['19-20: Sparring']
  ];

  const friday = [
    ['10-11: Advanced'],
    ['11-12: Sparring'],
    ['17-18: Juniors(12-17years)'],
    ['18-19: Basics'],
    ['19-20: Strength and conditioning']
  ];

  const sunday = [
    ['10-11: Open mat'],
    ['11-12: Sparring']
  ];

  return (
    <div id="schedule" className="select-none py-[5vh] lg:py-[10vh] px-[2vw] h-fit">
    <h1 className="font-oswald  text-center text-slate-800 font-extrabold text-4xl md:text-6xl border-b-4 border-t-4 border-slate-800 py-6">Schedule</h1>
    <div className=" ease-in-out h-fit  duration-500 gap-4 lg:gap-14 pt-[10vh] md:pt-[15vh]  justify-center flex flex-col lg:flex-row  items-center lg:items-start">
      <DayCard day="Monday" data={monday} />
      <DayCard day="Tuesday" data={tuesday} />
      <DayCard day="Wednesday" data={wednesday} />
      <DayCard day="Thursday" data={thursday} />
      <DayCard day="Friday" data={friday} />
      <DayCard day="Sunday" data={sunday} />
    </div>
    </div>
  );
}

export default Schedule;
