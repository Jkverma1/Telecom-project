
$(".button").first().addClass("active");

$(".button").click(function () {
  var $this = $(this);
  ($siblings = $this.parent().children()), (position = $siblings.index($this));
  console.log(position);
  $(".content section").removeClass("active").eq(position).addClass("active");

  $siblings.removeClass("active");
  $this.addClass("active");
});

// + "task-listing-vertical-menu"
$(".vertical-dot-menu").click(function () {
  if($(this).find(".task-listing-vertical-menu").hasClass( "active-vertical-menu" )){
    $(this).find(".task-listing-vertical-menu").removeClass("active-vertical-menu");
  }
  else{
    $(this).find(".task-listing-vertical-menu").addClass("active-vertical-menu");
  }
});
