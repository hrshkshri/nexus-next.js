import { AiFillHome, AiFillFlag } from "react-icons/ai";
import { SiMarketo } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";

const Container = ({ children, activeRoute }) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="navbar flex justify-between border-b border-gray-700 p-2">
        <div className="h-14 w-14 mx-8">
          <img src="/img/nexus-website-favicon-white.png" alt="Logo" />
        </div>
        <button className="text-3xl mx-8 hover:text-black hover:opacity-75">
          <FaUserCircle className="" />
        </button>
      </div>
      <div className="h-full w-full flex overflow-hidden">
        <div className="h-full w-1/4 flex flex-col justify-between border-r border-gray-700">
          <div className="flex flex-col space-y-5 justify-between my-5">
            <button
              className={`flex items-center rounded ${
                activeRoute === "feed"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-5`}
            >
              <AiFillHome className="w-8 h-8 mx-2" />
              Feed
            </button>
            <button
              className={`flex items-center rounded ${
                activeRoute === "challenges"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-5`}
            >
              <AiFillFlag className="w-8 h-8 mx-2" />
              Challenges
            </button>
            <button
              className={`flex items-center rounded ${
                activeRoute === "marketplace"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-5`}
            >
              <SiMarketo className="w-8 h-8 mx-2" />
              Market Place
            </button>
            <button className="rounded-full bg-purple-500 hover:bg-purple-700 font-bold py-2 px-4 focus:outline-none focus:shadow-outline mx-5">
              Create Post
            </button>
          </div>
          <div className="flex-shrink-0 mt-auto mb-5 mx-5">
            <button className="border rounded py-2 px-4 w-full">
              Feedback
            </button>
          </div>
        </div>
        <div className="w-3/4 h-full flex flex-col overflow-y-auto scrollbar-none">
          {/* Your content */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
