export default function ValueText() {
  const text = "WELCOME ITZFIZZ";

  return (
    <div className="value-add absolute top-[30%] left-1/2 -translate-x-1/2 text-[92px] font-semibold flex gap-3 tracking-[0.18em] text-[#0F172A] z-0">
      {text.split("").map((letter, i) => {
        const isSpace = letter === " ";

        return (
          <span
            key={i}
            className={`value-letter opacity-0 inline-block ${
              isSpace ? "w-6" : ""
            }`}
          >
            {isSpace ? "" : letter}
          </span>
        );
      })}
    </div>
  );
}