const _sidebar = [
  {
    title: '技术随笔',
    children: [ ],
  },
  {
    title: '项目',
    collapsable: true, // 可选的, 默认值是 true,
    sidebarDepth: 1,   // 可选的, 默认值是 1
    children: [
      {
        title: 'PortableTrac',
        path: '/prj/PortableTrac/',
        sidebarDepth: 0,
        children: ['/prj/PortableTrac/', '/prj/PortableTrac/install', '/prj/PortableTrac/manual' ]
      },
    ]
  },
  {
    title: '其他',
    children: [ ],
  }
]

module.exports = {
  title: "thinkbase 开发笔记",
  description: "Talk is cheap. Show me the code.",
  head: [["link", { rel: "icon", href: "/images/thinkbase-icon.gif" }]],
  themeConfig: {
    logo: "/images/thinkbase-logo.drawio.svg",
    sidebar: _sidebar,
    displayAllHeaders: true,
  },
  plugins: [
    ["@vuepress/search", { searchMaxSuggestions: 10 }],
    ["fulltext-search", {}],
    ["@vuepress/medium-zoom", {options: {background: "#888"}}]
  ],
};
