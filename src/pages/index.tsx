import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row md:p-10 font-roboto">
      <Sidebar/>
      <div className="w-full md:w-3/4 ml-4">
        <nav className="bg-blue-500 mb-4 p-4 rounded-3xl">navbar</nav>
        <main className="p-4 bg-blue-300 rounded-3xl">main</main>
      </div>
    </div>
  );
}
