import $ from "jquery";

$(() => {
  let count = 0;

  $("#increment").on("click", () => {
    count++;
    $(".count").text(count);
  });
});