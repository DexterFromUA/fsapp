const cookieHelper = {};

cookieHelper.setCookie = (name, value, days, path, domain, secure) => {
    // document.cookie = name + '=' + escape(value) +
    //     ((expires) ? "; expires=" + expires : "") +
    //     ((path) ? "; path=" + path : "") +
    //     ((domain) ? "; domain=" + domain : "") +
    //     ((secure) ? "; secure" : "");

    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
};

cookieHelper.getCookie = (name) => {
    var cookie = " " + document.cookie;
    var search = " " + name + "=";
    var setStr = null;
    var offset = 0;
    var end = 0;
    if (cookie.length > 0) {
        offset = cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = cookie.indexOf(";", offset)
            if (end == -1) {
                end = cookie.length;
            }
            setStr = unescape(cookie.substring(offset, end));
        }
    }
    return(setStr);
};

cookieHelper.delCookie = (name) => {
    document.cookie = name+'=; Max-Age=-99999999;';
};

module.exports = cookieHelper;
