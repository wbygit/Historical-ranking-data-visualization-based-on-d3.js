﻿const config = {
  // 数据源的编码方式。
  // 默认为GBK,按需可修改为UTF-8等。
  // 如果输入的数据是用Excel编写的csv文件，那么大概率应该使用GBK。
  encoding: "utf-8",

  // 每个时间节点最多显示的条目数。
  max_number: 20,

  // 控制是否显示顶部附加信息文字。
  showMessage: false,

  // !!请确保打开此项时，使用的是标准日期格式！!
  // 时间自动排序。
  // 如果关闭，排序顺序为csv表格的时间字段自上而下的出现顺序。
  // 如果你的日期格式为标准的日期格式，则可以无视数据排序，达到自动按照日期顺序排序的效果。
  auto_sort: true,

  // 倒序，使得最短的条位于最上方
  reverse: false,

  // 使用自定义的颜色，需要配置下面的color。
  // 如果为false，则随机配色。
  use_custom_color: true,

  color: {
    '靠脸吃饭的徐大王': '#c21d00',
    '哔哩哔哩番剧': '#e73d76',
    'bilibili电影': '#008d2f',
    '怕上火暴王老菊': '#c21d00',
    '削人棍专用BGM': '#c21d00',
    '木鱼水心': '#114c99',
    '哔哩哔哩番剧': '#e73d76',
    '漫威乌托邦': '#114c99',
    '老实憨厚的笑笑': '#c21d00',
    '天天卡牌': '#c21d00',
    'STN工作室': '#c21d00',
    '吴织亚切大忽悠': '#c21d00',
    '三脚猫QAQ': '#566390',
    '逗川kshadow': '#c21d00',
    '凉风Kaze': '#e75373',
    '泛式': '#e75373',
    'bilibili电影': '#008d2f',
    '允星河Yoseya': '#c21d00',
    '华农兄弟': '#48b1c4',
    '幻想乐园综艺字幕组': '#566390',
    '哔哩哔哩番剧': '#e73d76',
    '哔哩哔哩番剧': '#e73d76',
    'MordonFreeman': '#48b1c4',
    '凤凰天使TSKS韩剧社官方账号': '#566390',
    '煤球菌儿': '#c21d00',
    '莱纳电影bili': '#114c99',
    '一只南音呀': '#566390',
    '凤凰天使TSKS韩剧社官方账号': '#566390',
    '稚嫩的柠檬君': '#48b1c4',
    'EdmundDZhang': '#c21d00',
    'Aloha字幕组': '#566390',
    '渗透之C君': '#c21d00',
    '逍遥散人': '#00947b',
    '老番茄': '#c21d00',
    '天天卡牌': '#c21d00',
    'KILLLER绅士盘点': '#48b1c4',
    '哔哩哔哩番剧': '#e73d76',
    '好气跌丝袜m': '#566390',
    '黑椒墨鱼': '#c21d00',
    '泽野螳螂': '#650c88',
    '翔翔大作战': '#48b1c4',
    'bilibili英雄联盟赛事': '#c21d00',
    '努力的Lorre': '#114c99',
    '嘟督不噶油': '#c21d00',
    '皇族电子竞技俱乐部官方账号': '#c21d00',
    'QINsENT': '#566390',
    '聚印象视频': '#c21d00',
    '怕上火暴王老菊': '#c21d00',
    '纯黑啤': '#c21d00',
    '柳市花街小常客': '#48b1c4',
    '华农兄弟': '#48b1c4',
    '哔哩哔哩番剧': '#e73d76',
    '徐大虾咯': '#48b1c4',
    'bilibili英雄联盟赛事': '#c21d00',
    '痴鸡小队官方': '#c21d00',
    '哔哩哔哩番剧': '#e73d76',
    '哔哩哔哩番剧': '#e73d76',
    '等一个你妹': '#48b1c4',
    '努巴尼守望先锋': '#c21d00',
    '屁屁菌xc': '#48b1c4',
    '非氪金玩家': '#48b1c4',
    '紫希尔': '#c21d00',
    '老实憨厚的笑笑': '#c21d00',
    '吃素的狮子': '#566390',
    'AvenueX': '#114c99',
    '痒局长': '#c21d00',
    '天天卡牌': '#c21d00',
    'DDF': '#cf0000',
    '哔哩哔哩线下活动': '#00947b',
    '点滴菌': '#c21d00',
    '小熊flippy': '#c21d00',
    '黑镖客梦回': '#c21d00',
    '翔翔大作战': '#48b1c4',
    'STN工作室': '#48b1c4',
    '神秘店长A': '#c21d00',
    'TV-TOKYO': '#e73d76',
    '盗月社食遇记': '#48b1c4',
    '大连老湿王博文': '#48b1c4',
    'Chimera君': '#c21d00',
    '薛大爷的猫': '#48b1c4',
    '努巴尼守望先锋': '#c21d00',
    '哔哩哔哩番剧': '#e73d76',
    '大胃mini': '#48b1c4',
    '锦衣缇骑': '#48b1c4',
    '土味角虫': '#48b1c4',
    '长歌与小见见': '#c21d00',
    'Mr.Quin': '#c21d00',
    '楼上的老张': '#48b1c4',
    '最强联盟': '#c21d00',
    '老实憨厚的笑笑': '#c21d00',
    'EdmundDZhang': '#c21d00',
    'bilibili英雄联盟赛事': '#c21d00',
    'hey信誓蛋蛋': '#48b1c4',
    '痒局长': '#c21d00',
    '天天卡牌': '#c21d00',
    '中国BOY超级大猩猩': '#c21d00',
    '御天文哥007': '#c21d00',
    '梆硬哥GOD': '#c21d00',
    '纯黑啤': '#c21d00',
    '牛叔万岁万岁万万岁': '#114c99',
    '夏一可': '#c21d00',
    '怕上火暴王老菊': '#c21d00',
    '小蝉丸': '#566390',
    '泛式': '#e75373',
    'STN工作室': '#c21d00',
    '千户长生': '#566390',
    '听wo姐说': '#114c99',
    '勺意奴': '#c21d00',
    '喝牛奶的鲨鱼呀c': '#48b1c4',
    '少年Pi': '#c21d00',
    '聚印象视频': '#c21d00',
    'GLR_G': '#566390',
    '芝士蜜蜜啦': '#c21d00',
    '魑魅小黑': '#48b1c4',
    '主播碉堡了': '#c21d00',
    '哔哩哔哩番剧': '#e73d76',
    '起小点是大腿': '#48b1c4',
    '胡说一通Eetu': '#114c99',
    '指法芬芳张大仙': '#c21d00',
    '渣子看闹剧': '#e75373',
    '楼上的老张': '#48b1c4',
    '旗娘有个小小号': '#c21d00',
    '老实憨厚的笑笑': '#c21d00',
    'TESTV官方频道': '#48b1c4',
    '野良神夜卜YABOKU': '#48b1c4',
    '我是郭杰瑞': '#48b1c4',
    '老番茄': '#c21d00',
    '天天卡牌': '#c21d00',
    '逍遥散人': '#c21d00',
    '友人么么哒': '#cf0000',
    '才不是木木': '#48b1c4',
    '抽风的飞机': '#c21d00',
    '芝士蜜蜜啦': '#c21d00',
    '山药视频': '#48b1c4',
    '日本派来的逗比': '#48b1c4',
    '低调的帅爷': '#e75373',
    '花花与三猫CatLive': '#48b1c4',
    '谷阿莫': '#114c99',
    '★⑥檤轮囬★': '#114c99',
    'bilibili英雄联盟赛事': '#c21d00',
    '起小点是大腿': '#c21d00',
    '华农兄弟': '#48b1c4',
    'bilibili英雄联盟赛事': '#c21d00',
    '徐大虾咯': '#48b1c4',
    '老实憨厚的笑笑': '#c21d00',
    '我是圈圈QAQ': '#48b1c4',
    '顾九撩电影': '#114c99',
    'MordonFreeman': '#48b1c4',
    'EdmundDZhang': '#c21d00',
    '中国BOY超级大猩猩': '#c21d00',
    '天天卡牌': '#c21d00',
    '西山映画': '#cf0000',
    '西山映画': '#cf0000',
    '嘟督不噶油': '#c21d00',
    '靠脸吃饭的徐大王': '#c21d00',
    '长歌与小见见': '#48b1c4',
    'STN工作室': '#c21d00',
    '聚印象视频': '#c21d00',
    '水蛭-JogsLeech': '#48b1c4',
    '凉风Kaze': '#e75373',
    '刘哔电影': '#114c99',
    '哔哩哔哩番剧': '#e73d76',
    '吃素的狮子': '#e75373',
    '哔哩哔哩番剧': '#e73d76',
    '三脚猫QAQ': '#48b1c4',
    '哔哩哔哩番剧': '#e73d76',
    '哔哩哔哩番剧': '#e73d76',
    '哔哩哔哩番剧': '#e73d76',
    '哔哩哔哩番剧': '#e73d76',
    '哔哩哔哩番剧': '#e73d76',
    '哔哩哔哩番剧': '#e73d76',
    '聚印象视频': '#c21d00',
    '宅集社': '#e75373',
    '青楼影社': '#114c99',
    '樱满八幡': '#e75373',
    '华农兄弟': '#48b1c4',
    '大果粒粒V': '#48b1c4',
    '豆砸OwO': '#e75373',
    '天天卡牌': '#c21d00',
    '逍遥散人': '#c21d00',
    '渗透之C君': '#c21d00',
    '杰里德Jared': '#48b1c4',
    '怕上火暴王老菊': '#c21d00',
    '黑椒墨鱼': '#c21d00',
    '凤凰天使TSKS韩剧社官方账号': '#566390',
    '花花与三猫CatLive': '#48b1c4',
    '菜菜的豆沙': '#48b1c4',
    '生活小帮手安姐': '#48b1c4',
    '靠脸吃饭的徐大王': '#c21d00',
    'Calvin_Tsai': '#48b1c4',
    '嘟督不噶油': '#c21d00',
    '起小点是大腿': '#48b1c4',
    'Vickysoupsss': '#48b1c4',
    '黑镖客梦回': '#c21d00',
    '翔翔大作战': '#48b1c4',
    '哔哩哔哩番剧': '#e73d76',
    '长歌与小见见': '#c21d00',
    '手不抖反馈也有': '#c21d00',
    '凤凰天使TSKS韩剧社官方账号': '#566390',
    '古惟寞其铭': '#48b1c4',
    'oh_emma': '#566390',
    '老实憨厚的笑笑': '#c21d00',
    '视角姬': '#48b1c4',
    '小熊flippy': '#c21d00',
    '天天卡牌': '#c21d00',
    '屁屁菌xc': '#48b1c4',
    'TV-TOKYO': '#e73d76',
    'STN工作室': '#c21d00',
    '沉迷IZONE的GP81': '#566390',
    '瓶子君152': '#e75373',
    'MordonFreeman': '#48b1c4',
    '哔哩哔哩番剧': '#e73d76',
    'bilibili英雄联盟赛事': '#c21d00',
    '幻想乐园综艺字幕组': '#566390',
    '班花湖里雅': '#c21d00',

  },

  // 颜色绑定增长率
  changeable_color: false,

  // 附加信息内容。
  itemLabel: "在看人数最多",
  typeLabel: "类型",
  // 榜首项目信息的水平位置 。
  item_x: 400,

  // 时间点间隔时间。
  interval_time: 1,

  // 上方文字水平高度。
  text_y: -50,

  // 长度小于display_barInfo的bar将不显示barInfo。
  display_barInfo: 0,

  // 使用类型
  // 注意！使用计时器和使用类型目前不能兼容，即不能同时开启！
  use_type_info: true,
  // 默认配色与name绑定，如果需要与类型绑定，即相同类型使用同种颜色，那么将divide_by_type属性置为true。
  // 如果不使用type（use_type_info : false），则divide_by_type无效。
  divide_by_type: true,

  // 使用计数器
  // 注意！使用计时器和使用类型目前不能兼容，即不能同时开启！
  // 计数器会出现在右上角，记录着当前榜首的持续时间。
  use_counter: false,
  // 每个时间节点对于计数器的步长。
  // 比如时间节点日期的间隔可能为1周（七天），那么step的值就应该为7。
  step: 7,

  // 格式化数值
  // 这里控制着数值的显示位数。主要靠修改中间的数字完成，如果为1则为保留一位小数。
  format: ".0f",

  // 图表左右上下间距。
  left_margin: 0,
  right_margin: 150,
  top_margin: 150,
  bottom_margin: 0,

  // 时间标签坐标。
  dateLabel_x: 1200,
  dateLabel_y: 750,

  // 允许大于平均值的条消失时上浮。
  allow_up: false,

  // 设置动画效果，如果为true，则新进入的条目从0开始。
  enter_from_0: false,

  // 如果所有数字都很大，导致拉不开差距则开启此项使得坐标原点变换为（最小值）*2-（最大值）
  big_value: false,

  // 如果要使用半对数坐标，则开启此项
  use_semilogarithmic_coordinate: false,

  long: false,

};
