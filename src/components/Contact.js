export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="p-3 border dark:bg-gray-800" />
          <input type="email" placeholder="Email" className="p-3 border dark:bg-gray-800" />
          <textarea rows="4" placeholder="Message" className="p-3 border dark:bg-gray-800"></textarea>
          <button className="bg-amber-500 text-white py-2 px-6 rounded hover:bg-amber-600">Send</button>
        </form>
      </div>
    </section>
  );
}