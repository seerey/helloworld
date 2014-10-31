$(document).ready(function () {
  $('input.form-control').on('input propertychange paste', function() {
    var dataNum = $(this).attr("data-num");
    var dataType = $(this).attr("data-type");
    var text = $(this).val();
    refreshTotals(dataNum, dataType, text);
  });

  function refreshTotals(dataNum, dataType, text) {
    var num = Number($("#collapse" + dataNum + dataType + "Prev").text());
    if ($.isNumeric(num)) {
      var num = num + Number(text);
    }
    $("#collapse" + dataNum + dataType + "Summary").text(num);
    $("#collapse" + dataNum + dataType + "Inline").text(num);
  }

  $('button.btn').on("click", function() {
    var dataNum = $(this).attr("data-num");
    var dataType = $(this).attr("data-type");
    var dataAction = $(this).attr("data-action");
    var num = Number($("#collapse" + dataNum + dataType + "Input").val());
    var newNum = 0;

    if (dataAction === "-" && num > 0) {
      newNum = num - 1;
    }

    if (dataAction === "+" && num < 999) {
      newNum = num + 1
    }
    $("#collapse" + dataNum + dataType + "Input").val(newNum);

    refreshTotals(dataNum, dataType, newNum)
  });


});
