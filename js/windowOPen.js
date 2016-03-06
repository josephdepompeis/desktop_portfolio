script.
    //- Overview Window
    //- close window on click x
    $('.overviewClose').click(function(){
    $('.windowOverview').css("display", "none")
    });
    //-minimize overview click - and add folder to dock
    $('.overviewMin').click(function(){
    $('.windowOverview').css("display", "none")
    $('.minFolderOverview').css("display", "block")
    $('#dock').css("min-width", "")
    //$('.overviewDesc').css("display", "block")
    });
    //- open on overiew doubleclick and remove folder from dock
    $('#iconOverview').dblclick(function(){
    $('.windowOverview').css("display", "block")
    $('.minFolderOverview').css("display", "none")

    });

    $('#iconOverview').dblclick(function(){
    $('.windowOverview').css({
    "display": "block",
    "position": "absolute",
    "top": "12%",
    "left": "80px",

    })

    $('.minFolderOverview').css("display", "none")
    });
    //- open window from dock
    $('.minFolderOverview').click(function(){
    $('.windowOverview').css("display", "block")
    $('.minFolderOverview').css("display", "none")
    });


    //About Window
    //- close window on click x
    $('.aboutClose').click(function(){
    $('.windowAbout').css("display", "none")
    });
    //-minimize overview click - and add folder to dock
    $('.aboutMin').click(function(){
    $('.windowAbout').css("display", "none")
    $('.minFolderAbout').css("display", "block")
    $('#dock').css("min-width", "")
    //$('.aboutDesc').css("display", "block")
    });
    //- open on overiew doubleclick and remove folder from dock
    $('#iconAbout').dblclick(function(){
    $('.windowAbout').css("display", "block")
    $('.minFolderAbout').css("display", "none")

    });

script.
    $('#iconAbout').dblclick(function(){
    $('.windowAbout').css({
    "display": "block",
    "position": "absolute",
    "top": "16%",
    "left": "100px",


    })
    $('.minFolderAbout').css("display", "none")
    });
    //- open window from dock
    $('.minFolderAbout').click(function(){
    $('.windowAbout').css("display", "block")
    $('.minFolderAbout').css("display", "none")
    });

    //- Settings Window
    //- close window on click x
    $('.settingsClose').click(function(){
    $('.windowSettings').css("display", "none")
    });
    //-minimize settings click
    $('.settingsMin').click(function(){
    $('.windowSettings').css("display", "none")

    });



    //- open settings window from dock
script.
    $('#dock6').click(function(){
    $('.windowSettings').css({
    "display": "block",
    "position": "absolute",
    "top": "20%",
    "left": "120px",

    })

    });

    //Email Window
    //- close window on click x
    $('.emailClose').click(function(){
    $('.windowEmail').css("display", "none")
    });
    //-minimize email click
    $('.emailMin').click(function(){
    $('.windowEmail').css("display", "none")

    });

    // open email window from dock
    $('#dock5').click(function(){
    $('.windowEmail').css({
    "display": "block",
    "position": "absolute",
    "top": "24%",
    "left": "140px",

    })

    });

script.
    $('.help').click(function(){
    $('.windowHelp').css({
    "display": "block",
    "position": "absolute"
    })
    });
    $('.helpClose').click(function(){
    $('.windowHelp').css("display", "none")
    $('.help').css('background-color', '');
    });

script.
    $(".help").click(function(){
    if ($('.windowHelp').css('display') === "block") {
    $('.help').css('background-color', '#B1B1B1');
    }
    });

    script.
        !function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);
     
