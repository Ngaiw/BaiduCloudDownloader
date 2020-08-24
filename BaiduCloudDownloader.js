// ==UserScript==
// @name         Baidu Cloud Downloader
// @name:zh-CN   百度网盘文件下载工具
// @namespace    https://github.com/u0966537/BaiduCloudDownloader
// @version      2.0.1
// @icon         data:image/jpeg;base64,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
// @author       Chase He
// @description  功能有：[1]百度网盘文件提取密码 [2]百度网盘生成下载链接
// @match        *://pan.baidu.com/*
// @match        *://yun.baidu.com/*
// @connect      newday.me
// @connect      likestyle.cn
// @require      https://cdn.staticfile.org/jquery/3.5.0/jquery.min.js
// @require      https://cdn.staticfile.org/dompurify/2.0.10/purify.min.js
// @require      https://cdn.staticfile.org/snap.svg/0.5.1/snap.svg-min.js
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_openInTab
// @grant        GM_notification
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function () {
  "use strict";

  var manifest = {
    name: "wpzs",
    urls: {},
    apis: {
      version: "https://api.newday.me/share/disk/version",
      origin: "https://api.newday.me/share/disk/origin",
      query: "https://api.newday.me/share/disk/query",
      store: "https://api.newday.me/share/disk/store",
      lists: "https://api.newday.me/share/disk/lists",
      delete: "https://api.newday.me/share/disk/delete",
    },
    logger_level: 3,
  };

  var container = (function () {
    var obj = {
      defines: {},
      modules: {},
    };

    obj.define = function (name, requires, callback) {
      name = obj.processName(name);
      obj.defines[name] = {
        requires: requires,
        callback: callback,
      };
    };

    obj.require = function (name, cache) {
      if (typeof cache == "undefined") {
        cache = true;
      }

      name = obj.processName(name);
      if (cache && obj.modules.hasOwnProperty(name)) {
        return obj.modules[name];
      } else if (obj.defines.hasOwnProperty(name)) {
        var requires = obj.defines[name].requires;
        var callback = obj.defines[name].callback;

        var module = obj.use(requires, callback);
        cache && obj.register(name, module);
        return module;
      }
    };

    obj.use = function (requires, callback) {
      var module = {
        exports: undefined,
      };
      var params = obj.buildParams(requires, module);
      var result = callback.apply(this, params);
      if (typeof result != "undefined") {
        return result;
      } else {
        return module.exports;
      }
    };

    obj.register = function (name, module) {
      name = obj.processName(name);
      obj.modules[name] = module;
    };

    obj.buildParams = function (requires, module) {
      var params = [];
      requires.forEach(function (name) {
        params.push(obj.require(name));
      });
      params.push(obj.require);
      params.push(module.exports);
      params.push(module);
      return params;
    };

    obj.processName = function (name) {
      return name.toLowerCase();
    };

    return {
      define: obj.define,
      use: obj.use,
      register: obj.register,
      modules: obj.modules,
    };
  })();

  container.define("gm", [], function () {
    var obj = {};

    obj.ready = function (callback) {
      if (typeof GM_getValue != "undefined") {
        callback && callback();
      } else {
        setTimeout(function () {
          obj.ready(callback);
        }, 100);
      }
    };

    return obj;
  });

  /** common **/
  container.define("gmDao", [], function () {
    var obj = {
      items: {},
    };

    obj.get = function (name) {
      return GM_getValue(name);
    };

    obj.getBatch = function (names) {
      var items = {};
      names.forEach(function (name) {
        items[name] = obj.get(name);
      });
      return items;
    };

    obj.getAll = function () {
      return obj.getBatch(GM_listValues());
    };

    obj.set = function (name, item) {
      GM_setValue(name, item);
    };

    obj.setBatch = function (items) {
      for (var name in items) {
        obj.set(name, items[name]);
      }
    };

    obj.setAll = function (items) {
      var names = GM_listValues();
      names.forEach(function (name) {
        if (!items.hasOwnProperty(name)) {
          obj.remove(name);
        }
      });
      obj.setBatch(items);
    };

    obj.remove = function (name) {
      GM_deleteValue(name);
    };

    obj.removeBatch = function (names) {
      names.forEach(function (name) {
        obj.remove(name);
      });
    };

    obj.removeAll = function () {
      obj.removeBatch(GM_listValues());
    };

    return obj;
  });

  container.define("ScopeDao", [], function () {
    return function (dao, scope) {
      var obj = {
        items: {},
      };

      obj.get = function (name) {
        return obj.items[name];
      };

      obj.getBatch = function (names) {
        var items = {};
        names.forEach(function (name) {
          if (obj.items.hasOwnProperty(name)) {
            items[name] = obj.items[name];
          }
        });
        return items;
      };

      obj.getAll = function () {
        return obj.items;
      };

      obj.set = function (name, item) {
        obj.items[name] = item;

        obj.sync();
      };

      obj.setBatch = function (items) {
        obj.items = Object.assign(obj.items, items);

        obj.sync();
      };

      obj.setAll = function (items) {
        obj.items = Object.assign({}, items);

        obj.sync();
      };

      obj.remove = function (name) {
        delete obj.items[name];

        obj.sync();
      };

      obj.removeBatch = function (names) {
        names.forEach(function (name) {
          delete obj.items[name];
        });

        obj.sync();
      };

      obj.removeAll = function () {
        obj.items = {};

        obj.getDao().remove(obj.getScope());
      };

      obj.init = function () {
        var items = obj.getDao().get(obj.getScope());
        if (items instanceof Object) {
          obj.items = items;
        }
      };

      obj.sync = function () {
        obj.getDao().set(obj.getScope(), obj.items);
      };

      obj.getDao = function () {
        return dao;
      };

      obj.getScope = function () {
        return scope;
      };

      return obj.init(), obj;
    };
  });

  container.define("config", ["factory"], function (factory) {
    var obj = {};

    obj.getConfig = function (name) {
      return obj.getDao().get(name);
    };

    obj.setConfig = function (name, value) {
      obj.getDao().set(name, value);
    };

    obj.getAll = function () {
      return obj.getDao().getAll();
    };

    obj.getDao = function () {
      return factory.getConfigDao();
    };

    return obj;
  });

  container.define("storage", ["factory"], function (factory) {
    var obj = {};

    obj.getValue = function (name) {
      return obj.getDao().get(name);
    };

    obj.setValue = function (name, value) {
      obj.getDao().set(name, value);
    };

    obj.getAll = function () {
      return obj.getDao().getAll();
    };

    obj.getDao = function () {
      return factory.getStorageDao();
    };

    return obj;
  });

  container.define("option", ["config", "constant"], function (
    config,
    constant
  ) {
    var obj = {
      name: "option",
      constant: constant.option,
    };

    obj.isOptionActive = function (item) {
      var name = item.name;
      var option = obj.getOption();
      return option.indexOf(name) >= 0 ? true : false;
    };

    obj.setOptionActive = function (item) {
      var name = item.name;
      var option = obj.getOption();
      if (option.indexOf(name) < 0) {
        option.push(name);
        obj.setOption(option);
      }
    };

    obj.setOptionUnActive = function (item) {
      var name = item.name;
      var option = obj.getOption();
      var index = option.indexOf(name);
      if (index >= 0) {
        delete option[index];
        obj.setOption(option);
      }
    };

    obj.getOption = function () {
      var option = [];
      var optionList = obj.getOptionList();
      Object.values(obj.constant).forEach(function (item) {
        var name = item.name;
        if (optionList.hasOwnProperty(name)) {
          if (optionList[name] != "no") {
            option.push(name);
          }
        } else if (item.value != "no") {
          option.push(name);
        }
      });
      return option;
    };

    obj.setOption = function (option) {
      var optionList = {};
      Object.values(obj.constant).forEach(function (item) {
        var name = item.name;
        if (option.indexOf(name) >= 0) {
          optionList[name] = "yes";
        } else {
          optionList[name] = "no";
        }
      });
      obj.setOptionList(optionList);
    };

    obj.getOptionList = function () {
      var optionList = config.getConfig(obj.name);
      return optionList ? optionList : {};
    };

    obj.setOptionList = function (optionList) {
      config.setConfig(obj.name, optionList);
    };

    return obj;
  });

  container.define("manifest", [], function () {
    var obj = {
      manifest: manifest,
    };

    obj.getItem = function (name) {
      return obj.manifest[name];
    };

    obj.getManifest = function () {
      return obj.manifest;
    };

    obj.getName = function () {
      return obj.getItem("name");
    };

    obj.getAppName = function () {
      return obj.getItem("app_name");
    };

    obj.getUrl = function (name) {
      var urls = obj.getItem("urls");
      urls instanceof Object || (urls = {});
      return urls[name];
    };

    obj.getApi = function (name) {
      var apis = obj.getItem("apis");
      apis instanceof Object || (apis = {});
      return apis[name];
    };

    return obj;
  });

  container.define("env", ["config", "manifest"], function (config, manifest) {
    var obj = {
      modes: {
        ADDON: "addon",
        SCRIPT: "script",
      },
      browsers: {
        FIREFOX: "firefox",
        EDG: "edg",
        EDGE: "edge",
        BAIDU: "baidu",
        LIEBAO: "liebao",
        UC: "uc",
        QQ: "qq",
        SOGOU: "sogou",
        OPERA: "opera",
        MAXTHON: "maxthon",
        IE2345: "2345",
        SE360: "360",
        CHROME: "chrome",
        SAFIRI: "safari",
        OTHER: "other",
      },
    };

    obj.getName = function () {
      return manifest.getName();
    };

    obj.getMode = function () {
      if (GM_info.mode) {
        return GM_info.mode;
      } else {
        return obj.modes.SCRIPT;
      }
    };

    obj.getAid = function () {
      if (GM_info.scriptHandler) {
        return GM_info.scriptHandler.toLowerCase();
      } else {
        return "unknown";
      }
    };

    obj.getUid = function () {
      var uid = config.getConfig("uid");
      if (!uid) {
        uid = obj.randString(32);
        config.setConfig("uid", uid);
      }
      return uid;
    };

    obj.getBrowser = function () {
      if (!obj._browser) {
        obj._browser = obj.matchBrowserType(navigator.userAgent);
      }
      return obj._browser;
    };

    obj.getVersion = function () {
      return GM_info.script.version;
    };

    obj.getEdition = function () {
      return GM_info.version;
    };

    obj.getInfo = function () {
      return {
        mode: obj.getMode(),
        aid: obj.getAid(),
        uid: obj.getUid(),
        browser: obj.getBrowser(),
        version: obj.getVersion(),
        edition: obj.getEdition(),
      };
    };

    obj.matchBrowserType = function (userAgent) {
      var browser = obj.browsers.OTHER;
      userAgent = userAgent.toLowerCase();

      if (userAgent.match(/firefox/) != null) {
        browser = obj.browsers.FIREFOX;
      } else if (userAgent.match(/edge/) != null) {
        browser = obj.browsers.EDGE;
      } else if (userAgent.match(/edg/) != null) {
        browser = obj.browsers.EDG;
      } else if (userAgent.match(/bidubrowser/) != null) {
        browser = obj.browsers.BAIDU;
      } else if (userAgent.match(/lbbrowser/) != null) {
        browser = obj.browsers.LIEBAO;
      } else if (userAgent.match(/ubrowser/) != null) {
        browser = obj.browsers.UC;
      } else if (userAgent.match(/qqbrowse/) != null) {
        browser = obj.browsers.QQ;
      } else if (userAgent.match(/metasr/) != null) {
        browser = obj.browsers.SOGOU;
      } else if (userAgent.match(/opr/) != null) {
        browser = obj.browsers.OPERA;
      } else if (userAgent.match(/maxthon/) != null) {
        browser = obj.browsers.MAXTHON;
      } else if (userAgent.match(/2345explorer/) != null) {
        browser = obj.browsers.IE2345;
      } else if (userAgent.match(/chrome/) != null) {
        if (navigator.mimeTypes.length > 10) {
          browser = obj.browsers.SE360;
        } else {
          browser = obj.browsers.CHROME;
        }
      } else if (userAgent.match(/safari/) != null) {
        browser = obj.browsers.SAFIRI;
      }
      return browser;
    };

    obj.randString = function (length) {
      var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
      var text = "";
      for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    };

    return obj;
  });

  container.define("http", [], function () {
    var obj = {};

    obj.ajax = function (option) {
      var details = {
        method: option.type,
        url: option.url,
        responseType: option.dataType,
        onload: function (result) {
          if (!result.status || parseInt(result.status / 100) == 2) {
            option.success && option.success(result.response);
          } else {
            option.error && option.error("");
          }
        },
        onerror: function (result) {
          option.error && option.error(result.error);
        },
      };

      // 提交数据
      if (option.data instanceof Object) {
        if (option.data instanceof FormData) {
          details.data = option.data;
        } else {
          var formData = new FormData();
          for (var i in option.data) {
            formData.append(i, option.data[i]);
          }
          details.data = formData;
        }
      }

      // 自定义头
      if (option.headers) {
        details.headers = option.headers;
      }

      // 超时
      if (option.timeout) {
        details.timeout = option.timeout;
      }

      GM_xmlhttpRequest(details);
    };

    return obj;
  });

  container.define("router", [], function () {
    var obj = {};

    obj.getUrl = function () {
      return location.href;
    };

    obj.goUrl = function (url) {
      location.href = url;
    };

    obj.openUrl = function (url) {
      window.open(url);
    };

    obj.openTab = function (url, active) {
      GM_openInTab(url, !active);
    };

    obj.jumpLink = function (jumpUrl, jumpMode) {
      switch (jumpMode) {
        case 9:
          // self
          obj.goUrl(jumpUrl);
          break;
        case 6:
          // new
          obj.openUrl(jumpUrl);
          break;
        case 3:
          // new & not active
          obj.openTab(jumpUrl, false);
          break;
        case 1:
          // new & active
          obj.openTab(jumpUrl, true);
          break;
      }
    };

    obj.getUrlParam = function (name) {
      var param = obj.parseUrlParam(obj.getUrl());
      if (name) {
        return param.hasOwnProperty(name) ? param[name] : null;
      } else {
        return param;
      }
    };

    obj.parseUrlParam = function (url) {
      if (url.indexOf("?")) {
        url = url.split("?")[1];
      }
      var reg = /([^=&\s]+)[=\s]*([^=&\s]*)/g;
      var obj = {};
      while (reg.exec(url)) {
        obj[RegExp.$1] = RegExp.$2;
      }
      return obj;
    };

    return obj;
  });

  container.define("logger", ["env", "manifest"], function (env, manifest) {
    var obj = {
      constant: {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        NONE: 4,
      },
    };

    obj.debug = function (message) {
      obj.log(message, obj.constant.DEBUG);
    };

    obj.info = function (message) {
      obj.log(message, obj.constant.INFO);
    };

    obj.warn = function (message) {
      obj.log(message, obj.constant.WARN);
    };

    obj.error = function (message) {
      obj.log(message, obj.constant.ERROR);
    };

    obj.log = function (message, level) {
      if (level < manifest.getItem("logger_level")) {
        return false;
      }

      console.group("[" + env.getName() + "]" + env.getMode());
      console.log(message);
      console.groupEnd();
    };

    return obj;
  });

  container.define("meta", ["env", "$"], function (env, $) {
    var obj = {};

    obj.existMeta = function (name) {
      name = obj.processName(name);
      if ($("meta[name='" + name + "']").length) {
        return true;
      } else {
        return false;
      }
    };

    obj.appendMeta = function (name, content) {
      name = obj.processName(name);
      content || (content = "on");
      $('<meta name="' + name + '" content="on">').appendTo($("head"));
    };

    obj.processName = function (name) {
      return env.getName() + "::" + name;
    };

    return obj;
  });

  container.define("unsafeWindow", [], function () {
    if (typeof unsafeWindow == "undefined") {
      return window;
    } else {
      return unsafeWindow;
    }
  });

  container.define("svgCrypt", ["Snap"], function (Snap) {
    var obj = {};

    obj.getReqData = function () {
      var reqTime = Math.round(new Date().getTime() / 1000);
      var reqPoint = obj.getStrPoint("timestamp:" + reqTime);
      return {
        req_time: reqTime,
        req_point: reqPoint,
      };
    };

    obj.getStrPoint = function (str) {
      if (str.length < 2) {
        return "0:0";
      }

      var path = "";
      var current,
        last = str[0].charCodeAt();
      var sum = last;
      for (var i = 1; i < str.length; i++) {
        current = str[i].charCodeAt();
        if (i == 1) {
          path = path + "M";
        } else {
          path = path + " L";
        }
        path = path + current + " " + last;
        last = current;
        sum = sum + current;
      }
      path = path + " Z";
      var index = sum % str.length;
      var data = Snap.path.getPointAtLength(path, str[index].charCodeAt());
      return data.m.x + ":" + data.n.y;
    };

    return obj;
  });

  container.define("calendar", [], function () {
    var obj = {};

    obj.getTime = function () {
      return new Date().getTime();
    };

    obj.formatTime = function (format, timestamp) {
      format || (format = "Y-m-d H:i:s");
      timestamp || (timestamp = obj.getTime());
      var date = new Date(timestamp);
      var year = 1900 + date.getYear();
      var month = "0" + (date.getMonth() + 1);
      var day = "0" + date.getDate();
      var hour = "0" + date.getHours();
      var minute = "0" + date.getMinutes();
      var second = "0" + date.getSeconds();
      var vars = {
        Y: year,
        m: month.substring(month.length - 2, month.length),
        d: day.substring(day.length - 2, day.length),
        H: hour.substring(hour.length - 2, hour.length),
        i: minute.substring(minute.length - 2, minute.length),
        s: second.substring(second.length - 2, second.length),
      };
      return obj.replaceVars(vars, format);
    };

    obj.replaceVars = function (vars, value) {
      Object.keys(vars).forEach(function (key) {
        value = value.replace(key, vars[key]);
      });
      return value;
    };

    return obj;
  });

  container.define("oneData", ["env", "http"], function (env, http) {
    var obj = {};

    obj.requestOneApi = function (url, data, callback) {
      http.ajax({
        type: "post",
        url: url,
        dataType: "json",
        data: Object.assign(env.getInfo(), data),
        success: function (response) {
          callback && callback(response);
        },
        error: function () {
          callback && callback("");
        },
      });
    };
    return obj;
  });

  container.define("$extend", ["$", "DOMPurify", "logger"], function (
    $,
    DOMPurify,
    logger
  ) {
    var obj = {};

    obj.init = function () {
      if (DOMPurify && DOMPurify instanceof Function) {
        var domPurify = DOMPurify(window);
        $.fn.safeHtml = function (html) {
          try {
            this.html(domPurify.sanitize(html));
          } catch (err) {
            logger.error(err);
          }
        };
      } else {
        $.fn.safeHtml = function (html) {
          this.html(html);
        };
      }
    };

    return obj.init(), obj;
  });

  container.define("appRunner", ["router", "logger", "meta", "$"], function (
    router,
    logger,
    meta,
    $,
    require
  ) {
    var obj = {};

    obj.run = function (appList) {
      var metaName = "status";
      if (meta.existMeta(metaName)) {
        logger.info("setup already");
      } else {
        // 添加meta
        meta.appendMeta(metaName);

        // 运行应用
        $(function () {
          obj.runAppList(appList);
        });
      }
    };

    obj.runAppList = function (appList) {
      var url = router.getUrl();
      for (var i in appList) {
        var app = appList[i];

        var match = obj.matchApp(url, app);
        if (match == false) {
          continue;
        }

        if (require(app.name).run() == true) {
          break;
        }
      }
    };

    obj.matchApp = function (url, app) {
      var match = false;
      app.matchs.forEach(function (item) {
        if (url.indexOf(item) > 0 || item == "*") {
          match = true;
        }
      });
      return match;
    };

    return obj;
  });

  /** custom **/
  container.define("factory", ["gmDao", "ScopeDao"], function (
    gmDao,
    ScopeDao
  ) {
    var obj = {
      daos: {},
    };

    obj.getConfigDao = function () {
      return obj.getDao("config", function () {
        return ScopeDao(gmDao, "$config");
      });
    };

    obj.getStorageDao = function () {
      return obj.getDao("storage", function () {
        return ScopeDao(gmDao, "$storage");
      });
    };

    obj.getDao = function (key, createFunc) {
      if (!obj.daos.hasOwnProperty(key)) {
        obj.daos[key] = createFunc();
      }
      return obj.daos[key];
    };

    return obj;
  });

  container.define("constant", [], function () {
    return {
      source: {
        baidu: "baidu",
      },
      option: {
        baidu_page_home: {
          name: "baidu_page_home",
          value: "yes",
        },
        baidu_page_share: {
          name: "baidu_page_share",
          value: "yes",
        },
        baidu_page_verify: {
          name: "baidu_page_verify",
          value: "yes",
        },
        baidu_share_status: {
          name: "baidu_share_status",
          value: "yes",
        },
        baidu_custom_password: {
          name: "baidu_custom_password",
          value: "yes",
        },
        baidu_show_origin: {
          name: "baidu_show_origin",
          value: "yes",
        },
        baidu_auto_jump: {
          name: "baidu_auto_jump",
          value: "no",
        },
      },
    };
  });

  container.define("api", ["manifest", "oneData", "svgCrypt"], function (
    manifest,
    oneData,
    svgCrypt
  ) {
    var obj = {};

    obj.versionQuery = function (callback) {
      oneData.requestOneApi(manifest.getApi("version"), {}, callback);
    };

    obj.queryShareOrigin = function (
      shareSource,
      shareId,
      shareLink,
      callback
    ) {
      var data = {
        share_id: shareId,
        share_source: shareSource,
        share_point: svgCrypt.getStrPoint(shareId),
        share_link: shareLink,
      };
      oneData.requestOneApi(manifest.getApi("origin"), data, callback);
    };

    obj.querySharePwd = function (shareSource, shareId, shareLink, callback) {
      var data = {
        share_id: shareId,
        share_source: shareSource,
        share_point: svgCrypt.getStrPoint(shareId),
        share_link: shareLink,
      };
      oneData.requestOneApi(manifest.getApi("query"), data, callback);
    };

    obj.storeSharePwd = function (
      shareId,
      sharePwd,
      shareLink,
      shareSource,
      callback
    ) {
      var data = {
        share_id: shareId,
        share_pwd: sharePwd,
        share_source: shareSource,
        share_point: svgCrypt.getStrPoint(shareId),
        share_link: shareLink,
      };
      oneData.requestOneApi(manifest.getApi("store"), data, callback);
    };

    obj.queryShareList = function (shareSource, callback) {
      var data = {
        share_source: shareSource,
      };
      oneData.requestOneApi(manifest.getApi("lists"), data, callback);
    };

    obj.deleteShare = function (shareId, callback) {
      var data = {
        share_id: shareId,
        share_point: svgCrypt.getStrPoint(shareId),
      };
      oneData.requestOneApi(manifest.getApi("delete"), data, callback);
    };

    return obj;
  });

  container.define(
    "shareLog",
    ["config", "calendar", "constant", "api"],
    function (config, calendar, constant, api) {
      var obj = {
        name: "share_list",
        modes: {
          LOCAL: "local",
          ONLINE: "online",
        },
      };

      obj.getShareMode = function () {
        var shareMode = config.getConfig("share_mode");
        return shareMode == obj.modes.LOCAL
          ? obj.modes.LOCAL
          : obj.modes.ONLINE;
      };

      obj.setShareMode = function (shareMode) {
        config.setConfig(
          "share_mode",
          shareMode == obj.modes.LOCAL ? obj.modes.LOCAL : obj.modes.ONLINE
        );
      };

      obj.getShareLogList = function (shareSource, callback) {
        if (obj.getShareMode() == obj.modes.LOCAL) {
          callback(obj.getLocalShareLogList());
        } else {
          obj.getOnlineShareLogList(shareSource, callback);
        }
      };

      obj.getOnlineShareLogList = function (shareSource, callback) {
        api.queryShareList(shareSource, function (response) {
          if (response instanceof Object && response.code == 1) {
            callback(response.data.list);
          } else {
            callback([]);
          }
        });
      };

      obj.getLocalShareLogList = function () {
        var shareList = config.getConfig(obj.name);
        return shareList ? shareList : {};
      };

      obj.addShareLog = function (shareId, sharePwd, shareLink, shareSource) {
        api.storeSharePwd(shareId, sharePwd, shareLink, shareSource);

        var shareList = obj.getLocalShareLogList();
        shareList[shareId] = {
          share_id: shareId,
          share_pwd: sharePwd,
          share_link: shareLink,
          share_source: shareSource,
          share_time: new Date().getTime(),
        };
        config.setConfig(obj.name, shareList);
      };

      obj.removeShareLog = function (shareId, callback) {
        var shareList = obj.getLocalShareLogList();
        delete shareList[shareId];
        config.setConfig(obj.name, shareList);

        api.deleteShare(shareId, callback);
      };

      obj.buildShareLink = function (shareId, shareSource, shareLink) {
        if (shareSource == constant.source.baidu) {
          shareLink = "https://pan.baidu.com/s/1" + shareId;
        }
        return shareLink;
      };

      obj.buildShareTime = function (shareTime) {
        return calendar.formatTime("Y-m-d H:i:s", shareTime);
      };

      return obj;
    }
  );

  container.define(
    "runtime",
    ["router", "manifest", "calendar", "storage", "api"],
    function (router, manifest, calendar, storage, api) {
      var obj = {};

      obj.openOptionsPage = function () {
        router.openTab(manifest.getOptionsPage(), true);
      };

      obj.initVersion = function () {
        var versionDate = parseInt(storage.getValue("version_date"));
        var currentDate = calendar.formatTime("Ymd");
        if (!versionDate || versionDate < currentDate) {
          api.versionQuery(function (response) {
            storage.setValue("version_date", currentDate);

            if (
              response &&
              response.code == 1 &&
              response.data instanceof Object
            ) {
              var versionPayload = response.data;
              storage.setValue("version_payload", versionPayload);
              storage.setValue("version_latest", versionPayload.version);
            }
          });
        }
      };

      obj.initRuntime = function () {
        obj.initVersion();
      };

      return obj;
    }
  );

  container.define("core", ["runtime", "$extend"], function (runtime) {
    var obj = {};

    obj.ready = function (callback) {
      runtime.initRuntime();

      callback && callback();
    };

    return obj;
  });

  /** app **/
  container.define(
    "app_baidu",
    [
      "config",
      "option",
      "router",
      "logger",
      "unsafeWindow",
      "constant",
      "runtime",
      "api",
      "shareLog",
      "$",
    ],
    function (
      config,
      option,
      router,
      logger,
      unsafeWindow,
      constant,
      runtime,
      api,
      shareLog,
      $
    ) {
      var obj = {
        app_id: 778750,
        temp_path: "/onetmp",
        yun_data: null,
        verify_page: {
          share_pwd: null,
          setPwd: null,
          backupPwd: null,
          restorePwd: null,
          submit_pwd: null,
        },
      };

      obj.run = function () {
        var url = router.getUrl();
        if (url.indexOf(".baidu.com/s/") > 0) {
          option.isOptionActive(option.constant.baidu_page_share) &&
            obj.initSharePage();
          return true;
        } else if (url.indexOf(".baidu.com/disk/home") > 0) {
          option.isOptionActive(option.constant.baidu_page_home) &&
            obj.initHomePage();
          return true;
        } else if (url.indexOf(".baidu.com/disk/timeline") > 0) {
          option.isOptionActive(option.constant.baidu_page_home) &&
            obj.initTimeLinePage();
          return true;
        } else if (url.indexOf(".baidu.com/share/init") > 0) {
          option.isOptionActive(option.constant.baidu_page_verify) &&
            obj.initVerifyPage();
          return true;
        } else {
          return false;
        }
      };

      obj.initSharePage = function () {
        obj.removeVideoLimit();

        obj.prettySingleSharePage();

        obj.initButtonShare();

        obj.initButtonEvent();

        if (option.isOptionActive(option.constant.baidu_show_origin)) {
          obj.showShareOrigin();
        }
      };

      obj.initHomePage = function () {
        obj.registerCustomSharePwd();

        obj.initButtonHome();

        obj.initButtonEvent();
      };

      obj.initTimeLinePage = function () {
        obj.registerCustomSharePwd();

        obj.initButtonTimeLine();

        obj.initButtonEvent();
      };

      obj.initVerifyPage = function () {
        obj.registerStoreSharePwd();

        if (obj.initVerifyPageElement()) {
          obj.autoPaddingSharePwd();

          obj.registerPwdShareSwitch();
        }
      };

      obj.initVerifyPageElement = function () {
        var shareId = obj.getShareId();
        var $pwd = $(".input-area input");
        if (shareId && $pwd.length) {
          // 设置提取码
          obj.verify_page.setPwd = function (pwd) {
            $pwd.val(pwd);
          };

          // 备份提取码
          obj.verify_page.backupPwd = function (pwd) {
            $pwd.attr("data-pwd", pwd);
          };

          // 还原提取码
          obj.verify_page.restorePwd = function () {
            $pwd.val($pwd.attr("data-pwd"));
          };

          // 提交提取码
          var $button = $(".input-area .g-button");
          if ($button.length) {
            obj.verify_page.submit_pwd = function () {
              $button.click();
            };
          }

          return true;
        } else {
          return false;
        }
      };

      obj.autoPaddingSharePwd = function () {
        var shareId = obj.getShareId();
        var shareLink = router.getUrl();
        api.querySharePwd(constant.source.baidu, shareId, shareLink, function (
          response
        ) {
          if (response && response.code == 1) {
            var sharePwd = response.data.share_pwd;
            obj.verify_page.share_pwd = sharePwd;
            obj.verify_page.setPwd(sharePwd);
            obj.showTipSuccess("填充提取码成功");

            if (option.isOptionActive(option.constant.baidu_auto_jump)) {
              obj.verify_page.submit_pwd && obj.verify_page.submit_pwd();
            }
          } else {
            obj.showTipError("暂无人分享提取码");
          }
        });
      };

      obj.registerPwdShareSwitch = function () {
        // 添加开关
        $(".pickpw").after(
          '<dl class="clearfix"><dt>提取码分享设置<span style="float:right"><input type="checkbox" checked id="nd-share-check" style="vertical-align: middle;"> <a class="nd-open-page-option" href="javascript:;" title="点击查看更多脚本配置">共享提取码</a></span></dt></dl>'
        );
        obj.isPwdShareOpen() || $("#nd-share-check").removeAttr("checked");

        // 开关-事件
        $("#nd-share-check").on("change", function () {
          if ($(this).is(":checked")) {
            option.setOptionActive(option.constant.baidu_share_status);
          } else {
            option.setOptionUnActive(option.constant.baidu_share_status);
          }
        });

        // 打开配置页
        $(".nd-open-page-option").click(function () {
          runtime.openOptionsPage();
        });
      };

      obj.registerStoreSharePwd = function () {
        obj
          .getJquery()(document)
          .ajaxComplete(function (event, xhr, options) {
            var requestUrl = options.url;
            if (requestUrl.indexOf("/share/verify") >= 0) {
              var match = options.data.match(/pwd=([a-z0-9]+)/i);
              if (!match) {
                return logger.warn("pwd share not match");
              }

              // 拒绝*号
              if (obj.verify_page.backupPwd) {
                obj.verify_page.backupPwd(match[1]);
                setTimeout(obj.verify_page.restorePwd, 500);
              }

              var response = xhr.responseJSON;
              if (!(response && response.errno == 0)) {
                return logger.warn("pwd share error");
              }

              var sharePwd = match[1];
              if (sharePwd == obj.verify_page.share_pwd) {
                return logger.warn("pwd share not change");
              }

              if (!obj.isPwdShareOpen()) {
                return logger.warn("pwd share closed");
              }

              var shareId = obj.getShareId();
              var shareLink = router.getUrl();
              shareLog.addShareLog(
                shareId,
                sharePwd,
                shareLink,
                constant.source.baidu
              );
            }
          });
      };

      obj.registerCustomSharePwd = function () {
        // 功能开关
        if (!option.isOptionActive(option.constant.baidu_custom_password)) {
          return;
        }

        obj.loadPlugin("网盘分享", "com.baidu.pan");

        obj.onModuleReady(
          "function-widget-1:share/util/shareDialog.js",
          function () {
            // 分享事件
            obj.async("function-widget-1:share/util/shareDialog.js", function (
              shareDialog
            ) {
              shareDialog.prototype.onVisibilityChangeOrigin =
                shareDialog.prototype.onVisibilityChange;
              shareDialog.prototype.onVisibilityChange = function (status) {
                if ($(".nd-input-share-pwd").length == 0) {
                  var sharePwd = config.getConfig("share_pwd");
                  var html =
                    '<tr><td class="first-child"><label>提取码</label></td><td><input type="text" class="nd-input-share-pwd" value="' +
                    (sharePwd ? sharePwd : "") +
                    '" placeholder="为空则随机四位" style="padding: 6px; width: 100px;border: 1px solid #e9e9e9;"></td></tr>';
                  $("#share .dialog-body table").append(html);
                }
                this.onVisibilityChangeOrigin(status);
              };
            });

            // 生成提取码
            obj.async(
              "function-widget-1:share/util/shareFriend/createLinkShare.js",
              function (shareLink) {
                shareLink.prototype.makePrivatePasswordOrigin =
                  shareLink.prototype.makePrivatePassword;
                shareLink.prototype.makePrivatePassword = function () {
                  var sharePwd = config.getConfig("share_pwd");
                  return sharePwd ? sharePwd : this.makePrivatePasswordOrigin();
                };
              }
            );

            // 提取码更改事件
            $(document).on("change", ".nd-input-share-pwd", function () {
              var value = this.value;
              if (value && !value.match(/^[0-9a-z]{4}$/i)) {
                obj.showTipError("提取码只能是四位数字或字母");
              }
              config.setConfig("share_pwd", value);
            });
          }
        );
      };

      obj.loadPlugin = function (name, group) {
        try {
          var plugin = obj
            .require("system-core:pluginHub/data/Registry.js")
            .getPluginByNameAndGroup(name, group);
          obj.require("system-core:pluginHub/invoker/loadPluginAssets.js")(
            plugin
          );
        } catch (err) {}
      };

      obj.onModuleReady = function (name, callback) {
        try {
          obj.require(name);
          callback && callback();
        } catch (err) {
          setTimeout(function () {
            obj.onModuleReady(name, callback);
          }, 500);
        }
      };

      obj.removeVideoLimit = function () {
        var message = obj.getSystemContext().message;
        if (message) {
          message.callSystem("share-video-after-transfer");
        } else {
          logger.warn("wait removeVideoLimit...");
          obj.setTimeout(obj.removeVideoLimit, 500);
        }
      };

      obj.prettySingleSharePage = function () {
        if (!obj.isSharePageMulti()) {
          $("#layoutMain").css({
            width: "auto",
            "min-width": "1180px",
            margin: "88px 30px",
          });
        }
      };

      obj.showShareOrigin = function () {
        api.queryShareOrigin(
          constant.source.baidu,
          obj.getShareId(),
          router.getUrl(),
          function (response) {
            if (response && response.code == 1) {
              var data = response.data;
              if (data.list && data.list.length) {
                var html =
                  '<div style="padding: 10px 5px; border-bottom: 1px solid #f6f6f6; line-height: 30px;">';
                var item = data.list[0];
                if (data.list.length > 1) {
                  html +=
                    '<p>分享来源：<a target="_blank" href="' +
                    item.url +
                    '">' +
                    item.title +
                    '</a> [<a class="show-origin-dialog" href="javascript:;" style="color:#ff0000;"> 查看更多 </a>]</p>';
                } else {
                  html +=
                    '<p>分享来源：<a target="_blank" href="' +
                    item.url +
                    '">' +
                    item.title +
                    "</a></p>";
                }
                html += "</div>";
                $(".module-share-header").after(html);

                $(document).on("click", ".show-origin-dialog", function () {
                  var title = "分享来源";
                  var body =
                    '<div style="padding: 20px 20px;min-height: 120px; max-height: 300px; overflow-y: auto;">';

                  data.list.forEach(function (item, index) {
                    body +=
                      "<p>" +
                      ++index +
                      '：<a target="_blank" href="' +
                      item.url +
                      '">' +
                      item.title +
                      "</a></p>";
                  });

                  body += "</div>";
                  var footer = obj.renderFooterAppId();
                  obj.showDialog(title, body, footer);
                });
              }
            }
          }
        );
      };

      obj.initButtonShare = function () {
        if ($(".x-button-box").length) {
          var html =
            '<a class="g-button nd-button-build"><span class="g-button-right"><em class="icon icon-disk" title="下载"></em><span class="text">生成链接</span></span></a>';
          $(".x-button-box").append(html);
        } else {
          logger.warn("wait initButtonShare...");
          setTimeout(obj.initButtonShare, 500);
        }
      };

      obj.initButtonHome = function () {
        var listTools = obj
          .getSystemContext()
          .Broker.getButtonBroker("listTools");
        if (listTools && listTools.$box) {
          var html =
            '<a class="g-button nd-button-build"><span class="g-button-right"><em class="icon icon-disk" title="下载"></em><span class="text">生成链接</span></span></a>';
          $(listTools.$box).prepend(html);
        } else {
          logger.warn("wait initButtonHome...");
          setTimeout(obj.initButtonHome, 500);
        }
      };

      obj.initButtonTimeLine = function () {
        if ($(".module-operateBtn .group-button").length) {
          var html =
            '<span class="button"><a class="g-v-button g-v-button-middle nd-button-build"><span class="g-v-button-right"><em class="icon icon-disk"></em><span class="text">生成链接</span></span></a></span>';
          $(".module-operateBtn .group-button").prepend(html);
        } else {
          logger.warn("wait initButtonTimeLine...");
          setTimeout(obj.initButtonTimeLine, 500);
        }
      };

      obj.initButtonEvent = function () {
        // 生成链接
        $(document).on("click", ".nd-button-build", function () {
          var yunData = obj.getYunData();
          if (yunData.MYUK || obj.isHomePage()) {
            var fileList = obj.getSelectedFileList();
            var fileStat = obj.getFileListStat(fileList);
            if (fileList.length) {
              if (fileList.length > 1 && fileStat.file_num) {
                obj.showDownloadSelect(fileList, fileStat);
              } else if (fileStat.file_num == 1 && !obj.isHomePage()) {
                obj.showDownloadSingle(fileList, fileStat);
              } else {
                var pack = fileStat.file_num ? false : true;
                if (obj.isHomePage()) {
                  obj.showDownloadInfoHome(fileList, pack);
                } else {
                  obj.showDownloadInfoShareOffical(fileList, pack);
                }
              }
            } else {
              obj.showTipError("请至少选择一个文件或文件夹");
            }
          } else {
            obj.showLogin();
          }
        });

        // 压缩包
        $(document).on("click", ".nd-button-pack", function () {
          var fileList = obj.getSelectedFileList();
          if (obj.isHomePage()) {
            obj.showDownloadInfoHome(fileList, true);
          } else {
            obj.showDownloadInfoShareOffical(fileList, true);
          }
        });

        // 多文件
        $(document).on("click", ".nd-button-multi", function () {
          var fileList = obj.getSelectedFileList();

          // 过滤文件夹
          fileList = obj.filterFileListDir(fileList);

          if (obj.isHomePage()) {
            obj.showDownloadInfoHome(fileList, false);
          } else {
            obj.showDownloadInfoShareOffical(fileList, false);
          }
        });

        // 转存多文件
        $(document).on("click", ".nd-button-disk", function () {
          var fileList = obj.getSelectedFileList();

          // 过滤文件夹
          fileList = obj.filterFileListDir(fileList);

          if (obj.isHomePage()) {
            obj.showDownloadInfoHome(fileList, false);
          } else {
            obj.showDownloadInfoShareTransfer(fileList);
          }
        });

        // 应用ID
        $(document).on("click", ".nd-change-app-id", function () {
          obj.showAppIdChange();
        });

        // 打开配置页
        $(document).on("click", ".nd-open-page-option", function () {
          runtime.openOptionsPage();
        });

        // 打开临时页面
        $(document).on("click", ".nd-open-page-temp", function () {
          router.openTab(
            "https://pan.baidu.com/disk/home#/all?vmode=list&path=" +
              encodeURIComponent(obj.getTempPath()),
            true
          );
        });
      };

      obj.showLogin = function () {
        obj.getJquery()("[node-type='header-login-btn']").click();
      };

      obj.showDownloadInfoShareTransfer = function (fileList) {
        logger.info(fileList);
        obj.applyTransferFile(fileList, obj.getTempPath(), function (response) {
          if (response && response.extra && response.extra.list) {
            var listMap = {};
            response.extra.list.forEach(function (item) {
              listMap[item.from_fs_id] = item;
            });

            var downList = [];
            fileList.forEach(function (item) {
              if (listMap.hasOwnProperty(item.fs_id)) {
                item.dlink = obj.buildDownloadUrl(
                  listMap[item.fs_id].to,
                  item.server_filename
                );
                downList.push(item);
              }
            });
            obj.showDownloadLinkFile(downList);
          }
        });
      };

      obj.showDownloadInfoShareOffical = function (fileList, pack) {
        obj.getDownloadShare(fileList, pack, function (response) {
          obj.hideTip();
          logger.info(response);

          if (response.list && response.list.length) {
            // 文件
            obj.showDownloadLinkFile(response.list);
          } else if (response.dlink) {
            // 压缩包
            obj.showDownloadLinkPack(fileList, {
              dlink: response.dlink,
            });
          } else {
            // 其他
            obj.showDialogUnKnownResponse(response);
          }
        });
      };

      obj.showDownloadInfoHome = function (fileList, pack) {
        logger.info(fileList);
        try {
          obj.getDownloadHome(fileList, pack, function (response) {
            obj.hideTip();
            logger.info(response);

            if (pack) {
              if (response.dlink && typeof response.dlink == "string") {
                // 压缩包
                obj.showDownloadLinkPack(fileList, {
                  dlink: response.dlink,
                });
              } else {
                // 其他
                obj.showDialogUnKnownResponse(response);
              }
            } else {
              if (response.dlink instanceof Array && response.dlink.length) {
                var dlinkMapping = {};
                response.dlink.forEach(function (item) {
                  dlinkMapping[item.fs_id] = item.dlink;
                });
                fileList.forEach(function (item) {
                  item.dlink = dlinkMapping[item.fs_id];
                  item.dlinkApi = obj.buildDownloadUrl(
                    item.path,
                    item.server_filename
                  );
                });
              } else {
                fileList.forEach(function (item) {
                  item.dlink = obj.buildDownloadUrl(
                    item.path,
                    item.server_filename
                  );
                });
              }
              obj.showDownloadLinkFile(fileList);
            }
          });
        } catch (err) {
          fileList.forEach(function (item) {
            item.dlink = obj.buildDownloadUrl(item.path, item.server_filename);
          });
          obj.showDownloadLinkFile(fileList);
        }
      };

      obj.showDownloadLinkFile = function (fileList) {
        var title = "文件下载";
        var body =
          '<div style="padding: 20px 20px;min-height: 120px; max-height: 300px; overflow-y: auto; ">';

        var rowStyle =
          "display:block; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;";
        fileList.forEach(function (item, index) {
          body += '<div style="margin-bottom: 10px;">';
          body +=
            "<div>" + (index + 1) + "：" + item.server_filename + "</div>";
          if (item.dlinkApi) {
            body +=
              '<div><a href="' +
              item.dlink +
              "&filename=" +
              encodeURIComponent(item.server_filename) +
              '" title="' +
              item.dlink +
              '" style="' +
              rowStyle +
              '">官方：' +
              item.dlink +
              "</a></div>";
            body +=
              '<div><a href="' +
              item.dlinkApi +
              "&filename=" +
              encodeURIComponent(item.server_filename) +
              '" title="' +
              item.dlinkApi +
              '" style="' +
              rowStyle +
              '">直链：' +
              item.dlinkApi +
              "</a></div>";
          } else {
            body +=
              '<div><a href="' +
              item.dlink +
              "&filename=" +
              encodeURIComponent(item.server_filename) +
              '" title="' +
              item.dlink +
              '" style="' +
              rowStyle +
              '">' +
              item.dlink +
              "</a></div>";
          }
          body += "</div>";
        });

        body += "</div>";
        var footer = obj.renderFooterAppId();
        obj.showDialog(title, body, footer);
      };

      obj.showDownloadLinkPack = function (fileList, data) {
        var title = "文件下载";
        var body =
          '<div style="padding: 20px 20px;min-height: 120px; max-height: 300px; overflow-y: auto; ">';

        var packName = obj.getDownloadPackName(fileList);
        body +=
          "<div>" +
          packName +
          '</div><div><a href="' +
          data.dlink +
          "&zipname=" +
          encodeURIComponent(packName) +
          '" title="' +
          data.dlink +
          '" style="display:block; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;">' +
          data.dlink +
          "</a></div>";

        body += '<div style="margin-top: 15px;">打包的文件/文件夹列表</div>';
        fileList.forEach(function (item, index) {
          body +=
            '<div title="' +
            item.path +
            '" style="color: ' +
            (item.isdir ? "blue" : "inherit") +
            ';">[' +
            (index + 1) +
            "] " +
            item.server_filename +
            "</div>";
        });

        body += "</div>";
        var footer = obj.renderFooterAppId();
        obj.showDialog(title, body, footer);
      };

      obj.getDownloadPackName = function (fileList) {
        return (
          fileList[0].server_filename + " 等" + fileList.length + "个文件.zip"
        );
      };

      obj.buildDownloadUrl = function (path, name) {
        return (
          "https://pcs.baidu.com/rest/2.0/pcs/file?method=download&app_id=" +
          obj.getAppId() +
          "&filename=" +
          encodeURIComponent(name) +
          "&path=" +
          encodeURIComponent(path)
        );
      };

      obj.showDownloadSingle = function (fileList, fileStat) {
        var title = "链接类型";
        var body =
          '<div style="padding: 40px 20px; max-height: 300px; overflow-y: auto;">';

        body += '<div class="normalBtnBox g-center">';
        body +=
          '<a class="g-button g-button-large g-button-gray-large nd-button-multi" title="调用官方接口生成链接"><span class="g-button-right"><em class="icon icon-download"></em> 官方链接</span></a>';
        body +=
          '<a class="g-button g-button-large g-button-gray-large nd-button-disk" style="margin-left:50px;" title="转存文件然后生成文件直链"><span class="g-button-right"><em class="icon icon-save-disk"></em> 转存直链</span></a>';
        body += "</div>";

        if (fileStat.dir_num) {
          body +=
            '<div style="margin-top: 40px; padding-top: 10px; margin-bottom: -20px; border-top: 1px solid #D0DFE7;"><p class="g-center">选择 [多文件] 会过滤当前选中的 <span style="color: red">' +
            fileStat.dir_num +
            "</span> 个文件夹</p>";

          var index = 1;
          fileList.forEach(function (item) {
            if (item.isdir) {
              body +=
                '<p title="' +
                item.path +
                '" style="color: blue;">[' +
                index +
                "] " +
                item.server_filename +
                "</p>";
              index++;
            }
          });
          body += "</div>";
        }

        body += "</div>";
        var footer = obj.renderFooterAppId();
        obj.showDialog(title, body, footer);
      };

      obj.showDownloadSelect = function (fileList, fileStat) {
        var title = "链接类型";
        var body =
          '<div style="padding: 40px 20px; max-height: 300px; overflow-y: auto;">';

        body += '<div class="normalBtnBox g-center">';
        if (obj.isHomePage()) {
          body +=
            '<a class="g-button g-button-large g-button-gray-large nd-button-disk" title="合并官方链接和文件直链"><span class="g-button-right"><em class="icon icon-save-disk"></em> 多文件</span></a>';
        } else {
          body +=
            '<a class="g-button g-button-large g-button-gray-large nd-button-multi"><span class="g-button-right" title="调用官方接口生成文件链接"><em class="icon icon-download"></em> 官方多文件</span></a>';
          body +=
            '<a class="g-button g-button-large g-button-gray-large nd-button-disk" style="margin-left:50px;" title="转存文件然后生成文件直链"><span class="g-button-right"><em class="icon icon-save-disk"></em> 转存多文件</span></a>';
        }
        body +=
          '<a class="g-button g-button-large g-button-gray-large nd-button-pack" style="margin-left:50px;" title="调用官方接口生成压缩包链接"><span class="g-button-right"><em class="icon icon-poly"></em> 压缩包</span></a>';
        body += "</div>";

        if (fileStat.dir_num) {
          body +=
            '<div style="margin-top: 40px; padding-top: 10px; margin-bottom: -20px; border-top: 1px solid #D0DFE7;"><p class="g-center">选择 [多文件] 会过滤当前选中的 <span style="color: red">' +
            fileStat.dir_num +
            "</span> 个文件夹</p>";
          var index = 1;
          fileList.forEach(function (item) {
            if (item.isdir) {
              body +=
                '<p title="' +
                item.path +
                '" style="color: blue;">[' +
                index +
                "] " +
                item.server_filename +
                "</p>";
              index++;
            }
          });
          body += "</div>";
        }

        body += "</div>";
        var footer = obj.renderFooterAppId();
        obj.showDialog(title, body, footer);
      };

      obj.showAppIdChange = function () {
        var title = "应用ID";
        var body =
          '<div style="padding: 60px 20px; max-height: 300px; overflow-y: auto;"><div class="g-center" style="margin-bottom: 10px;">当前应用ID：<input type="text" class="nd-input-app-id" style="border: 1px solid #f2f2f2; padding: 4px 5px;" value="' +
          obj.getAppId() +
          '"></div><div class="g-center"><p>用于构造个人网盘文件的下载直链，更多应用ID请查看<a target="_blank" href="http://go.newday.me/s/pan-script"> 脚本主页 </a></p></div></div>';
        var footer = "";
        obj.showDialog(title, body, footer);
      };

      obj.showDialogUnKnownResponse = function (response) {
        var title = "未知结果";
        var body =
          '<div style="padding: 20px 20px; max-height: 300px; overflow-y: auto;"><pre style="white-space: pre-wrap; word-wrap: break-word; word-break: break-all;">' +
          JSON.stringify(response, null, 4) +
          "</pre></div>";
        var footer = obj.renderFooterAppId();
        obj.showDialog(title, body, footer);
      };

      obj.renderFooterAppId = function () {
        return '<p>其他页面：<a class="nd-open-page-temp" href="javascript:;">临时文件</a></p>';
      };

      obj.showDialog = function (title, body, footer) {
        var dialog = obj
          .require("system-core:system/uiService/dialog/dialog.js")
          .verify({
            title: title,
            img: "img",
            vcode: "vcode",
          });

        // 内容
        $(dialog.$dialog).find(".dialog-body").safeHtml(body);

        // 底部
        $(dialog.$dialog).find(".dialog-footer").safeHtml(footer);

        dialog.show();
      };

      obj.showTipSuccess = function (msg, hasClose, autoClose) {
        obj.showTip("success", msg, hasClose, autoClose);
      };

      obj.showTipError = function (msg, hasClose, autoClose) {
        obj.showTip("failure", msg, hasClose, autoClose);
      };

      obj.showTipLoading = function (msg, hasClose, autoClose) {
        obj.showTip("loading", msg, hasClose, autoClose);
      };

      obj.showTip = function (mode, msg, hasClose, autoClose) {
        var option = {
          mode: mode,
          msg: msg,
        };

        // 关闭按钮
        if (typeof hasClose != "undefined") {
          option.hasClose = hasClose;
        }

        // 自动关闭
        if (typeof autoClose != "undefined") {
          option.autoClose = autoClose;
        }

        obj.require("system-core:system/uiService/tip/tip.js").show(option);
      };

      obj.hideTip = function () {
        obj.require("system-core:system/uiService/tip/tip.js").hide({
          hideTipsAnimationFlag: 1,
        });
      };

      obj.isHomePage = function () {
        var url = router.getUrl();
        if (url.indexOf(".baidu.com/disk") > 0) {
          return true;
        } else {
          return false;
        }
      };

      obj.isTimelinePage = function () {
        var url = router.getUrl();
        if (url.indexOf(".baidu.com/disk/timeline") > 0) {
          return true;
        } else {
          return false;
        }
      };

      obj.isSharePageMulti = function () {
        var yunData = obj.getYunData();
        if (yunData.SHAREPAGETYPE == "single_file_page") {
          return false;
        } else {
          return true;
        }
      };

      obj.getSelectedFileList = function () {
        if (obj.isHomePage()) {
          return obj.getSelectedFileListHome();
        } else {
          return obj.getSelectedFileListShare();
        }
      };

      obj.getSelectedFileListHome = function () {
        if (obj.isTimelinePage()) {
          return obj.require("pan-timeline:widget/store/index.js").getters
            .getChoosedItemArr;
        } else {
          return obj
            .require("system-core:context/context.js")
            .instanceForSystem.list.getSelected();
        }
      };

      obj.getSelectedFileListShare = function () {
        return obj
          .require("system-core:context/context.js")
          .instanceForSystem.list.getSelected();
      };

      obj.getFileListStat = function (fileList) {
        var fileStat = {
          file_num: 0,
          dir_num: 0,
        };
        fileList.forEach(function (item) {
          if (item.isdir == 0) {
            fileStat.file_num++;
          } else {
            fileStat.dir_num++;
          }
        });
        return fileStat;
      };

      obj.filterFileListDir = function (fileList) {
        var fileListFilter = [];
        fileList.forEach(function (item) {
          if (item.isdir == 0) {
            fileListFilter.push(item);
          }
        });
        return fileListFilter;
      };

      obj.parseFidList = function (fileList) {
        var fidList = [];
        fileList.forEach(function (item) {
          fidList.push(item.fs_id);
        });
        return fidList;
      };

      obj.getDownloadShare = function (fileList, pack, callback) {
        obj.showTipLoading("生成链接中，请稍等...");
        obj.initWidgetContext("function-widget-1:download/util/context.js");
        obj.async(
          "function-widget-1:download/service/dlinkService.js",
          function (dl) {
            var yunData = obj.getYunData();
            var data = {
              list: fileList,
              share_uk: yunData.SHARE_UK,
              share_id: yunData.SHARE_ID,
              sign: yunData.SIGN,
              timestamp: yunData.TIMESTAMP,
              type: pack ? "batch" : "nolimit",
            };
            dl.getDlinkShare(data, callback);
          }
        );
      };

      obj.getDownloadHome = function (fileList, pack, callback) {
        obj.showTipLoading("生成链接中，请稍等...");
        obj.initWidgetContext("function-widget-1:download/util/context.js");
        obj.async(
          "function-widget-1:download/service/dlinkService.js",
          function (dl) {
            var fidList = obj.parseFidList(fileList);
            var type = pack ? "batch" : "nolimit";
            dl.getDlinkPan(JSON.stringify(fidList), type, callback);
          }
        );
      };

      obj.applyTransferFile = function (fileList, path, callback) {
        obj.listDir(path, function (response) {
          if (response && response.errno == 0) {
            obj.transferFile(fileList, path, callback);
          } else if (response) {
            obj.createDir(path, function (response) {
              if (response && response.errno == 0) {
                obj.transferFile(fileList, response.path, callback);
              } else {
                callback && callback("");
              }
            });
          } else {
            callback && callback("");
          }
        });
      };

      obj.transferFile = function (fileList, path, callback) {
        var yunData = obj.getYunData();
        var fidList = obj.parseFidList(fileList);
        var url =
          "/share/transfer?ondup=newcopy&async=1&shareid=" +
          yunData.SHARE_ID +
          "&from=" +
          yunData.SHARE_UK;
        var data = {
          fsidlist: "[" + fidList.join(",") + "]",
          path: path,
        };
        obj.ajax({
          type: "post",
          url: url,
          data: data,
          dataType: "json",
          timeout: 1e5,
          error: function () {
            callback && callback("");
          },
          success: function (response) {
            callback && callback(response);
          },
        });
      };

      obj.listDir = function (path, callback) {
        var url = "/api/list";
        obj.ajax({
          type: "get",
          url: url,
          data: {
            order: "name",
            desc: 0,
            showempty: 0,
            web: 1,
            page: 1,
            num: 10,
            dir: path,
          },
          dataType: "json",
          timeout: 1e5,
          error: function () {
            callback && callback("");
          },
          success: function (response) {
            callback && callback(response);
          },
        });
      };

      obj.createDir = function (path, callback) {
        var url = "/api/create?a=commit";
        obj.ajax({
          type: "post",
          url: url,
          data: {
            path: path,
            isdir: 1,
            block_list: "[]",
          },
          dataType: "json",
          timeout: 1e5,
          error: function () {
            callback && callback("");
          },
          success: function (response) {
            callback && callback(response);
          },
        });
      };

      obj.getShareId = function () {
        var match;

        match = location.href.match(/share\/init\?surl=([a-z0-9-_]+)/i);
        if (match) {
          return match[1];
        }

        match = location.pathname.match(/\/s\/1([a-z0-9-_]+)/i);
        if (match) {
          return match[1];
        }

        return null;
      };

      obj.isPwdShareOpen = function () {
        return option.isOptionActive(option.constant.baidu_share_status);
      };

      obj.getYunData = function () {
        if (!obj.yun_data) {
          obj.yun_data = unsafeWindow.yunData;
        }
        return obj.yun_data;
      };

      obj.getTempPath = function () {
        var tempPath = config.getConfig("temp_path");
        if (tempPath) {
          return tempPath;
        } else {
          return obj.temp_path;
        }
      };

      obj.setTempPath = function (tempPath) {
        config.setConfig("temp_path", tempPath);
      };

      obj.getAppId = function () {
        var appId = config.getConfig("app_id");
        if (appId) {
          return appId;
        } else {
          return obj.app_id;
        }
      };

      obj.initWidgetContext = function (name) {
        try {
          obj.async(name, function (widget) {
            widget.setContext(obj.getSystemContext());
          });
        } catch (err) {}
      };

      obj.ajax = function (option) {
        obj.getJquery().ajax(option);
      };

      obj.getSystemContext = function () {
        return obj.require("system-core:context/context.js").instanceForSystem;
      };

      obj.getJquery = function () {
        return obj.require("base:widget/libs/jquerypacket.js");
      };

      obj.require = function (name) {
        return unsafeWindow.require(name);
      };

      obj.async = function (name, callback) {
        unsafeWindow.require.async(name, callback);
      };

      return obj;
    }
  );

  container.define("app_manage", ["meta", "unsafeWindow"], function (
    meta,
    unsafeWindow
  ) {
    var obj = {};

    obj.run = function () {
      if (meta.existMeta("manage")) {
        unsafeWindow.OnePan = container;
        return true;
      }
    };

    return obj;
  });

  container.define("app", ["appRunner"], function (appRunner) {
    var obj = {};

    obj.run = function () {
      appRunner.run([
        {
          name: "app_baidu",
          matchs: ["baidu.com"],
        },
      ]);
    };

    return obj;
  });

  /** lib **/
  container.define("$", [], function () {
    return window.$;
  });
  container.define("Snap", [], function () {
    if (typeof Snap != "undefined") {
      return Snap;
    } else {
      return window.Snap;
    }
  });
  container.define("DOMPurify", [], function () {
    if (typeof DOMPurify != "undefined") {
      return DOMPurify;
    } else {
      return window.DOMPurify;
    }
  });

  container.use(["gm", "core", "app"], function (gm, core, app) {
    gm.ready(function () {
      core.ready(app.run);
    });
  });
})();
