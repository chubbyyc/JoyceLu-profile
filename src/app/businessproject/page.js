"use client";

import Image from "next/image";
import projectImg1 from "@/../public/iot1.png";
import projectImg2 from "@/../public/iot2.png";
import projectImg3 from "@/../public/str1.png";
import projectImg4 from "@/../public/str2.png";
import projectImg5 from "@/../public/trip1.png";
import projectImg6 from "@/../public/trip2.png";
import projectImg7 from "@/../public/hotai3.png";
import projectImg8 from "@/../public/hotai4.png";
import projectImg9 from "@/../public/line1.png";
import projectImg10 from "@/../public/line2.png";

export default function ProjectsPage() {
  const projects = [
    {
      title: "IoT Academy 線上學習平台行銷專案 ",
      subtitle: "研華科技股份有限公司 Digital & Content Marketing Intern | 2023.07 - 2023.08",
      skills: ["B2B 整合行銷", "商業專案分析", "使用者訪談"],
      sections: [
        {
          label: "專案簡介",
          content:
            "IoT Academy 是由研華科技股份有限公司於 2020 年成立，\n旨在分享物聯網知識與研華解決方案的線上學習平台。",
        },
        {
          label: "專案目標",
          content:
            "・提升該平台 YouTube 訂閱數\n・提升該平台在學生客群間的知曉度、用戶數與用戶活躍率",
        },
        {
          label: "執行成效",
          content:
            "兩個月內：\n・IoT Academy 平台月均流量提升 33%、註冊提升近 500 人\n・LinkedIn 互動率較去年同期成長 200%\n・YouTube 訂閱人數新增 120 人\n・規劃完整短、中、長期之平台發展策略",
        },
      ],
      links: [
        { text: "IoT Academy 會員經營整合行銷專案", url: "https://drive.google.com/file/d/1jrGyyxR96CIDOdydGNE8Pqv0Gym4hIza/view" },
      ],
      images: [projectImg1, projectImg2],
    },
    {
      title: "喜劇頻道訂閱數成長 200% 策略",
      subtitle: "政大管理顧問社 Project Member | 2023.02 - 2023.06",
      skills: ["商業專案分析", "產業研究", "假說與邏輯思考"],
      sections: [
        {
          label: "專案目標",
          content:
            "與知名喜劇企業 —— 薩泰爾娛樂合作，估算全球喜劇產值，並規劃 YouTube 頻道訂閱數成長 200% 之策略。",
        },
        {
          label: "執行方式",
          content:
            "・市場調研：定義提升訂閱數的數個關鍵節點，並分別提出假說\n・量化問卷：發放 1,098 份有效問卷，以驗證假說並找出關鍵因子\n・質化訪談：深入瞭解填答者對喜劇市場之想法，找出關鍵洞察",
        },
        {
          label: "策略解方",
          content:
            "・增加短影音與普遍性內容: 頻道新增短影音、生活短劇等\n・增加有效內容比例：增加諷刺政治的段子\n・增加多元性內容：舉辦喜劇選秀比賽、合作不同藝人以擴大粉絲群\n・進攻海外華語市場：推廣頻道至規模較大之海外市場可有效提升訂閱數",
        },
      ],
      links: [
        { text: "政大管顧 x 薩泰爾娛樂期中專案企劃書", url: "https://drive.google.com/file/d/1ZWSzEHBYIwV8NsIUEfbs-jDdeEIJe0lN/view" },
        { text: "政大管顧 x 薩泰爾娛樂期末專案企劃書", url: "https://drive.google.com/file/d/1lzHcRVSQeDIqu6GPt215O6DQWV1aL5-z/view" },
      ],
      images: [projectImg3, projectImg4],
    },
    {
      title: "線上訂房平台業績成長 200% 策略",
      subtitle: "政大管理顧問社 Project Member | 2022.09 - 2023.01",
      skills: ["商業專案分析", "焦點訪談", "產業研究"],
      sections: [
        {
          label: "專案目標",
          content:
            "與線上訂房平台 —— Trip.com 合作之虛擬專案，找出關鍵痛點並策劃業績成長 200% 之短、中、長期完整策略。",
        },
        {
          label: "執行方式",
          content:
            "・產業研究：深入瞭解旅遊與訂房產業現況，進行資料蒐集與競品分析\n・議題分析：建立假說以定義問題，找出關鍵痛點\n・焦點訪談：瞭解消費者使用訂房平台偏好與習慣，以驗證假說、發想策略",
        },
        {
          label: "策略解方",
          content:
            "・流量-曝光管道：消費者對 Trip.com 訂房業務認知不足，應針對 KOL 聯盟行銷與 SEO 以提升流量來源\n・轉換率-價格：Trip.com 優惠不足，應透過優化介面與平台讓利，使消費者有效感受價格優惠，提升其購買意願",
        },
      ],
      links: [
        { text: "政大管顧 x Trip.com 專案企劃書", url: "https://drive.google.com/file/d/1B4L_pszqN7GU6o1IO1cIgzY3_22NO_43/view" },
      ],
      images: [projectImg5, projectImg6],
    },
    {
      title: "iRent 美食地圖",
      subtitle: "和泰汽車股份有限公司 LEXUS 整合行銷實習生｜2022.07 - 2022.08",
      skills: ["商業企劃提案", "產業研究", "企劃書撰寫"],
      sections: [
        {
          label: "專案內容",
          content:
            "・針對近年大幅提升的共享機車租車需求，與團隊發想「iRent 美食地圖」作為 MaaS 創新服務出發點\n・專案目標：提升 iRent 會員實際使用率、豐富和泰生態圈、掌握用戶消費習慣以提供未來企業可用之後台數據\n・專案成效：以「極具參考價值」的評語榮獲提案競賽冠軍",
        },
        {
          label: "研究方法",
          content:
            "・產業研究：深入瞭解移動載具之產業現況、使用者痛點與樣貌\n・量化問卷分析：發放 150 份有效問卷，分析消費者偏好之 App 功能",
        },
        {
          label: "策略解方",
          content:
            "・於 iRent 導入美食地圖，並與點餐平台合作，整合餐廳資訊及點餐系統\n・新增個人化推薦、關鍵字查找、餐廳搜尋功能，並推薦該時段營業商家\n・綁定和泰 Pay 及回饋和泰 Points，整合共享機車租借與線上點餐功能",
        },
      ],
      links: [
        { text: "iRent 美食地圖企劃書", url: "https://drive.google.com/file/d/1vIqVASEyKsMVdTTACuxRQSaAhspmlC7L/view" },
        { text: "iRent 美食地圖一頁式提案", url: "https://drive.google.com/file/d/1shlbC5tivCbLbZmq78Mmu6O-cWNyX-EQ/view" },
      ],
      images: [projectImg7,projectImg8],
    },
    {
      title: "大學生對 LINE OA 的使用行為分析",
      subtitle: "消費者行為課程專案｜2023.02 - 2023.06",
      skills: ["商業專案分析", "質化訪談", "行銷策略提案"],
      sections: [
        {
          label: "專案內容",
          content:
            "探討使用者對 LINE OA 之看法及影響，進而研究此系統最適切的使用對象及方法，並提出行銷建議。",
        },
        {
          label: "研究方法",
          content:
            "・質化訪談：研究消費者對於 LINE OA 訊息之使用習慣\n → 統整出 2 項主要洞察,並以此作為量化問卷設計參考之一\n ・量化問卷分析：李克特五點量表作為問卷設計依據，共發放 256 份有效問卷\n → 將結果以 Kmeans 分析成三群消費者，瞭解喜好 LINE OA 功能的差異",
        },
        {
          label: "策略解方",
          content:
            "・證實消費者可依照 LINE OA 功能偏好分群，且於各產業中的分群比例會不同\n・品牌可設計不同功能比重的 LINE OA 機器人，提供更符顧客需求的溝通管道 ",
        },
      ],
      links: [
        { text: "大學生 LINE OA 使用行為書面報告", url: "https://drive.google.com/file/d/1DYFfI3d_SWlPiRNsOh_EP9KjdbAdaqq6/view" },
        { text: "大學生 LINE OA 使用行為簡報", url: "https://drive.google.com/file/d/1QY-0sYfn8tWwQDGvMVTicYX_md_qhHv0/view" },
      ],
      images: [projectImg9, projectImg10],
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
                  className="w-full h-55 rounded-xl border border-pink-200 shadow"
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