import type { FeedGroup } from '../app/types/feed'
// 友链检测 CLI 需要使用显式导入和相对路径
import { myFeed } from '../blog.config'
// eslint-disable-next-line unused-imports/no-unused-imports
import { getFavicon, getGithubAvatar, getGithubIcon, getOciqGroupAvatar, getOicqAvatar, OicqAvatarSize } from './utils/img'

export default [
	// #region Clarity
	{
		name: '我的项目',
		desc: '站在巨人的肩膀上看世界',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			myFeed,
			{
				author: '纸鹿本鹿',
				sitenick: '纸鹿',
				title: '纸鹿摸鱼处',
				desc: '纸鹿至麓不知路，支炉制露不止漉',
				link: 'https://blog.zhilu.site/',
				feed: 'https://blog.zhilu.site/atom.xml',
				icon: getFavicon('gug.thisis.host'),
				avatar: 'https://www.zhilu.site/api/avatar.png',
				archs: ['Nuxt', 'Vercel'],
				date: '2025-10-16',
				comment: '本博客模板',
			},
		],
	},
	// #endregion
] satisfies FeedGroup[]
