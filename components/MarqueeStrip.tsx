import React from 'react';

const MarqueeStrip: React.FC = () => {
  const items = [
    { text: "ДОСТАВКА ПО СНГ ✦", type: "white" },
    { text: "НОВЫЙ ДРОП ✦", type: "outline" },
    { text: "Y2K ЭСТЕТИКА ✦", type: "dim" },
    { text: "СИСТЕМНЫЙ СБОЙ ✦", type: "white" },
    { text: "СЫРАЯ ЭСТЕТИКА ✦", type: "outline" },
  ];

  // Duplicate for seamless loop
  const content = [...items, ...items, ...items, ...items];

  return (
    <section className="bg-black border-b border-[#333] py-3 overflow-hidden select-none">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-scroll">
          {content.map((item, index) => (
            <span 
              key={index} 
              className={`font-['Oswald'] text-4xl font-bold tracking-tight uppercase px-8 ${
                item.type === 'outline' ? 'text-outline' : 
                item.type === 'dim' ? 'bg-gradient-to-br from-white/10 to-white/0 bg-clip-text text-transparent' : 
                'text-white'
              }`}
            >
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeStrip;