interface Props {
  current: "ru" | "en";
  label: string;
}

export default function LanguageSwitch({ current, label }: Props) {
  const other = current === "ru" ? "en" : "ru";
  return (
    <a
      href={`/${other}/`}
      className="rounded-lg border border-slate-700 px-3 py-1.5 text-sm font-medium transition hover:bg-slate-800"
    >
      {label}
    </a>
  );
}