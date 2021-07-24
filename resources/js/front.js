/**
 * Part of nacnac project.
 *
 * @copyright  Copyright (C) 2021 {ORGANIZATION}. All rights reserved.
 * @license    GNU General Public License version 2 or later.
 */

$(document).ready(function () {
    $('#back2top-btn').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({ // 有些瀏覽器只支援html，有些只支援body 所以兩個都寫進去
            scrollTop: 0,
        }, 700)
    });

    $('#register-btn').on('click', function (e) {
        e.preventDefault();
        const linkScroll = $('#register').offset().top;
        $('html,body').stop().animate({
            scrollTop: linkScroll - 50
        }, 700)
    });

    $('.scroll-btn').on('click', function (e) {
        e.preventDefault();
        const anchor = $(this).attr('href');
        const linkScroll = $(anchor).offset().top;
        $('html,body').stop().animate({
            scrollTop: linkScroll - 50
        }, 700)
    });

    $('.load-more').on('click', function () {
        const tab = $(this).data('tab');
        let count = $(this).data('count');
        $("#" + tab + ' .instagram_media-item').slice(0, count).removeClass('d-none');

        count = count + 9;
        $(this).data('count', count);
    })
});
