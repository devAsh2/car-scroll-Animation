export function TopStatsRow() {
  return (
    <div className="flex justify-end gap-6">
      <div
        id="box1"
        className="opacity-0 bg-lime-300 text-black px-8 py-6 rounded-xl shadow-lg"
      >
        <span className="text-4xl font-semibold">58%</span>{" "}
        <span className="text-sm block mt-1">
          Increase in pick up point use
        </span>
      </div>

      <div
        id="box2"
        className="opacity-0 bg-gray-900 text-white px-8 py-6 rounded-xl shadow-lg"
      >
        <span className="text-4xl font-semibold">27%</span>{" "}
        <span className="text-sm block mt-1">
          Increase in pick up point use
        </span>
      </div>
    </div>
  );
}

export function BottomStatsRow() {
  return (
    <div className="flex justify-end gap-6">
      <div
        id="box3"
        className="opacity-0 bg-sky-400 text-black px-8 py-6 rounded-xl shadow-lg"
      >
        <span className="text-4xl font-semibold">23%</span>{" "}
        <span className="text-sm block mt-1">
          Decrease in customer phone calls
        </span>
      </div>

      <div
        id="box4"
        className="opacity-0 bg-orange-500 text-black px-8 py-6 rounded-xl shadow-lg"
      >
        <span className="text-4xl font-semibold">40%</span>{" "}
        <span className="text-sm block mt-1">
          Decrease in customer phone calls
        </span>
      </div>
    </div>
  );
}

export default function StatsBoxes() {
  return (
    <>
      <TopStatsRow />
      <div className="h-8" />
      <BottomStatsRow />
    </>
  );
}