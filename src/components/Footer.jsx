export default function Footer() {
  return (
    <footer className="border-t dark:border-gray-800 mt-12 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Praveen. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600">Twitter</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600">LinkedIn</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
