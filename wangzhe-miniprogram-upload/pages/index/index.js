const CROP_OPTIONS = [
  { label: "-- 手动输入 --", h: 0, m: 0 },
  { label: "(1小时) 土豆 / 向日葵 / 黄瓜 / 白萝卜 / 洋葱 / 莴笋 / 四季豆 / 甘蔗 / 桑葚 / 树莓 / 咖啡豆", h: 1, m: 0 },
  { label: "(8小时) 玉米 / 青椒 / 茄子 / 葡萄 / 花菜 / 红枣 / 冬瓜 / 葫芦 / 杏子 / 芒果 / 火龙果", h: 8, m: 0 },
  { label: "(16小时) 草莓 / 大蒜 / 香蕉 / 南瓜 / 柚子 / 生菜 / 西瓜 / 花生 / 棉花 / 李子 / 桃子 / 哈密瓜 / 山竹 / 石榴 / 香蕉 / 柚子 / 西瓜 / 木瓜 / 橘子 / 杨桃 / 柠檬 / 枇杷 / 山楂 / 牛油果", h: 16, m: 0 },
  { label: "(32小时) 蓝莓 / 卷心菜 / 辣椒 / 荞麦 / 菠萝 / 梨子 / 樱桃 / 灯笼果 / 猕猴桃 / 莲花", h: 32, m: 0 }
];

