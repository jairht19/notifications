$(document).ready(function () {
  var notification = [
    {type:"info", message:"Cargando!"},
    {type:"warning", message:"Alerta!"},
    {type:"success", message:"Completo"},
    {type:"danger", message:"Error!"}
  ];
  $("#test").click(function () {
    $("#noty").addClass('in');
    for (var i = 0; i < notification.length; i++) {
      typeNotification(notification[i]["type"],notification[i]["message"]);
    }
  });
  $("#closeNoty").click(function () {
    cleanNotification();
  });
});
function typeNotification(type,message) {
  switch (type) {
    case "info":
      $("#notyBody").append('<div class="col-md-12"><div class="alert alert-info alert-dismissible " role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="fa fa-remove"></i></button><strong><span class="label label-info"><i class="fa fa-info"></i></span></strong> '+message+'</div></div>')
      break;
    case "warning":
        $("#notyBody").append('<div class="col-md-12"><div class="alert alert-warning alert-dismissible " role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="fa fa-remove"></i></button><strong><span class="label label-warning"><i class="fa fa-info"></i></span></strong> '+message+'</div></div>')
        break;
    case "success":
        $("#notyBody").append('<div class="col-md-12"><div class="alert alert-success alert-dismissible " role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="fa fa-remove"></i></button><strong><span class="label label-success"><i class="fa fa-info"></i></span></strong> '+message+'</div></div>')
        break;
    case "danger":
        $("#notyBody").append('<div class="col-md-12"><div class="alert alert-danger alert-dismissible " role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="fa fa-remove"></i></button><strong><span class="label label-danger"><i class="fa fa-info"></i></span></strong> '+message+'</div></div>')
        break;
    default:
  }
}
function cleanNotification() {
  $("#noty").removeClass('in');
  $("#notyBody").html('');
}
