import { FaArrowTrendUp } from "react-icons/fa6";

const AskAi = () => {
    return (
        <div>
            <h3 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#50289c]">
                Use AI to make your decision faster
            </h3>


            <div className="flex flex-col sm:flex-row justify-center items-center mt-12 gap-y-4 sm:gap-x-8 w-full px-4">
                <input
                    className="border border-gray-300 rounded-xl h-[50px] sm:w-[400px] w-full px-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Type something..."
                />
                <button className="w-[50px] h-[50px] rounded-full bg-blue-600 flex justify-center items-center hover:bg-blue-700 transition-all">
                    <FaArrowTrendUp className="text-white" />
                </button>
            </div>

        </div>
    );
};

export default AskAi;