const DOTS = [
  { color: "bg-red-500", delay: "[animation-delay:-0.3s]" },
  { color: "bg-amber-500", delay: "[animation-delay:-0.15s]" },
  { color: "bg-emerald-500", delay: "" },
];

export default function StatusDot() {
  return (
    <div className="flex items-center gap-2">
      {DOTS.map((dot) => (
        <span
          key={dot.color}
          className={`h-3 w-3 rounded-full animate-bounce ${dot.color} ${dot.delay}`}
        />
      ))}
    </div>
  );
}
