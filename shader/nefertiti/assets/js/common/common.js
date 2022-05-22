jQuery(document).ready(function () {
    // Passive event listeners
    jQuery.event.special.touchstart = {
        setup: function (_, ns, handle) {
            this.addEventListener("touchstart", handle, {
                passive: false
            });
        }
    };
    jQuery.event.special.touchmove = {
        setup: function (_, ns, handle) {
            this.addEventListener("touchmove", handle, {
                passive: false
            });
        }
    };
    jQuery.event.special.wheel = {
        setup: function (_, ns, handle) {
            this.addEventListener("wheel", handle, {
                passive: true
            });
        }
    };
    jQuery.event.special.mousewheel = {
        setup: function (_, ns, handle) {
            this.addEventListener("mousewheel", handle, {
                passive: true
            });
        }
    };

    //頁首背景偵測
    function headerBg() {
        let scrollVal = jQuery(window).scrollTop(),
            headerH = jQuery('header').outerHeight(),
            targetH = jQuery('.j-headerDetect').outerHeight();
        if (scrollVal >= targetH - headerH) {
            jQuery('header').addClass('active');
        } else {
            jQuery('header').removeClass('active');
        }
        if (targetH == null) {
            if (scrollVal >= headerH) {
                jQuery('header').addClass('active');
            } else {
                jQuery('header').removeClass('active');
            }
        }
    }
    headerBg();

    jQuery(window).scroll(function () {
        headerBg(); //頁首背景偵測
    });

    //瀏覽器寬度變化偵測
    let winW = jQuery(window).width(),
        winH = jQuery(window).height();
    jQuery(window).resize(function () {
        if (jQuery(window).width() !== winW) {
            winW = jQuery(window).width();
        }
        if (jQuery(window).height() !== winH) {
            winH = jQuery(window).height();
        }
    });

    //回到頂部
    jQuery('.j-goToTop').click(function () {
        let position = jQuery('html, body').offset().top;
        let duration = 1000;
        jQuery('html, body').stop().animate({
            scrollTop: position
        }, duration);
    });

    //scroll down
    jQuery('.j-scrollDown').click(function () {
        let headHeight = jQuery('header').outerHeight(), //header高度
            target = jQuery(this).data('scroll'),
            position = jQuery('.' + target).outerHeight() - headHeight + 10,
            duration = 1000;
        jQuery('html, body').stop().animate({
            scrollTop: position
        }, duration);
    });

    //關閉lightbox
    jQuery('.j-lightboxClose').click(function () {
        jQuery(this).parents('.c-lightbox').fadeOut();
    });

    //當前分類偵測
    jQuery('.j-cid-target').each(function () {
        let target = jQuery(this).val();
        jQuery('.j-cid-goal[data-cid=\"' + target + '\"]').addClass('active');
    });

    /****文字編輯器 表格處理*****/
    jQuery('.c-edit table').each(function () {
        jQuery(this).after('<div class=\"c-edit__table\"><\/div>');
        jQuery(this).next('.c-edit__table').append(jQuery(this).clone());
        jQuery(this).remove();
    });

    /****文字編輯器 iframe處理*****/
    jQuery('.c-edit iframe').each(function () {
        jQuery(this).after('<div class=\"c-edit__youtube\"><\/div>');
        jQuery(this).next('.c-edit__youtube').append(jQuery(this).clone());
        jQuery(this).remove();
    });
});