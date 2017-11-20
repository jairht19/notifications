$(document).ready(function () {
  var notification = [
    {type:"info", message:"Cargando!"},
    {type:"warning", message:"Alerta!"},
    {type:"success", message:"Completo"},
    {type:"error", message:"Error!"}
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
  $("#toastTest").click(function () {
    toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      rtl: false,
      positionClass: "toast-bottom-right",
      preventDuplicates: false,
      onclick: null,
      showDuration: 300,
      hideDuration: 1000,
      timeOut: 5000,
      extendedTimeOut: 1000,
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut"
    };
    for (var i = 0; i < notification.length; i++) {
      typeNotificationToast(notification[i]["type"],notification[i]["message"]);
    }
  });
});
function typeNotificationToast(type,message) {
  switch (type) {
    case "info":
      toastr.info(message);
      break;
    case "warning":
        toastr.warning(message);
        break;
    case "success":
        toastr.success(message);
        break;
    case "error":
        toastr.error(message);
        break;
    default:
  }
}
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
