import droneIcon from '../assets/drone-icon.webp';

const RadarChart = ({ angle, classification }) => {
  const center = 250;
  const radius = 210;


  return (
    <div className="relative w-[600px] p-10 h-[536px] bg-gray-900 text-cyan-300 border border-cyan-500 rounded-md shadow-md">

      <div className="absolute top-4 right-6 border-2 border-cyan-700 p-4 px-5 rounded">
        <div className="text-sm text-white">CLASSIFICATION</div>
        <p className="text-xl font-bold text-cyan-300">
          <div className='flex items-center gap-1'>
            {classification} <small> ({angle.toFixed(0)})°</small>
          </div>
        </p>
      </div>

      <svg width={600} height={600}>

        <circle cx={center} cy={center} r={radius} fill="#000" />

        {[50, 100, 150].map((r, i) => (
          <circle key={i} cx={center} cy={center} r={r} stroke="#00FFFF22" fill="none" />
        ))}

        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x = center + radius * Math.cos(rad);
          const y = center - radius * Math.sin(rad);
          const tx = center + (radius + 15) * Math.cos(rad);
          const ty = center - (radius + 15) * Math.sin(rad);
          return (
            <g key={i}>
              <line x1={center} y1={center} x2={x} y2={y} stroke="#00FFFF33" />
              <text x={tx} y={ty} fill="#00FFFF" fontSize="12" textAnchor="middle" alignmentBaseline="middle">
                {deg}°
              </text>
            </g>
          );
        })}

        {angle && (
          <>
            <line
              x1={center}
              y1={center}
              x2={center + radius * Math.cos((angle * Math.PI) / 180)}
              y2={center - radius * Math.sin((angle * Math.PI) / 180)}
              stroke="#00FFFF"
              strokeWidth={2}
            />
            <image
              href={droneIcon}
              x={center + radius * Math.cos((angle * Math.PI) / 175) - 12}
              y={center - radius * Math.sin((angle * Math.PI) / 180) - 12}
              width="30"
              height="30"
              style={{ filter: 'invert(88%) sepia(51%) saturate(6286%) hue-rotate(150deg) brightness(101%) contrast(101%)' }}
            />
          </>
        )}
      </svg>
    </div>
  );
};

export default RadarChart;
