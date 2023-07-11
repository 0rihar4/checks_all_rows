function loop_checks(checks) {
  var cont = 0;
  checks.forEach((checkbox) => {
    var opt = $(checkbox).prop("checked");

    if (opt) {
      cont++;
    }
  });
  if (cont == checks.length) {
    $(".check-all").prop("checked", true);
  }
  $("strong.quantidade").html(cont);
}
$(document).ready(function () {
  $("body").on("change", ".check-all", function () {
    var opt = $(this).prop("checked");
    var checks = document.querySelectorAll(".check");
    checks.forEach((checkbox) => {
      $(checkbox).prop("checked", opt);
    });
  });
  $("body").on("change", ".check", function () {
    var opt = $(this).prop("checked");
    if (!opt) {
      $(".check-all").prop("checked", false);
    }
    var checks = document.querySelectorAll(".check");
    loop_checks(checks);
  });
});
