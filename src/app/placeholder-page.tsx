
import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <section className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center">
      <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
        <Construction size={26} />
      </div>

      <h2 className="text-xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-500">
        {description}
      </p>

      <span className="mt-5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
        Coming in a later development phase
      </span>
    </section>
  );
}
