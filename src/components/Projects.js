export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map(i => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
              <p className="text-sm mb-2">Description of project {i}</p>
              <a href="#" className="text-amber-500">View More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
