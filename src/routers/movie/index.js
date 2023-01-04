export default {
    path : '/movie',
    component : () => import('@/views/Moive'),
    // 配置二级路由
    children : [
        {
            path : 'city', //这里不加 / 因为加上是绝对路径，这里是相对路径
            component : () => import('@/components/City')
        },
        {
            path : 'nowPlaying', //这里不加 / 因为加上是绝对路径，这里是相对路径
            component : () => import('@/components/NowPlaying')
        },
        {
            path : 'comingSoon', //这里不加 / 因为加上是绝对路径，这里是相对路径
            component : () => import('@/components/ComingSoon')
        },
        {
            path : 'search', //这里不加 / 因为加上是绝对路径，这里是相对路径
            component : () => import('@/components/Search')
        },
        //重定向到二级路由
        {
            path : '/movie',
            redirect : '/movie/nowPlaying'
        }
    ]
}