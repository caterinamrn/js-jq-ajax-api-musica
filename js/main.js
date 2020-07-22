function drawCD() {
  $.ajax({
    url:"https://flynn.boolean.careers/exercises/api/array/music",
    method:"GET",
    success: function(data,state){
      var success = data["success"];
      var values = data["response"];
      console.log(values);

      var template = $("#cd-template").html();
      // console.log(template);
      var compiled = Handlebars.compile(template);
      var target = $(".cds-container");


      if (success) {
        for (var i = 0; i < values.length; i++) {
          var value = values[i];
          var cdHtml = compiled(value);
          target.append(cdHtml);
          }
      }
      else {
        console.log("error");
      }

      },


    error: function (request,state,error) {
      console.log("request",request);
      console.log("state",state);
      console.log("error",error);
    }
  });

}

function init() {
  drawCD();
}

$(document).ready(init);
