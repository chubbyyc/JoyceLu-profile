"use client";

import Image from "next/image";
import projectImg1 from "@/../public/be1.png";
import projectImg3 from "@/../public/virsody1.png";
import projectImg4 from "@/../public/virsody2.png";
import projectImg5 from "@/../public/music1.png";
import projectImg6 from "@/../public/music2.png";

export default function ProjectsPage() {
  const projects = [
    {
      title: "實體展覽籌辦｜《 BE- 》 ",
      subtitle: "政大數位內容與科技學士學程第 15 屆畢業製作 展覽總召 | 2023.09 - 2024.05",
      skills: ["策展規劃", "團隊領導與合作", "專案管理"],
      sections: [
        {
          label: "策展理念",
          content:
            "「BE-」可以意味著對事物的影響，使其成為某種形式，抑或是使人對事物產生新的感受。這是一場啟發觀眾發現新感受、體驗難以言喻的情感藝術之旅。在探索與感受的迷霧中，觀眾透過參與及互動作品，能獲得專屬的獨特體驗，字根與主題的輪廓亦將逐漸清晰。",
        },
        {
          label: "展覽成效",
          content:
            "・展覽時間與地點：2024/5/7(二)- 2024/5/12(二) 松山文創園區 藝異空間\n・參展作品：共 4 件",
        },
        {
          label: "活動成效",
          content:
            "・參與人數：共 1,545 人\n・贊助廠商： Giloo 紀實影音、MyVideo、WAT、雪坊精緻優格、統一證券\n・回饋問卷填答數： 366 份\n・整體展覽平均滿意度：4.4 - 4.7 分 / 5 分",
        },
      ],
      links: [
        { text: "BE-｜政大數位內容畢業製作結案報告", url: "https://drive.google.com/file/d/1egeD5ubS1KLsBeeQ8ht9POyAyXXkMjGc/view" },
      ],
      images: [projectImg1],
    },
    {
      title: "線上策展｜台灣獨立音樂文化加值",
      subtitle: "文化創意加值課程專案 | 2023.09 - 2024.05",
      skills: ["數位工具應用", "策展規劃與提案", "社會議題分析"],
      sections: [
        {
          label: "專案內容",
          content:
            "以「台灣獨立音樂文化」為題，使用 virsody 平台設計線上策展，並從大眾、決策者、中介者三個面向探討現今台灣獨立音樂面臨的議題與可行之解方",
        },
        {
          label: "痛點分析",
          content:
            "・創作者缺乏資源、資金、行銷管道與曝光機會，規模較難發展至國際舞台\n・大眾對獨立音樂人的刻板/負面印象",
        },
        {
          label: "痛點解方",
          content:
            "・培養大眾多元的聆聽習慣、對音樂的包容性、對歌詞與議題的理解\n・政府單位落實文化補助，舉辦藝文活動、擴增硬體建設、展演空間",
        },
        {
          label: "專案解方",
          content:
            "擔任創作者與大眾間的橋樑，透過各式媒體渠道與資源，提倡跨界交流、數位互動等推廣與曝光活動",
        },
      ],
      links: [
        { text: "台灣獨立音樂文化加值 期末提案報告", url: "https://drive.google.com/file/d/1rac1aTQI9-vKesuPA6t07wgpIooc3DwA/view" },
        { text: "線上策展網站", url: "https://virsody.io/exhibition/addvalue-indie-twhttps://virsody.io/exhibition/addvalue-indie-tw" },
      ],
      images: [projectImg3,projectImg4],
    },
    {
      title: "策展提案｜音樂調香師 —— 有香味的音樂展 ",
      subtitle: "臺北流行音樂中心「音樂策展人才培育工作坊」 | 2022.04 - 2022.05",
      skills: ["策展規劃", "企劃書撰寫", "專案管理"],
      sections: [
        {
          label: "專案內容",
          content:
            "以《 音樂調香師 —— 有香味的音樂展 》作為提案主軸，籌劃香水與音樂結合之沉浸式體驗展覽，並以正取身份入選工作坊。在當若科技藝術共同創辦人周杰璁老師的指導下，於期末提案獲得科技藝術、音樂、行銷等領域業師高度評價。",
        },
        {
          label: "策展理念",
          content:
            "將音樂的 intro(前奏)、chorus(副歌)、outro(尾奏)與香水的前調、中調、後調比擬，透過不同的展覽體驗、展區規劃、科技應用等，將音樂以更具象化的方式呈現，從聽覺延伸至嗅覺。",
        },
        {
          label: "負責內容",
          content:
            "企劃提案、企劃書製作、專案管理、展區規劃、簡報製作與發表",
        },
      ],
      links: [
        { text: "音樂調香師 —— 有香味的音樂展 提案企劃書", url: "https://drive.google.com/file/d/1pSGa1Wd2x5lhTOGJmtMRchdAn7GmzX3R/view" },
      ],
      images: [projectImg5,projectImg6],
    },
  ];

  return (
    <div className="w-full min-h-screen px-6 py-12 space-y-12 overflow-auto bg-gradient-to-b from-pink-100 via-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto space-y-10">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white/80 backdrop-blur-md rounded-xl border-[2px] border-pink-200 shadow-xl p-8 flex flex-col md:flex-row gap-6"
          >
            {/* 左側文字說明區 */}
            <div className="flex-1 space-y-6">
              {/* 專案標題＋技能標籤＋副標 */}
              <div>
                <h2 className="text-2xl font-bold text-pink-700 text-center md:text-left">{proj.title}</h2>
                <hr className="my-2 border-pink-200" />
                <div className="flex flex-wrap items-center gap-3 text-sm text-pink-800 text-center md:text-left">
  <p>{proj.subtitle}</p>
  <div className="flex flex-wrap gap-2">
    {proj.skills.map((skill, i) => (
      <span
        key={i}
        className="px-3 py-1 bg-pink-100 text-pink-800 text-xs rounded-full border border-pink-300"
      >
        {skill}
      </span>
    ))}
  </div>
</div>
              </div>

              {/* 三欄資訊欄位 */}
              <div className="flex flex-col gap-6">
  {proj.sections.map((sec, i) => (
    <div key={i} className="flex flex-col">
      {/* 小標題：漸層底色 + 邊框 + 圓角 */}
      <div className="inline-block w-fit px-4 py-1 mb-2 bg-gradient-to-r from-pink-100 via-pink-50 to-purple-100 border border-pink-300 rounded-full text-base font-semibold text-pink-700">
        {sec.label}
      </div>
      {/* 對應內容：直式排版 */}
      <p className="text-sm text-pink-900 whitespace-pre-line">
        {sec.content}
      </p>
    </div>
  ))}
</div>


              {/* 連結按鈕 */}
              <div className="flex gap-4 mt-3 flex-wrap">
                {proj.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-pink-100 text-pink-800 text-sm rounded-full border border-pink-300 hover:bg-pink-200 transition"
                  >
                    🔗 {link.text}
                  </a>
                ))}
              </div>
            </div>

            {/* 右側圖片欄 */}
            <div className="w-full md:w-[400px] flex flex-col gap-4">

              {proj.images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`project-img-${i}`}
                  className="w-full h-auto rounded-xl border border-pink-200 shadow"
                  placeholder="blur"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
