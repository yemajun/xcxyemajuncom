

//处理图片的宽高
function setImgWH(obj) {
    if (obj.width > obj.height) {
        $(obj).css('height', '100%');
    } else {
        $(obj).css('width', '100%');
    }
}

$(function () {
    //弹窗
    var H_ture = $(".switchbox .content").height();
    var flag = true;
    if (H_ture > 36) {
        $(".switchbox .content").css("height", "36px")
        $(".slideBtn a").click(function () {
            if (flag) {
                $(".switchbox .content").animate({
                    "height": H_ture
                })
                $(this).addClass("active")
            } else {
                $(".switchbox .content").animate({
                    "height": "36px"
                })
                $(this).removeClass("active")
            }
            flag = !flag;
        })
    }
    
})

$(function () {
    //图片变大变小
    $(".imgScale").on('mouseenter', '.content', function () {
        $(this).find("img").addClass("scale").removeClass("scale_return")
    });
    $(".imgScale").on('mouseleave', '.content', function () {
        $(this).find("img").addClass("scale_return").removeClass("scale")
    });
})

