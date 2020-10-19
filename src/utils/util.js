/**
* 2.时间 转换 yyyyMMddhhmmss 转  yyyy-MM-dd hh:mm:ss
*/
export function formatDate(dateString) {
    var pattern = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;
    var formatedDate = dateString.replace(pattern, '$1-$2-$3 $4:$5:$6');
    return formatedDate;
}

/**
* 2.时间 转换 yyyy-MM-dd hh:mm:ss  转 yyyyMMddhhmmss
*/
export function formatDate1(dateString) {
    var pattern = /-| |:/g;;
    var formatedDate = dateString.replace(pattern, '');
    return formatedDate;
}

/**
* 1.当前时间
*/
export function getNowFormatDate() {
    // var that = this;
    var date = new Date(new Date());
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var week = date.getDay();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var strDate = date.getDate();
    var seconds = date.getSeconds();
    if (month >= 0 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
    }
    if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
    }
    if (seconds >= 0 && seconds <= 9) {
        minutes = "0" + seconds;
    }

    return "" + year  + month +  strDate  + hour  + minutes  + seconds;
}

/**
 * 获取近12月
 */
export function getNearMonths(){
    var d = new Date();
    var result = [];
    for(var i = 0; i < 12; i++) {
        d.setMonth(d.getMonth() - 1);
        var m = d.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        result.push(d.getFullYear() + "-" + m);
    }
    return result;
}

/**
 * 获取本年月份
 */
export function getYearMonths(){
    var d = new Date();
    var result = [];
    for(var i = 1; i < d.getMonth() + 2 ; i++) {
        var m = i < 10 ? "0" + i : i;
        result.push(d.getFullYear() + "-" + m);
    }
    return result;
}

/** 
* 获取去年月份
*/
export function getBeforeYearMonths(){
   var d = new Date();
   var result = [];
   for(var i = 1; i < 13 ; i++) {
       var m = i < 10 ? "0" + i : i;
       result.push(d.getFullYear()-1 + "-" + m);
   }
   return result;
}

/**
 * 获取本年12个月
 */
export function getMonthsByYear(year){
   var d = new Date(year);
   var result = [];
   for(var i = 1; i < 13 ; i++) {
       var m = i < 10 ? "0" + i : i;
       result.push(d.getFullYear() + "-" + m);
   }
   return result;
}

/**
 * 获取近七天
 */
export function getSevenDays(){
    var days = [];
    for(var i=7; i>0 ;i--){
        days.push(getDay(-i));
    }
    return days;
}
export function getDay(day){
        var today = new Date();
        var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
        today.setTime(targetday_milliseconds); //注意，这行是关键代码
        var tYear = today.getFullYear();
        var tMonth = today.getMonth();
        var tDate = today.getDate();
        tMonth = doHandleMonth(tMonth + 1);
        tDate = doHandleMonth(tDate);
    //     return tYear+"-"+tMonth+"-"+tDate;
        return tMonth+"-"+tDate;
}
export function doHandleMonth(month){
    var m = month;
    if(month.toString().length == 1){
     m = "0" + month;
    }
    return m;
}

// 验证输入框是否含非法字符  含非法字符与空格 则返回true
export function checkName(val){
    var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
        regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
    if(regEn.test(val) || regCn.test(val) || val.indexOf(' ') != -1) {
        // 存在非法字符
        return true;
    }
    return false;
}