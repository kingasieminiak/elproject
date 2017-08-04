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
    var issuesGroup = $('.issue__group')

     $(filterItems).click(function(event){
        
        $(this).addClass('active-item');
        $(this).siblings().removeClass('active-item');
        
        var current = $(this).data('category');
        
        $(issuesGroup).each( function(i, e) { $(e).show() });

        $(issues).each(function(e) {
            if (($(this).data('category')) == current || current == 'all') {
                $(this).show();
            } else {
                $(this).hide();
            }
        });  

        $(issuesGroup).each( function(i, e) {
            if ($(e).children('div.issue:visible').length == 0) {
                $(e).hide();
            } else {
                $(e).show();   
            }
        });
     });

});

