"use client";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import about1 from "@/../public/about1.jpg";
import about2 from "@/../public/about2.jpg";
import extra1 from "@/../public/extra1.jpg";
import extra2 from "@/../public/extra2.jpg";
import sticker from "@/../public/sticker-heart.png";
import usagiIcon from "@/../public/usagi.png";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [stickers, setStickers] = useState([]);
  const [showUsagi, setShowUsagi] = useState(false);
  const [usagiCount, setUsagiCount] = useState(0);

  useEffect(() => {
    setMounted(true);

    // 動態貼紙生成
    const generatedStickers = Array.from({ length: 25 }).map((_, i) => ({
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
      rotate: `${Math.random() * 30 - 15}deg`,
      size: 30 + Math.random() * 30,
      opacity: 0.5 + Math.random() * 0.4,
      key: i,
    }));
    setStickers(generatedStickers);

    const savedCount = localStorage.getItem("usagiClickCount");
    if (savedCount) setUsagiCount(parseInt(savedCount));
  }, []);

  const handleUsagiClick = () => {
    const newCount = usagiCount + 1;
    setUsagiCount(newCount);
    localStorage.setItem("usagiClickCount", newCount.toString());
    setShowUsagi(true);
  };

  return (
    <>
      <Head>
        <title>盧語宸的數位履歷</title>
        <meta name="description" content="這是 Joyce 的可愛數位履歷作品集 ✿" />
      </Head>

      {/* Usagi Icon */}
      <div className="fixed bottom-6 right-6 z-50 text-center">
        <Image
          src={usagiIcon}
          alt="usagi icon"
          width={90}
          height={90}
          onClick={handleUsagiClick}
          className="cursor-pointer hover:scale-110 transition duration-300"
        />
        <p className="text-xxl text-pink-600 mt-1"> 窩喜歡尼 {usagiCount} 次！ </p>
      </div>

      <div
        className={`w-full min-h-screen px-6 py-10 space-y-12 overflow-auto relative transition-opacity duration-700 ease-out ${mounted ? "opacity-100" : "opacity-0"}`}
      >
        {/* 隨機貼紙生成 */}
        {stickers.map(({ top, left, rotate, size, opacity, key }) => (
          <Image
            key={key}
            src={sticker}
            alt={`sticker-${key}`}
            width={size}
            height={size}
            className="absolute animate-float"
            style={{ top, left, transform: `rotate(${rotate})`, opacity, zIndex: 0 }}
          />
        ))}

        <div className="relative z-10">
          <div className="bg-white/90 rounded-xl border-[3px] border-pink-300 shadow-lg p-6 backdrop-blur-sm text-center animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <h1 className="text-4xl font-bold text-pink-700 mb-2 text-center">盧語宸 Joyce Lu 🐰</h1>
            <p className="text-base sm:text-lg">✿ Welcome to my wonderland ✿</p>
          </div>

          {/* 自我介紹便利貼區 */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-pink-50 rounded-xl border-[2px] border-dashed border-pink-300 shadow p-4 h-36 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <h2 className="text-lg font-semibold mb-1">🪄 我是誰？ ✨</h2>
              <p className="text-base leading-relaxed">
                23 歲，天蠍座，精神狀態偶爾很癲 ʕง•ᴥ•ʔง  <br />
                想跟喜歡的人談場最純粹的戀愛，一起養隻貓、有個家、 <br />過著歲月靜好的日常、白頭偕老。
              </p>
            </div>
            <div className="bg-pink-50 rounded-xl border-[2px] border-dashed border-pink-300 shadow p-4 h-36 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <h2 className="text-lg font-semibold mb-1">💖 一些關於我 💖</h2>
              <p className="text-base leading-relaxed">
                92% 的 I，極度社恐內向仔 ଘ(੭ˊᵕˋ)੭* ੈ✩‧₊˚ <br />
                從國小就是 153 的身高 | ᐕ)⁾⁾ <br />
                從國中就開始離家住校的生活 ◉‿◉
              </p>
            </div>
          </div>

          {/* 四張圖片＋文字區塊 */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="bg-white/80 border-2 border-violet-300 rounded-xl shadow p-4 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: "500ms" }}
              onClick={() => setShowUsagi(true)}
            >
              <Image
                src={extra1}
                alt="section1"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg mb-2"
                placeholder="blur"
              />
              <p className="text-sm leading-relaxed">
                👩🏻‍💻 TMI 1 <br />
                今年大五， 9 月要讀政大數位內容所，繼續當政大地縛靈👾
              </p>
              {showUsagi && (
                <p className="mt-2 text-pink-600 font-semibold animate-bounce">🎉 你找到了烏薩奇！</p>
              )}
            </div>

            <div className="bg-white/80 border-2 border-violet-300 rounded-xl shadow p-4 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
              <Image
                src={extra2}
                alt="section2"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg mb-2"
                placeholder="blur"
              />
              <p className="text-sm leading-relaxed">
                ❤️‍🔥 TMI 2<br />
                聽團仔，想當日系短髮聽團女∠( ᐛ 」∠)_
              </p>
            </div>

            <div className="bg-white/80 border-2 border-violet-300 rounded-xl shadow p-4 animate-fade-in-up" style={{ animationDelay: "700ms" }}>
              <Image
                src={about1}
                alt="section3"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg mb-2"
                placeholder="blur"
              />
              <p className="text-sm leading-relaxed">
                🐰 TMI 3<br />
                吉伊卡哇粉，最喜歡的是烏薩奇（但我本質是小桃）🤍
              </p>
            </div>

            <div className="bg-white/80 border-2 border-violet-300 rounded-xl shadow p-4 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
              <Image
                src={about2}
                alt="section4"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg mb-2"
                placeholder="blur"
              />
              <p className="text-sm leading-relaxed">
                💁🏻‍♀️ TMI 4 <br />
                藏不住的天然呆＆小朋友氣，超級聒噪又愛蹦蹦跳跳👼🏻
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

