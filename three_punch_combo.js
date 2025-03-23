// 初始化变量
let $i = 0;

// 点击“开始”按钮逻辑
$("#start").click(function () {
  $i++; // 点击计数
  if ($i >= 6) {
    $("#start").hide(); // 隐藏“开始”按钮
    $("#stop").show(); // 显示“停止”按钮
  }
});

// 点击“停止”按钮逻辑
$("#stop").click(function () {
  $(this).hide(); // 隐藏“停止”按钮
  $("#customAlert").addClass("active"); // 显示弹窗，通过添加 active 类
});

// 关闭弹窗按钮逻辑
$("#alertClose").click(function () {
  $("#customAlert").removeClass("active"); // 隐藏弹窗，通过移除 active 类
});