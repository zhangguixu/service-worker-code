/**
 *  在service worker初次安装的install事件就进行缓存
 *  1. 缓存高优先级的资源
 *  2. 将不重要缓存资源放在队列里即可
 * 
 *  优点是第一次就可以进行缓存，用户下次进来就可以直接访问缓存
 *  但是将缓存资源下载代码中，后续项目的迭代会有一定问题
 * 
 */

let vipUrlsToPrefetch = [
    './demo.html'
]

let urlsToPrefetch = [
    './demo.css'
]

this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('my-test-cache-v1').then(function (cache) {
            cache.addAll(urlsToPrefetch);
            return cache.addAll(vipUrlsToPrefetch)
        })
    )
})

