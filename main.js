$(function () {
    $('.toggle-menu').click(function () {
        $('.exo-menu').toggleClass('display');

    });

});

jQuery(document).ready(function () {
    if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {

        var listingFooter = jQuery('<!--AboveMedia Footer Content Starts --> <!-- Back to top--> <style> .button-row2 a { padding: 0.9em; background-color: #35464c; color: #fff; text-decoration: none; border-radius: 26px; border: 1px solid #408f96; } #toTop { padding: 5px 3px; color: #fff; position: fixed; bottom: 50px; right: calc(50% - 60px); display: none; } @media only screen and (min-width: 1444px) { #toTop { display: none !important; } } </style> <div id="toTop" class="button-row2 align-center"><a href="#Top">Back to Top</a> </div> <div class="secondaryBackground"> <div class="mainBackground"> <div id="mid-footer"> <div class="footer-flexContainer"> <div class="footer-flex footer-left"> <h2>Cox Beach Realty</h2> <br /><!-- <p><strong><a href="tel:+529841568796">+52 (984) 156 8796</a></strong> Office</p>--> <p><strong><a href="tel:+18007452310">+1 (800) 745-2310</a></strong> Toll Free USA/Canada</p> <p>Tulum, Mexico</p> <div class="footer-social"> <h3>Follow Us:</h3> <a href="https://www.facebook.com/coxbeachrealty/" target="_blank"><i class="fab fa-facebook-f socials"></i></a> <a href="https://www.instagram.com/coxbeachrealty" target="_blank"><i class="fab fa-instagram socials"></i></a> </div> </div> <div class="footer-flex no-mobile"> <img src="https://mediavault.point2.com/p2a/htmltext/d002/be1a/1fa1/c2efe0208a526cefe3aa/original.png" alt=""> <p><img class="realtor" alt="AMPI - Realtor" src="https://mediavault.point2.com/p2a/htmltext/780b/9c37/8398/1848d102673dc1a9e4e0/original.png" initialwidth="220"></p> <p>Copyright Cox Beach Realty 2022. All Rights Reserved.</p> </div> <div class="footer-flex footer-right"> <h2 class="title">Useful Links</h2> <ul> <li><a href="/">Home</a></li> <li><a href="/tulum_real_estate/page_2711301.html">Tulum Real Estate</a></li> <li><a href="/playa_del_carmen_real_estate/page_2711302.html">Playa del Carmen Real Estate</a></li>      <li><a href="/puerto_aventuras_real_estate/page_2711314.html">Puerto Aventuras Real Estate</a></li> <li><a href="/akumal_real_estate/page_2711305.html">Akumal Real Estate</a></li> <li><a href="/contact_me/page_2711291.html">Contact Us</a></li> </ul> </div> <div class="footer-flex only-mobile"> <img src="https://mediavault.point2.com/p2a/htmltext/d002/be1a/1fa1/c2efe0208a526cefe3aa/original.png" alt=""> <p><img class="realtor" alt="AMPI - Realtor" src="https://mediavault.point2.com/p2a/htmltext/780b/9c37/8398/1848d102673dc1a9e4e0/original.png" initialwidth="220"></p> <p>Copyright Cox Beach Realty 2022. All Rights Reserved.</p> </div> </div> </div> </div> <div id="final-footer" class="secondaryBackground"> <a href="https://abovemedia.ca" title="Real Estate Marketing" target="_blank" rel="nofollow">Real Estate Marketing</a> by AboveMedia Canada. </div> <!--AboveMedia Footer Content Ends -->');

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
    if (url == "https://www.coxbeachrealty.com/" || url == "https://www.coxbeachrealty.com/#" || url == "https://www.coxbeachrealty.com/#Top" || url == "https://coxbeachrealty.com/" || url == "https://coxbeachrealty.com/#" || url == "https://coxbeachrealty.com/#Top") {
        headerDiv.classList.add('transparent');
    }

});

// Make home fill width
$(document).ready(function () {
    var url = location.href;
    var headerDiv = document.getElementsByClassName('row-fluid')[2];
    console.log(url)
    if (url == "https://www.coxbeachrealty.com/" || url == "https://www.coxbeachrealty.com/#" || url == "https://www.coxbeachrealty.com/#Top" || url == "https://coxbeachrealty.com/" || url == "https://coxbeachrealty.com/#" || url == "https://coxbeachrealty.com/#Top") {
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
