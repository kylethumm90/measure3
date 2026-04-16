interface MetricCardProps {
  value: string;
  label: string;
}

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div
      className="flex flex-col gap-2 rounded-xl bg-white p-6"
      style={{ border: "0.5px solid rgba(0,0,0,0.1)" }}
    >
      <span className="text-2xl font-medium text-[#1a1a1a]">{value}</span>
      <span className="text-sm text-[#6b7280]">{label}</span>
    </div>
  );
}
