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
    ['10-11: Mixed training'],
    ['11-12: Strength and conditioning'],
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
    <div id="schedule" className="h-fit max-w-[100vw] pt-10 mb-8 justify-center flex flex-col md:flex-row items-center">
      <DayCard day="Monday" data={monday} />
      <DayCard day="Tuesday" data={tuesday} />
      <DayCard day="Wednesday" data={wednesday} />
      <DayCard day="Thursday" data={thursday} />
      <DayCard day="Friday" data={friday} />
      <DayCard day="Sunday" data={sunday} />
    </div>
  );
}

export default Schedule;
