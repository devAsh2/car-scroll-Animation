export default function StatsBoxes() {
  return (
    <div className="flex justify-end gap-8">
      <div
        id="box1"
        className="opacity-0 bg-gradient-to-br from-[#BBF7D0] via-[#34D399] to-[#14B8A6] text-[#052E2B] px-10 py-8 rounded-2xl border border-white/30 shadow-[0_0_32px_rgba(45,212,191,0.55)]"
      >
        <span className="text-5xl font-semibold">58%</span>{" "}
        <span className="text-base block mt-2">
          Increase in pick up point use
        </span>
      </div>

      <div
        id="box2"
        className="opacity-0 bg-gradient-to-br from-[#0B1220] via-[#0F172A] to-[#0EA5E9] text-[#E6F6FF] px-10 py-8 rounded-2xl border border-white/15 shadow-[0_0_36px_rgba(14,165,233,0.45)]"
      >
        <span className="text-5xl font-semibold">27%</span>{" "}
        <span className="text-base block mt-2">
          Increase in pick up point use
        </span>
      </div>

      <div
        id="box3"
        className="opacity-0 bg-gradient-to-br from-[#F0ABFC] via-[#E879F9] to-[#C026D3] text-[#2A0735] px-10 py-8 rounded-2xl border border-white/25 shadow-[0_0_30px_rgba(232,121,249,0.5)]"
      >
        <span className="text-5xl font-semibold">23%</span>{" "}
        <span className="text-base block mt-2">
          Decrease in customer phone calls
        </span>
      </div>

      <div
        id="box4"
        className="opacity-0 bg-gradient-to-br from-[#FDBA74] via-[#FB7185] to-[#F43F5E] text-[#2A0D12] px-10 py-8 rounded-2xl border border-white/20 shadow-[0_0_34px_rgba(251,113,133,0.45)]"
      >
        <span className="text-5xl font-semibold">40%</span>{" "}
        <span className="text-base block mt-2">
          Decrease in customer phone calls
        </span>
      </div>
    </div>
  );
}