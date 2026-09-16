import { useState } from "react";

interface Item {
  q: string;
  a: string;
}

interface Props {
  items: Item[];
}

export default function Faq({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="rounded-lg border border-slate-800 bg-slate-900">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between px-4 py-3 text-left font-medium"
          >
            <span>{item.q}</span>
            <span className="text-slate-400">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <div className="border-t border-slate-800 px-4 py-3 text-slate-300">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}