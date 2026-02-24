export default function ValueText() {
    const text = "WELCOME ITZFIZZ";
  
    return (
      <div className="absolute top-[30%] left-[5%] text-7xl font-bold flex gap-1 z-20">
        {text.split("").map((letter, i) => (
          <span key={i} className="value-letter opacity-0">
            {letter}
          </span>
        ))}
      </div>
    );
  }