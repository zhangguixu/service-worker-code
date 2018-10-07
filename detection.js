const PRE_LOAD = './sw-pre.js'

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register(PRE_LOAD, { scope: '/' })
            .then(function (registration) {
                console.log("service worker 注册成功")
            })
            .catch(function (err) {
                console.log("注册失败")
            })
    })
}