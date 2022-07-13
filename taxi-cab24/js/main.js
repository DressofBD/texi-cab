(function (e, t) {
  "object" === typeof exports && "object" === typeof module ? module.exports = t() : "function" === typeof define && define.amd ? define([], t) : "object" === typeof exports ? exports["taxi-booking-iview"] = t() : e["taxi-booking-iview"] = t()
})("undefined" !== typeof self ? self : this, function () {
  return function (e) {
    var t = {};

    function n(i) {
      if (t[i]) return t[i].exports;
      var r = t[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    return n.m = e, n.c = t, n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: i
      })
    }, n.r = function (e) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (n.r(i), Object.defineProperty(i, "default", {
          enumerable: !0,
          value: e
        }), 2 & t && "string" != typeof e)
        for (var r in e) n.d(i, r, function (t) {
          return e[t]
        }.bind(null, r));
      return i
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"]
      } : function () {
        return e
      };
      return n.d(t, "a", t), t
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = "fae3")
  }({
    "1eb2": function (e, t, n) {
      "use strict";
      var i;
      "undefined" !== typeof window && (n("f6fd"), (i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^\/]+\.js(\?.*)?$/)) && (n.p = i[1]))
    },
    ac25: function (e, t) {
      var n = "https://app.airporttaxis.com";

      function i(e, t) {
        var n = "css" === t ? 'link[href^="'.concat(e, '"]') : 'script[src^="'.concat(e, '"]'),
          i = !!document.querySelector(n);
        if (!i) {
          var r = null;
          "css" === t ? (r = document.createElement("link"), r.setAttribute("href", e), r.setAttribute("type", "text/css"), r.setAttribute("rel", "stylesheet")) : (r = document.createElement("script"), r.setAttribute("src", e), r.setAttribute("type", "text/javascript")), document.head.prepend(r)
        }
      }(function () {
        var e = "".concat(n, "/widget/dist/at-widget-booking.css"),
          t = "https://cdn.jsdelivr.net/npm/vue@2/dist/vue.min.js",
          r = "https://cdnjs.cloudflare.com/ajax/libs/custom-elements/1.3.1/custom-elements.min.js",
          o = "".concat(n, "/widget/dist/at-widget-booking.umd.min.js"),
          c = function () {
            return "customElements" in window
          };
        i(e, "css");
        var d = function () {
            c() || i(r, "js");
            var e = setInterval(function () {
              c() && (i(o, "js"), clearInterval(e))
            }, 100)
          },
          a = function () {
            i(t, "js");
            var e = setInterval(function () {
              window.Vue && (clearInterval(e), d())
            }, 100)
          };
        a();
        var s = "\n    #at-widget-booking-placeholder {\n      min-height: 540px;\n      /* padding-top: 100%; 1:1 aspect ratio */\n      background-color: #F8FBFF;\n      border-radius: 20px;\n      border: 2px solid #c1e0f0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    .lds-ripple {\n      display: inline-block;\n      position: relative;\n      top: 0;\n      left: 0;\n      width: 128px;\n      height: 128px;\n    }\n    .lds-ripple div {\n      position: absolute;\n      border: 4px solid #4DADFB;\n      opacity: 1;\n      border-radius: 50%;\n      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n    }\n    .lds-ripple div:nth-child(2) {\n      animation-delay: -0.5s;\n    }\n    @keyframes lds-ripple {\n      0% {\n        top: 60px;\n        left: 60px;\n        width: 0;\n        height: 0;\n        opacity: 1;\n      }\n      100% {\n        top: -1px;\n        left: -1px;\n        width: 122px;\n        height: 122px;\n        opacity: 0;\n      }\n    }\n  ";
        var u = !1;

        function l() {
          var e = document.querySelector("at-widget-booking");
          if (e) {
            var t = document.createElement("div");
            e.parentNode.insertBefore(t, e), t.appendChild(e);
            var n = document.createElement("div");
            n.setAttribute("id", "at-widget-booking-placeholder"), n.innerHTML = "\n      <style>".concat(s, '</style>\n      \x3c!--        <div class="lds-ring">--\x3e\n      \x3c!--          <div></div><div></div><div></div><div></div>--\x3e\n      \x3c!--        </div>--\x3e\n      <div class="lds-ripple"><div></div><div></div></div>\n    '), t.prepend(n)
          }
        }
        document.addEventListener("DOMContentLoaded", function (e) {
          u || (l(), u = !0)
        })
      })()
    },
    f6fd: function (e, t) {
      (function (e) {
        var t = "currentScript",
          n = e.getElementsByTagName("script");
        t in e || Object.defineProperty(e, t, {
          get: function () {
            try {
              throw new Error
            } catch (i) {
              var e, t = (/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(i.stack) || [!1])[1];
              for (e in n)
                if (n[e].src == t || "interactive" == n[e].readyState) return n[e];
              return null
            }
          }
        })
      })(document)
    },
    fae3: function (e, t, n) {
      "use strict";
      n.r(t);
      n("1eb2");
      var i = n("ac25");
      for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
          return i[e]
        })
      }(r)
    }
  })
});