$(document).ready(function () {

    // Fetch API key from Flask endpoint
    $.ajax({
        url: '/api/key',
        type: 'GET',
        success: function (response) {
            const apiKey = response.api_key;
            // Use apiKey in your JavaScript code
            fetchNewsFromAPI(apiKey, 15); // Example usage
        },
        error: function (error) {
            console.error('Error fetching API key:', error);
        }
    });

    // Function to fetch news articles using the API key
    function fetchNewsFromAPI(apiKey, limit) {
        const query = 'real estate market price trends';
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&pageSize=${limit}`;

        // Fetch news articles using the API key
        $.ajax({
            url: apiUrl,
            type: 'GET',
            success: function (response) {
                if (response.status === 'ok') {
                    const articles = response.articles;
                    displayNews(articles);
                } else {
                    console.error('Error fetching news:', response);
                }
            },
            error: function (error) {
                console.error('Error fetching news:', error);
            }
        });
    }

    // Function to display news articles
    function displayNews(articles) {
        // Display news articles on the webpage
    }




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



    function displayNews(articles) {
        var newsContainer = $('#news-container');
        newsContainer.empty(); // Clear existing content

        var limit = 30;
        for (var i = 0; i < limit && i < articles.length; i++) {
            var article = articles[i];
            var articleHTML = `
                <div class="article">
                    <img src="${article.urlToImage}" alt="Article Image">
                    <div class="article-details">
                        <h2>${article.title}</h2>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank">Read More</a>
                    </div>
                </div>
            `;
            newsContainer.append(articleHTML);
        }

        if (articles.length > limit) {
            $('#load-more-btn').removeClass('hidden');
        } else {
            $('#load-more-btn').addClass('hidden');
        }
    }

    $('#load-more-btn').click(function () {
        var currentLimit = $('#news-container .article').length;
        var newLimit = currentLimit + 10;
        fetchNewsFromAPI(newLimit);
    });


    fetchNewsFromAPI(15);

    // JavaScript to limit the number of words in paragraph content
    document.addEventListener("DOMContentLoaded", function () {
        // Function to limit the number of words in a paragraph
        function limitParagraphWords(paragraph) {
            var words = paragraph.textContent.split(" ");
            var maxWords = 30; // Maximum number of words allowed
            if (words.length > maxWords) {
                paragraph.textContent = words.slice(0, maxWords).join(" ") + "...";
            }
        }

        // Function to limit words in all paragraphs within the news section
        function limitWordsInParagraphs() {
            var paragraphs = document.querySelectorAll(".news-section .article-details p");
            paragraphs.forEach(function (paragraph) {
                limitParagraphWords(paragraph);
            });
        }

        // Call the function once initially
        limitWordsInParagraphs();

    });
    // JavaScript to limit the number of words in specific paragraphs
    document.addEventListener("DOMContentLoaded", function () {
        var paragraphs = document.querySelectorAll(".article-details p");

        paragraphs.forEach(function (paragraph) {
            var text = paragraph.textContent.trim();
            var words = text.split(/\s+/); // Split text by whitespace
            var maxWords = 10; // Maximum number of words allowed
            if (words.length > maxWords) {
                paragraph.textContent = words.slice(0, maxWords).join(" ") + "...";
            }
        });
    });


});
