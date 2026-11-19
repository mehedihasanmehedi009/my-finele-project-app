 export const Loding = () => {
  const rungs = Array.from({ length: 10 });

  return (
    <div className="flex justify-center items-center min-h-[200px] bg-gray-50">
      <div className="relative w-20 h-44 [perspective:900px] [transform-style:preserve-3d]">
        {rungs.map((_, index) => {
          const topPercent = 8 + index * 9.3;  
          const delay = -(index * 0.18);

          return (
            <div
              key={index}
              style={{
                top: `${topPercent}%`,
                animation: `dna-helix 1.8s ease-in-out ${delay}s infinite`,
              }}
              className="absolute left-1/2 -translate-x-1/2 w-16 h-2 flex items-center justify-between"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-sm" />

              <span className="flex-1 h-[2px] mx-1 bg-slate-300 rounded-full" />

              <span className="w-2.5 h-2.5 rounded-full bg-pink-500 shadow-sm" />
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes dna-helix {
          0%, 100% {
            transform: translateX(-50%) scaleX(1);
            z-index: 10;
          }
          25% {
            transform: translateX(-50%) scaleX(0.2);
          }
          50% {
            transform: translateX(-50%) scaleX(-1);
            z-index: 1;
          }
          75% {
            transform: translateX(-50%) scaleX(-0.2);
          }
        }
      `}</style>
    </div>
  );
};