const CROP_DATA = [
  { level: 1, name: "🌾 小麦", buy: 0, sell: 3, time: 30, expH: 120.0, coinH: 360.0, advice: "开荒速推，缺金币时补种" },
  { level: 2, name: "🥕 胡萝卜", buy: 1, sell: 10, time: 120, expH: 180.0, coinH: 300.0, advice: "前期补经验，穿插种植" },
  { level: 3, name: "🍅 番茄", buy: 2, sell: 25, time: 300, expH: 180.0, coinH: 300.0, advice: "前期过渡，空档填充" },
  { level: 5, name: "🍄 蘑菇", buy: 11, sell: 140, time: 1200, expH: 180.0, coinH: 420.0, advice: "金币效率稳，适合补仓" },
  { level: 6, name: "🥔 土豆", buy: 35, sell: 460, time: 3600, expH: 180.0, coinH: 460.0, advice: "1小时档主力，随种随收" },
  { level: 8, name: "🌽 玉米", buy: 266, sell: 3420, time: 28800, expH: 190.8, coinH: 427.5, advice: "新手夜间档，离线友好" },
  { level: 10, name: "🍓 草莓", buy: 457, sell: 5860, time: 57600, expH: 196.2, coinH: 366.3, advice: "16小时挂机，白天忙可种" },
  { level: 12, name: "🌻 向日葵", buy: 36, sell: 480, time: 3600, expH: 202.0, coinH: 480.0, advice: "1小时高回报，勤上线优先" },
  { level: 14, name: "🫑 青椒", buy: 274, sell: 3525, time: 28800, expH: 207.0, coinH: 440.6, advice: "8小时睡前常规首选" },
  { level: 16, name: "🧄 大蒜", buy: 453, sell: 6030, time: 57600, expH: 212.4, coinH: 376.9, advice: "16小时稳健线，省心" },
  { level: 18, name: "🍌 香蕉", buy: 1812, sell: 19320, time: 57600, expH: 0.1, coinH: 1207.5, advice: "金币天花板，周末双倍必种" },
  { level: 20, name: "🫐 蓝莓", buy: 675, sell: 9000, time: 115200, expH: 223.2, coinH: 281.3, advice: "32小时超长档，周末前种" },
  { level: 22, name: "🥒 黄瓜", buy: 41, sell: 550, time: 3600, expH: 229.0, coinH: 550.0, advice: "🌟 1小时性价比优先位" },
  { level: 24, name: "🍆 茄子", buy: 308, sell: 4110, time: 28800, expH: 234.0, coinH: 513.8, advice: "🌟 8小时效率档，睡前优选" },
  { level: 26, name: "🎃 南瓜", buy: 507, sell: 7050, time: 57600, expH: 239.4, coinH: 440.6, advice: "16小时均衡档，通用" },
  { level: 28, name: "🍊 柚子", buy: 2030, sell: 22550, time: 57600, expH: 0.1, coinH: 1409.4, advice: "金币天花板，周末双倍必种" },
  { level: 30, name: "🥬 卷心菜", buy: 756, sell: 10500, time: 115200, expH: 250.2, coinH: 328.1, advice: "32小时冲级档，离线优先" },
  { level: 32, name: "🌱 萝卜", buy: 48, sell: 670, time: 3600, expH: 256.0, coinH: 670.0, advice: "🌟 1小时进阶首选" },
  { level: 34, name: "🍇 葡萄", buy: 359, sell: 4980, time: 28800, expH: 261.0, coinH: 622.5, advice: "🌟 8小时进阶收益优" },
  { level: 36, name: "🥗 生菜", buy: 590, sell: 8560, time: 57600, expH: 266.4, coinH: 535.0, advice: "16小时收益稳，常态挂机" },
  { level: 38, name: "🍉 西瓜", buy: 2362, sell: 27400, time: 57600, expH: 0.1, coinH: 1712.5, advice: "金币天花板，周末双倍必种" },
  { level: 40, name: "🌶️ 辣椒", buy: 879, sell: 12760, time: 115200, expH: 277.2, coinH: 398.8, advice: "32小时终盘冲级" },
  { level: 42, name: "🧅 洋葱", buy: 54, sell: 780, time: 3600, expH: 283.0, coinH: 780.0, advice: "👑 1小时版本强势单品" },
  { level: 44, name: "🥦 花菜", buy: 405, sell: 5880, time: 28800, expH: 288.0, coinH: 735.0, advice: "👑 8小时版本强势单品" },
  { level: 46, name: "🥜 花生", buy: 664, sell: 10050, time: 57600, expH: 293.4, coinH: 628.1, advice: "🌟 16小时天花板，长挂机首选" },
  { level: 48, name: "🍈 木瓜", buy: "-", sell: "-", time: 0, expH: 0, coinH: 0, advice: "暂无数据，先观望" },
  { level: 50, name: "🌾 荞麦", buy: "-", sell: "-", time: 0, expH: 0, coinH: 0, advice: "暂无数据，先观望" },
  { level: 51, name: "🥬 莴笋", buy: "-", sell: "-", time: 0, expH: 0, coinH: 0, advice: "暂无数据，先观望" },
  { level: 52, name: "🍒 红枣", buy: "-", sell: "-", time: 0, expH: 0, coinH: 0, advice: "暂无数据，先观望" },
  { level: 53, name: "☁️ 棉花", buy: "-", sell: "-", time: 0, expH: 0, coinH: 0, advice: "暂无数据，先观望" },
  { level: 54, name: "🍊 橘子", buy: "-", sell: "-", time: 0, expH: 0, coinH: 0, advice: "暂无数据，先观望" },
  { level: 55, name: "🍍 菠萝", buy: "-", sell: "-", time: 0, expH: 0, coinH: 0, advice: "暂无数据，先观望" }
];

