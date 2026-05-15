/**
 * 个人名片 · 唯一推荐修改的文件（像填表一样改下面对象即可）
 * 说明见仓库根目录 README.md
 */
const CONFIG = {
  meta: {
    title: '毛宁 · 个人名片',
    description:
      '毛宁 — 中国科学院大学工科学生个人名片：简介、技能与兴趣、科研、竞赛、实习与社会实践。',
    lang: 'zh-CN'
  },

  /** 顶栏与页脚文案 */
  site: {
    headerName: '毛宁',
    footerName: '毛宁',
    footerOrg: '中国科学院大学',
    footerNote: '本页为个人网页'
  },
  
  /**
   * 底部圆点导航顺序与每一「张」幻灯片
   * 不需要某一整页时，把对应项的 enabled 改为 false（不必删 HTML）
   */
  slides: [
    { id: 'home', enabled: true, navLabel: '主页', navAriaLabel: '首页' },
    { id: 'skills', enabled: true, navLabel: '技能', navAriaLabel: '技能与兴趣' },
    { id: 'research', enabled: true, navLabel: '科研经历', navAriaLabel: '科研经历' },
    { id: 'competition', enabled: true, navLabel: '竞赛获奖', navAriaLabel: '竞赛获奖' },
    { id: 'internship', enabled: true, navLabel: '实习经验', navAriaLabel: '实习经验' },
    { id: 'social', enabled: true, navLabel: '社会实践', navAriaLabel: '社会实践' }
  ],

  /** 装饰图：右下角水印；技能等卡片标题旁小图标 */
  assets: {
    watermark: 'assets/FDU.png',
    sectionIcon: 'assets/标题.svg'
  },

  profile: {
    greetingLead: '你好，我是',
    /** 首页大标题里渐变显示的名字 */
    displayName: '毛宁',
    locationLine: '中国科学院大学',
    intro: '工科学生一枚；本页是 GitHub Pages 静态个人名片的示例，展示简介与经历片段。',
    quote: '「永远在路上！」',
    /** 头像：可把图片放到 assets/ 下，例如 assets/avatar.jpg */
    avatar: 'assets/秘书处_线条.png',
    avatarAlt: '毛宁',
    aboutTitle: 'About Me',
    /** 右侧「关于我」列表；有 href 时渲染为链接 */
    aboutRows: [
      { label: '年龄', value: '32' },
      { label: '爱好', value: '自驾游' },
      {
        label: 'GitHub',
        value: 'maoningme',
        href: 'https://github.com/maoningme'
      },
      {
        label: '联系方式',
        value: 'maoningme@163.com',
        href: 'mailto:maoningme@163.com'
      }
    ]
  },

  links: {
    /** 右上角「GitHub 仓库」按钮 */
    repoUrl: 'https://github.com/maoningme/maoningme.github.io',
    repoLabel: 'GitHub 仓库',
    /** 主按钮文案与跳转的幻灯片 id（须为上面 slides 中某一 id） */
    primaryCtaLabel: '浏览经历',
    primaryCtaSlideId: 'research'
  },

  skills: {
    title: '技能',
    columns: [
      {
        sections: [
          {
            heading: 'Language',
            items: ['Chinese', 'English']
          },
          {
            heading: 'Interests',
            items: ['Driving']
          }
        ]
      },
      {
        sections: [
          {
            heading: 'Tech',
            items: [
              'Python',
              'C++',
              'Verilog',
              'AI Coding',
              'Matlab'
            ]
          }
        ]
      },
      {

      }
    ]
  },

  /** 各经历页：标题 + 字符串列表（留空数组则整段列表不渲染） */
  timelines: {
    research: {
      title: '科研经历',
      items: [
        '参与发表2篇SCI文章'
      ]
    },
    competition: {
      title: '竞赛获奖经历',
      items: [
        '三好学生标兵'
      ]
    },
    internship: {
      title: '实习经验',
      items: [
        '快手'
      ]
    },
    social: {
      title: '社会实践',
      items: ['2008 年感动中国人物得主']
    }
  }
}
