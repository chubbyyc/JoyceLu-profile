"use client";

import Image from "next/image";
import sticker from "@/../public/sticker-heart.png";
import shopeeIcon from "@/../public/icon-shopee.png";
import unileverIcon from "@/../public/icon-unilever.png";
import humannoidIcon from "@/../public/humannoid.png";
import hotaiIcon from "@/../public/hotai.png";
import clubIcon1 from "@/../public/opennccu.png";
import eduIcon from "@/../public/eduIcon.png";
import clubIcon from "@/../public/cg.png";

export default function AboutPage() {
  const stickers = Array.from({ length: 18 }).map((_, i) => ({
    top: `${Math.random() * 90}%`,
    left: `${Math.random() * 90}%`,
    rotate: `${Math.random() * 30 - 15}deg`,
    size: 25 + Math.random() * 25,
    opacity: 0.4 + Math.random() * 0.5,
    key: i,
  }));

  const sections = [
    {
      title: "ABOUT ME",
      content:
        "我是盧語宸，是位樂於溝通合作、細心謹慎、善於多工處理的人！\n目前就讀於國立政治大學財政學系五年級，雙主修數位內容與科技學士學位學程，輔修韓國語文學系。\n財務與數位科技的跨領域學習，讓我建立了嚴謹的邏輯思維與數據分析能力；\n而透過商業個案、使用者研究及產品管理實戰經驗，我培養了從發掘用戶需求、制定策略到執行迭代的全方位能力。",
    },
    {
      title: "學歷",
      icon: eduIcon,
      content:
        "國立政治大學 財政學系（主修）\n國立政治大學 數位內容與科技學士學程（雙主修）\n國立政治大學 韓文學系（輔系）",
    },
    {
      title: "實習經歷",
      isCustom: true,
      experiences: [
        {
          icon: shopeeIcon,
          title: "Shopee｜Product Management Intern｜2025/01 - 至今",
          details: [
            "負責台灣區退貨退款與爭議審核功能，拆解供應鏈邏輯，撰寫詳細功能說明手冊，提升內部效率",
            "執行使用者驗收測試（UAT），確保新功能無縫上線，並建立後續監測機制以持續優化",
            "撰寫並整合業務需求文件（FRF），串聯跨部門資源，提出優化需求，驅動產品與營運流程改進",
          ],
        },
        {
          icon:humannoidIcon,
          title: "只要有人社群顧問股份有限公司｜業務實習生｜2023/09 - 2024/02",
          details: [
            "透過數據分析洞察市場趨勢與受眾喜好，撰寫 10+ 篇品牌成效月報，定期向客戶端交付優化策略",
            "透過資料彙整、競品分析、策略提案、跨部門溝通等方式，協助 7 位正職執行 10+ 個短期專案",
            "為 10+ 個知名品牌規劃 40+ 篇社群貼文，最佳平均互動率較其他貼文成長 7 倍以上",
          ],
        },
        {
          
          title: "研華股份有限公司｜Digital & Content Marketing Intern｜2023/07 - 2023/08",
          details: [
            "透過議題拆解、產業調查、痛點分析等，深入瞭解 B2B 線上學習平台現況並提出效益評估",
            "進行 10+ 場質化訪談以洞察受眾偏好，規劃 IoT 線上學習平台與 YouTube 頻道之發展策略",
            "製作並發送 20+ 課程精華，兩個月內平台註冊人數提升近 500 人，LinkedIn 互動率成長 200%",
          ],
        },
        {
          icon: unileverIcon,
          title: "聯合利華股份有限公司｜品牌校園大使｜2022/09 - 2023/06",
          details: [
            "透過產業分析、問卷調查、數據洞察等，深入瞭解 FMCG 市場現況並經營企業雇主品牌形象",
            "統籌年度社群平台經營策略，發想 6 大行銷企劃，9 個月內 Instagram 成長 2000+ 追蹤數",
          ],
        },
        {
          icon: hotaiIcon,
          title: "和泰汽車股份有限公司｜LEXUS 車輛部整合行銷室實習生｜2022/7 - 2022/08",
          details: [
            "發想「MaaS 創新服務專案」，分析移動載具現況、效益評估並提出解方，榮獲提案競賽冠軍",
            "透過策劃提案、接洽講師、優化成效，共同籌劃 6 場車主行銷專案，活動回饋滿意度超過 9 成",
          ],
        },
      ],
    },
    {
      title: "社團經歷",
      isCustom: true,
      experiences: [
        {
          icon: clubIcon1, // 可以更換成其他 icon
          title: "Open NCCU 數位轉型服務組織｜Product Manager、UX Lead｜2024/09 - 至今",
          details: [
            "推出新版選課系統，吸引 80,000+ 造訪人次與 4,500+ 活躍使用者，顯著提升使用率與體驗",
            "與校方深度合作，優化政大全人系統，透過問卷調查、質化訪談與易用性測試，提出再設計方案",
            "帶領 20+ 人跨部門團隊，管理 10+ 產品功能，協調設計師、工程師等利害關係人溝通與整合",
          ],
        },
        {
          icon: clubIcon, // 這裡也可更換
          title: "政大管理顧問社｜專案助教、社員｜2022/09 - 2023/12",
          details: [
            "透過管顧思維、市場分析、焦點訪談，發想線上訂房平台 Trip.com 業績翻倍之策略",
            "透過產業研究、數據分析、質化訪談，替喜劇娛樂公司估算全球產值並提出訂閱數翻倍策略",
          ],
        },
      ],
    },
    {
      title: "專長與能力",
      content:
        "語言能力：英文(TOEIC 885分) / 韓文 (初學)\n電腦應用：Excel / Power Point / Figma / GA / Illustrator / After Effects / Premiere\n專業技能：產品管理 / UI/UX / 專案管理 / 產業研究 / 商業簡報 / 策略規劃 / 數位行銷",
    },
  ];
  

  return (
    <div className="w-full min-h-screen px-6 py-10 space-y-12 overflow-auto relative">
      {/* 可愛貼紙背景 */}
      {stickers.map(({ top, left, rotate, size, opacity, key }) => (
        <Image
          key={key}
          src={sticker}
          alt={`sticker-${key}`}
          width={size}
          height={size}
          className="absolute"
          style={{ top, left, transform: `rotate(${rotate})`, opacity, zIndex: 0 }}
        />
      ))}

      <div className="relative z-10">
        {/* 各區塊內容 */}
        <div className="mt-10 space-y-6">
          {sections.map((sec, i) => (
            <div
              key={i}
              className="bg-pink-50/80 rounded-xl border-[2px] border-dashed border-pink-300 shadow p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-2">
                {sec.icon && (
                  <Image src={sec.icon} alt="icon" width={24} height={24} />
                )}
                <h2 className="text-xl font-bold text-pink-700">{sec.title}</h2>
              </div>

              {/* 特別處理實習經歷清單格式 */}
              {sec.isCustom ? (
                <div className="space-y-4">
                  {sec.experiences.map((exp, idx) => (
                    <div key={idx} className="flex gap-3">
                      <Image src={exp.icon} alt="exp-icon" width={80} height={80} className="mt-1" />
                      <div>
                        <p className="font-semibold text-sm text-pink-900">{exp.title}</p>
                        <ul className="list-disc list-inside text-sm text-pink-900 leading-relaxed">
                          {exp.details.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="whitespace-pre-line text-sm leading-relaxed text-pink-900">
                  {sec.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
