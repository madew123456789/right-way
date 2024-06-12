/* Notiflix (https://www.notiflix.com) - Version: 2.7.0 - Author: Furkan MT (https://github.com/furcan) - Copyright 2020 Notiflix, MIT Licence (https://opensource.org/licenses/MIT) */

(function(t, e) {
    "function" == typeof define && define.amd ? define([], function() {
        return e(t)
    }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = e(t) : t.Notiflix = e(t)
}
)("undefined" == typeof global ? "undefined" == typeof window ? this : window : global, function(t) {
    'use strict';
    if ("undefined" == typeof t && "undefined" == typeof t.document)
        return !1;
    var e, i, a, o, n, r = "\n\nVisit documentation page to learn more: https://www.notiflix.com/documentation", s = "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", l = {
        wrapID: "NotiflixNotifyWrap",
        width: "280px",
        position: "right-top",
        distance: "10px",
        opacity: 1,
        borderRadius: "5px",
        rtl: !1,
        timeout: 3e3,
        messageMaxLength: 110,
        backOverlay: !1,
        backOverlayColor: "rgba(0,0,0,0.5)",
        plainText: !0,
        showOnlyTheLastOne: !1,
        clickToClose: !1,
        pauseOnHover: !0,
        ID: "NotiflixNotify",
        className: "notiflix-notify",
        zindex: 4001,
        useGoogleFont: !1,
        fontFamily: "Quicksand",
        fontSize: "13px",
        cssAnimation: !0,
        cssAnimationDuration: 400,
        cssAnimationStyle: "fade",
        closeButton: !1,
        useIcon: !0,
        useFontAwesome: !1,
        fontAwesomeIconStyle: "basic",
        fontAwesomeIconSize: "34px",
        success: {
            background: "#32c682",
            textColor: "#fff",
            childClassName: "success",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-check-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(50,198,130,0.2)"
        },
        failure: {
            background: "#ff5549",
            textColor: "#fff",
            childClassName: "failure",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-times-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(255,85,73,0.2)"
        },
        warning: {
            background: "#eebf31",
            textColor: "#fff",
            childClassName: "warning",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-exclamation-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(238,191,49,0.2)"
        },
        info: {
            background: "#26c0d3",
            textColor: "#fff",
            childClassName: "info",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-info-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(38,192,211,0.2)"
        }
    }, c = {
        ID: "NotiflixReportWrap",
        className: "notiflix-report",
        width: "320px",
        backgroundColor: "#f8f8f8",
        borderRadius: "25px",
        rtl: !1,
        zindex: 4002,
        backOverlay: !0,
        backOverlayColor: "rgba(0,0,0,0.5)",
        useGoogleFont: !1,
        fontFamily: "Quicksand",
        svgSize: "110px",
        plainText: !0,
        titleFontSize: "16px",
        titleMaxLength: 34,
        messageFontSize: "13px",
        messageMaxLength: 400,
        buttonFontSize: "14px",
        buttonMaxLength: 34,
        cssAnimation: !0,
        cssAnimationDuration: 360,
        cssAnimationStyle: "fade",
        success: {
            svgColor: "#32c682",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#32c682",
            buttonColor: "#fff",
            backOverlayColor: "rgba(50,198,130,0.2)"
        },
        failure: {
            svgColor: "#ff5549",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#ff5549",
            buttonColor: "#fff",
            backOverlayColor: "rgba(255,85,73,0.2)"
        },
        warning: {
            svgColor: "#eebf31",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#eebf31",
            buttonColor: "#fff",
            backOverlayColor: "rgba(238,191,49,0.2)"
        },
        info: {
            svgColor: "#26c0d3",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#26c0d3",
            buttonColor: "#fff",
            backOverlayColor: "rgba(38,192,211,0.2)"
        }
    }, m = {
        ID: "NotiflixConfirmWrap",
        className: "notiflix-confirm",
        width: "300px",
        zindex: 4003,
        position: "center",
        distance: "10px",
        backgroundColor: "#f8f8f8",
        borderRadius: "25px",
        backOverlay: !0,
        backOverlayColor: "rgba(0,0,0,0.5)",
        rtl: !1,
        useGoogleFont: !1,
        fontFamily: "Quicksand",
        cssAnimation: !0,
        cssAnimationStyle: "fade",
        cssAnimationDuration: 300,
        plainText: !0,
        titleColor: "#32c682",
        titleFontSize: "16px",
        titleMaxLength: 34,
        messageColor: "#1e1e1e",
        messageFontSize: "14px",
        messageMaxLength: 110,
        buttonsFontSize: "15px",
        buttonsMaxLength: 34,
        okButtonColor: "#f8f8f8",
        okButtonBackground: "#32c682",
        cancelButtonColor: "#f8f8f8",
        cancelButtonBackground: "#a9a9a9"
    }, p = {
        ID: "NotiflixLoadingWrap",
        className: "notiflix-loading",
        zindex: 4e3,
        backgroundColor: "rgba(0,0,0,0.8)",
        rtl: !1,
        useGoogleFont: !1,
        fontFamily: "Quicksand",
        cssAnimation: !0,
        cssAnimationDuration: 400,
        clickToClose: !1,
        customSvgUrl: null,
        svgSize: "80px",
        svgColor: "#32c682",
        messageID: "NotiflixLoadingMessage",
        messageFontSize: "15px",
        messageMaxLength: 34,
        messageColor: "#dcdcdc"
    }, f = {
        ID: "NotiflixBlockWrap",
        querySelectorLimit: 200,
        className: "notiflix-block",
        position: "absolute",
        zindex: 1e3,
        backgroundColor: "rgba(255,255,255,0.9)",
        rtl: !1,
        useGoogleFont: !1,
        fontFamily: "Quicksand",
        cssAnimation: !0,
        cssAnimationDuration: 300,
        svgSize: "45px",
        svgColor: "#383838",
        messageFontSize: "14px",
        messageMaxLength: 34,
        messageColor: "#383838"
    }, d = function(t, e) {
        return console.error("%c " + t + " ", "padding:2px;border-radius:20px;color:#fff;background:#ff5549", "\n" + e + r)
    }, x = function(t, e) {
        return console.log("%c " + t + " ", "padding:2px;border-radius:20px;color:#fff;background:#26c0d3", "\n" + e + r)
    }, g = function(e) {
        return e || (e = "head"),
        null !== t.document[e] || (d("Notiflix", "\nNotiflix needs to be appended to the \"<" + e + ">\" element, but you called it before the \"<" + e + ">\" element has been created."),
        !1)
    }, b = function() {
        return "[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:\"Quicksand\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.with-close-button{padding:10px 30px 10px 12px}[id^=NotiflixNotifyWrap]>div.with-icon.with-close-button{padding:6px 30px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.the-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.notify-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:16px;height:16px}[id^=NotiflixNotifyWrap]>div>span.notify-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.notify-close-button>svg{position:absolute;width:16px;height:16px;right:0;top:0}[id^=NotiflixNotifyWrap]>div>.nmi{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.wfa.shadow{color:inherit;background:rgba(0,0,0,.15);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.rtl-on>.nmi{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.rtl-on>span.with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.rtl-on>span.notify-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.with-icon.with-close-button.rtl-on{padding:6px 6px 6px 30px}[id^=NotiflixNotifyWrap]>div.with-close-button.rtl-on{padding:10px 12px 10px 30px}[id^=NotiflixNotifyOverlay].with-animation,[id^=NotiflixNotifyWrap]>div.with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].with-animation.remove,[id^=NotiflixNotifyWrap]>div.with-animation.nx-fade.remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.with-animation.nx-zoom.remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.with-animation.nx-from-top.remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.with-animation.nx-from-right.remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.with-animation.nx-from-bottom.remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.with-animation.nx-from-left.remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Quicksand\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*=\"-overlay\"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div[class*=\"-content\"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*=\"-content\"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*=\"-content\"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*=\"-content\"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*=\"-content\"]>div[class$=\"-icon\"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*=\"-content\"]>div[class$=\"-icon\"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*=\"-overlay\"].with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*=\"-content\"].with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*=\"-content\"].with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].remove>div[class*=\"-overlay\"].with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].remove>div[class*=\"-content\"].with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].remove>div[class*=\"-content\"].with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:\"Quicksand\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*=\"-overlay\"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*=\"-overlay\"].with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].remove>div[class*=\"-overlay\"].with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].rtl-on>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a.confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a.confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a.full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a:hover{box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].rtl-on>div[class*=\"-content\"]>div[class*=\"-buttons\"],[id^=NotiflixConfirmWrap].rtl-on>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].with-animation.nx-fade>div[class*=\"-content\"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].with-animation.nx-zoom>div[class*=\"-content\"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].with-animation.nx-fade.remove>div[class*=\"-content\"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].with-animation.nx-zoom.remove>div[class*=\"-content\"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:\"Quicksand\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*=\"-icon\"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*=\"-icon\"] img,[id^=NotiflixLoadingWrap]>div[class*=\"-icon\"] svg{max-width:unset;max-height:unset;width:100%;height:100%;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].with-animation.remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:\"Quicksand\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*=\"-icon\"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*=\"-icon\"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*=\"-message\"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].with-animation.remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}"
    }, u = function() {
        if (null !== b() && !t.document.getElementById("NotiflixInternalCSS")) {
            if (!g("head"))
                return !1;
            var e = t.document.createElement("style");
            e.id = "NotiflixInternalCSS",
            e.innerHTML = b(),
            t.document.head.appendChild(e)
        }
    }, y = function() {
        var t = {}
          , e = !1
          , a = 0;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (e = arguments[0],
        a++);
        for (var o = function(i) {
            for (var a in i)
                Object.prototype.hasOwnProperty.call(i, a) && (t[a] = e && "[object Object]" === Object.prototype.toString.call(i[a]) ? y(t[a], i[a]) : i[a])
        }; a < arguments.length; a++)
            o(arguments[a]);
        return t
    }, k = function(e) {
        var i = t.document.createElement("div");
        return i.innerHTML = e,
        i.textContent || i.innerText || ""
    }, w = function(e, i) {
        if (!t.document.getElementById("NotiflixQuicksand") && e && "string" == typeof i && "quicksand" === i.toLocaleLowerCase("en")) {
            if (!g("head"))
                return !1;
            var a = t.document.createRange();
            a.selectNode(t.document.head);
            var o = a.createContextualFragment("<link id=\"NotiflixGoogleDNS\" rel=\"dns-prefetch\" href=\"//fonts.googleapis.com\" />");
            t.document.head.appendChild(o);
            var n = t.document.createRange();
            n.selectNode(t.document.head);
            var r = n.createContextualFragment("<link id=\"NotiflixQuicksand\" href=\"https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700&amp;subset=latin-ext\" rel=\"stylesheet\" />");
            t.document.head.appendChild(r)
        }
    }, h = function(t, e) {
        t || (t = "110px"),
        e || (e = "#32c682");
        var i = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"NXReportSuccess\" width=\"" + t + "\" height=\"" + t + "\" fill=\"" + e + "\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" image-rendering=\"optimizeQuality\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" version=\"1.1\" viewBox=\"0 0 120 120\" xml:space=\"preserve\"><style>@-webkit-keyframes NXReportSuccess5-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess5-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess6-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess6-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g id=\"NXReportSuccess1\"><g id=\"NXReportSuccess2\"><g style=\"-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\"><path d=\"M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z\" style=\"-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g><g style=\"-webkit-animation-name:NXReportSuccess5-animation;animation-name:NXReportSuccess5-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\"><path d=\"M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z\" style=\"-webkit-animation-name:NXReportSuccess6-animation;animation-name:NXReportSuccess6-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g></g></g></svg>";
        return i
    }, v = function(t, e) {
        t || (t = "110px"),
        e || (e = "#ff5549");
        var i = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"NXReportFailure\" width=\"" + t + "\" height=\"" + t + "\" fill=\"" + e + "\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" image-rendering=\"optimizeQuality\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" version=\"1.1\" viewBox=\"0 0 120 120\" xml:space=\"preserve\"><style>@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure5-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure5-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure6-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure6-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g id=\"NXReportFailure1\"><g id=\"NXReportFailure2\"><g style=\"-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)\"><path d=\"M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z\" style=\"-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g><g style=\"-webkit-animation-name:NXReportFailure5-animation;animation-name:NXReportFailure5-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)\"><path d=\"M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z\" style=\"-webkit-animation-name:NXReportFailure6-animation;animation-name:NXReportFailure6-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g></g></g></svg>";
        return i
    }, N = function(t, e) {
        t || (t = "110px"),
        e || (e = "#eebf31");
        var i = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"NXReportWarning\" width=\"" + t + "\" height=\"" + t + "\" fill=\"" + e + "\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" image-rendering=\"optimizeQuality\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" version=\"1.1\" viewBox=\"0 0 120 120\" xml:space=\"preserve\"><style>@-webkit-keyframes NXReportWarning3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning4-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning4-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning5-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning5-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g id=\"NXReportWarning1\"><g style=\"-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)\"><path d=\"M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z\" style=\"-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g><g style=\"-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)\"><path d=\"M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z\" style=\"-webkit-animation-name:NXReportWarning5-animation;animation-name:NXReportWarning5-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g></g></svg>";
        return i
    }, z = function(t, e) {
        t || (t = "110px"),
        e || (e = "#26c0d3");
        var i = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"NXReportInfo\" width=\"" + t + "\" height=\"" + t + "\" fill=\"" + e + "\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" image-rendering=\"optimizeQuality\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" version=\"1.1\" viewBox=\"0 0 120 120\" xml:space=\"preserve\"><style>@-webkit-keyframes NXReportInfo5-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo5-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo4-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo4-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g id=\"NXReportInfo1\"><g style=\"-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)\"><path d=\"M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z\" style=\"-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g><g style=\"-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)\"><path d=\"M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z\" style=\"-webkit-animation-name:NXReportInfo5-animation;animation-name:NXReportInfo5-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g></g></svg>";
        return i
    }, C = function(t, e) {
        t || (t = "60px"),
        e || (e = "#32c682");
        var i = "<svg xmlns=\"http://www.w3.org/2000/svg\" stroke=\"" + e + "\" width=\"" + t + "\" height=\"" + t + "\" transform=\"scale(.8)\" viewBox=\"0 0 38 38\"><g fill=\"none\" fill-rule=\"evenodd\" stroke-width=\"2\" transform=\"translate(1 1)\"><circle cx=\"18\" cy=\"18\" r=\"18\" stroke-opacity=\".25\"/><path d=\"M36 18c0-9.94-8.06-18-18-18\"><animateTransform attributeName=\"transform\" dur=\"1s\" from=\"0 18 18\" repeatCount=\"indefinite\" to=\"360 18 18\" type=\"rotate\"/></path></g></svg>";
        return i
    }, W = function(t, e) {
        t || (t = "60px"),
        e || (e = "#32c682");
        var i = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"NXLoadingHourglass\" fill=\"" + e + "\" width=\"" + t + "\" height=\"" + t + "\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" image-rendering=\"optimizeQuality\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" version=\"1.1\" viewBox=\"0 0 200 200\" xml:space=\"preserve\"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group=\"true\" data-animator-type=\"1\" style=\"-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box\"><g id=\"NXhourglass2\" fill=\"inherit\"><g data-animator-group=\"true\" data-animator-type=\"2\" style=\"-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box\" opacity=\".4\"><path id=\"NXhourglass4\" d=\"M100 100l-34.38 32.08v31.14h68.76v-31.14z\"/></g><g data-animator-group=\"true\" data-animator-type=\"2\" style=\"-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box\" opacity=\".4\"><path id=\"NXhourglass6\" d=\"M100 100L65.62 67.92V36.78h68.76v31.14z\"/></g><path d=\"M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z\"/></g></g></svg>";
        return i
    }, S = function(t, e) {
        t || (t = "60px"),
        e || (e = "#32c682");
        var i = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" + t + "\" height=\"" + t + "\" viewBox=\"25 25 50 50\" style=\"-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:" + t + ";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:" + t + ";position:absolute;top:0;left:0;margin:auto\"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke=\"" + e + "\" stroke-width=\"2\" style=\"-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite\" stroke-dasharray=\"150 200\" stroke-dashoffset=\"-10\" stroke-linecap=\"round\"/></svg>";
        return i
    }, L = function(t, e) {
        t || (t = "60px"),
        e || (e = "#32c682");
        var i = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"" + e + "\" width=\"" + t + "\" height=\"" + t + "\" viewBox=\"0 0 128 128\"><g><path fill=\"inherit\" d=\"M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z\"/><animateTransform attributeName=\"transform\" dur=\"1.5s\" from=\"0 64 64\" repeatCount=\"indefinite\" to=\"360 64 64\" type=\"rotate\"/></g></svg>";
        return i
    }, I = function(t, e) {
        t || (t = "60px"),
        e || (e = "#32c682");
        var i = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"" + e + "\" width=\"" + t + "\" height=\"" + t + "\" preserveAspectRatio=\"xMidYMid\" viewBox=\"0 0 100 100\"><g transform=\"translate(25 50)\"><circle r=\"9\" fill=\"inherit\" transform=\"scale(.239)\"><animateTransform attributeName=\"transform\" begin=\"-0.266s\" calcMode=\"spline\" dur=\"0.8s\" keySplines=\"0.3 0 0.7 1;0.3 0 0.7 1\" keyTimes=\"0;0.5;1\" repeatCount=\"indefinite\" type=\"scale\" values=\"0;1;0\"/></circle></g><g transform=\"translate(50 50)\"><circle r=\"9\" fill=\"inherit\" transform=\"scale(.00152)\"><animateTransform attributeName=\"transform\" begin=\"-0.133s\" calcMode=\"spline\" dur=\"0.8s\" keySplines=\"0.3 0 0.7 1;0.3 0 0.7 1\" keyTimes=\"0;0.5;1\" repeatCount=\"indefinite\" type=\"scale\" values=\"0;1;0\"/></circle></g><g transform=\"translate(75 50)\"><circle r=\"9\" fill=\"inherit\" transform=\"scale(.299)\"><animateTransform attributeName=\"transform\" begin=\"0s\" calcMode=\"spline\" dur=\"0.8s\" keySplines=\"0.3 0 0.7 1;0.3 0 0.7 1\" keyTimes=\"0;0.5;1\" repeatCount=\"indefinite\" type=\"scale\" values=\"0;1;0\"/></circle></g></svg>";
        return i
    }, R = function(t, e) {
        t || (t = "60px"),
        e || (e = "#32c682");
        var i = "<svg xmlns=\"http://www.w3.org/2000/svg\" stroke=\"" + e + "\" width=\"" + t + "\" height=\"" + t + "\" viewBox=\"0 0 44 44\"><g fill=\"none\" fill-rule=\"evenodd\" stroke-width=\"2\"><circle cx=\"22\" cy=\"22\" r=\"1\"><animate attributeName=\"r\" begin=\"0s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.165, 0.84, 0.44, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 20\"/><animate attributeName=\"stroke-opacity\" begin=\"0s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.3, 0.61, 0.355, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 0\"/></circle><circle cx=\"22\" cy=\"22\" r=\"1\"><animate attributeName=\"r\" begin=\"-0.9s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.165, 0.84, 0.44, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 20\"/><animate attributeName=\"stroke-opacity\" begin=\"-0.9s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.3, 0.61, 0.355, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 0\"/></circle></g></svg>";
        return i
    }, M = function(t, e, i) {
        t || (t = "60px"),
        e || (e = "#f8f8f8"),
        i || (i = "#32c682");
        var a = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"NXLoadingNotiflixLib\" width=\"" + t + "\" height=\"" + t + "\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" image-rendering=\"optimizeQuality\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" version=\"1.1\" viewBox=\"0 0 200 200\" xml:space=\"preserve\"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:" + e + ";stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d=\"M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z\" style=\"animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal\" fill=\"" + i + "\" stroke=\"" + i + "\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"22\" stroke-width=\"12\"/><path class=\"nx-icon-line\" d=\"M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21\" style=\"animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal\" stroke-dasharray=\"500\"/><path class=\"nx-icon-line\" d=\"M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75\" style=\"animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal\" stroke-dasharray=\"500\"/></svg>";
        return a
    }, A = 0, X = 0, B = function(a, o, n, r) {
        if (!g("body"))
            return !1;
        e || H.Notify.Init({});
        var c = y(!0, e, {});
        if ("object" == typeof o && !Array.isArray(o) || "object" == typeof n && !Array.isArray(n)) {
            var m = {};
            "object" == typeof o ? m = o : "object" == typeof n && (m = n),
            e = y(!0, e, m)
        }
        var p = e[r.toLocaleLowerCase("en")];
        A++,
        "function" == typeof o && X++,
        "string" != typeof a && (a = "Notiflix " + r),
        e.plainText && (a = k(a)),
        !e.plainText && a.length > e.messageMaxLength && (e = y(!0, e, {
            closeButton: !0,
            messageMaxLength: 100
        }),
        a = "HTML Tags Error: Your content length is more than \"messageMaxLength\" option."),
        a.length > e.messageMaxLength && (a = a.substring(0, e.messageMaxLength) + "..."),
        "shadow" === e.fontAwesomeIconStyle && (p.fontAwesomeIconColor = p.background),
        e.cssAnimation || (e.cssAnimationDuration = 0);
        var f = t.document.createElement("div");
        f.id = l.wrapID,
        f.style.width = e.width,
        f.style.zIndex = e.zindex,
        f.style.opacity = e.opacity,
        "center-center" === e.position ? (f.style.left = e.distance,
        f.style.top = e.distance,
        f.style.right = e.distance,
        f.style.bottom = e.distance,
        f.style.margin = "auto",
        f.classList.add("nx-flex-center-center"),
        f.style.maxHeight = "calc((100vh - " + e.distance + ") - " + e.distance + ")",
        f.style.display = "flex",
        f.style.flexWrap = "wrap",
        f.style.flexDirection = "column",
        f.style.justifyContent = "center",
        f.style.alignItems = "center",
        f.style.pointerEvents = "none") : "center-top" === e.position ? (f.style.left = e.distance,
        f.style.right = e.distance,
        f.style.top = e.distance,
        f.style.bottom = "auto",
        f.style.margin = "auto") : "center-bottom" === e.position ? (f.style.left = e.distance,
        f.style.right = e.distance,
        f.style.bottom = e.distance,
        f.style.top = "auto",
        f.style.margin = "auto") : "right-bottom" === e.position ? (f.style.right = e.distance,
        f.style.bottom = e.distance,
        f.style.top = "auto",
        f.style.left = "auto") : "left-top" === e.position ? (f.style.left = e.distance,
        f.style.top = e.distance,
        f.style.right = "auto",
        f.style.bottom = "auto") : "left-bottom" === e.position ? (f.style.left = e.distance,
        f.style.bottom = e.distance,
        f.style.top = "auto",
        f.style.right = "auto") : (f.style.right = e.distance,
        f.style.top = e.distance,
        f.style.left = "auto",
        f.style.bottom = "auto");
        var d;
        e.backOverlay && (d = t.document.createElement("div"),
        d.id = e.ID + "Overlay",
        d.style.width = "100%",
        d.style.height = "100%",
        d.style.position = "fixed",
        d.style.zIndex = e.zindex,
        d.style.left = 0,
        d.style.top = 0,
        d.style.right = 0,
        d.style.bottom = 0,
        d.style.background = p.backOverlayColor || e.backOverlayColor,
        d.className = e.cssAnimation ? "with-animation" : "",
        d.style.animationDuration = e.cssAnimation ? e.cssAnimationDuration + "ms" : "",
        t.document.getElementById(d.id) ? 0 === X && (t.document.getElementById(d.id).style.background = p.backOverlayColor || e.backOverlayColor) : t.document.body.appendChild(d)),
        t.document.getElementById(f.id) || t.document.body.appendChild(f);
        var x = t.document.createElement("div");
        x.id = e.ID + "-" + A,
        x.className = e.className + " " + p.childClassName + " " + (e.cssAnimation ? "with-animation" : "") + " " + (e.useIcon ? "with-icon" : "") + " nx-" + e.cssAnimationStyle + " " + (e.closeButton && "function" != typeof o ? "with-close-button" : "") + " " + ("function" == typeof o ? "with-callback" : "") + " " + (e.clickToClose ? "click-to-close" : ""),
        x.style.fontSize = e.fontSize,
        x.style.color = p.textColor,
        x.style.background = p.background,
        x.style.borderRadius = e.borderRadius,
        x.style.pointerEvents = "all",
        e.rtl && (x.setAttribute("dir", "rtl"),
        x.classList.add("rtl-on")),
        x.style.fontFamily = "\"" + e.fontFamily + "\", " + s,
        e.cssAnimation && (x.style.animationDuration = e.cssAnimationDuration + "ms");
        var b = "";
        if (e.closeButton && "function" != typeof o && (b = "<span class=\"notify-close-button\"><svg class=\"clck2cls\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" width=\"20px\" height=\"20px\" version=\"1.1\" style=\"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\"viewBox=\"0 0 20 20\"xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><style type=\"text/css\">.click2close{fill:" + p.notiflixIconColor + "}</style></defs><g><path class=\"click2close\" d=\"M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z\"/></g></svg></span>"),
        !e.useIcon)
            x.innerHTML = "<span class=\"the-message\">" + a + "</span>" + (e.closeButton ? b : "");
        else if (e.useFontAwesome)
            x.innerHTML = "<i style=\"color:" + p.fontAwesomeIconColor + "; font-size:" + e.fontAwesomeIconSize + ";\" class=\"nmi wfa " + p.fontAwesomeClassName + " " + ("shadow" === e.fontAwesomeIconStyle ? "shadow" : "basic") + "\"></i><span class=\"the-message with-icon\">" + a + "</span>" + (e.closeButton ? b : "");
        else {
            var u;
            u = "Success" === r ? "<svg class=\"nmi\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" width=\"40px\" height=\"40px\" version=\"1.1\" style=\"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\"viewBox=\"0 0 40 40\"xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><style type=\"text/css\">#Notiflix-Icon-Success{fill:" + p.notiflixIconColor + "}</style></defs><g><path id=\"Notiflix-Icon-Success\" d=\"M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z\"/></g></svg>" : "Failure" === r ? "<svg class=\"nmi\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" width=\"40px\" height=\"40px\" version=\"1.1\" style=\"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\"viewBox=\"0 0 40 40\"xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><style type=\"text/css\">#Notiflix-Icon-Failure{fill:" + p.notiflixIconColor + "}</style></defs><g><path id=\"Notiflix-Icon-Failure\" d=\"M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z\"/></g></svg>" : "Warning" === r ? "<svg class=\"nmi\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" width=\"40px\" height=\"40px\" version=\"1.1\" style=\"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\"viewBox=\"0 0 40 40\"xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><style type=\"text/css\">#Notiflix-Icon-Warning{fill:" + p.notiflixIconColor + "}</style></defs><g><path id=\"Notiflix-Icon-Warning\" d=\"M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z\"/></g></svg>" : "Info" === r ? "<svg class=\"nmi\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" width=\"40px\" height=\"40px\" version=\"1.1\" style=\"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\"viewBox=\"0 0 40 40\"xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><style type=\"text/css\">#Notiflix-Icon-Info{fill:" + p.notiflixIconColor + "}</style></defs><g><path id=\"Notiflix-Icon-Info\" d=\"M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z\"/></g></svg>" : "",
            x.innerHTML = u + "<span class=\"the-message with-icon\">" + a + "</span>" + (e.closeButton ? b : "")
        }
        if ("left-bottom" === e.position || "right-bottom" === e.position) {
            var w = t.document.getElementById(f.id);
            w.insertBefore(x, w.firstChild)
        } else
            t.document.getElementById(f.id).appendChild(x);
        var h = t.document.getElementById(x.id);
        if (h) {
            var v, N = t.document.getElementById(f.id);
            e.backOverlay && (v = t.document.getElementById(d.id));
            var z, C, W = function() {
                h.classList.add("remove"),
                e.backOverlay && 0 >= N.childElementCount && v.classList.add("remove"),
                clearTimeout(z)
            }, S = function() {
                h && null !== h.parentNode && h.parentNode.removeChild(h),
                0 >= N.childElementCount && null !== N.parentNode && (N.parentNode.removeChild(N),
                e.backOverlay && null !== v.parentNode && v.parentNode.removeChild(v)),
                clearTimeout(C)
            };
            if (e.closeButton && "function" != typeof o) {
                var L = t.document.getElementById(x.id).querySelectorAll("span.notify-close-button")[0];
                L.addEventListener("click", function() {
                    W();
                    var t = setTimeout(function() {
                        S(),
                        clearTimeout(t)
                    }, e.cssAnimationDuration)
                })
            }
            if (("function" == typeof o || e.clickToClose) && h.addEventListener("click", function() {
                "function" == typeof o && (X--,
                o()),
                W();
                var t = setTimeout(function() {
                    S(),
                    clearTimeout(t)
                }, e.cssAnimationDuration)
            }),
            !e.closeButton && "function" != typeof o) {
                var I = function() {
                    z = setTimeout(function() {
                        W()
                    }, e.timeout),
                    C = setTimeout(function() {
                        S()
                    }, e.timeout + e.cssAnimationDuration)
                };
                I(),
                e.pauseOnHover && (h.addEventListener("mouseenter", function() {
                    h.classList.add("nx-paused"),
                    clearTimeout(z),
                    clearTimeout(C)
                }),
                h.addEventListener("mouseleave", function() {
                    h.classList.remove("nx-paused"),
                    I()
                }))
            }
        }
        if (e.showOnlyTheLastOne && 0 < A)
            for (var R, M = t.document.querySelectorAll("[id^=" + e.ID + "-]:not([id=" + e.ID + "-" + A + "])"), B = 0; B < M.length; B++)
                R = M[B],
                null !== R.parentNode && R.parentNode.removeChild(R);
        e = y(!0, e, c)
    }, F = function(e, a, o, n, r, l) {
        if (!g("body"))
            return !1;
        i || H.Report.Init({});
        var m = {};
        if ("object" == typeof n && !Array.isArray(n) || "object" == typeof r && !Array.isArray(r)) {
            var p = {};
            "object" == typeof n ? p = n : "object" == typeof r && (p = r),
            m = y(!0, i, {}),
            i = y(!0, i, p)
        }
        var f = i[l.toLocaleLowerCase("en")];
        "string" != typeof e && (e = "Notiflix " + l),
        "string" != typeof a && ("Success" === l ? a = "\"Do not try to become a person of success but try to become a person of value.\" <br><br>- Albert Einstein" : "Failure" === l ? a = "\"Failure is simply the opportunity to begin again, this time more intelligently.\" <br><br>- Henry Ford" : "Warning" === l ? a = "\"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny.\" <br><br>- Mustafa Kemal Ataturk" : "Info" == l && (a = "\"Knowledge rests not upon truth alone, but upon error also.\" <br><br>- Carl Gustav Jung")),
        "string" != typeof o && (o = "Okay"),
        i.plainText && (e = k(e),
        a = k(a),
        o = k(o)),
        i.plainText || (e.length > i.titleMaxLength && (e = "HTML Tags Error",
        a = "Your Title content length is more than \"titleMaxLength\" option.",
        o = "Okay"),
        a.length > i.messageMaxLength && (e = "HTML Tags Error",
        a = "Your Message content length is more than \"messageMaxLength\" option.",
        o = "Okay"),
        o.length > i.buttonMaxLength && (e = "HTML Tags Error",
        a = "Your Button content length is more than \"buttonMaxLength\" option.",
        o = "Okay")),
        e.length > i.titleMaxLength && (e = e.substring(0, i.titleMaxLength) + "..."),
        a.length > i.messageMaxLength && (a = a.substring(0, i.messageMaxLength) + "..."),
        o.length > i.buttonMaxLength && (o = o.substring(0, i.buttonMaxLength) + "..."),
        i.cssAnimation || (i.cssAnimationDuration = 0);
        var d = t.document.createElement("div");
        d.id = c.ID,
        d.className = i.className,
        d.style.zIndex = i.zindex,
        d.style.borderRadius = i.borderRadius,
        d.style.fontFamily = "\"" + i.fontFamily + "\", " + s,
        i.rtl && (d.setAttribute("dir", "rtl"),
        d.classList.add("rtl-on")),
        d.style.display = "flex",
        d.style.flexWrap = "wrap",
        d.style.flexDirection = "column",
        d.style.alignItems = "center",
        d.style.justifyContent = "center";
        var x = "";
        i.backOverlay && (x = "<div class=\"" + i.className + "-overlay" + (i.cssAnimation ? " with-animation" : "") + "\" style=\"background:" + (f.backOverlayColor || i.backOverlayColor) + ";animation-duration:" + i.cssAnimationDuration + "ms;\"></div>");
        var b = "";
        if ("Success" === l ? b = h(i.svgSize, f.svgColor) : "Failure" === l ? b = v(i.svgSize, f.svgColor) : "Warning" === l ? b = N(i.svgSize, f.svgColor) : "Info" == l && (b = z(i.svgSize, f.svgColor)),
        d.innerHTML = x + "<div class=\"" + i.className + "-content" + (i.cssAnimation ? " with-animation " : "") + " nx-" + i.cssAnimationStyle + "\" style=\"width:" + i.width + "; background:" + i.backgroundColor + "; animation-duration:" + i.cssAnimationDuration + "ms;\"><div style=\"width:" + i.svgSize + "; height:" + i.svgSize + ";\" class=\"" + i.className + "-icon\">" + b + "</div><h5 class=\"" + i.className + "-title\" style=\"font-weight:500; font-size:" + i.titleFontSize + "; color:" + f.titleColor + ";\">" + e + "</h5><p class=\"" + i.className + "-message\" style=\"font-size:" + i.messageFontSize + "; color:" + f.messageColor + ";\">" + a + "</p><a id=\"NXReportButton\" class=\"" + i.className + "-button\" style=\"font-weight:500; font-size:" + i.buttonFontSize + "; background:" + f.buttonBackground + "; color:" + f.buttonColor + ";\">" + o + "</a></div>",
        !t.document.getElementById(d.id)) {
            t.document.body.appendChild(d);
            var u = t.document.getElementById(d.id)
              , w = t.document.getElementById("NXReportButton");
            w.addEventListener("click", function() {
                "function" == typeof n && n(),
                u.classList.add("remove");
                var t = setTimeout(function() {
                    null !== u.parentNode && u.parentNode.removeChild(u),
                    clearTimeout(t)
                }, i.cssAnimationDuration)
            })
        }
        i = y(!0, i, m)
    }, E = function(e, i, o, n, r, l, c, p, f) {
        if (!g("body"))
            return !1;
        a || H.Confirm.Init({});
        var d = y(!0, a, {});
        "object" != typeof c || Array.isArray(c) || (a = y(!0, a, c)),
        "string" != typeof e && (e = "Notiflix Confirm"),
        "string" != typeof i && (i = "Do you agree with me?"),
        "string" != typeof o && (o = "Yes"),
        "string" != typeof n && (n = "No"),
        "function" != typeof r && (r = void 0),
        "function" != typeof l && (l = void 0),
        a.plainText && (e = k(e),
        i = k(i),
        o = k(o),
        n = k(n)),
        a.plainText || (e.length > a.titleMaxLength && (e = "HTML Tags Error",
        i = "Your Title content length is more than \"titleMaxLength\" option.",
        o = "Okay",
        n = "..."),
        i.length > a.messageMaxLength && (e = "HTML Tags Error",
        i = "Your Message content length is more than \"messageMaxLength\" option.",
        o = "Okay",
        n = "..."),
        (o.length || n.length) > a.buttonsMaxLength && (e = "HTML Tags Error",
        i = "Your Buttons contents length is more than \"buttonsMaxLength\" option.",
        o = "Okay",
        n = "...")),
        e.length > a.titleMaxLength && (e = e.substring(0, a.titleMaxLength) + "..."),
        i.length > a.messageMaxLength && (i = i.substring(0, a.messageMaxLength) + "..."),
        o.length > a.buttonsMaxLength && (o = o.substring(0, a.buttonsMaxLength) + "..."),
        n.length > a.buttonsMaxLength && (n = n.substring(0, a.buttonsMaxLength) + "..."),
        a.cssAnimation || (a.cssAnimationDuration = 0);
        var x = t.document.createElement("div");
        x.id = m.ID,
        x.className = a.className + (a.cssAnimation ? " with-animation nx-" + a.cssAnimationStyle : ""),
        x.style.zIndex = a.zindex,
        x.style.padding = a.distance,
        a.rtl && (x.setAttribute("dir", "rtl"),
        x.classList.add("rtl-on"));
        var b = "string" == typeof a.position ? a.position.trim() : "center";
        x.classList.add("nx-position-" + b),
        x.style.fontFamily = "\"" + a.fontFamily + "\", " + s;
        var u = "";
        a.backOverlay && (u = "<div class=\"" + a.className + "-overlay" + (a.cssAnimation ? " with-animation" : "") + "\" style=\"background:" + a.backOverlayColor + ";animation-duration:" + a.cssAnimationDuration + "ms;\"></div>");
        var w = "";
        "function" == typeof r && (w = "<a id=\"NXConfirmButtonCancel\" class=\"confirm-button-cancel\" style=\"color:" + a.cancelButtonColor + ";background:" + a.cancelButtonBackground + ";font-size:" + a.buttonsFontSize + ";\">" + n + "</a>");
        var h = ""
          , v = !1;
        if (p && "string" == typeof f && 0 < f.length && (v = f,
        h = "<div><input id=\"NXConfirmValidationInput\" type=\"text\" style=\"font-size:" + a.messageFontSize + ";border-radius: " + a.borderRadius + ";\" maxlength=\"" + f.length + "\" autocomplete=\"off\" spellcheck=\"false\" autocapitalize=\"none\" /></div>"),
        x.innerHTML = u + "<div class=\"" + a.className + "-content\" style=\"width:" + a.width + "; background:" + a.backgroundColor + "; animation-duration:" + a.cssAnimationDuration + "ms; border-radius: " + a.borderRadius + ";\"><div class=\"" + a.className + "-head\"><h5 style=\"color:" + a.titleColor + ";font-size:" + a.titleFontSize + ";\">" + e + "</h5><div style=\"color:" + a.messageColor + ";font-size:" + a.messageFontSize + ";\">" + i + h + "</div></div><div class=\"" + a.className + "-buttons\"><a id=\"NXConfirmButtonOk\" class=\"confirm-button-ok" + ("function" == typeof r ? "" : " full") + "\" style=\"color:" + a.okButtonColor + ";background:" + a.okButtonBackground + ";font-size:" + a.buttonsFontSize + ";\">" + o + "</a>" + w + "</div></div>",
        !t.document.getElementById(x.id)) {
            t.document.body.appendChild(x);
            var N = t.document.getElementById(x.id)
              , z = t.document.getElementById("NXConfirmButtonOk")
              , C = t.document.getElementById("NXConfirmValidationInput");
            if (C && (C.focus(),
            C.addEventListener("keyup", function(t) {
                var e = (t.target.value || "").toString();
                if (e !== v)
                    C.classList.add("nx-validation-failure"),
                    C.classList.remove("nx-validation-success");
                else {
                    C.classList.remove("nx-validation-failure"),
                    C.classList.add("nx-validation-success");
                    var i = "enter" === (t.key || "").toLocaleLowerCase("en") || 13 === t.keyCode;
                    i && z.dispatchEvent(new Event("click"))
                }
            })),
            z.addEventListener("click", function(t) {
                if (p && v && C) {
                    var e = (C.value || "").toString();
                    if (e !== v)
                        return C.focus(),
                        C.classList.add("nx-validation-failure"),
                        t.stopPropagation(),
                        t.preventDefault(),
                        t.returnValue = !1,
                        t.cancelBubble = !0,
                        !1;
                    C.classList.remove("nx-validation-failure")
                }
                "function" == typeof r && r(),
                N.classList.add("remove");
                var i = setTimeout(function() {
                    null !== N.parentNode && (N.parentNode.removeChild(N),
                    clearTimeout(i))
                }, a.cssAnimationDuration)
            }),
            "function" == typeof r) {
                var W = t.document.getElementById("NXConfirmButtonCancel");
                W.addEventListener("click", function() {
                    "function" == typeof l && l(),
                    N.classList.add("remove");
                    var t = setTimeout(function() {
                        null !== N.parentNode && (N.parentNode.removeChild(N),
                        clearTimeout(t))
                    }, a.cssAnimationDuration)
                })
            }
        }
        a = y(!0, a, d)
    }, D = function(e, i, a, n, r) {
        if (!g("body"))
            return !1;
        o || H.Loading.Init({});
        var l = y(!0, o, {});
        if ("object" == typeof e && !Array.isArray(e) || "object" == typeof i && !Array.isArray(i)) {
            var c = {};
            "object" == typeof e ? c = e : "object" == typeof i && (c = i),
            o = y(!0, o, c)
        }
        var m = "";
        if ("string" == typeof e && 0 < e.length && (m = e),
        n) {
            m = m.toString().length > o.messageMaxLength ? k(m).toString().substring(0, o.messageMaxLength) + "..." : k(m).toString();
            var f = "";
            0 < m.length && (f = "<p id=\"" + o.messageID + "\" class=\"loading-message\" style=\"color:" + o.messageColor + ";font-size:" + o.messageFontSize + ";\">" + m + "</p>"),
            o.cssAnimation || (o.cssAnimationDuration = 0);
            var x = "";
            if ("standard" === a)
                x = C(o.svgSize, o.svgColor);
            else if ("hourglass" === a)
                x = W(o.svgSize, o.svgColor);
            else if ("circle" === a)
                x = S(o.svgSize, o.svgColor);
            else if ("arrows" === a)
                x = L(o.svgSize, o.svgColor);
            else if ("dots" === a)
                x = I(o.svgSize, o.svgColor);
            else if ("pulse" === a)
                x = R(o.svgSize, o.svgColor);
            else if ("custom" === a && null !== o.customSvgUrl)
                x = "<img class=\"custom-loading-icon\" width=\"" + o.svgSize + "\" height=\"" + o.svgSize + "\" src=\"" + o.customSvgUrl + "\" alt=\"Notiflix\">";
            else {
                if ("custom" === a && null == o.customSvgUrl)
                    return d("Notiflix Error", "You have to set a static SVG url to \"customSvgUrl\" option to use Loading Custom."),
                    !1;
                "notiflix" === a && (x = M(o.svgSize, "#f8f8f8", "#32c682"))
            }
            var b = parseInt((o.svgSize || "").replace(/[^0-9]/g, ""))
              , u = t.innerWidth
              , w = b >= u ? u - 40 + "px" : b + "px"
              , h = "<div style=\"width:" + w + "; height:" + w + ";\" class=\"" + o.className + "-icon" + (0 < m.length ? " with-message" : "") + "\">" + x + "</div>"
              , v = t.document.createElement("div");
            if (v.id = p.ID,
            v.className = o.className + (o.cssAnimation ? " with-animation" : "") + (o.clickToClose ? " click-to-close" : ""),
            v.style.zIndex = o.zindex,
            v.style.background = o.backgroundColor,
            v.style.animationDuration = o.cssAnimationDuration + "ms",
            v.style.fontFamily = "\"" + o.fontFamily + "\", " + s,
            v.style.display = "flex",
            v.style.flexWrap = "wrap",
            v.style.flexDirection = "column",
            v.style.alignItems = "center",
            v.style.justifyContent = "center",
            o.rtl && (v.setAttribute("dir", "rtl"),
            v.classList.add("rtl-on")),
            v.innerHTML = h + f,
            !t.document.getElementById(v.id) && (t.document.body.appendChild(v),
            o.clickToClose)) {
                var N = t.document.getElementById(v.id);
                N.addEventListener("click", function() {
                    v.classList.add("remove");
                    var t = setTimeout(function() {
                        null !== v.parentNode && (v.parentNode.removeChild(v),
                        clearTimeout(t))
                    }, o.cssAnimationDuration)
                })
            }
        } else if (t.document.getElementById(p.ID))
            var z = t.document.getElementById(p.ID)
              , A = setTimeout(function() {
                z.classList.add("remove");
                var t = setTimeout(function() {
                    null !== z.parentNode && (z.parentNode.removeChild(z),
                    clearTimeout(t))
                }, o.cssAnimationDuration);
                clearTimeout(A)
            }, r);
        o = y(!0, o, l)
    }, T = function(e) {
        "string" != typeof e && (e = "");
        var i = t.document.getElementById(p.ID);
        if (i)
            if (0 < e.length) {
                e = e.length > o.messageMaxLength ? k(e).substring(0, o.messageMaxLength) + "..." : k(e);
                var a = i.getElementsByTagName("p")[0];
                if (a)
                    a.innerHTML = e;
                else {
                    var n = t.document.createElement("p");
                    n.id = o.messageID,
                    n.className = "loading-message new-loading-message",
                    n.style.color = o.messageColor,
                    n.style.fontSize = o.messageFontSize,
                    n.innerHTML = e,
                    i.appendChild(n)
                }
            } else
                d("Notiflix Error", "Where is the new message?")
    }, j = 0, O = function(e, a, o, r, l, c) {
        var m = "string" != typeof a || 1 > (a || "").length || 1 === (a || "").length && ("#" === (a || "")[0] || "." === (a || "")[0]);
        if (m)
            return d("Notiflix Error", "The selector parameter must be a String and matches a specified CSS selector(s)."),
            !1;
        var p = t.document.querySelectorAll(a);
        if (1 > p.length)
            return d("Notiflix Error", "You called the \"Notiflix.Block...\" function with \"" + a + "\" selector, but there is no such element(s) in the document."),
            !1;
        n || H.Block.Init({});
        var b = y(!0, n, {});
        if ("object" == typeof r && !Array.isArray(r) || "object" == typeof l && !Array.isArray(l)) {
            var u = {};
            "object" == typeof r ? u = r : "object" == typeof l && (u = l),
            n = y(!0, n, u)
        }
        var w = "";
        "string" == typeof r && 0 < r.length && (w = r),
        n.cssAnimation || (n.cssAnimationDuration = 0);
        var h = "notiflix-block";
        "string" == typeof n.className && (h = n.className.trim());
        var v = "number" == typeof n.querySelectorLimit ? n.querySelectorLimit : 200
          , N = p.length >= v ? v : p.length;
        if (e)
            for (var z = 0; z < N; z++) {
                var M = p[z]
                  , A = M.querySelectorAll("[id^=" + f.ID + "]");
                if (1 > A.length) {
                    var X = "";
                    o && ("hourglass" === o ? X = W(n.svgSize, n.svgColor) : "circle" === o ? X = S(n.svgSize, n.svgColor) : "arrows" === o ? X = L(n.svgSize, n.svgColor) : "dots" === o ? X = I(n.svgSize, n.svgColor) : "pulse" === o ? X = R(n.svgSize, n.svgColor) : X = C(n.svgSize, n.svgColor));
                    var B = "<span class=\"" + h + "-icon\" style=\"width:" + n.svgSize + ";height:" + n.svgSize + ";\">" + X + "</span>"
                      , F = "";
                    0 < w.length && (w = w.length > n.messageMaxLength ? k(w).substring(0, n.messageMaxLength) + "..." : k(w),
                    F = "<span style=\"font-size:" + n.messageFontSize + ";color:" + n.messageColor + ";\" class=\"" + h + "-message\">" + w + "</span>"),
                    j++;
                    var E = t.document.createElement("div");
                    E.id = f.ID + "-" + j,
                    E.className = h + "-wrap" + (n.cssAnimation ? " with-animation" : ""),
                    E.style.position = n.position,
                    E.style.zIndex = n.zindex,
                    E.style.background = n.backgroundColor,
                    E.style.animationDuration = n.cssAnimationDuration + "ms",
                    E.style.fontFamily = "\"" + n.fontFamily + "\", " + s,
                    E.style.display = "flex",
                    E.style.flexWrap = "wrap",
                    E.style.flexDirection = "column",
                    E.style.alignItems = "center",
                    E.style.justifyContent = "center",
                    n.rtl && (E.setAttribute("dir", "rtl"),
                    E.classList.add("rtl-on")),
                    E.innerHTML = B + F;
                    var D = t.getComputedStyle(M).getPropertyValue("position")
                      , T = "string" == typeof D ? D.toLocaleLowerCase("en") : "relative"
                      , O = Math.round(1.25 * parseInt(n.svgSize)) + 40
                      , P = M.offsetHeight || 0
                      , Q = "";
                    O > P && (Q = "min-height:" + O + "px;");
                    var Y = "";
                    Y = M.getAttribute("id") ? "#" + M.getAttribute("id") : M.classList[0] ? "." + M.classList[0] : (M.tagName || "").toLocaleLowerCase("en");
                    var G = ""
                      , U = -1 >= ["absolute", "relative", "fixed", "sticky"].indexOf(T);
                    if (U || 0 < Q.length) {
                        if (!g("head"))
                            return !1;
                        U && (G = "position:relative!important;");
                        var V = "<style id=\"Style-" + f.ID + "-" + j + "\">" + Y + "." + h + "-position{" + G + Q + "}</style>"
                          , q = t.document.createRange();
                        q.selectNode(t.document.head);
                        var K = q.createContextualFragment(V);
                        t.document.head.appendChild(K),
                        M.classList.add(h + "-position")
                    }
                    M.appendChild(E)
                }
            }
        else
            var $ = function(e) {
                var i = setTimeout(function() {
                    null !== e.parentNode && e.parentNode.removeChild(e);
                    var a = e.getAttribute("id")
                      , o = t.document.getElementById("Style-" + a);
                    o && null !== o.parentNode && o.parentNode.removeChild(o),
                    clearTimeout(i)
                }, n.cssAnimationDuration)
            }
              , J = function(t) {
                if (t && 0 < t.length)
                    for (var e, o = 0; o < t.length; o++)
                        e = t[o],
                        e && (e.classList.add("remove"),
                        $(e));
                else
                    x("Notiflix Info", "\"Notiflix.Block.Remove();\" function called with \"" + a + "\" selector, but this selector does not have a \"Notiflix.Block...\" element to remove.")
            }
              , Z = function(t) {
                var e = setTimeout(function() {
                    var i = h + "-position";
                    t.classList.remove(i),
                    clearTimeout(e)
                }, n.cssAnimationDuration + 300)
            }
              , _ = setTimeout(function() {
                for (var t, e = 0; e < N; e++)
                    t = p[e],
                    Z(t),
                    A = t.querySelectorAll("[id^=" + f.ID + "]"),
                    J(A);
                clearTimeout(_)
            }, c);
        n = y(!0, n, b)
    }, H = {
        Notify: {
            Init: function(t) {
                e = y(!0, l, t),
                w(e.useGoogleFont, e.fontFamily),
                u()
            },
            Merge: function(t) {
                return e ? void (e = y(!0, e, t)) : (d("Notiflix Error", "You have to initialize the Notify module before call Merge function."),
                !1)
            },
            Success: function(t, e, i) {
                B(t, e, i, "Success")
            },
            Failure: function(t, e, i) {
                B(t, e, i, "Failure")
            },
            Warning: function(t, e, i) {
                B(t, e, i, "Warning")
            },
            Info: function(t, e, i) {
                B(t, e, i, "Info")
            }
        },
        Report: {
            Init: function(t) {
                i = y(!0, c, t),
                w(i.useGoogleFont, i.fontFamily),
                u()
            },
            Merge: function(t) {
                return i ? void (i = y(!0, i, t)) : (d("Notiflix Error", "You have to initialize the Report module before call Merge function."),
                !1)
            },
            Success: function(t, e, i, a, o) {
                F(t, e, i, a, o, "Success")
            },
            Failure: function(t, e, i, a, o) {
                F(t, e, i, a, o, "Failure")
            },
            Warning: function(t, e, i, a, o) {
                F(t, e, i, a, o, "Warning")
            },
            Info: function(t, e, i, a, o) {
                F(t, e, i, a, o, "Info")
            }
        },
        Confirm: {
            Init: function(t) {
                a = y(!0, m, t),
                w(a.useGoogleFont, a.fontFamily),
                u()
            },
            Merge: function(t) {
                return a ? void (a = y(!0, a, t)) : (d("Notiflix Error", "You have to initialize the Confirm module before call Merge function."),
                !1)
            },
            Show: function(t, e, i, a, o, n, r) {
                E(t, e, i, a, o, n, r, !1, !1)
            },
            Ask: function(t, e, i, a, o, n, r, s) {
                E(t, e, a, o, n, r, s, !0, i)
            }
        },
        Loading: {
            Init: function(t) {
                o = y(!0, p, t),
                w(o.useGoogleFont, o.fontFamily),
                u()
            },
            Merge: function(t) {
                return o ? void (o = y(!0, o, t)) : (d("Notiflix Error", "You have to initialize the Loading module before call Merge function."),
                !1)
            },
            Standard: function(t, e) {
                D(t, e, "standard", !0, 0)
            },
            Hourglass: function(t, e) {
                D(t, e, "hourglass", !0, 0)
            },
            Circle: function(t, e) {
                D(t, e, "circle", !0, 0)
            },
            Arrows: function(t, e) {
                D(t, e, "arrows", !0, 0)
            },
            Dots: function(t, e) {
                D(t, e, "dots", !0, 0)
            },
            Pulse: function(t, e) {
                D(t, e, "pulse", !0, 0)
            },
            Custom: function(t, e) {
                D(t, e, "custom", !0, 0)
            },
            Notiflix: function(t, e) {
                D(t, e, "notiflix", !0, 0)
            },
            Remove: function(t) {
                "number" != typeof t && (t = 0),
                D(!1, !1, !1, !1, t)
            },
            Change: function(t) {
                T(t)
            }
        },
        Block: {
            Init: function(t) {
                n = y(!0, f, t),
                w(n.useGoogleFont, n.fontFamily),
                u()
            },
            Merge: function(t) {
                return n ? void (n = y(!0, n, t)) : (d("Notiflix Error", "You have to initialize the \"Notiflix.Block\" module before call Merge function."),
                !1)
            },
            Standard: function(t, e, i) {
                O(!0, t, "standard", e, i)
            },
            Hourglass: function(t, e, i) {
                O(!0, t, "hourglass", e, i)
            },
            Circle: function(t, e, i) {
                O(!0, t, "circle", e, i)
            },
            Arrows: function(t, e, i) {
                O(!0, t, "arrows", e, i)
            },
            Dots: function(t, e, i) {
                O(!0, t, "dots", e, i)
            },
            Pulse: function(t, e, i) {
                O(!0, t, "pulse", e, i)
            },
            Remove: function(t, e) {
                "number" != typeof e && (e = 0),
                O(!1, t, !1, !1, !1, e)
            }
        }
    };
    return {
        Notify: H.Notify,
        Report: H.Report,
        Confirm: H.Confirm,
        Loading: H.Loading,
        Block: H.Block
    }
});
