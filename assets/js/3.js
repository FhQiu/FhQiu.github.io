    function testApp(url) {
      var timeout, t = 1000,
        hasApp = true;
      setTimeout(function () {
        if (!hasApp) {
          //没有安装微信
          var r = confirm("您没有安装微信，请先安装微信!");
          if (r == true) {
            location.href = "http://weixin.qq.com/"
          }
        } else {
          //安装微信
        }
        document.body.removeChild(ifr);
      }, 2000)

      var t1 = Date.now();
      var ifr = document.createElement("iframe");
      ifr.setAttribute('src', url);
      ifr.setAttribute('style', 'display:none');
      document.body.appendChild(ifr);
      timeout = setTimeout(function () {
        var t2 = Date.now();
        if (!t1 || t2 - t1 < t + 100) {
          hasApp = false;
        }
      }, t);
    }