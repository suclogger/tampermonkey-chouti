// ==UserScript==
// @name         chouti
// @namespace    http://suclogger.github.io/
// @version      0.1
// @description  from qiu xian tu chui
// @author       Suclogger
// @match        http://dig.chouti.com/*
// @require http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==
$(window).bind("load", function() { 
    $(".news-content").each(function(){
        if($(this).find(".digg-a").find("b").text()>100){
           $(this).find(".digg-a").find("b").css("color","red") ;
        } else if ( $(this).find(".discus-a").find("b").text() > 100){
            $(this).find(".discus-a").find("b").css("color","red") ;
        } else {
            $(this).parent().remove();
        }
    });
});
