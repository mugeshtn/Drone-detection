import { useEffect, useState } from 'react';
import DetectionPanel from './components/DetectionPanel';
import RadarChart from './components/RadarChart';
import axios from 'axios';

const App = () => {
  const [droneData, setDroneData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/detection')
      .then((res) => setDroneData(res.data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  if (!droneData) return <div className="text-white p-10">Loading...</div>;

  const angle = droneData.angle;
  const confidence = droneData.confidence;
  const classification = confidence > 0.85 ? "DRONE" : "UNKNOWN";
  const time = new Date(droneData.time).toLocaleTimeString('en-GB');
  const activeMicChannels = droneData.data
    .map((val, idx) => (val === 1 ? idx + 1 : null))
    .filter((i) => i !== null);
  return (
    <div className=" flex items-center bg-black p-30 rounded">
      <div className='flex space-x-5'>
        <DetectionPanel time={time}
          micChannel={activeMicChannels.join(", ")}
          systemStatus="ACTIVE"
          confidence = {confidence}
        />
        <RadarChart angle={angle} classification={classification} />
      </div>
    </div>
  );
};

export default App;
