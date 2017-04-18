$(function () {
    var zc = /^[\u4e00-\u9fa5]*$/; //Chinese
    var just = /^([1-9][0-9]*){1,3}$/; //The non-zero positive integer
    var wrong = /^[1-9]d*|0$/; //Non-negative integer
    var js;
    $(".dsnt").on('input change', function () {
        var js = $(".dsnt").val();
        var list = [{
                "tagName": "雅居乐花园"
            },
            {
                "tagName": "御水湾花园"
            },
            {
                "tagName": "金陵尚府"
            },
            {
                "tagName": "鸿意星城"
            },
            {
                "tagName": "中航樾府"
            },
            {
                "tagName": "金马郦城"
            },
            {
                "tagName": "芳草园"
            },
            {
                "tagName": "瑞金北村"
            }];

        if (js != '') {
            var len = list.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                //如果字符串中不包含目标字符会返回-1
                if (list[i].tagName.indexOf(js) >= 0) {
                    arr.push(list[i].tagName);
                }
            }
            $.unique(arr);
            $('.mo').html('');
            $.each(arr, function (name, value) {
                $('.mo').append('<p>' + value + '</p>');
            });
        } else {
            return false;
        }
        $(this).on("click", function () {
            $('.mo').html('');
        })
    }) //Test in Chinese and fuzzy search
    $('.mo p').on("click", function () {
        var i = $(this).text();
        $(".dsnt").val(i);
        $('.mo').html('');
    })
    $(".frame1,.frame2,.frame3,.frame4").on("change ", function () {
        var js1 = $(".frame1").val();
        var js2 = $(".frame2").val();
        var js3 = $(".frame3").val();
        var js4 = $(".frame4").val();
        var js = js1 + js2 + js3 + js4;
        if (js == '' || !wrong.test(js1) || !wrong.test(js2) || !wrong.test(js3) || !wrong.test(js3) || js <= 0) {
            $(".house .false").show();
            $(".house .true").hide();
        } else {
            $(".house .true").show();
            $(".house .false").hide();
        }
    })
    var money = /^([1-9]+(\.[0-9]{2})?|0\.[1-9][0-9]|0\.0[1-9])$/;
    $(".dsnt1").on("change", function () {
        var js = $(this).val();
        if (js == '' || !money.test(js)) {
            $(".area .false").show();
            $(".area .true").hide();
        } else {
            $(".area .true").show();
            $(".area .false").hide();
        }
    })

    $(".dsnt2").on("change", function () {
        var js = $(this).val();
        if (js == '' || !just.test(js)) {
            $(".rent .false").show();
            $(".rent .true").hide();
        } else {
            $(".rent .true").show();
            $(".rent .false").hide();
        }
    })

    var zz = /^1[34578]\d{9}$/; // Test cell phone number

    $(".mobile").on("blur", function () {

        var val = $(".mobile").val();
        if (val == '') {
            $(".phone .false").html("号码不为空！").show();
            $(".phone .true").hide();
        } else if (!zz.test(val)) {
            $(".phone .false").html("请输入正确格式的手机号！").show();
            $(".phone .true").hide();
        } else {
            $(".phone .true").show();
            $(".phone .false").hide();
        }
    })
    $("#select2,#select3").on("input change", function () {
        if ($("#select2").find('option:selected').text() == "区属" || $("#select3").find('option:selected').text() == "板块") {
            $(".plate .false").show();
            $(".plate .true").hide();
        } else {
            $(".plate .false").hide();
            $(".plate .true").show();
        }

    })
    $("#select4,#select5").on("input change", function () {
        if ($("#select4").find('option:selected').text() == "选择卧室内容" || $("#select5").find('option:selected').text() == "选择限制条件") {
            $(".rentout .false").show();
            $(".rentout .true").hide();
        } else {
            $(".rentout .false").hide();
            $(".rentout .true").show();
        }

    })
    $(".down1").on("mouseover", function () {
        $(".room").show();
    });
    $(".down1").on("mouseleave", function () {
        $(".room").hide();
    });

    $(".seek").on("click", function () {

        if ($(this).html() == '地图找房↓') {
            $(this).text("收起地图找房↑");
            $(".icon4").addClass("h").siblings(".icon4").removeClass("h");
            $(".map").css({
                "height": 300
            }).slideDown(1000);

        } else {
            $(this).text("地图找房↓");
            $(".icon4").removeClass("h").siblings(".icon4").addClass("h");
            $(".map").slideUp(1000);
        }


    })
    $(".check2").on("change", function () {
        if ($(this).is(':checked')) {
            $(this).siblings().attr('disabled', 'disabled').removeAttr('checked');
        } else {
            $(this).siblings().removeAttr('disabled', 'disabled');
        }
    })

    $("body").on("input change", function () {
        var dsnt = $(".dsnt").val();
        var select2 = $("#select2").find('option:selected').val();
        var select3 = $("#select3").find('option:selected').val();
        var frame1 = $(".frame1").val();
        var frame2 = $(".frame2").val();
        var frame3 = $(".frame3").val();
        var frame4 = $(".frame4").val();
        var radio = $('input:radio:checked').val();
        var select4 = $("#select4").find('option:selected').val();
        var select5 = $("#select5").find('option:selected').val();
        var dsnt1 = $(".dsnt1").val();
        var dsnt2 = $(".dsnt2").val();
        var mobile = $(".mobile").val();
        var arr = [];
        $('input:checkbox:checked').each(function () {
            arr.push($(this).val());
        });
        var val = dsnt + ' ' + select2 + ' ' + select3 + ' ' + frame1 + ' ' + frame2 + ' ' + frame3 + ' ' + frame4 + ' ' + radio + ' ' + select4 + ' ' + select5 + ' ' + dsnt1 + ' ' + dsnt2 + ' ' + mobile + ' ' + arr;
        $("textarea").val(val);

    }) //information aggregation
    $(".upload").on("mouseover", function () {
        var file = $(".file").val();
        $(".girl").attr("src", 'imges/girl.jpg');
        $(".print").show();
        $(".upload").hide();
    }) //upload pictures

    $(".x").on("click", function () {

        $(".print").hide();
        $(".upload").show();
    }) //clera pictures


})
