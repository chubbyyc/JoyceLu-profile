"use client";

import Image from "next/image";
import projectImg1 from "@/../public/inccu1.jpg";
import projectImg2 from "@/../public/inccu2.jpg";
import projectImg3 from "@/../public/hsr.jpg";
import projectImg4 from "@/../public/dct1.png";
import projectImg5 from "@/../public/dct2.png";
import projectImg6 from "@/../public/app1.png";
import projectImg7 from "@/../public/beer1.png";
import projectImg8 from "@/../public/beer2.png";

export default function ProjectsPage() {
  const projects = [
    {
      title: "「iNCCU 愛政大」網頁 Redesign",
      subtitle: "進階使用者經驗設計課程專案｜2024.03-2024.06",
      skills: ["UI/UX", "資訊架構設計", "易用性測試"],
      sections: [
        {
          label: "專案內容",
          content:
            "「iNCCU 愛政大」是由校方人員為政大學生設計的資訊服務系統，\n此專案內容主要為重新調整網頁的資訊架構分層與介面設計，\n優化後 iNCCU 的 SUS 量表分數為 78.6 分，相較原先 54 分顯著提升。",
        },
        {
          label: "研究方法",
          content:
            "・量化問卷：使用經驗、功能與想法、SUS 量表\n・質化訪談：卡片分類、總覽網頁頁面\n・耐久易用性測試：執行四項任務測試流暢度",
        },
        {
          label: "負責內容",
          content:
            "專案管理、量化問卷設計、質化訪談、介面設計、易用性測試",
        },
      ],
      links: [
        { text: "iNCCU 愛政大網頁 Redesign 專案簡報", url: "https://drive.google.com/file/d/1BH4KzJ1QvvCIeFeDNanRbDi-IErMEM6s/view" },
        { text: "Prototype 展示", url: "https://www.figma.com/proto/ga0ApUbhpx1E26OYo6QwGP/UX-%E7%AC%AC%E4%B8%83%E7%B5%84_wireframe-flow?page-id=0%3A1&node-id=654-19496&t=vbNVNC7JRxmCELvd-1&scaling=scale-down-width&starting-point-node-id=654%3A19496&content-scaling=fixed&show-proto-sidebar=1" },
      ],
      images: [projectImg1, projectImg2],
    },
    {
      title: "台灣高鐵 APP Redesign",
      subtitle: "人機互動設計課程專案｜2023.10-2024.01",
      skills: ["UI/UX", "使用者訪談", "品牌重塑"],
      sections: [
        {
          label: "專案內容",
          content:
            "深入學習人機互動的模式，整合現有 2 款高鐵 App，\n延續其優點並改善痛點，重新定義品牌特色並設計 Prototype。",
        },
        {
          label: "研究方法",
          content:
            "・質化訪談：使用者和產品相關的活動、常用功能等，以及卡片分類法\n・繪製人物誌、User Journey Map、關係圖\n・易用性測試：經由執行兩項任務測試流暢度",
        },
        {
          label: "負責內容",
          content:
            "專案管理、議題分析、質化訪談、易用性測試、簡報製作與發表",
        },
      ],
      links: [
        { text: "高鐵 App 整合設計企劃書", url: "https://drive.google.com/file/d/1_uzEDZMHwy6zV0v2OPH06exqDsFs2GZn/view" },
        { text: "高鐵 App 整合設計期末海報", url: "https://drive.google.com/file/d/1Umb-GKlscp-YdhC3cTgl3E8JjCSiXiXC/view" },
      ],
      images: [projectImg3],
    },
    {
      title: "《 網路生態城 》",
      subtitle: "政大數位內容與科技學士學程第 15 屆畢業製作｜2023.09 - 2024.05",
      skills: ["網頁互動", "企劃發想", "介面設計"],
      sections: [
        {
          label: "專案內容",
          content:
            "使用者進入頁面回答網路使用行為相關問題後，將依據填答內容生成 11 種、5 種顏色，不同型態與顏色的建築物，並產出專屬結果圖。透過匯集使用者們所創造出的建築物，形成數據美學，形塑出「網路生態城」。",
        },
        {
          label: "專案理念",
          content:
            "在資訊流通快速的網路世代，人們得以在虛擬世界中雕塑自我形象。因此，我們將網路世界比擬為一座豐富多樣的生態城，其中各式各樣的角色，猶如一棟棟特色鮮明的建築彼此錯落，因而形成了「網路生態城」。",
        },
        {
          label: "負責內容",
          content:
            "企劃發想、心理測驗介面設計、建築物繪製、專案管理",
        },
      ],
      links: [
        { text: "心理測驗網頁", url: "https://dct-final-p5.vercel.app/" },
        { text: "生成結果頁面", url: "https://dct-final-p5.vercel.app/collection" },
        { text: "結案報告", url: "https://drive.google.com/file/d/140htkYWtYg8rP1gTEjMGuF-J022psr_Z/view" },
      ],
      images: [projectImg4, projectImg5],
    },
    {
      title: "《政緣》APP 介面設計",
      subtitle: "人機介面課程專案｜2024.02 - 2024.06",
      skills: ["企劃發想", "痛點分析", "介面設計"],
      sections: [
        {
          label: "專案內容",
          content:
            "《政緣》是一款專屬政大生的交友 APP，我們以「想談校園戀愛」的政大生作為主要受眾。然而，目前交友軟體存在使用者素質不穩定、難以開啟話題、介面照片比例過大等痛點。因此，我們希望能透過這款 APP，解決他們想談戀愛但不知如何認識新對象的問題。",
        },
        {
          label: "專案解方",
          content:
            "・政大生為主：新增修課、社團參與紀錄、政大活動等政大相關特色\n・破解外貌至上迷思：以資訊交流為主：縮小照片版面\n・多元交友：不侷限於從配對頁面認識他人，也可以發起或報名新活動",
        },
        {
          label: "負責內容",
          content:
            "企劃發想、質化訪談、簡報提案、Sitemap 與 Wireframe 繪製",
        },
      ],
      links: [
        { text: "《政緣》企劃書", url: "https://drive.google.com/file/d/1jHoG51PFYv0V3WOsDz45vIdAqkOOFVxc/view" },
        { text: "《政緣》Prototype", url: "https://www.figma.com/proto/jLOEGtrcUJM41i4Wiqqw4C/Practice?page-id=210%3A271&node-id=420-6456&node-type=canvas&viewport=814%2C633%2C0.12&t=bRd8J5CUXr5wCEB3-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=420%3A3455" },
      ],
      images: [projectImg6],
    },
    {
      title: "精釀啤酒吧 UI/UX 優化",
      subtitle: "進階使用者經驗設計課程專案｜2024.03-2024.06",
      skills: ["商業專案分析", "UI/UX", "專案管理"],
      sections: [
        {
          label: "專案內容",
          content:
            "與文山區精釀啤酒吧 —— 好啤氣合作，透過分析商業需求與使用者訪談研究，針對商家需求產出官方網站 Prototype 及短、中、長期經營優化策略，榮獲期末提案競賽冠軍。",
        },
        {
          label: "專案解方",
          content:
            "・短期策略：強化場域體驗，將顧客停留在酒吧中增加客訂單數\n ・中期策略：初步藉由網站架設，呈現整體品牌調性與價值主張\n ・長期策略：建立員工的培訓流程，提高服務的一致性與品質",
        },
        {
          label: "負責內容",
          content:
            "議題分析、專案管理、質化訪談、UI 設計、簡報製作與發表",
        },
      ],
      links: [
        { text: "好啤氣專案企劃書", url: "https://drive.google.com/file/d/19woQkWUlg8QM9BiEtjqLWjdT2GB7GmGL/view" },
      ],
      images: [projectImg7, projectImg8],
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