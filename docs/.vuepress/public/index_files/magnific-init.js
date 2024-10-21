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

// initialization of magnific popup for all slider instances
jQuery(document).ready(function(){
	jQuery('.djslider-loader').each(function() {
		jQuery(this).magnificPopup({
	        delegate: '.image-link', // the selector for gallery item
	        type: 'image',
	        mainClass: 'mfp-img-mobile',
	        gallery: {
	          enabled: true
	        },
			image: {
				verticalFit: true,
				titleSrc: 'data-title'
			}
	    });
	});
});

}
/*
     FILE ARCHIVED ON 01:00:13 Jun 28, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:40:06 Oct 21, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.463
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 14.843
  LoadShardBlock: 111.803 (3)
  PetaboxLoader3.datanode: 125.483 (5)
  PetaboxLoader3.resolve: 142.592 (2)
  load_resource: 164.136
  loaddict: 16.136
*/