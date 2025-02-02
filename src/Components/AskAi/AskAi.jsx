import { FaArrowTrendUp } from "react-icons/fa6";

const AskAi = () => {
    return (
        <div>
            <h3 className='text text-4xl text-center text-[#50289c]'>Use AI to make your decision faster</h3>

            <div className="flex justify-center items-center mt-12 gap-x-8">
                <input className="border border-red-600 h-[100px] w-[800px] overflow-scroll" type="text" name="" id="" />
                <button className="w-[40px] h-[40px] border border-blue-700 flex justify-center items-center bg-slate-950"><FaArrowTrendUp></FaArrowTrendUp></button>
            </div>
        </div>
    );
};

export default AskAi;