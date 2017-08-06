 document.addEventListener("DOMContentLoaded", function() {
    
    // issue icons – ES6 example

    const issueIcons = document.querySelectorAll('.issue__iconContainer');

    function onUserClickIcon(event) {
        this.firstElementChild.classList.toggle('active-issue-icon');
    }

    Array.from(issueIcons).forEach( e => e.addEventListener('click', onUserClickIcon) );

    
    // sidebar – jQuery example
    
    var filterItems = $('.sideBar__menu__item');
    var issues = $('.issue');
    var issuesGroup = $('.issuesGroup')

     $(filterItems).click(function(event){
        
        $(this).addClass('is-active');
        $(this).siblings().removeClass('is-active');
        
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

