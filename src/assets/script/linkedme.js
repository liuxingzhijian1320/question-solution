let linkedmePromise =
    import ('src/assets/vendor/linkedme.min.js')
import {
    MessageBox
} from 'mint-ui'
let linkedmeType = "live";
// if (DEBUG) {
//     linkedmeType = "test";
// }


let defaultData = {};
defaultData.type = linkedmeType; //表示现在使用线上模式,如果填写"test", 表示测试模式.【可选】
defaultData.feature = "功能名称"; // 自定义深度链接功能，多个用逗号分隔，【可选】
defaultData.stage = "阶段名称"; // 自定义深度链接阶段，多个用逗号分隔，【可选】
defaultData.channel = "渠道名称"; // 自定义深度链接渠道，多个用逗号分隔，【可选】
defaultData.tags = "标签名称"; // 自定义深度链接标签，多个用逗号分隔，【可选】
defaultData.ios_custom_url = ""; // 自定义iOS平台下App的下载地址，如果是AppStore的下载地址可以不用填写，【可选】
defaultData.android_custom_url = "http://a.app.qq.com/o/simple.jsp?pkgname=com.halobear.weddingvideo"; // 自定义安卓平台下App的下载地址，【可选】
// 下面是自定义深度链接参数，用户点击深度链接打开app之后，params参数将被带入app
// 比如详情页面的参数，可以写进去，这样唤起app后可直接跳转到详情页【可选】

export default async function(para) {
    await linkedmePromise
    if (linkedme.LinkedME_KEY !== "b5942bd492c086472413db07481c6a7f") {
        linkedme.init("b5942bd492c086472413db07481c6a7f", { type: linkedmeType }, null);

    }
    para = para || {}
    let str = '';
    for (let k in para) {
        str += `"${k}":"${para[k]}",`
    }
    str = str.slice(0, -1)
    let params = `{${str}}`

    // console.log('params',params)

    return new Promise((resolve, reject) => {
        // console.log({
        //   ...defaultData,
        //   ...{params: params},
        // })
        linkedme.link({
            ...defaultData,
            ... { params: params },
        }, function(err, data) {
            if (err) {
                // 生成深度链接失败，返回错误对象err
                console.log(err)
                MessageBox.alert(err.message)
                reject(err)
            } else {
                // console.log(data.url)
                /*
                 生成深度链接成功，深度链接可以通过data.url得到，
                 将深度链接绑定到<a>标签，这样当用户点击这
                 个深度链接，如果是在pc上，那么跳转到深度链接二维
                 码页面，用户用手机扫描该二维码就会打开app；如果
                 在移动端，深度链接直接会根据手机设备类型打开ios
                 或者安卓app
                 */
                // console.log('data',data)
                resolve(data)
            }
        }, false);

    });

}