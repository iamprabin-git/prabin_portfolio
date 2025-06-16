export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Photoshop', 'Illustrator', 'Figma'].map(skill => (
            <div key={skill} className="bg-amber-100 dark:bg-gray-800 p-4 rounded shadow">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}