interface MetricCardProps {
  value: string;
  label: string;
}

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="border-subtle flex flex-col gap-2 rounded-xl bg-white p-6">
      <span className="text-2xl font-medium text-[#B8860B]">{value}</span>
      <span className="text-sm text-[#6b7280]">{label}</span>
    </div>
  );
}
