
$(document).ready(function () {

    // Function to toggle sidebar visibility
    function toggleSidebar(sidebarId) {
        $(sidebarId).toggleClass('active');
        updateSidebarIcon();
    }

    // Function to update sidebar icon based on sidebar visibility
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

    // Event listener for hamburger icon click to toggle sidebar
    $(document).on('click', '.hamburger-icon', function (event) {
        event.stopPropagation();
        toggleSidebar('#sidebar');
    });

    // Event listener for close sidebar icon click to close sidebar
    $(document).on('click', '.close-sidebar-icon', function (event) {
        event.stopPropagation();
        $('#sidebar').removeClass('active');
        updateSidebarIcon();
    });

    // Event listener to close sidebar when clicking outside of it
    $(document).on('click', function (event) {
        const $sidebar = $('#sidebar');
        if (!$(event.target).closest('#sidebar').length) {
            $sidebar.removeClass('active');
            updateSidebarIcon();
        }
    });

    // Function to smoothly scroll to a sections
    function scrollToSection(sectionId) {
        $('html, body').animate({
            scrollTop: $('#' + sectionId).offset().top
        }, 1000);
    }

    // Event listeners to scroll to specific sections
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