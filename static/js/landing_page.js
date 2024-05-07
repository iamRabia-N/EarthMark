$(document).ready(function () {
    var currentIndex = 0;
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
        setTimeout(changeColor, 2000);
    }
    changeColor();

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
});