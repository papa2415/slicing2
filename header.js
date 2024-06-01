$(".navbar-btn").click(function () {
  $(".header-list").toggleClass("active");
  $(".non_mask").toggleClass("mask");
  $(".material-symbols-outlined").toggleClass("none");
});
$(".header-link").hover(
  function () {
    $(this).append(
      $(`<span><div class="border b-lt"></div>
    <div class="border b-rt"></div>
    <div class="border b-lb"></div>
    <div class="border b-rb"></div></span>`)
    );
  },
  function () {
    $(this).find("span").last().remove();
  }
);
