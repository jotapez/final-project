/*global $, alert*/
(function () {
    'use strict';

    /* Write your code here */

    function bringFormToFront() {
        $('.container form').css('zIndex', 1000);
    }

    function sendFormToBack() {
        $('.container form').css('zIndex', 0);
    }

    $('#contact textarea').click(bringFormToFront);

    $('#contact textarea').blur(sendFormToBack);
    
    
    $('#contact input[type="submit"]').focus(bringFormToFront);
    $('#contact input[type="submit"]').blur(sendFormToBack);
    
    $('#contact').submit(function () {
        alert('Form send thanks');
        sendFormToBack();
    });
    
    $('#contact input[type="submit"]').blur(sendFormToBack);
        

    /* Finish writing your code here */
}());