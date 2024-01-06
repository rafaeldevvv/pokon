"use client";

export default function SearchInput({
  id,
  value,
  placeholder,
  expanded,
  controls,
  labelledBy,
  classes = "rounded block h-full pl-4 pr-8 w-full",
  onChange,
}: {
  id: string;
  value: string;
  placeholder: string;
  expanded: boolean;
  controls: string;
  labelledBy: string;
  classes?: string;
  onChange: (newValue: string) => void;
}) {
  return (
    <input
      type="search"
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      role="combobox"
      aria-expanded={expanded}
      aria-controls={controls}
      aria-labelledby={labelledBy}
      className={classes}
    />
  );
}
