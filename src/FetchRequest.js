/**
 * Created by mac on 2017/9/6.
 */

import {Platform} from 'react-native';

//import DeviceInfo from 'react-native-device-info'


let stateCode = {
    unknownException: '1',     // 未知异常
    notLogin:         '3',     // 用户未登录
    decryptFail:      '5',     // 解密失败
    networkAnomaly:   'C1',    // 网络异常
    abortRequest:     'C2',    // 请求被中止
    serviceException: 'C3',    // 当调用接口时，响应异常状态码
    payFailed:        'C4',    // 支付失败
    payCanceled:      'C5',    // 取消支付
    paySuccess:       'C6',    // 支付成功
    notInstalledWechat: 'C7',  // 没有安装微信应用

    applePayNotSupport: 'C8',  // 不支持 Apple Pay
    applePayFailure:    'C9',  // 使用 Apple Pay 支付失败
    applePayCancel:     'C10'   // 使用 Apple Pay 时取消支付
};


function getStateCode(text) {

    let message;
    switch (text)
    {
        case stateCode.unknownException:
            message="未知异常";
            break;
        case stateCode.notLogin:
            message="用户未登录";
            break;
        case stateCode.decryptFail:
            message="解密失败";
            break;
        case stateCode.networkAnomaly:
            message="网络异常";
            break;
        case stateCode.abortRequest:
            message="请求被中止";
            break;
        case stateCode.serviceException:
            message="状态码异常";
            break;
        case stateCode.payFailed:
            message="支付失败";
            break;
        case stateCode.payCanceled:
            message="取消支付";
            break;
        case stateCode.paySuccess:
            message="支付成功";
            break;
        case stateCode.notInstalledWechat:
            message="没有安装微信应用";
            break;
        case stateCode.applePayNotSupport:
            message="不支持 Apple Pay";
            break;
        case stateCode.applePayFailure:
            message="使用 Apple Pay 支付失败";
            break;
        case stateCode.applePayCancel:
            message="使用 Apple Pay 时取消支付";
            break;
    }

}


let common_url = 'http://cybershop4-dev-restapi.dev.co-mall';  //服务器地址

/**
 * 让fetch也可以timeout
 *  timeout不是请求连接超时的含义，它表示请求的response时间，包括请求的连接、服务器处理及服务器响应回来的时间
 * fetch的timeout即使超时发生了，本次请求也不会被abort丢弃掉，它在后台仍然会发送到服务器端，只是本次请求的响应内容被丢弃而已
 * @param {Promise} fetch_promise    fetch请求返回的Promise
 * @param {number} [timeout=10000]   单位：毫秒，这里设置默认超时时间为10秒
 * @return 返回Promise
 */
function timeout_fetch(fetch_promise, timeout = 20000)
{
    let timeout_fn = null;

    //这是一个可以被reject的promise
    let timeout_promise = new Promise(function (resolve, reject) {
        timeout_fn = function () {
            reject('timeout promise');
        };
    });

    //这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
    let abortable_promise = Promise.race([
        fetch_promise,
        timeout_promise
    ]);

    setTimeout(function () {
        timeout_fn();
    }, timeout);

    return abortable_promise;
}



const FetchRequest = {

/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */
     fetchRequest:function(url, method, params = '') {

        let header = {
            appKey:'ef1fc57c13007e33',
            // "Content-Type":"application/json",
            // os: Platform.OS === 'ios',
            // appVersion: Platform.OS === 'ios' ? DeviceInfo.getVersion() : '',
            // unique: Platform.OS === 'ios' ? DeviceInfo.getUniqueID() : '',
            // osVersion: Platform.OS === 'ios' ? DeviceInfo.getSystemVersion() : '',
            // userId:undefined,
            // userSession:undefined,
             channel:"1",
            // language:2,
            osVersion:"10.0",
            appVersion:"1.0.0",
            unique:"1111111111"
        };
        console.log('request url:', url, params);  //打印请求参数
        if (method !== 'Post') {


            if (params) {
                let paramsArray = [];
                //拼接参数
                Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
                if (url.search(/\?/) === -1) {
                    url += '?' + paramsArray.join('&')
                } else {
                    url += '&' + paramsArray.join('&')
                }
            }
            console.log('url===='+url);
            //如果网络请求中带有参数
            return new Promise(function (resolve, reject) {
                timeout_fetch(fetch(common_url+url, {
                    method: method,
                    headers: header,
                })).then((response) => response.json())
                    .then((responseData) => {
                        console.log('res:', url, responseData);  //网络请求成功返回的数据
                        resolve(responseData);
                    })
                    .catch((err) => {
                        console.log('err:', url, err);     //网络请求失败返回的数据
                        reject(err);
                    });
            });
        } else {   //如果网络请求中没有参数
            return new Promise(function (resolve, reject) {
               timeout_fetch(fetch(common_url + url, {
                    method: method,
                    headers: header,
                    body: JSON.stringify(params)   //body参数，通常需要转换成字符串后服务器才能解析
                })).then((response) => response.json())
                    .then((responseData) => {
                        console.log('res:', url, responseData);   //网络请求成功返回的数据
                        resolve(responseData);
                    })
                    .catch((err) => {
                        console.log('err:', url, err);   //网络请求失败返回的数据
                        reject(err);
                    });
            });
        }
    }


}

export default FetchRequest;