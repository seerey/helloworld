$(document).ready(function () {

  $('input').on('input propertychange paste', function() {
    var dataNum = $(this).attr("data-num");
    var dataType = $(this).attr("data-type");
    var text = $(this).val();
    if ($(this).attr("id") === "collapse" + dataNum + dataType + "Input") {
      $("#collapse" + dataNum + dataType + "Input2").val(text);
    }
    else {
      $("#collapse" + dataNum + dataType + "Input").val(text);
    }

    refreshTotals(dataNum, dataType, text);

    event.stopPropagation();
  });


  $('button.btn').on("click", function(event) {
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
    $("#collapse" + dataNum + dataType + "Input2").val(newNum);

    refreshTotals(dataNum, dataType, newNum)
    event.stopPropagation();
  });


  function refreshTotals(dataNum, dataType, text) {
    var num = Number($("#collapse" + dataNum + dataType + "Prev").text());
    if ($.isNumeric(num)) {
      var num = num + Number(text);
    }
    $("#collapse" + dataNum + dataType + "Summary").text(num);
    $("#collapse" + dataNum + dataType + "Inline").text(num);
    $("#collapse" + dataNum + dataType + "Inline2").text(num);
  }


});