const FARM_DATA = [
  { level: 2, cost: "12", exp: "5", crop: "胡萝卜", mutation: "桃霞", stall: "-", field: "数量3->4", func: "-", furniture: "-" },
  { level: 3, cost: "50", exp: "36", crop: "番茄", mutation: "幽蓝", stall: "-", field: "-", func: "-", furniture: "-" },
  { level: 4, cost: "100", exp: "60", crop: "-", mutation: "-", stall: "-", field: "数量4->5", func: "一键浇水", furniture: "-" },
  { level: 5, cost: "150", exp: "100", crop: "蘑菇", mutation: "-", stall: "农场小摊2", field: "-", func: "-", furniture: "-" },
  { level: 6, cost: "480", exp: "360", crop: "土豆", mutation: "铸铁", stall: "-", field: "数量5->6", func: "-", furniture: "-" },
  { level: 7, cost: "2100", exp: "720", crop: "-", mutation: "-", stall: "上限2->3", field: "数量6->7", func: "-", furniture: "-" },
  { level: 8, cost: "5000", exp: "1100", crop: "玉米", mutation: "-", stall: "-", field: "-", func: "一键收获", furniture: "-" },
  { level: 9, cost: "1.3万", exp: "2200", crop: "-", mutation: "-", stall: "上限3->4", field: "-", func: "-", furniture: "-" },
  { level: 10, cost: "2.5万", exp: "3500", crop: "草莓", mutation: "冰晶", stall: "-", field: "数量7->8", func: "-", furniture: "-" },
  { level: 11, cost: "4.5万", exp: "5000", crop: "-", mutation: "-", stall: "上限4->5", field: "-", func: "-", furniture: "-" },
  { level: 12, cost: "8.58万", exp: "7500", crop: "向日葵", mutation: "橙光/青铜/巨大化", stall: "-", field: "数量8->9", func: "一键种植", furniture: "-" },
  { level: 13, cost: "10.9万", exp: "10000", crop: "-", mutation: "-", stall: "上限5->6", field: "-", func: "-", furniture: "-" },
  { level: 14, cost: "13.2万", exp: "12500", crop: "青椒", mutation: "-", stall: "-", field: "数量9->10", func: "-", furniture: "-" },
  { level: 15, cost: "15.4万", exp: "15000", crop: "-", mutation: "-", stall: "上限6->7", field: "-", func: "-", furniture: "-" },
  { level: 16, cost: "17.9万", exp: "17500", crop: "大蒜", mutation: "-", stall: "-", field: "数量10->11", func: "-", furniture: "-" },
  { level: 17, cost: "20.4万", exp: "20000", crop: "-", mutation: "-", stall: "上限7->8", field: "-", func: "-", furniture: "龟背竹盆栽" },
  { level: 18, cost: "23.6万", exp: "23500", crop: "香蕉", mutation: "琥珀", stall: "-", field: "数量11->12", func: "-", furniture: "-" },
  { level: 19, cost: "26.8万", exp: "27000", crop: "-", mutation: "-", stall: "上限8->9", field: "-", func: "-", furniture: "-" },
  { level: 20, cost: "30.3万", exp: "30500", crop: "蓝莓", mutation: "琉璃、青玉、明珠、璀璨", stall: "-", field: "数量12->13", func: "-", furniture: "-" },
  { level: 21, cost: "33.6万", exp: "34000", crop: "-", mutation: "-", stall: "上限9->10", field: "-", func: "-", furniture: "慢时光冷水壶" },
  { level: 22, cost: "37.5万", exp: "37500", crop: "黄瓜", mutation: "-", stall: "-", field: "数量13->14", func: "-", furniture: "-" },
  { level: 23, cost: "41.3万", exp: "42000", crop: "-", mutation: "-", stall: "上限10->11", field: "-", func: "-", furniture: "-" },
  { level: 24, cost: "45.2万", exp: "46500", crop: "茄子", mutation: "-", stall: "-", field: "数量14->15", func: "-", furniture: "错枝挂衣架" },
  { level: 25, cost: "49.3万", exp: "51000", crop: "南瓜", mutation: "-", stall: "上限11->12", field: "-", func: "-", furniture: "-" },
  { level: 26, cost: "53.6万", exp: "55500", crop: "-", mutation: "-", stall: "-", field: "数量15->16", func: "-", furniture: "-" },
  { level: 27, cost: "593万", exp: "60000", crop: "-", mutation: "-", stall: "上限12->13", field: "-", func: "-", furniture: "-" },
  { level: 28, cost: "67.5万", exp: "70000", crop: "柚子", mutation: "-", stall: "-", field: "数量16->17", func: "-", furniture: "-" },
  { level: 29, cost: "76.2万", exp: "80000", crop: "-", mutation: "-", stall: "上限13->14", field: "-", func: "-", furniture: "恬枝伴读组合" },
  { level: 30, cost: "85.9万", exp: "90000", crop: "卷心菜", mutation: "-", stall: "-", field: "数量17->18", func: "-", furniture: "-" },
  { level: 31, cost: "97.5万", exp: "100000", crop: "-", mutation: "-", stall: "上限14->15", field: "-", func: "-", furniture: "-" },
  { level: 32, cost: "110万", exp: "110000", crop: "白萝卜", mutation: "-", stall: "-", field: "数量18->19", func: "-", furniture: "-" },
  { level: 33, cost: "124万", exp: "120000", crop: "-", mutation: "-", stall: "上限15->16", field: "-", func: "-", furniture: "独处时光绿植" },
  { level: 34, cost: "140万", exp: "130000", crop: "葡萄", mutation: "-", stall: "-", field: "数量19->20", func: "-", furniture: "-" },
  { level: 35, cost: "158万", exp: "140000", crop: "-", mutation: "-", stall: "上限16->17", field: "-", func: "-", furniture: "-" },
  { level: 36, cost: "178万", exp: "160000", crop: "生菜", mutation: "-", stall: "-", field: "数量20->21", func: "-", furniture: "-" },
  { level: 37, cost: "200万", exp: "180000", crop: "-", mutation: "-", stall: "上限17->18", field: "-", func: "-", furniture: "闲昼伴读香薰" },
  { level: 38, cost: "227万", exp: "200000", crop: "西瓜", mutation: "-", stall: "-", field: "数量21->22", func: "-", furniture: "-" },
  { level: 39, cost: "255万", exp: "220000", crop: "-", mutation: "-", stall: "上限18->19", field: "-", func: "-", furniture: "-" },
  { level: 40, cost: "282万", exp: "240000", crop: "辣椒", mutation: "-", stall: "-", field: "数量22->23", func: "-", furniture: "-" },
  { level: 41, cost: "-", exp: "260000", crop: "-", mutation: "-", stall: "-", field: "-", func: "-", furniture: "-" },
  { level: 42, cost: "-", exp: "280000", crop: "-", mutation: "-", stall: "-", field: "数量23->24", func: "-", furniture: "-" },
  { level: 43, cost: "-", exp: "300000", crop: "-", mutation: "-", stall: "-", field: "-", func: "", furniture: "-" },
  { level: 44, cost: "-", exp: "320000", crop: "-", mutation: "-", stall: "-", field: "可升至2级农田", func: "-", furniture: "-" },
  { level: 45, cost: "-", exp: "340000", crop: "-", mutation: "-", stall: "-", field: "-", func: "-", furniture: "-" },
  { level: 46, cost: "-", exp: "360000", crop: "-", mutation: "-", stall: "-", field: "2级农田数量1->2", func: "-", furniture: "-" },
  { level: 47, cost: "468万", exp: "380000", crop: "-", mutation: "-", stall: "上限22->23", field: "-", func: "-", furniture: "-" },
  { level: 48, cost: "503万", exp: "400000", crop: "木瓜", mutation: "-", stall: "-", field: "2级农田数量2->3", func: "-", furniture: "-" },
  { level: 49, cost: "532万", exp: "420000", crop: "-", mutation: "-", stall: "上限23->24", field: "-", func: "-", furniture: "秋意伴读瓶" },
  { level: 50, cost: "561万", exp: "440000", crop: "荞麦", mutation: "-", stall: "-", field: "2级农田数量3->4", func: "-", furniture: "-" },
  { level: 51, cost: "591万", exp: "460000", crop: "莴笋", mutation: "-", stall: "上限24->25", field: "-", func: "-", furniture: "-" },
  { level: 52, cost: "638万", exp: "480000", crop: "红枣", mutation: "-", stall: "-", field: "2级农田数量4->5", func: "-", furniture: "-" },
  { level: 53, cost: "685万", exp: "500000", crop: "棉花", mutation: "-", stall: "上限25->26", field: "-", func: "-", furniture: "艺术角镂空瓶" },
  { level: 54, cost: "734万", exp: "520000", crop: "橘子", mutation: "-", stall: "-", field: "2级农田数量5->6", func: "-", furniture: "-" },
  { level: 55, cost: "-", exp: "-", crop: "菠萝", mutation: "-", stall: "-", field: "-", func: "-", furniture: "-" }
];

