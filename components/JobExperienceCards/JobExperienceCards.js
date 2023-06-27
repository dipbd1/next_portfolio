import { useState } from "react";
import { Experiences } from "../../data/experiences";

export default function JobExperienceCards() {

  // const truncatedDescription = description.slice(0, 50) + "...";

  const truncatedDescription = (description) => {
    if (description.length > 50) {
      return description.slice(0, 50) + "...";
    } else {
      return description;
    }
  };

  const renderCardsWithExpandFeature = (experience) => {

    const [isExpanded, setIsExpanded] = useState(false);

    function handleExpandClick() {
      setIsExpanded(!isExpanded);
    }

    return (
      <div key={experience.id} className="py-1 mx-2">


        <div className="mockup-code min-w-fit">
          <div
            className="p-4 cursor-pointer w-56 hover:bg-slate-800/50 transition-all"
            onClick={handleExpandClick}
          >
            <h2 className="text-lg font-medium text-red-600">{experience.title}</h2>
            <p className="text-orange-500">{experience.company}</p>
            <p className="mt-2 text-amber-600">
              {experience.start_date} - {experience.end_date}
            </p>
            <p className="mt-2 text-orange-600">{truncatedDescription(experience.description)}</p>
          </div>
          {isExpanded && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-10 flex justify-center items-center">
              <div className="bg-white rounded-lg p-4 max-w-3xl overflow-y-auto">
                <h2 className="text-lg font-medium">{experience.title}</h2>
                <p className="text-gray-600">{experience.company}</p>
                <p className="mt-2 text-gray-600">
                  {experience.start_date} - {experience.end_date}
                </p>
                <p className="mt-4">{experience.description}</p>
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

      </div>
    );
  }

  // final return //
  return (
    <div className="min-w-full">
      <div className="flex flex-wrap justify-center mb-6">
        <div className="mockup-code">
          <pre data-prefix=">" className="text-warning"><code>Job Experiences</code></pre>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {Experiences.map((experience) => (
          renderCardsWithExpandFeature(experience)
        ))}
      </div>
    </div>)
}