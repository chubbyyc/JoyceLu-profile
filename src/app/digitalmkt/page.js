"use client";

import Image from "next/image";
import projectImg1 from "@/../public/cm1.png";
import projectImg2 from "@/../public/cm2.png";
import projectImg3 from "@/../public/uni1.png";
import projectImg4 from "@/../public/uni2.png";

export default function ProjectsPage() {
  const projects = [
    {
      title: "社群經營｜勇者物語 —— 職涯攻略 ",
      subtitle: "政大徵才月 行銷組｜2021.10 - 2022.03",
      skills: ["數位行銷", "企劃發想與提案", "Chatbot 應用"],
      sections: [
        {
          label: "企劃內容",
          content:
            "・訪問管顧、金融、電商等 9 位不同產業的學長姐分享職涯經驗\n・就學生習慣簡短易懂資訊的特性，將資訊彙整為大補帖 ，並使用 Chatbot 發放。共製作 12 篇貼文、發放 9 篇職涯懶人包。",
        },
        {
          label: "企劃成效",
          content:
            "・單篇貼文最佳自然觸及數較平時成長 6 倍\n・粉專按讚數提升 500 人，企劃全體貼文共達到 28,000+ 觸及次數\n・透過聊天機器人發放 170+ 份職涯懶人包",
        },
        {
          label: "負責內容",
          content:
            "企劃發想、企劃書撰寫、學長姐訪談、Chatbot 應用、大補帖與結案報告撰寫",
        },
      ],
      links: [
        { text: "職涯攻略企劃成果報告書", url: "https://drive.google.com/file/d/1MNOGz531y0tKTNYh2S6mwcwhwbPDaaC0/view" },
        { text: "政大徵才月行銷組成果報告書", url: "https://drive.google.com/file/d/1Byi-O7MaAv7dvWYEjmDSnoUFiA5pU99a/view" },
        { text: "粉絲專頁", url: "https://www.facebook.com/nccucareer" },
        { text: "Instagram", url: "https://www.instagram.com/nccu_careermonth/" },
      ],
      images: [projectImg1, projectImg2],
    },
    {
      title: "社群經營｜Unilever Taiwan ",
      subtitle: "Unilever Taiwan 聯合利華 校園大使 | 2022.09 - 2023.06",
      skills: ["數位行銷", "企劃發想與提案", "Illustrator"],
      sections: [
        {
          label: "經營方式",
          content:
            "・規劃 6 大行銷企劃：\n以學生受眾較有興趣之主題為出發點，建立企業雇主品牌形象\n・職員訪談、Medium 專欄撰寫：\n訪談職員並撰寫專文，讓受眾一窺 FMCG 職涯樣貌\n・雇主品牌調查問卷：\n分析大專院校生對聯合利華認知，作為日後社群經營策略參考",
        },
        {
          label: "經營成效",
          content:
            "一年內：Instagram 追蹤成長 880+，\nFacebook 按讚成長 1900+，觸及帳號達 1,500,000+",
        },
      ],
      links: [
        { text: "Unilever Taiwan Instagram", url: "https://www.instagram.com/unilevertwcareers/" },
        { text: "Unilever Taiwan Medium", url: "https://unilevertwcareers.medium.com/" },
        { text: "Unilever Taiwan 社群經營結案報告", url: "https://drive.google.com/file/d/1b2POmsS-hshCuTFPVStNPCnlngetbQXo/view" },
      ],
      images: [projectImg3,projectImg4],
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
