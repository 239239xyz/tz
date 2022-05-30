// 配置
window.Config = {
    // 站点名
    SiteName: "Site Status",

    // 站点链接
    SiteUrl: "https://239239xyz.github.io/tz/",

    // UptimeRobot Api Keys
    // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
    ApiKeys: [
            'ur1577840-1761bd886a0748cf93bc6691',
    ],

    // 是否显示监测站点的链接
    ShowLink: false,

    // 日志天数
    // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
    // 不过时间不要设置太长，容易卡，接口请求也容易失败
    CountDays: 14,

    // 导航栏菜单
    Navi: [
        {
            text: "Home",
            url: "https://239239xyz.github.io/tz/",
        },
        {
            text: "Blog",
            url: "https://198168.xyz/",
        },
        {
            text: "Github",
            url: "https://github.com/",
        },
    ],
};
