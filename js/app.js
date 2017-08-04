 document.addEventListener("DOMContentLoaded", function() {
    
    // issue icons – ES6 example

    const issueIcons = document.querySelectorAll('.issue__icon');

    function onUserClickIcon(event) {
        event.target.classList.toggle('active-issue-icon');
    }

    Array.from(issueIcons).forEach( e => e.addEventListener('click', onUserClickIcon) );

    
    // sidebar – jQuery example
    
    var filterItems = $('.filter-item');
    var issues = $('.issue');

    function onUserChoiceIssues(event) {
        
        event.stopPropagation()

        $(event.target).parent().addClass('active-item');
        $(event.target).parent().siblings().removeClass('active-item');

        var current = $(this).parent().data('category');

        $(issues).each(function(e) {
            if (($(this).data('category')) == current || current == 'all') {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    function onUserChoiceIssues2(event) {
    
        $(event.target).addClass('active-item');
        $(event.target).siblings().removeClass('active-item');
        
        var current = $(this).data('category');

        $(issues).each(function(e) {
            if (($(this).data('category')) == current || current == 'all') {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    $(filterItems).children('img').click(onUserChoiceIssues);
    $(filterItems).children('p').click(onUserChoiceIssues);
    $(filterItems).click(onUserChoiceIssues2);
    
});