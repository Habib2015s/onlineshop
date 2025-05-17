import { useState } from "react";

const ExpandableText = ({ text, maxChars = 100 }) => {
  const [expanded, setExpanded] = useState(false);

  const isLong = text.length > maxChars;
  const displayText = expanded || !isLong ? text : text.substring(0, maxChars) + "…";

  return (
    <div className="text-slate-500 text-sm">
      {displayText}
      {isLong && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // اگر در کارت کلیک باعث باز شدن مودال می‌شود
            setExpanded(!expanded);
          }}
          className="ml-2 text-slate-700 hover:underline"
        >
          {expanded ? "Less" : "More"}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
