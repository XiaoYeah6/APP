$('#page-2').children().addClass('hide');
var iNow = 1;
$('#container').on('swipeUp', function () {
    console.log('123up');
    if (iNow != 2) {
        $('#page-' + iNow).attr('class', 'page moveToTop');
        $('#page-' + (iNow + 1)).attr('class', 'page moveFromBottom');

        setTimeout(function () {
            $('#page-' + (iNow + 1)).children().removeClass('hide');
            $('#page-' + iNow).children().addClass('hide');
            iNow++;
        }, 600);
    }
});

$('#container').on('swipeDown', function () {
    console.log('123down');
    if (iNow != 1) {
        $('#page-' + iNow).attr('class', 'page moveToBottom');
        $('#page-' + (iNow - 1)).attr('class', 'page moveFromTop');

        setTimeout(function () {
            $('#page-' + (iNow - 1)).children().removeClass('hide');
            $('#page-' + iNow).children().addClass('hide');
            iNow--;
        }, 600);
    }

})