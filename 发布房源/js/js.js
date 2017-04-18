$(function () {
    var zc = /^[\u4e00-\u9fa5]*$/; //中文的正则
    var just = /^([1-9][0-9]*){1,3}$/; //不包括0在内的正整数
    var wrong = /^[1-9]d*|0$/; //包括0在内的正整数
    var js;
    $(".dsnt").on('input change', function () {
        var js = $(".dsnt").val();
        if (js == '' || !zc.test(js)) {
            $(".name .false").show();
            $(".name .true").hide();
        } else {
            $(".name .true").show();
            $(".name .false").hide();
        }
    }) //检测是否是中文
    var list = ["雅居乐花园", "御水湾花园", "金陵尚府", "鸿意星城", "中航樾府", "三山街", "芳草园", "瑞金北村"];

    $(".dsnt").on('input change', function () {
        var js = $(".dsnt").val();

        if (js != '') {
            var len = list.length;
            var arr = [];
            for (var i = 0; i < len; i++) {
                if (list[i].indexOf(js) >= 0) {
                    $(".mo").show();
                    arr.push(list[i]);
                }

                $("body").on("click", function () {

                    $(".mo").html("").hide();
                })
                $(".mo").on("click", "p", function () {
                    var val = $(this).text();
                    $(".dsnt").val(val);
                    $(".mo").hide();
                })

            }

            $(".mo").html("");
            $.each(arr, function (jsonname, value) {
                $(".mo").append("<p>" + value + "</p>");
            });


        }

    }) //检测模糊检测

    $(".frame1,.frame2,.frame3,.frame4").on("input change", function () {
        var js1 = $(".frame1").val();
        var js2 = $(".frame2").val();
        var js3 = $(".frame3").val();
        var js4 = $(".frame4").val();
        var js = js1 + js2 + js3 + js4;
        if (js == '' || !wrong.test(js1) || !wrong.test(js2) || !wrong.test(js3) || !wrong.test(js4) || js <= 0) {
            $(".house .false").show();
            $(".house .true").hide();
        } else {
            $(".house .true").show();
            $(".house .false").hide();
        }
    }) //户型必须填正整数，可以是0，但不能都是0。
    var money = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/; //大于0的两位小数
    $(".dsnt1").on("input change", function () {
        var js = $(this).val();
        if (js == '' || !money.test(js)) {
            $(".area .false").show();
            $(".area .true").hide();
        } else {
            $(".area .true").show();
            $(".area .false").hide();
        }
    })
    //检测面积要大于0的两位小数且不为空。
    $(".dsnt2").on("input change", function () {
        var js = $(this).val();
        if (js == '' || !just.test(js)) {
            $(".rent .false").show();
            $(".rent .true").hide();
        } else {
            $(".rent .true").show();
            $(".rent .false").hide();
        }
    })
    //检测租金要大于0的正整数且不为空。
    var zz = /^1[34578]\d{9}$/; // 手机的正则

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
    //检测手机号码是否正确
    $("#select2,#select3").on("input change", function () {
        if ($("#select2").find('option:selected').text() == "区属" || $("#select3").find('option:selected').text() == "板块") {
            $(".plate .false").show();
            $(".plate .true").hide();
        } else {
            $(".plate .false").hide();
            $(".plate .true").show();
        }

    })
    //检测“区属板块”的“select”是否选择
    $("#select4,#select5").on("input change", function () {
        if ($("#select4").find('option:selected').text() == "选择卧室内容" || $("#select5").find('option:selected').text() == "选择限制条件") {
            $(".rentout .false").show();
            $(".rentout .true").hide();
        } else {
            $(".rentout .false").hide();
            $(".rentout .true").show();
        }

    })
    //检测“出租形式”的“select”是否选择
    $(".down1").on("mouseover", function () {
        $(".room").show();
    });
    $(".down1").on("mouseleave", function () {
        $(".room").hide();
    });
    //导航栏的显示和隐藏
    $(".check2").on("input change", function () {
        if ($(this).is(':checked')) {
            $(this).siblings().attr("disabled", "disabled").removeAttr("checked");
        } else {
            $(this).siblings().removeAttr("disabled", "disabled");
        }
    }) //勾选“都不是”时前面四个选项不能勾选
    $("input[name='checkbox']").on("input change", function () {
        if ($("input[name='checkbox']").is(':checked')) {
            $(".deposit .false").hide();
            $(".deposit .true").show();
        } else {

            $(".deposit .false").show();
            $(".deposit .true").hide();
        }

    }) //检测至少“checkbox”有一个勾选了
    $("body").on("input change", function () {
        var dsnt = $(".dsnt").val();
        var select2 = $("#select2").find("option:selected").val();
        var select3 = $("#select3").find("option:selected").val();
        var frame1 = $(".frame1").val();
        var frame2 = $(".frame2").val();
        var frame3 = $(".frame3").val();
        var frame4 = $(".frame4").val();
        var radio = $("input[name='sex']:checked").val();
        var select4 = $("#select4").find("option:selected").val();
        var select5 = $("#select5").find("option:selected").val();
        var dsnt1 = $(".dsnt1").val();
        var dsnt2 = $(".dsnt2").val();
        var mobile = $(".mobile").val();
        var arr = [];
        $("input[name='checkbox']:checked").each(function () {
            arr.push($(this).val());
        });
        var val = dsnt + ' ' + select2 + ' ' + select3 + ' ' + frame1 + ' ' + frame2 + ' ' + frame3 + ' ' + frame4 + ' ' + radio + ' ' + select4 + ' ' + select5 + ' ' + dsnt1 + ' ' + dsnt2 + ' ' + arr + ' ' + mobile;

        $("textarea").html("").val(val);

    }) //信息汇总
    $(".upload").on("click", function () {
        var file = $(".file").val();
        $(".girl").attr("src", 'imges/girl.jpg');
        $(".print").show();
        $(".upload").hide();
    }) //上传图片

    $(".x").on("click", function () {

        $(".print").hide();
        $(".upload").show();
    }) //关闭图片


})
