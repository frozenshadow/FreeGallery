//FreeGallery version 1.0.0
//
//Copyright (c) 2014 Tom v.d. Leij <contact@leijlandia.nl>
//Licensed under the GPLv3 license
//
//This script is made for personal/commercial project but can be used by others for their projects or as inspiration.
//But before you do please, read the license.

(function ($) {

    $.fn.freegallery = function (options) {

        var settings = $.extend({
            galleryid: '#freegallery ul', // Gallery container
            controlid: '#freegallery-controls li a', // Controls container + li a
            animation_speed: 1000 // Animation speed for fade in miliseconds
        }, options);

        var currentlyAnimating = false; // Set currentlyAnimating to false (default)

        $(settings.controlid).click(function (e) {
            // Prevent going to top of page
            e.preventDefault();

            // If currentlyAnimating is true, return
            if (currentlyAnimating) {
                return;
            }

            // If currentlyAnimating false, continue
            currentlyAnimating = true;

            id = this.id;
            gallery = $(settings.galleryid);
            animspeed = settings.animation_speed;

            $(settings.controlid).removeClass("active"); // Remove all the Active classes
            $(this).addClass("active"); // Add the Active class to the clicked button

            // If the "All" button is selected, unhide all images
            if (id == 'all') {
                gallery.find(":hidden").fadeIn(animspeed).promise().done(function () {
                    currentlyAnimating = false;
                });
            } else { // If a button except "All" is selected filter the images
                gallery.children().not("." + id).fadeOut(animspeed).promise().done(function () {
                    gallery.find("." + id + ":hidden").fadeIn(animspeed).promise().done(function () {
                        currentlyAnimating = false;
                    });
                });
            }
        });
    };

}(jQuery));