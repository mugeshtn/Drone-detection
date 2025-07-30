import { CircleDot } from "lucide-react";

const DetectionPanel = ({ time, micChannel, confidence }) => {
  return (
    <div className="flex flex-col font-bold gap-10 ">
      <div className="text-center  bg-gray-900 border-2 border-cyan-700 p-5 rounded">
        <p className="text-xs mb-3 text-cyan-100">DETECTION TIME</p>
        <p className="text-2xl font-mono text-cyan-300">{time}</p>
      </div>
      <div className="text-center bg-gray-900 border-2 border-cyan-700 p-5 rounded">
        <p className="text-sm mb-2 text-cyan-100">MIC CHANNEL</p>
        <p className="text-2xl font-bold text-cyan-300">{micChannel}</p>
      </div>
      <div className="text-center bg-gray-900 border-2 border-cyan-700 p-5 rounded">
        <p className="text-xs text-cyan-100">SYSTEM STATUS</p>
        <div className="mt-2 flex flex-col items-center">
          <CircleDot className="w-5 h-5 text-cyan-500 mb-2" />
          <p className="font-bold text-white">ACTIVE</p>
        </div>
      </div>
      <div className="text-center bg-gray-900 border-2 border-cyan-700 p-5 rounded">
        <p className="text-xs text-cyan-100">Confidence</p>
        <div className="mt-2 flex flex-col items-center">
          <p className="font-bold text-white">{confidence}</p>
        </div>
      </div>
    </div>
  );
};

export default DetectionPanel;
