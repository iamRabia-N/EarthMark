
$(document).ready(function () {
    function toggleSidebar(sidebarId) {
        $(sidebarId).toggleClass('active');
        updateSidebarIcon();
    }

    function updateSidebarIcon() {
        const $hamburgerIcon = $('.hamburger-icon');
        const $crossIcon = $('.cross-icon');
        if ($('#sidebar').hasClass('active')) {
            $hamburgerIcon.hide();
            $crossIcon.show();
        } else {
            $hamburgerIcon.show();
            $crossIcon.hide();
        }
    }

    $(document).on('click', '.hamburger-icon', function (event) {
        event.stopPropagation();
        toggleSidebar('#sidebar');
    });

    $(document).on('click', '.close-sidebar-icon', function (event) {
        event.stopPropagation(); 
        $('#sidebar').removeClass('active');
        updateSidebarIcon();
    });


    $(document).on('click', function (event) {
        const $sidebar = $('#sidebar');
        if (!$(event.target).closest('#sidebar').length) {
            $sidebar.removeClass('active');
            updateSidebarIcon();
        }
    });

    function scrollToSection(sectionId) {
        $('html, body').animate({
            scrollTop: $('#' + sectionId).offset().top
        }, 1000);
    }


    function scrollToSection(sectionId) {
        $('html, body').animate({
            scrollTop: $('#' + sectionId).offset().top
        }, 1000);
    }

    $(document).on('click', '.box1', function () {
        scrollToSection('section1');
    });

    $(document).on('click', '.box2', function () {
        scrollToSection('section2');
    });

    $(document).on('click', '.box3', function () {
        scrollToSection('section3');
    });

    $(document).on('click', '.box4', function () {
        scrollToSection('section4');
    });

});