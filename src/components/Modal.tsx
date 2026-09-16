import { useState } from "react";

interface Props {
  trigger: string;
  title: string;
  body: string;
  close: string;
}

export default function Modal({ trigger, title, body, close }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg bg-indigo-500 px-5 py-2.5 font-medium transition hover:bg-indigo-400"
      >
        {trigger}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-xl bg-slate-900 p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-2 text-xl font-semibold">{title}</h3>
            <p className="mb-4 text-slate-300">{body}</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg border border-slate-700 px-4 py-2 transition hover:bg-slate-800"
            >
              {close}
            </button>
          </div>
        </div>
      )}
    </>
  );
}