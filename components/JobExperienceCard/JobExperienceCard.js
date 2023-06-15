import { useState } from "react";

export default function JobExperienceCard({ title, company, description, start_date, end_date }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpandClick() {
    setIsExpanded(!isExpanded);
  }
  const truncatedDescription = description.slice(0, 50) + "...";

  return (
    <div>
      <div
        className="bg-slate-700 rounded-lg p-4 cursor-pointer h-72 min-h-fit w-48 hover:bg-slate-800/50 transition-all"
        onClick={handleExpandClick}
      >
        <h2 className="text-lg font-medium text-red-600">{title}</h2>
        <p className="text-orange-500">{company}</p>
        <p className="mt-2 text-amber-600">
          {start_date} - {end_date}
        </p>
        <p className="mt-2 mr-8 text-orange-600">{truncatedDescription}</p>
      </div>
      {isExpanded && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-10 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4 max-w-3xl overflow-y-auto">
            <h2 className="text-lg font-medium">{title}</h2>
            <p className="text-gray-600">{company}</p>
            <p className="mt-2 text-gray-600">
              {start_date} - {end_date}
            </p>
            <p className="mt-4">{description}</p>
            <button
              className="mt-4 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
              onClick={handleExpandClick}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}