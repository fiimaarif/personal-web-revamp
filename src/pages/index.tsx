import About from "@/components/main/about";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row md:p-10 font-roboto">
      <Sidebar/>
      <div className="w-full md:w-3/4 md:ml-4">
        <Navbar/>
      </div>
    </div>
  );
}