const STALL_DATA = [
  { level: 2, cost: "1000", exp: "150", boost: "0.05" },
  { level: 3, cost: "3000", exp: "360", boost: "0.1" },
  { level: 4, cost: "1万", exp: "720", boost: "0.15" },
  { level: 5, cost: "5.4万", exp: "1500", boost: "0.2" },
  { level: 6, cost: "11.2万", exp: "3000", boost: "0.25" },
  { level: 7, cost: "17.8万", exp: "4500", boost: "0.3" },
  { level: 8, cost: "25.6万", exp: "7140", boost: "0.35" },
  { level: 9, cost: "34.4万", exp: "9720", boost: "0.4" },
  { level: 10, cost: "44.3万", exp: "1.2万", boost: "0.45" },
  { level: 11, cost: "56.2万", exp: "1.5万", boost: "0.5" },
  { level: 12, cost: "69.3万", exp: "1.8万", boost: "0.55" },
  { level: 13, cost: "86.1万", exp: "2.2万", boost: "0.6" },
  { level: 14, cost: "114.9万", exp: "2.6万", boost: "0.65" },
  { level: 15, cost: "152万", exp: "3.2万", boost: "0.7" },
  { level: 16, cost: "197.7万", exp: "4万", boost: "0.75" },
  { level: 17, cost: "253.8万", exp: "4.9万", boost: "0.8" },
  { level: 18, cost: "319.6万", exp: "5.9万", boost: "0.85" },
  { level: 19, cost: "399.8万", exp: "7万", boost: "0.9" },
  { level: 20, cost: "-", exp: "-", boost: "0.95" },
  { level: 21, cost: "-", exp: "-", boost: "1" },
  { level: 22, cost: "-", exp: "-", boost: "1.05" },
  { level: 23, cost: "699.8万", exp: "9.8万", boost: "1.1" },
  { level: 24, cost: "779.8万", exp: "10.2万", boost: "1.15" },
  { level: 25, cost: "860.4万", exp: "10.7万", boost: "1.2" },
  { level: 26, cost: "994.4万", exp: "11.2万", boost: "1.25" },
  { level: 27, cost: "1133万", exp: "11.8万", boost: "1.3" }
];

