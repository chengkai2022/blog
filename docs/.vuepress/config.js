module.exports = {
  title: "Assassin's Creed",
  description: 'Just playing around',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
	head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', { rel: 'icon', href: '/img/bitbug_favicon.ico' }], 
    ],
  themeConfig: {
	   sidebarDepth: 4, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间,
	  	// 你的GitHub仓库，请正确填写
	    repo: 'https://github.com/chengkai2022/blog',
	    // 自定义仓库链接文字。
	    repoLabel: '我的 GitHub',
		// logo:'/docs/.vuepress/public/img/assassin.jpg',
	  	nav: [
	  		{ text: '主页', link: '/' },
	  		{ text: '文章', link: '/blog/' },
			{ text: '导航', link: '/guide/' }
	  	]
}}