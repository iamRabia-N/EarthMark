$(document).ready(function () {
    var currentIndex = 0;

    // Function to cycle through a predefined set of colors for website's name
    function changeColor() {
        var colors = [
            'rgba(173, 216, 230, 1)',
            'rgba(240, 128, 128, 1)',
            'rgba(152, 251, 152, 1)',
            'rgba(255, 182, 193, 1)',
            'rgba(135, 206, 250, 1)'
        ];
        var nextIndex = (currentIndex + 1) % colors.length;
        var gradient = 'linear-gradient(to right, ' + colors.join(', ') + ')';

        // Apply gradient background and animate text color change
        $('#website-name').css({
            background: gradient,
            WebkitBackgroundClip: 'text',
            color: 'transparent'
        }).animate({ color: 'rgba(255, 255, 255, 1)' }, 2000);
        $('#website-name-sidebar').css({
            background: gradient,
            WebkitBackgroundClip: 'text',
            color: 'transparent'
        }).animate({ color: 'rgba(255, 255, 255, 1)' }, 2000);
        currentIndex = nextIndex;

        // Repeat color change after 2 seconds
        setTimeout(changeColor, 2000);
    }
    changeColor();


    function toggleSidebar(sidebarId) {
        $(sidebarId).toggleClass('active');
        updateSidebarIcon();
    }

    // Function to update hamburger and close icons based on sidebar state
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

    // Handle click on hamburger icon to toggle sidebar visibility
    $(document).on('click', '.hamburger-icon', function (event) {
        event.stopPropagation();
        toggleSidebar('#sidebar');
    });

    // Handle click on close sidebar icon to hide sidebar
    $(document).on('click', '.close-sidebar-icon', function (event) {
        event.stopPropagation();
        $('#sidebar').removeClass('active');
        updateSidebarIcon();
    });

    // Close sidebar if clicked outside of it
    $(document).on('click', function (event) {
        const $sidebar = $('#sidebar');
        if (!$(event.target).closest('#sidebar').length) {
            $sidebar.removeClass('active');
            updateSidebarIcon();
        }
    });
});