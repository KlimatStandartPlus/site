var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  //let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function($)
{
	$(document).ready(function()
	{
		//$('*[rel=tooltip]').tooltip()
		// Turn radios into btn-group
		$('.radio.btn-group label').addClass('btn');
		$(".btn-group label:not(.active)").click(function()
		{
			var label = $(this);
			var input = $('#' + label.attr('for'));

			if (!input.prop('checked')) {
				label.closest('.btn-group').find("label").removeClass('active btn-success btn-danger btn-primary');
				if (input.val() == '') {
					label.addClass('active btn-primary');
				} else if (input.val() == 0) {
					label.addClass('active btn-danger');
				} else {
					label.addClass('active btn-success');
				}
				input.prop('checked', true);
			}
		});
    $(window).resize(function() {
        var windowWidth = $(window).width();
        resizeIMG();
    });
    $( window ).resize();  
    function resizeIMG(){
      $(".dj-image").load(function(){
        if($(".dj-image").length){
          $(".dj-image").each(function(i){
            var size = realImgSize($(this));
            if(size.width > size.height){
              $(this).css("width", "auto");
              $(this).css("height", "100%");
              $(this).css("width", "100%");
              /*width: auto;
                height: 100%;*/
            }else{
              $(this).css("width", "100%");
              $(this).css("height", "auto");
              var padding = size.width/size.height*100;
              //$(this).css("padding-top", padding + "%");
              /*width: 100%;
                height: auto;*/
            }
          });
        }
      });
    }
    resizeIMG();
    var to_pos = 0;
    $('.header .menu li a').click(function(e){
      e.preventDefault();
      var this_step = $(this).attr("class");
      $('.header .menu li a').parent().removeClass('active');
      $(this).parent().addClass('active');
    
      if(this_step != ''){
        to_pos = Number($("#" + this_step).position().top - $('.header .menu').height());
        $('html,body').animate({scrollTop: to_pos}, 1000);
      }
      return false;
    });
    
    $("#service .items .row>div>a .img").after("<div class='img-after'></div>");
    $("#service .items .row>div>a .img-hover").after("<div class='img-after-hover'></div>");
    
    $("#our-work .items .item .img").after("<div class='img-after'></div>");
    
    function resize(){
      var height = $(window).height();
      var height = height - $(".header").height();
      /**/
      if($(window).width()>1400 && height > 550){
        $("#service .items").css("height", 0.5*height + "px");
        $("#service .service-hero").css("height", 0.5*height + "px");
        $("#production .items").css("height", 0.5*height + "px");
        $("#production .production-hero").css("height", 0.5*height + "px");
      }else{
        $("#service .items").css("height", "auto");
        $("#service .service-hero").css("height", "auto");
        $("#production .items").css("height", "auto");
        $("#production .production-hero").css("height", "auto");
      }
    }
    $("#production .items .row div").css("opacity", "0");
    $("#service .items .row div").addClass("animate").css("opacity", "0");
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if($("#production").offset().top-$(window).height() <= scroll){
          $("#production .items .row div").each(function(index) {
            $(this).delay(500*index).animate({opacity: 1}, 1000);
          });
        }else{
          $("#production .items .row div").css("opacity", "0");
        }
        if($("#service").offset().top-$(window).height() <= scroll){
          $("#service .items .row div").each(function(index) {
            $(this).delay(250*index).animate({opacity: 1}, 10);
          });
        }else{
          $("#service .items .row div").css("opacity", "0");
        }
    });
    
    resize();
    $(window).resize(resize);
    map();
    var address = "???. ³???????? ?????????, 12, ?. ?????-?????????, ??????";
    function map(){
        var markers = [];
        var center = new google.maps.LatLng(48.927827258202406, 24.72802127520646);
        if(address != ""){
          geocoder = new google.maps.Geocoder();
          geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              //center = results[0].geometry.location;
            }
          });
        }
        /*console.log(center);*/
        function initialize() {
            var mapEl = document.getElementById("map_canvas");
            var myMarker = 0;
            if(!mapEl) return;
            var mapOptions = {
                center: center,
                zoom: 17,
                disableDefaultUI: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }; 
    
    
    
            var map = new google.maps.Map(mapEl,
                mapOptions);
    
              var imgPath = '/images/homepage/map-ico.png';
    
              markers.push(new google.maps.Marker({
                  position: center,
                  map: map,
                  icon: imgPath,
                  flat: true,
                  optimized: false,
                  title: "",
                  visible: true
              }));
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    }
	})
})(jQuery);

function realImgSize(image){
  //var screenImage = $("#image");
  var screenImage = image;
  // Create new offscreen image to test
  var theImage = new Image();
  theImage.src = screenImage.attr("src");
  
  // Get accurate measurements from that.
  var imageWidth = theImage.width;
  var imageHeight = theImage.height;
  return { 'width': imageWidth, 'height': imageHeight }
}

}
/*
     FILE ARCHIVED ON 01:00:03 Jun 28, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:40:06 Oct 21, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.492
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.014
  esindex: 0.01
  cdx.remote: 8.726
  LoadShardBlock: 95.244 (3)
  PetaboxLoader3.datanode: 71.011 (5)
  PetaboxLoader3.resolve: 86.602 (2)
  load_resource: 122.088
  loaddict: 66.477
*/