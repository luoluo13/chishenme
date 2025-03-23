$(function () {
  var run = 0, // 用于判断是否在运行状态中
    heading = $("h1"), // 顶部标题元素
    timer;

  $("#start").click(function () {
    // 优先从外部 foodList 获取数据，否则使用 HTML 的 <textarea> 中的数据作为备用
    var list = typeof foodList !== "undefined"
      ? foodList
      : $("#list")
          .val()
          .replace(/ +/g, " ")
          .replace(/^ | $/g, "")
          .split(" ");

    // 检查列表是否为空
    if (!list.length) {
      alert("食品列表为空，请确认！");
      return;
    }

    if (!run) {
      // 开始随机选择
      heading.html(heading.html().replace("吃这个！", "吃什么？"));
      $(this).val("停止");
      timer = setInterval(function () {
        var r = Math.ceil(Math.random() * list.length),
          food = list[r - 1];
        $("#what").html(food); // 显示随机食物
        
        // 随机动画效果
        var rTop = Math.ceil(Math.random() * $(document).height()),
          rLeft = Math.ceil(Math.random() * ($(document).width() - 50)),
          rSize = Math.ceil(Math.random() * (37 - 14) + 14);
        $("<span class='temp'></span>")
          .html(food)
          .hide()
          .css({
            top: rTop,
            left: rLeft,
            color: "rgba(0,0,0,." + Math.random() + ")",
            fontSize: rSize + "px",
          })
          .appendTo("body")
          .fadeIn("slow", function () {
            $(this).fadeOut("slow", function () {
              $(this).remove();
            });
          });
      }, 50);
      run = 1; // 设置运行状态
    } else {
      // 停止随机选择
      heading.html(heading.html().replace("吃什么？", "吃这个！"));
      $(this).val("不行，换一个");
      clearInterval(timer);
      run = 0; // 停止运行状态
    }
  });

  // 支持通过回车键触发
  document.onkeydown = function enter(e) {
    var e = e || event;
    if (e.keyCode == 13) $("#start").trigger("click");
  };
});