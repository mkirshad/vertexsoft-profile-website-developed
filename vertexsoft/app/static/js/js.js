jQuery(document).ready(function ($) {
//20150606 modified
var uploadFileText = 'Drop your file here or click to select file';
	$("html").niceScroll({
            cursorwidth:"6px", boxzoom:true, autohidemode:false, zindex:9999
	});

	$.stellar({
		horizontalScrolling: false,
		positionProperty: 'transform',
		verticalOffset: -350
	});

	var links = $('.navigation').find('li');
	slide = $('.slide');
	button = $('.button');
	mywindow = $(window);
	htmlbody = $('html,body');


	slide.waypoint({
		handler: function (event, direction) {
			var active_section;
			active_section = $(this);
			if (direction === "up")
				active_section = active_section.prev();
			var active_link = $('.navigation li[data-slide="' + active_section.attr("data-slide") + '"]');
			links.removeClass('active');
			active_link.addClass('active');
		},
		offset: '35%'
	});

//    mywindow.scroll(function () {
//        if (mywindow.scrollTop() == 0) {
//			$('.navigation li[data-slide="1"]').addClass('active');
//			$('.navigation li[data-slide="2"]').removeClass('active');
//			$('.navigation li[data-slide="4"]').removeClass('active');
//			$('.navigation li[data-slide="8"]').removeClass('active');
//			$('.navigation li[data-slide="10"]').removeClass('active');
//        }
//    });

	function goToByScroll(dataslide) {
		htmlbody.animate({
			scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
		}, 2000, 'easeInOutQuint');
	}



	links.click(function (e) {
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
	});

	button.click(function (e) {
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
	});

	//prettyPhoto
	$("a[rel^='prettyPhoto']").prettyPhoto({
		markup: '<div class="pp_pic_holder"> \
						<div class="ppt">&nbsp;</div> \
						<div class="pp_top"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#">next</a> \
											<a class="pp_previous" href="#">previous</a> \
										</div> \
										<div id="pp_full_res"></div>\
										<p class="pp_description"></p> \
										<div class="pp_details"> \
											{pp_social} \
											<a class="pp_close" href="#">Close</a> \
										</div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',
		social_tools: '', gallery_markup: ''});

//	var btnCloce = $('<a class="pp_close" href="#">Close</a>');
//	btnCloce.css({
//		position: "absolute",
//		top: 0,
//		right: 0
//	});
//	btnCloce.click(function(){
//		$.prettyPhoto.close();
//	});
//	$(".pp_content_container").append(btnCloce);

	//Image hover
	$(".hover_img").on('mouseover', function () {
		$(this).css('background-color', '#000');
		var info = $(this).find("img");
		info.stop().animate({opacity: 0.2}, 250);
	}
	);
	$(".hover_img").on('mouseout', function () {
		var info = $(this).find("img");
		var backInfo = $(this);
		info.stop().animate({opacity: 1}, 250, function () {
			$(backInfo).css('background-color', '#fff')
		});
	}
	);

	//Efect on labels on contact form
	$("input.label_better, textarea.label_better").label_better({
		animationTime: 500,
		easing: "bounce",
		offset: 0,
		hidePlaceholderOnFocus: true
	});

	//Contact form
	$("#email, #message").focus(function () {
		$(".notification").animate({
			opacity: 0,
			top: '30px'
		}, 500);
	});


	//Carousel
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		nav: true,
		navText: [],
		smartSpeed: 800,
		mouseDrag: true,
		transitionStyle : "backSlide"
	});
	
	owl.on('changed.owl.carousel', function () {
		$('.active .padding_slide').addClass('fadeInDown');
		setTimeout(function() {
			$('.padding_slide').removeClass('fadeInDown');
		}, 1000);
	});	


	// Drag n Drop //				
//    var dropZone = $('#dropZone');
//	var dropZoneText = $('#dropZone span');


	if (typeof(window.FileReader) == 'undefined') {
//		dropZoneText.text('Not supported by your browser!');
                uploadFileText = 'Click to select file';
		dropZoneText.text(uploadFileText);
//		dropZone.addClass('error');
	}
	
//	dropZone[0].ondragover = function () {
//		dropZone.addClass('hover');
//		return false;
//	};

//	dropZone[0].ondragleave = function () {
//		dropZone.removeClass('hover');
//		return false;
//	};
	
//	dropZone[0].ondrop = function (event) {
//		dropZone.removeClass('hover');
//		dropZone.addClass('drop');
//		var file = event.dataTransfer.files[0];
//		dropZoneText.text(file.name);
//	};
	
//	$('#uploaded_file')[0].onchange = function(){
//		var filename = this.value.replace(/.+[\\\/]/, "");
//		dropZoneText.text(filename);
//		dropZone.addClass('drop');
//    };

	$('.del_file').on('click', function (){
//20150606 modified
                $('.contact-upfile').val('');
		$('#dropZone').removeClass('drop');
		$('#dropZone span').text(uploadFileText);
	})

//20150606 modified
        if (document.images) {
                img1 = new Image();
                img2 = new Image();
                img3 = new Image();
                img4 = new Image();
                img5 = new Image();

                img1.src = "/static/images/icon_home_11.png";
                img2.src = "/static/images/icon_info_11.png";
                img3.src = "/static/images/icon_services_11.png";
                img4.src = "/static/images/icon_work_11.png";
                img5.src = "/static/images/icon_contact_11.png";
        }
//20150606 modified
    $(".contact-submit").on('click', function(){
    $('.error-log').empty();
    email = $('.contact-email').val();
    description = $('.contact-description').val();
    token = $('.contact-token').val();
    formError = false;
    $('.error-log').empty();
    $('.contact-email').removeClass("red-border");
    $('.contact-description').removeClass("red-border");
    
    if(validateEmail(email) == false || email.length ==0 ){
        $('.error-log').append('Please enter a valid email address. ');
        $('.contact-email').addClass("red-border");
        formError = true;
    }
    if(description.length ==0 ){
        $('.error-log').append('Please enter description. ');
        $('.contact-description').addClass("red-border");
        formError = true;
    }
    if(description.length >30000 ){
        $('.error-log').append('Maximum limit for description is 30K character. ');
        formError = true;
    }

    if(!formError){
        try {
            var formData = new FormData();
            formData.append("email", email);
            formData.append("description", description); 
            formData.append("token", token); 
            formData.append("is-ajax", 'yes'); 
            formData.append("upfile", $(".contact-upfile")[0].files[0]); 
            
            var request = new XMLHttpRequest();
            request.open("POST", "/contactuspost.php", true);
            request.onreadystatechange=function()
            {
                if (request.readyState==4 && request.status==200){
                    ReqResponse= JSON.parse(request.responseText);
                    $('.error-log').html(ReqResponse.msg);
                    if(ReqResponse.status == 'success'){
                        $('.contact-email').val('');
                        $('.contact-description').val('');
                        $('.del_file').trigger('click');
                    }
                }
            }
            request.send(formData);
        }catch(err){
//            alert(err.message);
            $('.frm-contactus').submit();
        }
    }
})

//    if( message != '') {
//        alert(message);
//        $('.error-log')[0].scrollIntoView();
//    }
	
});

    function validateEmail(email) {
        return true;
        if(email.length>256)
            return false;
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }
