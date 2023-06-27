
import { Educations } from "../../data/educations";

export default function EducationCards() {
  return (
    <div className="min-w-full">
      <div className="flex flex-wrap justify-center mb-6">
        <div className="mockup-code">
          <pre data-prefix=">" className="text-teal-300"><code>Education</code></pre>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {Educations.map((education) => (
          <div key={education.id} className="py-1 mx-2">
            <div className="mockup-code min-w-fit">
              <div className="p-4 w-56">
                <h2 className="text-lg font-medium text-blue-600">{education.title}</h2>
                <p className="text-green-500">{education.institution}</p>
                <p className="mt-2 text-teal-600">
                  {education.start_date} - {education.end_date}
                </p>
                <p className="mt-2 text-blue-600">{education.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};