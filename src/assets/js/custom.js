(function () {
    "use strict";
    let mainApp = {

        menuToggle: function () {

            let down = false;
            $('.btnMenu').css({'background-image': 'url("assets/img/down.png")', 'background-size': 'cover', 'background-position': 'center'});
            $('.btnMenu').click(() => {

                if (down) {

                    down = false;
                    $('.btnMenu').css({'background-image': 'url("assets/img/down.png")', 'background-size': 'cover', 'background-position': 'center'});
                } else {

                    down = true;
                    $('.btnMenu').css({'background-image': 'url("assets/img/up.png")', 'background-size': 'cover', 'background-position': 'center'});
                }
            })
        },
        parallax: function () {
            // if (window.width > 1024) {
                $('.parallax')
                .each(function () {
                    var $obj = $(this);
                    $(window).scroll(function () {
                        var offset = $obj.offset();
                        var yPos = -($(window).scrollTop() - offset.top) / $obj.data('speed');
                        var bgpos = '50% ' + yPos + 'px';
                        $obj.css('background-position', bgpos);
                    });
                });
            // }
        },
        bkg_img_slider: function () {

            let images = ['assets/img/patio_verde.JPG', 'assets/img/placas.JPG', 'assets/img/jardim.JPG', 'assets/img/informatica.jpg', 'assets/img/vivencia.JPG']
            let nextimage = 0;
            doSlideshow();

            function doSlideshow() {
                if (nextimage >= images.length) {
                    nextimage = 0;
                }
                $('.home-sec').css('background-image', 'url("' + images[nextimage++] + '")')
                    .fadeIn(1, function () {
                        setTimeout(doSlideshow, 5000);
                    });
            }
        },
        scrollAnimation_fun: function () {

            /*====================================
             ON SCROLL ANIMATION SCRIPTS
            ======================================*/

            window.scrollReveal = new scrollReveal();

        },
        scroll_fun: function () {

            /*====================================
                 EASING PLUGIN SCRIPTS
                ======================================*/
            $(function () {
                $('.move-me a')
                    .bind('click', function (event) { //just pass move-me in design and start scrolling
                        let $anchor = $(this);
                        $('html, body')
                            .stop()
                            .animate({
                                scrollTop: $($anchor.attr('href'))
                                    .offset()
                                    .top
                            }, 1000, 'easeInOutQuad');
                        event.preventDefault();
                    });
            });

        },

        top_flex_slider_fun: function () {
            /*====================================
              FLEX SLIDER SCRIPTS
             ======================================*/
            $('#main-section').flexslider({
                animation: "fade", //String: Select your animation type, "fade" or "slide"
                slideshowSpeed: 3500, //Integer: Set the speed of the slideshow cycling, in milliseconds
                animationSpeed: 1000, //Integer: Set the speed of animations, in milliseconds
                startAt: 0, //Integer: The slide that the slider should start on. Array notation (0 = first slide)
            });
        },

        custom_fun: function () {
            // SLIDER
            let slideIndex = 1;
            showDivs(slideIndex);

            $('#left').click(() => {
                plusDivs(-1)
            })

            $('#right').click(() => {
                plusDivs(1)
            })

            function plusDivs(n) {
                showDivs(slideIndex += n);
            }

            function showDivs(n) {
                let i;
                let x = document.getElementsByClassName("slide");
                if (n > x.length) {
                    slideIndex = 1
                }
                if (n < 1) {
                    slideIndex = x.length
                }
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                x[slideIndex - 1].style.display = "block";
            }
        }
    }

    $(document).ready(function () {
        mainApp.bkg_img_slider();
        mainApp.parallax();
        mainApp.menuToggle();
        mainApp.scrollAnimation_fun();
        mainApp.scroll_fun();
        mainApp.top_flex_slider_fun();
        mainApp.custom_fun();
    });
}());