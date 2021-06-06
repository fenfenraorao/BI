import communityOperate from './communityOperate' // 社区运营数据大屏

export const layout = [
  communityOperate
]

const routes = [
  {
    path: '',
    name: 'index',
    redirect: '/communityOperate'
  },
  ...layout
]
export default routes