const FIELD_DATA = [
  { level: 4, cost: "10", exp: "20" },
  { level: 5, cost: "100", exp: "50" },
  { level: 6, cost: "1000", exp: "160" },
  { level: 7, cost: "8000", exp: "500" },
  { level: 8, cost: "1.6万", exp: "1000" },
  { level: 9, cost: "7.8万", exp: "3000" },
  { level: 10, cost: "13万", exp: "6000" },
  { level: 11, cost: "19万", exp: "9000" },
  { level: 12, cost: "27万", exp: "12000" },
  { level: 13, cost: "39万", exp: "15000" },
  { level: 14, cost: "53万", exp: "18000" },
  { level: 15, cost: "70万", exp: "21000" },
  { level: 16, cost: "90万", exp: "25000" },
  { level: 17, cost: "125万", exp: "30000" },
  { level: 18, cost: "175万", exp: "37000" },
  { level: 19, cost: "239万", exp: "45000" },
  { level: 20, cost: "317万", exp: "56000" },
  { level: 21, cost: "410万", exp: "67000" },
  { level: 22, cost: "523万", exp: "78000" },
  { level: 23, cost: "648万", exp: "89000" },
  { level: 24, cost: "766万", exp: "100000" }
];

function pad2(v) {
  return String(v).padStart(2, "0");
}

function safeInt(v) {
  const n = parseInt(v, 10);
  return Number.isNaN(n) ? 0 : n;
}

function formatDuration(minutes) {
  const h = Math.floor(minutes / 60);
  const m = Math.floor(minutes % 60);
  if (h === 0 && m === 0) return "0 分钟";
  let res = "";
  if (h > 0) res += `${h} 小时 `;
  if (m > 0) res += `${m} 分钟`;
  return res.trim();
}

