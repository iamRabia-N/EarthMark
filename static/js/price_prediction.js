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


    var defaultVideo = document.getElementById('vid_4');
    defaultVideo.play();

    $('.left-icon').click(function () {
        currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
        showVideo(currentVideoIndex);
    });

    $('.right-icon').click(function () {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        showVideo(currentVideoIndex);
    });

    function validateForm() {
        var isValid = true;
        $('.error-message').hide().text('');

        var area = $('#land-area').val().trim();
        if (!/^\d+(\.\d+)?$/.test(area)) {
            $('#area-error').text('Please enter a valid number for land area.').show();
            isValid = false;
        }

        var bedrooms = $('#num-bedrooms').val().trim();
        if (!/^\d+$/.test(bedrooms)) {
            $('#bedrooms-error').text('Please enter a valid number for bedrooms.').show();
            isValid = false;
        }

        var bathrooms = $('#num-bathrooms').val().trim();
        if (!/^\d+$/.test(bathrooms)) {
            $('#bathrooms-error').text('Please enter a valid number for bathrooms.').show();
            isValid = false;
        }

        var location = $('#location').val().trim();
        if (location === '') {
            $('#location-error').text('Location cannot be empty.').show();
            isValid = false;
        }

        return isValid;
    }
});