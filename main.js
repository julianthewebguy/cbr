    $(function () {
        $('.toggle-menu').click(function () {
            $('.exo-menu').toggleClass('display');

        });

    });

    jQuery(document).ready(function () {
        if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {

            var listingFooter = jQuery('Insert Footer Here');

            jQuery('body').append(listingFooter);
        }
        jQuery(".row-fluid").last().addClass("footerBG");
    });

    function addCustomClasses() {
        if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
            var headerDiv = document.getElementsByClassName('maindiv')[0];
        }
        else {
            var headerDiv = document.getElementsByClassName('row-fluid')[1];
        }
        headerDiv.classList.add('headerBG');
    }
    document.ready = addCustomClasses;

    // When the user scrolls the page, execute myFunction 
    window.onscroll = function () { myFunction() };
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        // Get the header depending on whether we're on a listing page or not
        if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
            var header = document.getElementsByClassName('maindiv')[0];
            //console.log('AM');
        }
        else {
            var header = document.getElementsByClassName('headerBG')[0];
        }
        //Get the offset position of the navbar
        var sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    // Make Nav Transparent on Home
    $(document).ready(function () {
        var url = location.href;
        var headerDiv = document.getElementsByClassName('row-fluid')[1];
        console.log(url)
        if (url == "https://www.coxbeachrealty.com/" || url == "https://www.coxbeachrealty.com/#" || url == "https://www.coxbeachrealty.com/#Top") {
            headerDiv.classList.add('transparent');
        }

    });

    // Make home fill width
    $(document).ready(function () {
        var url = location.href;
        var headerDiv = document.getElementsByClassName('row-fluid')[2];
        console.log(url)
        if (url == "https://www.coxbeachrealty.com/" || url == "https://www.coxbeachrealty.com/#" || url == "https://www.coxbeachrealty.com/#Top") {
            headerDiv.classList.add('fullwidth');
        }

    });

    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
