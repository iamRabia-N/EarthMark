$(document).ready(function () {

    // Function to toggle sidebar visibility
    function toggleSidebar(sidebarId) {
        $(sidebarId).toggleClass('active');
        updateSidebarIcon();
    }

    // Function to update sidebar toggle icon
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

    // Event handler for clicking hamburger icon
    $(document).on('click', '.hamburger-icon', function (event) {
        event.stopPropagation();
        toggleSidebar('#sidebar');
    });

    // Event handler for clicking close sidebar icon
    $(document).on('click', '.close-sidebar-icon', function (event) {
        event.stopPropagation();
        $('#sidebar').removeClass('active');
        updateSidebarIcon();
    });

    // Close sidebar when clicking outside of it
    $(document).on('click', function (event) {
        const $sidebar = $('#sidebar');
        if (!$(event.target).closest('#sidebar').length) {
            $sidebar.removeClass('active');
            updateSidebarIcon();
        }
    });

});