function formatClockTime(date) {
  return `${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
}

function formatDisplayDate(dateObj) {
  return `${pad2(dateObj.getMonth() + 1)}-${pad2(dateObj.getDate())} ${pad2(dateObj.getHours())}:${pad2(dateObj.getMinutes())}`;
}

function formatMinsToText(mins) {
  const h = Math.floor(mins / 60);
  const m = Math.floor(mins % 60);
  return `${h > 0 ? `${h}h` : ""}${m > 0 ? `${m}m` : ""}`;
}

function parseSortValue(value) {
  if (typeof value === "number") return value;
  if (value === "-") return -1;
  const parsed = parseFloat(String(value).replace(/[^\d.-]/g, ""));
  return Number.isNaN(parsed) ? String(value) : parsed;
}

Page({
  data: {
    cropOptions: CROP_OPTIONS.map((item) => item.label),
    cropIndex: 0,
    form: {
      t_h: "0",
      t_m: "0",
      r_h: "0",
      r_m: "0",
      w_h: "0",
      w_m: "0"
    },
    result: {
      visible: false,
      type: "success",
      title: "",
      lines: [],
      actions: [],
      showAlarm: false,
      alarmTitle: "",
      alarmTimestamp: 0
    },
    durationOptions: [
      { label: "1 小时", mins: 60 },
      { label: "8 小时", mins: 480 },
      { label: "16 小时", mins: 960 },
      { label: "32 小时", mins: 1920 }
    ],
    currentDurationMins: 960,
    plantDate: "",
    plantClock: "",
    timelineCards: [],
    activeTab: "crops",
    sortKey: "level",
    sortAsc: true,
    cropRows: [],
    farmRows: [],
    stallRows: [],
    fieldRows: []
  },

  onLoad() {
    const now = new Date();
    const plantDate = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;
    const plantClock = `${pad2(now.getHours())}:${pad2(now.getMinutes())}`;

    this.setData({
      plantDate,
      plantClock,
      cropRows: this.buildCropRows(CROP_DATA),
      farmRows: FARM_DATA,
      stallRows: STALL_DATA.map((row) => ({
        ...row,
        boostText: row.boost === "-" ? "-" : `+ ${(parseFloat(row.boost) * 100).toFixed(0)}%`
      })),
      fieldRows: FIELD_DATA
    });

    this.calculate();
    this.generateTimeline();
  },

  onCropChange(e) {
    const idx = Number(e.detail.value);
    const selected = CROP_OPTIONS[idx] || CROP_OPTIONS[0];
    this.setData({
      cropIndex: idx,
      "form.t_h": String(selected.h),
      "form.t_m": String(selected.m)
    });
    this.calculate();
  },

  onNumberInput(e) {
    const { field } = e.currentTarget.dataset;
    this.setData({ [`form.${field}`]: e.detail.value });
    this.calculate();
  },

  onDurationTap(e) {
    const mins = Number(e.currentTarget.dataset.mins);
    this.setData({ currentDurationMins: mins });
    this.generateTimeline();
  },

  onDateChange(e) {
    this.setData({ plantDate: e.detail.value });
    this.generateTimeline();
  },

  onTimeChange(e) {
    this.setData({ plantClock: e.detail.value });
    this.generateTimeline();
  },

  onTabChange(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({ activeTab: tab });
  },

  onSortTap(e) {
    const key = e.currentTarget.dataset.key;
    const nextAsc = this.data.sortKey === key ? !this.data.sortAsc : (key === "level" || key === "time");
    this.setData({
      sortKey: key,
      sortAsc: nextAsc,
      cropRows: this.buildCropRows(CROP_DATA, key, nextAsc)
    });
  },

  setAlarm(e) {
    const { title, ts } = e.currentTarget.dataset;
    const when = formatDisplayDate(new Date(Number(ts)));
    const text = `【${title}】提醒时间：${when}`;
    wx.setClipboardData({
      data: text,
      success: () => {
        wx.showModal({
          title: "已复制提醒时间",
          content: "微信小程序无法直接写入系统日历，时间已复制到剪贴板，请手动设闹钟。",
          showCancel: false
        });
      }
    });
  },

  calculate() {
    const th = safeInt(this.data.form.t_h);
    const tm = safeInt(this.data.form.t_m);
    const rh = safeInt(this.data.form.r_h);
    const rm = safeInt(this.data.form.r_m);
    const wh = safeInt(this.data.form.w_h);
    const wm = safeInt(this.data.form.w_m);

    const T = th * 60 + tm;
    const R = rh * 60 + rm;
    const W = wh * 60 + wm;

    if (T === 0 || R === 0) {
      this.setData({
        result: {
          visible: false,
          type: "success",
          title: "",
          lines: [],
          actions: [],
          showAlarm: false,
          alarmTitle: "",
          alarmTimestamp: 0
        }
      });
      return;
    }

    if (R > T) {
      this.setData({
        result: {
          visible: true,
          type: "danger",
          title: "输入数据异常",
          lines: [
            `剩余时间（${formatDuration(R)}）不可能大于植物总时间（${formatDuration(T)}）。`,
            "请核实输入：你可能填反了或者看错行了。"
          ],
          actions: [],
          showAlarm: false,
          alarmTitle: "",
          alarmTimestamp: 0
        }
      });
      return;
    }

    const M = T / 3;
    if (W > M) {
      this.setData({
        result: {
          visible: true,
          type: "danger",
          title: "输入数据异常",
          lines: [
            `当前水量（${formatDuration(W)}）超过了该植物的储水上限（${formatDuration(M)}）。`,
            `请核实输入：水滴上的时间绝不可能超过 ${formatDuration(M)}。`
          ],
          actions: [],
          showAlarm: false,
          alarmTitle: "",
          alarmTimestamp: 0
        }
      });
      return;
    }

    const limit = W + M / 4;
    if (R > limit) {
      let currR = R;
      let currW = W;
      let passed = 0;
      const actions = [];

      while (currR > currW + M / 4) {
        if (currW > 0) {
          passed += currW;
          currR -= currW;
          actions.push({ type: "water", offset: Math.round(passed), title: "储水干涸，需补满水" });
          currW = M;
          currR -= M / 4;
        } else {
          actions.push({ type: "water", offset: Math.round(passed), title: "尚未浇水，请立刻补水！" });
          currW = M;
          currR -= M / 4;
        }
      }

      let mathWait = (4 * currR - M + currW) / 5;
      let unlockWait = M * 0.1 - (M - currW);
      let finalWait = Math.max(mathWait, unlockWait);
      finalWait = Math.max(0, Math.ceil(finalWait));

      if (finalWait >= currR) {
        passed += currR;
        actions.push({ type: "kill", offset: Math.round(passed), title: "完美收官！自然成熟！" });
      } else {
        passed += finalWait;
        actions.push({ type: "kill", offset: Math.round(passed), title: "终极秒熟！马上浇水收割！" });
      }

      const now = new Date();
      const showActions = actions.map((act) => {
        const actTime = new Date(now.getTime() + act.offset * 60000);
        const dayPrefix = actTime.getDate() !== now.getDate() ? "明天 " : "今天 ";
        const timeStr = `${dayPrefix}${formatClockTime(actTime)}`;
        const durationStr = act.offset === 0 ? "现在" : `${formatDuration(act.offset)}后`;
        return {
          ...act,
          timeText: `${durationStr}（${timeStr}）`
        };
      });

      const nextAct = showActions[0];
      const alarmTitle = nextAct.type === "kill" ? "农场秒熟收割" : "农场加水提醒";
      const alarmTimestamp = now.getTime() + nextAct.offset * 60000;

      this.setData({
        result: {
          visible: true,
          type: "warning",
          title: "尚未进入斩杀线，后续排期如下",
          lines: ["按下面顺序执行即可，最后一次操作为收割节点。"],
          actions: showActions,
          showAlarm: true,
          alarmTitle,
          alarmTimestamp
        }
      });
      return;
    }

    let mathWait = (4 * R - M + W) / 5;
    let unlockWait = M * 0.1 - (M - W);
    let waitMins = Math.max(mathWait, unlockWait);
    waitMins = Math.max(0, Math.ceil(waitMins));

    if (waitMins >= R) {
      this.setData({
        result: {
          visible: true,
          type: "warning",
          title: "卡 10% 补水门槛",
          lines: [
            `等待浇水按键亮起的时间（${formatDuration(waitMins)}）已大于等于自然成熟时间（${formatDuration(R)}）。`,
            "建议：无须操作，让植物自然成熟即可。"
          ],
          actions: [],
          showAlarm: false,
          alarmTitle: "",
          alarmTimestamp: 0
        }
      });
      return;
    }

    if (waitMins === 0) {
      this.setData({
        result: {
          visible: true,
          type: "success",
          title: "马上浇水，直接秒熟",
          lines: ["不用等了，现在按下浇水键，植物会瞬间成熟。"],
          actions: [],
          showAlarm: false,
          alarmTitle: "",
          alarmTimestamp: 0
        }
      });
      return;
    }

    const now = new Date();
    const alarmTime = new Date(now.getTime() + waitMins * 60000);
    const dayPrefix = alarmTime.getDate() !== now.getDate() ? "明天 " : "今天 ";
    const alarmText = `${dayPrefix}${formatClockTime(alarmTime)}`;

    this.setData({
      result: {
        visible: true,
        type: "success",
        title: "完美收割时机",
        lines: [
          `你需要精确等待：${formatDuration(waitMins)}。`,
          `闹钟建议设为：${alarmText}。`,
          "在此时间点，浇水按键将刚好亮起，按下可瞬间成熟。"
        ],
        actions: [],
        showAlarm: true,
        alarmTitle: "农场秒熟收割",
        alarmTimestamp: alarmTime.getTime()
      }
    });
  },

  generateTimeline() {
    if (!this.data.plantDate || !this.data.plantClock) return;

    const startTime = new Date(`${this.data.plantDate}T${this.data.plantClock}:00`);
    const duration = this.data.currentDurationMins;
    const m2 = duration / 3;
    const m3 = (2 * duration) / 3;
    const m4 = (11 * duration) / 15;

    const t1 = startTime;
    const t2 = new Date(startTime.getTime() + m2 * 60000);
    const t3 = new Date(startTime.getTime() + m3 * 60000);
    const t4 = new Date(startTime.getTime() + m4 * 60000);

    this.setData({
      timelineCards: [
        {
          icon: "🌱",
          label: "种下",
          time: formatDisplayDate(t1),
          offset: "立刻浇水",
          alarmTitle: "",
          alarmTimestamp: 0,
          danger: false
        },
        {
          icon: "💧",
          label: "第2次",
          time: formatDisplayDate(t2),
          offset: `种下后 +${formatMinsToText(m2)}`,
          alarmTitle: "第2次补水",
          alarmTimestamp: t2.getTime(),
          danger: false
        },
        {
          icon: "💧",
          label: "第3次",
          time: formatDisplayDate(t3),
          offset: `种下后 +${formatMinsToText(m3)}`,
          alarmTitle: "第3次补水",
          alarmTimestamp: t3.getTime(),
          danger: false
        },
        {
          icon: "🔥",
          label: "终极秒熟",
          time: formatDisplayDate(t4),
          offset: `完美收割！${formatMinsToText(m4)}`,
          alarmTitle: "终极秒熟收割",
          alarmTimestamp: t4.getTime(),
          danger: true
        }
      ]
    });
  },

  buildCropRows(source, sortKey = this.data.sortKey, sortAsc = this.data.sortAsc) {
    const rows = source.slice().sort((a, b) => {
      const va = parseSortValue(a[sortKey]);
      const vb = parseSortValue(b[sortKey]);
      if (va < vb) return sortAsc ? -1 : 1;
      if (va > vb) return sortAsc ? 1 : -1;
      return 0;
    });

    return rows.map((row) => ({
      ...row,
      levelText: `Lv.${row.level}`,
      timeText: row.time < 60 ? `${row.time}秒` : (row.time < 3600 ? `${row.time / 60}分钟` : `${row.time / 3600}小时`),
      expText: Number(row.expH).toFixed(1),
      coinText: Number(row.coinH).toFixed(1),
      isGoldTop: String(row.advice).includes("金币天花板"),
      isCrownTop: String(row.advice).includes("👑") || String(row.advice).includes("版本强势单品")
    }));
  }
});
