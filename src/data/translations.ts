export type TranslationKeys = keyof typeof TRANSLATIONS.en;

export const TRANSLATIONS = {
  en: {
    // Navbar
    navWorks: "Works",
    navAbout: "About Me",
    navAvailable: "Available for Hire",

    // Home Landing
    heroTag: "Creative Engineer & Graphic Programmer",
    heroTitle: "Serene Algorithms Tracing Nature's Flow",
    heroDesc: "Move your mouse across the slate rock garden to disturb the water ripples and interact with the procedurally swimming Koi carps.",
    ctaExplore: "Explore Works",
    ctaContact: "Get in Touch",

    // Works Grid & Search
    worksTitle: "Works",
    worksDesc: "Games, Web3 apps, and interactive experiments I have built, from professional roles to personal projects.",
    searchPlaceholder: "Search works by title, description, or tech stack...",
    filterLabel: "Filter by Stack:",
    showingCount: "Showing {count} of {total} works",
    clearAll: "Clear All Filters",
    noResultsTitle: "No matching works found",
    noResultsDesc: "Try refining your search keyword or deselecting active stack filters.",
    resetFilters: "Reset Search & Filters",

    // About Page
    aboutTag: "ABOUT THE ARCHITECT",
    aboutTitle: "Artistic Engineering",
    aboutBio1: "Hello! I am a Senior Frontend Engineer & Graphic Programmer dedicated to bridging the gap between rigorous software architecture and high-performance interactive graphics.",
    aboutBio2: "My professional path centers on building highly optimized, pixel-perfect user interfaces with Next.js, React, and custom HTML5/WebGL shaders. I specialize in creating fluid canvas simulations, high-telemetry dashboards, and secure financial products that perform smoothly at 60 FPS on any modern screen.",
    aboutBio3: "I actively align every piece of code with SOLID design principles, separating business logic and dynamic database stores from aesthetic layouts.",
    aboutCore: "Core Disciplines",
    aboutMilestones: "Career Highlights",
    badgeProjectsTitle: "8 Projects",
    badgeProjectsDesc: "Games & Web3 Apps",
    badgeExperienceTitle: "3+ Years",
    badgeExperienceDesc: "Dev Experience",
    badgeReleasedTitle: "2 Released",
    badgeReleasedDesc: "App Store Titles",
    contactTag: "GET IN TOUCH",
    contactTitle: "Let's Craft Something Magnificent",
    contactDesc: "Have an ambitious system visualizer or a performance-critical interactive page in mind? Let's connect.",
    contactDirect: "Direct Channel",

    // Modal Details
    modalOverview: "Overview",
    modalTech: "Technologies",
    modalRole: "Role",
    modalVisit: "Visit Live Project",
    modalSource: "Source Code",
    modalCategory: "Project Category",
    modalStatus: "Release Status",
    statusReleased: "Released",
    statusCancelled: "Canceled",
    projProfessional: "★ Professional Work",
    projPersonal: "Personal Project",

    // Skills Page
    navSkills: "Technical Skills",
    skillsTitle: "Technical Skills",
    skillsDesc: "A deep dive into core competencies, design architectures, and engineering frameworks refined across professional roles in Japan and Thailand.",
    roleExperience: "Experience",
    roleCoreSkills: "Core Technologies & Libraries",
    roleProjectsTitle: "Showcases Built Using These Skills",
    skillsLegend: "★ indicates professional project / work experience.",

    // Tools Page
    navTools: "Tools",
    toolsTitle: "Tools",
    toolsOpen: "Open tool",
    toolsDesc: "Small apps I have developed myself. Open any of them and use it right in your browser."
  },
  th: {
    // Navbar
    navWorks: "ผลงาน",
    navAbout: "เกี่ยวกับฉัน",
    navAvailable: "พร้อมรับงาน",

    // Home Landing
    heroTag: "วิศวกรครีเอทีฟ & นักเขียนโปรแกรมกราฟิก",
    heroTitle: "อัลกอริทึมอันเงียบสงบ ตามรอยกระแสน้ำของธรรมชาติ",
    heroDesc: "ขยับเมาส์ไปมาระหว่างสวนหินเพื่อรบกวนผิวน้ำให้เกิดระลอกคลื่น และโต้ตอบกับปลาคาร์ฟที่ว่ายน้ำแบบเป็นขั้นตอน",
    ctaExplore: "สำรวจผลงาน",
    ctaContact: "ติดต่อฉัน",

    // Works Grid & Search
    worksTitle: "ผลงาน",
    worksDesc: "เกม แอป Web3 และงานทดลองเชิงโต้ตอบที่ฉันเคยสร้าง ทั้งจากงานบริษัทและโปรเจกต์ส่วนตัว",
    searchPlaceholder: "ค้นหาผลงานด้วยชื่อ รายละเอียด หรือเทคโนโลยี...",
    filterLabel: "กรองตามเทคโนโลยี:",
    showingCount: "แสดงผลงาน {count} จากทั้งหมด {total} ชิ้น",
    clearAll: "ล้างตัวกรองทั้งหมด",
    noResultsTitle: "ไม่พบผลงานที่ตรงตามเงื่อนไข",
    noResultsDesc: "โปรดลองปรับเปลี่ยนคำค้นหา หรือล้างตัวกรองเทคโนโลยีที่ใช้งานอยู่",
    resetFilters: "รีเซ็ตการค้นหาและตัวกรอง",

    // About Page
    aboutTag: "เกี่ยวกับผู้ออกแบบระบบ",
    aboutTitle: "วิศวกรรมเชิงศิลปะ",
    aboutBio1: "สวัสดี! ฉันเป็นวิศวกรฟรอนต์เอนด์อาวุโสและนักพัฒนาโปรแกรมกราฟิกที่มุ่งมั่นที่จะเชื่อมโยงสถาปัตยกรรมซอฟต์แวร์ที่เข้มงวดเข้ากับกราฟิกแบบโต้ตอบที่มีประสิทธิภาพสูง",
    aboutBio2: "เส้นทางวิชาชีพของฉันมุ่งเน้นไปที่การสร้างส่วนต่อประสานผู้ใช้ที่ทำงานได้อย่างมีประสิทธิภาพสูงสุดและสมบูรณ์แบบในระดับพิกเซลด้วย Next.js, React และเชดเดอร์ HTML5/WebGL ฉันเชี่ยวชาญในการสร้างการจำลองของไหลบนแคนวาส แดชบอร์ดที่มีข้อมูลการตรวจวัดสูง และผลิตภัณฑ์ทางการเงินที่ปลอดภัย ซึ่งแสดงผลได้อย่างลื่นไหลที่ 60 FPS บนทุกหน้าจอสมัยใหม่",
    aboutBio3: "ฉันจัดวางโค้ดทุกส่วนอย่างเป็นระบบตามหลักการออกแบบ SOLID เพื่อให้แน่ใจว่าตรรกะทางธุรกิจและฐานข้อมูลแบบไดนามิกจะแยกออกจากส่วนการแสดงผลอย่างสมบูรณ์",
    aboutCore: "ความเชี่ยวชาญหลัก",
    aboutMilestones: "ไฮไลต์การทำงาน",
    badgeProjectsTitle: "8 โครงการ",
    badgeProjectsDesc: "เกม & เว็บ3 แอพ",
    badgeExperienceTitle: "3+ ปี",
    badgeExperienceDesc: "ประสบการณ์พัฒนาเกม",
    badgeReleasedTitle: "เปิดตัวแล้ว 2",
    badgeReleasedDesc: "เกมบนแอพสโตร์",
    contactTag: "ติดต่อฉัน",
    contactTitle: "มาร่วมสร้างสรรค์สิ่งที่ยิ่งใหญ่ด้วยกัน",
    contactDesc: "หากคุณมีโปรแกรมแสดงภาพระบบที่ซับซ้อนหรือหน้าเว็บแบบโต้ตอบที่เน้นประสิทธิภาพการทำงานสูง สามารถติดต่อฉันได้ทันที",
    contactDirect: "ช่องทางการติดต่อโดยตรง",

    // Modal Details
    modalOverview: "ภาพรวมโครงการ",
    modalTech: "เทคโนโลยีที่ใช้",
    modalRole: "บทบาทหน้าที่",
    modalVisit: "เข้าชมเว็บไซต์จริง",
    modalSource: "ซอร์สโค้ด",
    modalCategory: "ประเภทโปรเจกต์",
    modalStatus: "สถานะการเปิดตัว",
    statusReleased: "เปิดตัวแล้ว",
    statusCancelled: "ยกเลิกก่อนเปิดตัว",
    projProfessional: "★ โปรเจกบริษัท",
    projPersonal: "โปรเจกต์ส่วนตัว",

    // Skills Page
    navSkills: "ทักษะทางเทคนิค",
    skillsTitle: "ทักษะทางเทคนิค",
    skillsDesc: "เจาะลึกทักษะหลัก สถาปัตยกรรมซอฟต์แวร์ และเฟรมเวิร์กวิศวกรรมที่ได้รับการพัฒนาผ่านการทำงานจริงในญี่ปุ่นและไทย",
    roleExperience: "ประสบการณ์",
    roleCoreSkills: "เทคโนโลยี & ไลบรารีหลัก",
    roleProjectsTitle: "โครงการที่สร้างโดยใช้ทักษะเหล่านี้",
    skillsLegend: "★ ระบุถึงทักษะที่มีประสบการณ์ทำงานจริงในโปรเจกต์",

    // Tools Page
    navTools: "เครื่องมือ",
    toolsTitle: "เครื่องมือ",
    toolsOpen: "เปิดเครื่องมือ",
    toolsDesc: "แอปเล็ก ๆ ที่ฉันพัฒนาขึ้นเอง เปิดใช้งานได้ทันทีบนเบราว์เซอร์"
  },
  ja: {
    // Navbar
    navWorks: "制作実績",
    navAbout: "自己紹介",
    navAvailable: "お仕事の依頼受付中",

    // Home Landing
    heroTag: "クリエイティブエンジニア & グラフィックスプログラマー",
    heroTitle: "自然の流れを辿る静寂のアルゴリズム",
    heroDesc: "石庭の上にマウスを移動させて水の波紋を作り、数理モデルに基づいて泳ぐ鯉たちと触れ合ってみてください。",
    ctaExplore: "制作実績を見る",
    ctaContact: "お問い合わせ",

    // Works Grid & Search
    worksTitle: "制作実績",
    worksDesc: "実務から個人開発まで、これまでに手がけたゲーム、Web3アプリ、インタラクティブ作品をご紹介します。",
    searchPlaceholder: "タイトル、説明、または技術スタックで検索...",
    filterLabel: "技術でフィルター:",
    showingCount: "全 {total} 件中 {count} 件を表示中",
    clearAll: "フィルターをクリア",
    noResultsTitle: "一致する作品が見つかりません",
    noResultsDesc: "検索キーワードを変更するか、選択した技術スタックを解除してください。",
    resetFilters: "検索条件をリセット",

    // About Page
    aboutTag: "設計者について",
    aboutTitle: "芸術的エンジニアリング",
    aboutBio1: "こんにちは！私は、堅牢なソフトウェアアーキテクチャと高性能なインタラクティブグラフィックスの架け橋となることを使命とするシニアフロントエンドエンジニア兼グラフィックスプログラマーです。",
    aboutBio2: "主に、Next.js、React、およびカスタムHTML5/WebGLシェーダーを使用した、高度に最適化され、ピクセルパーフェクトなUIの構築に取り組んでいます。キャンバス上の流体シミュレーション、高度なリアルタイム監視ダッシュボード、セキュアな金融システムなど、あらゆるデバイスで60 FPSの滑らかなレンダリング性能を提供します。",
    aboutBio3: "すべてのコードをSOLIDの設計原則に準拠させ、ビジネスロジックやデータソースをプレゼンテーションレイヤーから完全に分離しています。",
    aboutCore: "主な専門分野",
    aboutMilestones: "主な実績",
    badgeProjectsTitle: "8 プロジェクト数",
    badgeProjectsDesc: "ゲーム ＆ Web3",
    badgeExperienceTitle: "3年+ 開発経験",
    badgeExperienceDesc: "ゲーム開発キャリア",
    badgeReleasedTitle: "2 リリース数",
    badgeReleasedDesc: "ストア配信タイトル",
    contactTag: "お問い合わせ",
    contactTitle: "壮大なものを共に創り上げましょう",
    contactDesc: "複雑なデータの視覚化システムや、パフォーマンスが極めて重要なインタラクティブなサイト開発をお考えですか？お気軽にご相談ください。",
    contactDirect: "連絡先",

    // Modal Details
    modalOverview: "プロジェクト概要",
    modalTech: "使用技術",
    modalRole: "担当ロール",
    modalVisit: "ライブデモを開く",
    modalSource: "ソースコード",
    modalCategory: "プロジェクト区分",
    modalStatus: "リリース状況",
    statusReleased: "発売済み",
    statusCancelled: "開発中止・未発売",
    projProfessional: "★ 実務開発案件",
    projPersonal: "個人開発・自主制作",

    // Skills Page
    navSkills: "技術スキル",
    skillsTitle: "技術スキル",
    skillsDesc: "日本とタイでの開発プロジェクトを通じて磨かれた、コアコンピテンシー、システム設計、およびエンジニアリングフレームワークの詳細。",
    roleExperience: "実務経験",
    roleCoreSkills: "主要テクノロジー＆ライブラリ",
    roleProjectsTitle: "このスキルで構築されたプロジェクト",
    skillsLegend: "★は実際のプロジェクトでの開発実務経験を示します。",

    // Tools Page
    navTools: "ツール",
    toolsTitle: "ツール",
    toolsOpen: "ツールを開く",
    toolsDesc: "自分で開発した小さなアプリです。ブラウザですぐに使えます。"
  }
};
