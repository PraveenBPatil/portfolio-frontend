export default function TimelineSection() {
  const timeline = [
    {
      year: "2025",
      title: "Fullstack Developer Course",
      desc: "Completed advanced fullstack development with React, Node, Python & databases.",
    },
    {
      year: "2025",
      title: "AI CHOTBOT Project",
      desc: "Built an advance RAG Based AI CHATBOT System & several automation tools.",
    },
    {
      year: "2024",
      title: "AI / ML Projects",
      desc: "Built Advance deepfake detection system, ML models.",
    },
    {
      year: "2022",
      title: "Started Programming",
      desc: "Began learning coding,Java , Python, JavaScript,SpringBoot , SQL and problem-solving.",
    },
  ];

  return (
    <section id="timeline" className="py-20 px-8 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-14">
        My <span className="text-purple-600">Journey</span>
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 h-full"></div>

        {/* Timeline Items */}
        {timeline.map((item, index) => (
          <div
            key={index}
            className={`mb-12 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } items-center w-full`}
          >
            <div
              className={`w-[45%] bg-white dark:bg-gray-800 shadow-lg p-6 rounded-xl border border-white/10 animate-fade`}
            >
              <h3 className="text-xl font-bold text-purple-600">{item.year}</h3>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
