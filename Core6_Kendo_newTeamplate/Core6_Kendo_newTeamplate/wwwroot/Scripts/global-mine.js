/**
 * All Global Functions
 * @author Mohammad R.P - @[@
 */



// jQuery plugin example:
$(document).ready(function () {

    //$('input').iCheck({
    //    checkboxClass: 'icheckbox_flat-blue',
    //    radioClass: 'iradio_flat'
    //});


    $('.onlydigit').keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    $("nav.main .wrapper  ul  li").click(function () {
        var is = $(this).find('ul').css('visibility');
        $("nav.main .wrapper > ul > li ul").css('display', 'block');
        $("nav.main .wrapper > ul > li ul").css('opacity', '0');
        $("nav.main .wrapper > ul > li ul").css('visibility', 'hidden');

        console.log(is);
        if (is == 'hidden') {
            $(this).find('ul').css('display', 'block');
            $(this).find('ul').css('opacity', '1');
            $(this).find('ul').css('visibility', 'visible');
        } else {
            $(this).find('ul').css('display', 'block');
            $(this).find('ul').css('opacity', '0');
            $(this).find('ul').css('visibility', 'hidden');
        }

        //return false;
    })



});

$(document).click(function (e) {
    if ($(e.target).is('nav, nav *')) {
        return;
    }

    $("nav.main .wrapper > ul > li ul").css('display', 'block');
    $("nav.main .wrapper > ul > li ul").css('opacity', '0');
    $("nav.main .wrapper > ul > li ul").css('visibility', 'hidden');

});

$('.priceComma').keypress(function (e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        return false;
    }
});
function removeComma(val) {
    if (typeof val === "undefined") {
        return "";
    }

    val = val.split(',');
    var value = '';
    for (var i = 0; i < val.length; i++) {
        value += val[i];
    }
    return value;
}
function commaNumber(val) {
    val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (val.includes('.')) {
        var indexDesimal = val.indexOf('.');
        return val.substring(0, indexDesimal);
    }
    return val;
}
function commaSeparateNumber(val) {


    while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }
    val = val.toString();
    if (val.includes('.')) {

        var indexDesimal = val.indexOf('.');

        return val.substring(0, indexDesimal + 3);
    } else {
        return val;
    }
}

function moneyCommaSep(ctrl) {

    var separator = ",";
    var int = ctrl.val().replace(new RegExp(separator, "g"), "");
    var regexp = new RegExp("\\B(\\d{3})(" + separator + "|$)");
    do {
        int = int.replace(regexp, separator + "$1");
    }
    while (int.search(regexp) >= 0)

    ctrl.val(int);

}
function GetPriceStyle(Price) {
    var str = '';

    if (Price == null) {
        return "";
    }

    else if (Price == 0) {
        return "<div style='width:100%;text-align:center;'><span class='persianumber' > " + 0 + "</span></div>";
    }

    else if (Price.toString().length < 4) {
        str = "<div style='width:100%;text-align:center;'><span class='persianumber' > " + Price + "</span></div>";

        return str;
    }

    var pformated = commaSeparateNumber(Price);

    pformated = pformated.replace('-', '');

    if (Price >= 0) {
        str = "<div style='width:100%;text-align:center;'><span class='persianumber' > " + pformated + "</span></div>";
    } else {
        str = "<div style='width:100%;text-align:center;'><span class='persianumber' > " + pformated + "</span></div>";
    }
    return str;
}


function CloseKendoWindow(name) {
    var window = $("#" + name).data("kendoWindow");
    window.close();
}

function OpenKendoWindow(name) {
    var window = $("#" + name).data("kendoWindow");
    window.open();
}

$(document).ready(function () {

    $(function () {
        $('form').each(function () {
            $(this).find('div.form-group').each(function () {
                if ($(this).find('span.field-validation-error').length > 0) {
                    $(this).addClass('has-error');
                }
            });
            $(this).find('div.input-group').each(function () {
                if ($(this).find('span.field-validation-error').length > 0) {
                    $(this).addClass('has-error');
                }
            });
        });
    });
    $(function () {
        //$('[data-toggle="tooltip"]').tooltip();
    });



});



//xc


//var activeElement,
//   targetElement,
//   callbackfunc = function (event) {
//       activeElement = event.target || event.srcElement;
//   };
//window.addEventListener('click', callbackfunc, true);

//$(document).ajaxStart(function () {
//    NProgress.start();
//});

//$(document).ajaxComplete(function (event, request, settings) {
//    NProgress.done();
//});

//$(document).ajaxError(function (event, request, settings) {
//    NProgress.done();
//});

//function blockSection(targetId) {
//    NProgress.start();

//}

//function unblockSection(targetId) {
//    NProgress.done();
//}

//function OnFailure() {
//    alert("بروز خطا در اتصال به سرور");
//    //$(targetElement).unblock();
//    NProgress.done();

//}

function ShowValidationAlertToast(type, targetId, validations) {

    var msg = "<ul style='list-style-type: none;'>";
    $.each(validations, function (key, value) {
        var tt = "<li>" + value.Message + "</li>"
        msg += tt;
    })

    ShowAlertToast(type, '', msg);
}

function ShowAlertToast(type, ttl, message) {
    var shortCutFunction = '';
    var toastCount = 0;
    if (type == 0) {
        shortCutFunction += 'success';
    } else if (type == 1) {
        shortCutFunction += 'error';
    } else if (type == 2) {
        shortCutFunction += 'warning';
    } else if (type == 3) {
        shortCutFunction += 'info';
    }
    //var shortCutFunction = $("#toastTypeGroup input:checked").val();
    var msg = message;
    var title = ttl;
    var $showDuration = '1000';
    var $hideDuration = '1000';
    var $timeOut = '5000';
    var $extendedTimeOut = '1000';
    var $showEasing = 'swing';
    var $hideEasing = 'linear';
    var $showMethod = 'fadeIn';
    var $hideMethod = 'fadeOut';
    var toastIndex = toastCount++;

    toastr.options = {
        closeButton: true, // $('#closeButton').prop('checked'),
        debug: false, // $('#debugInfo').prop('checked'),
        positionClass: 'toast-bottom-left',// $('#positionGroup input:checked').val() || 'toast-top-right',
        onclick: null
    };


    //if ($showDuration.val().length)
    {
        toastr.options.showDuration = $showDuration;
    }

    //if ($hideDuration.val().length)
    {
        toastr.options.hideDuration = $hideDuration;
    }

    //if ($timeOut.val().length)
    {
        toastr.options.timeOut = $timeOut;
    }

    //if ($extendedTimeOut.val().length)
    {
        toastr.options.extendedTimeOut = $extendedTimeOut;
    }

    //if ($showEasing.val().length) 
    {
        toastr.options.showEasing = $showEasing;
    }

    //if ($hideEasing.val().length)
    {
        toastr.options.hideEasing = $hideEasing;
    }

    //if ($showMethod.val().length) 
    {
        toastr.options.showMethod = $showMethod;
    }

    //if ($hideMethod.val().length)
    {
        toastr.options.hideMethod = $hideMethod;
    }


    $("#toastrOptions").text("Command: toastr[" + shortCutFunction + "](\"" + msg + (title ? "\", \"" + title : '') + "\")\n\ntoastr.options = " + JSON.stringify(toastr.options, null, 2));

    var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
    $toastlast = $toast;
}

//function ShowAlert(type, targetId, title, message) {
//    var alertbody = "<div class='alert #type# alert-dismissible fade in' style='display:none;' role='alert'>" +
//        "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" +
//        "<strong>#title#</strong>#message#</div>";


//    var typeClass = 'alert-';
//    if (type == 0) {
//        typeClass += 'success';
//    } else if (type == 1) {
//        typeClass += 'danger';
//    } else if (type == 2) {
//        typeClass += 'warning';
//    } else if (type == 3) {
//        typeClass += 'info';
//    }

//    alertbody = alertbody.replace('#type#', typeClass);
//    alertbody = alertbody.replace('#title#', title);
//    alertbody = alertbody.replace('#message#', message);

//    $(targetId + " .alert").remove();

//    $(targetId).prepend(alertbody);
//    $(targetId + " .alert").slideDown(200);


//    $(targetId).scrollTop(300);
//}


//function ShowAlert2(type, targetId, message) {
//    var alertbody = "<div class='formmessage #type#'>" +
//        "#message#</div>";


//    var typeClass = 'formmessage-';
//    if (type == 0) {
//        typeClass += 'success';
//    } else if (type == 1) {
//        typeClass += 'danger';
//    } else if (type == 2) {
//        typeClass += 'warning';
//    } else if (type == 3) {
//        typeClass += 'info';
//    }

//    alertbody = alertbody.replace('#type#', typeClass);
//    alertbody = alertbody.replace('#message#', message);

//    $(targetId + " .formmessage").remove();

//    $(targetId).prepend(alertbody);

//    $(targetId).scrollTop(300);
//}

//function ShowAlertInSite( targetId,  message) {
//    var alertbody = "<div class='formmessage'>" +
//        "#message#</div>";

//    alertbody = alertbody.replace('#message#', message);

//    $(targetId + " .alert").remove();

//    $(targetId).prepend(alertbody);

//    $(targetId).scrollTop(300);
//}




//function ShowAlertLogin(targetId, message) {
//    var alertbody = "<div class='warning-msg'>" +
//        "#message#</div>";

//    alertbody = alertbody.replace('#message#', message);

//    $(targetId + " .alert").remove();

//    $(targetId).prepend(alertbody);

//    $(targetId).scrollTop(300);
//}

//function ShowValidationAlert(type, targetId, title, validations) {
//    var alertbody = "<div class='alert #type# alert-dismissible fade in' style='display:none;' role='alert'>" +

//        "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" +
//    "<strong>#title#</strong>#message#</div>";
//    var typeClass = 'alert-';
//    if (type == 0) {
//        typeClass += 'success';
//    } else if (type == 1) {
//        typeClass += 'danger';
//    } else if (type == 2) {
//        typeClass += 'warning';
//    } else if (type == 3) {
//        typeClass += 'info';
//    } 
//    alertbody = alertbody.replace('#type#', typeClass);
//    alertbody = alertbody.replace('#title#', title); 
//    var mst = "<ul>";
//    $.each(validations,
//        function(key, value) {
//            var tt = "<li>" + value.Message + "</li>";
//            mst += tt;
//        }); 
//    alertbody = alertbody.replace('#message#', mst); 
//    $(targetId + " .alert").remove(); 
//    $(targetId).prepend(alertbody);
//    $(targetId + " .alert").slideDown(200); 
//    $(targetId).scrollTop(300); 
//}



//function ShowAlert(type, targetId, title, message) {
//    var alertbody = "<div class='alert #type# alert-dismissible fade in' style='display:none;' role='alert'>" +
//        "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" +
//        "<strong>#title#</strong>#message#</div>";


//    var typeClass = 'alert-';
//    if (type == 0) {
//        typeClass += 'success';
//    } else if (type == 1) {
//        typeClass += 'danger';
//    } else if (type == 2) {
//        typeClass += 'warning';
//    } else if (type == 3) {
//        typeClass += 'info';
//    }

//    alertbody = alertbody.replace('#type#', typeClass);
//    alertbody = alertbody.replace('#title#', title);
//    alertbody = alertbody.replace('#message#', message);

//    $(targetId + " .alert").remove();

//    $(targetId).prepend(alertbody);
//    $(targetId + " .alert").slideDown(200);


//    $(targetId).scrollTop(300);
//}



//function ShowValidationAlertInSite(targetId, validations) {
//    var alertbody = "<div class='formmessage'>" +
//       "#message#</div>";



//    var mst = "<ul style='list-style-type: none;'>";
//    $.each(validations, function (key, value) {
//        var tt = "<li>" + value.Message + "</li>"
//        mst += tt;
//    })

//    alertbody = alertbody.replace('#message#', mst);

//    $(targetId + " .alert").remove();

//    $(targetId).prepend(alertbody);

//    $(targetId).scrollTop(300);
//}

function refreshGrid(targetId) {
    if ($(targetId)[0]) {
    $(targetId).data('kendoGrid').dataSource.read();
        $(targetId).data('kendoGrid').refresh();
        counter = 1;
    }
}

function refreshListView(targetId) {
    $(targetId).data("kendoListView").dataSource.read();
    $(targetId).data("kendoListView").refresh();
}


function refreshKendoTreeView(targetId) {
    $(targetId).data("kendoTreeView").dataSource.read();
    $(targetId).data("kendoTreeView").refresh();
}

function closeKendoWindow(targetWindowId) {
    $(targetWindowId).data("kendoWindow").close();
}



function expandAndSelectNode(id, treeViewName) {
    // get the Kendo TreeView widget by it's ID given by treeviewName
    var treeView = $(treeViewName).data('kendoTreeView');

    // find node with data-id = id
    var item = $(treeViewName).find("li[data-id='" + id + "']").find(".k-in");

    // expand all parent nodes
    $(item).parentsUntil('.k-treeview').filter('.k-item').each(
        function (index, element) {
            $(treeViewName).data('kendoTreeView').expand($(this));
        }
    );

    // get DataSourceItem by given id
    var nodeDataItem = treeView.dataSource.get(id);
    //get node within treeview widget by uid
    var node = treeView.findByUid(nodeDataItem.uid);

    treeView.select(node);
}





function removeFilter(filter, searchFor) {
    if (filter == null)
        return [];

    for (var x = 0; x < filter.length; x++) {

        if (filter[x].filters != null && filter[x].filters.length >= 0) {
            if (filter[x].filters.length == 0) {
                filter.splice(x, 1);
                return removeFilter(filter, searchFor);
            }
            filter[x].filters = removeFilter(filter[x].filters, searchFor);
        }
        else {
            if (filter[x].field == searchFor) {
                filter.splice(x, 1);
                return removeFilter(filter, searchFor);
            }
        }
    }

    return filter;
}

function kendoGridAddFilter(gridId, fieldName, operator, value) {

    var grid = $(gridId).data("kendoGrid");
    var $filter = new Array();
    if ($(gridId).data('kendoGrid').dataSource.filter() !== undefined && $(gridId).data('kendoGrid').dataSource.filter() !== null) {
        $filter = $(gridId).data('kendoGrid').dataSource.filter().filters;
    }

    $filter = removeFilter($filter, fieldName);

    $filter.push({ field: fieldName, operator: operator, value: value });
    grid.dataSource.filter($filter);
}

function kendoGridBatchFilter(gridId, params) {
    var grid = $(gridId).data("kendoGrid");

    var $filter = new Array();
    if ($(gridId).data('kendoGrid').dataSource.filter() !== undefined && $(gridId).data('kendoGrid').dataSource.filter() !== null) {
        $filter = $(gridId).data('kendoGrid').dataSource.filter().filters;
    }

    $.each(params, function (key, value) {
        $filter = removeFilter($filter, value["fieldName"]);
        if (value["value"] !== "") {
            $filter.push({ field: value["fieldName"], operator: value["operator"], value: value["value"] });
        }
    });

    grid.dataSource.filter($filter);
}

function kendoGridRemoveFilter(gridId, fieldName) {
    var grid = $(gridId).data("kendoGrid");
    if ($(gridId).data('kendoGrid').dataSource.filter() !== undefined && $(gridId).data('kendoGrid').dataSource.filter() !== null) {
        var filters = $(gridId).data('kendoGrid').dataSource.filter().filters;
        filters = removeFilter(filters, fieldName);
        grid.dataSource.filter(filters);
    }
}





// Cascade DropDown plugin @[@
$.fn.cascadingDropDown = function (options) {
    var settings = $.extend({
        sourceId: "",
        selectLabel: "",
        dataUrl: ""
    }, options);

    var currentObj = this;

    $(settings.sourceId).change(function () {
        var selected = $(settings.sourceId + ' :selected').val();
        selected = selected == "" ? 0 : selected;
        if (selected == "") {
            currentObj.empty();
            currentObj.append('<option value="">' + settings.selectLabel + '</option>');
            return;
        }

        $.ajax({
            type: "POST",
            url: settings.dataUrl,
            data: " {'selectedValue':'" + selected + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json"

        }).done(function (data) {
            if (data != null) {
                $(currentObj).empty();
                $(currentObj).append('<option value="">' + settings.selectLabel + '</option>');

                $.each(data.result, function (index, data) {
                    $(currentObj).append('<option value="' + data.Id + '">' + data.Text + '</option>');
                });

                $("#s2id_" + currentObj.attr('Id') + " .select2-chosen").html("انتخاب نمایید");
            }
        }).fail(function (response) {
            if (response.status != 0) {
                alert(response.status + " " + response.statusText);
            }
        });
    });
};


function selectSubMenu(menuTitle, subMenuTitle) {
    $(".page-sidebar-menu *").removeClass("active");
    $(".page-sidebar-menu *").removeClass("open");

    //var ctp = $(".page-sidebar-menu .title:contains('" + menuTitle + "')");
    var ctp = $('.page-sidebar-menu .title').filter(function () {
        return $(this).text() == menuTitle;
    });

    //var ct = $(ctp.closest("ul").find(":contains('" + subMenuTitle + "')"));
    var ct = $(ctp.parent().parent().find("ul li a")).filter(function () {
        return $(this).text().trim() == subMenuTitle;
    });

    ctp.after("<span class='selected'></span>");

    ct.parent().parent().parent().addClass('active');
    ctp.parent().parent().addClass('active')

    ct.parent().addClass('active open');
    ct.parent().parent().slideDown();

    ctp.parent().find(".arrow").addClass("open");
}


function validateFileUpload(e, validExtention, maxSize, valmsgId) {
    var result = true
    var files = e.files;
    //var validExtention = [".jpeg", ".jpg", ".png"];
    $.each(files, function () {
        var isValid = $.inArray(this.extension.toLowerCase(), validExtention);
        $(valmsgId + " .thumbnail .valmsg").remove()
        if (isValid === -1) {
            //alert("فایل انتخابی معتبر نمی باشد");
            $(valmsgId + " .thumbnail").append("<div class='valmsg'><span data-valmsg-replace='true' data-valmsg-for='Title' class='field-validation-error'>فایل انتخابی معتبر نمی باشد</span><div/>")
            e.preventDefault();
            result = false;
        } else if ((this.size / 1024) > maxSize) {
            //alert("حداکثر طول فایل مجاز، " + maxSize + " کیلوبایت می باشد");
            $(valmsgId + " .thumbnail").append("<div class='valmsg'><span data-valmsg-replace='true' data-valmsg-for='Title' class='field-validation-error'>" + "حداکثر طول فایل مجاز، " + maxSize + " کیلوبایت می باشد" + "</span><div/>")
            e.preventDefault();
            result = false;
        }

    });

    return result;
}


function UploaderPreview(e, targetId) {
    var files = e.files;
    $.each(files, function () {

        var reader = new FileReader();
        reader.onload = function (e) {
            $(targetId).attr("src", e.target.result);
        }
        reader.readAsDataURL(this.rawFile);

        $(targetId).removeClass('hidden')

    });

}

function UploaderRemovePreview(e, targetId) {
    $(targetId).attr('src', '');
    $(targetId).addClass('hidden');

    $(targetId).parent().find('.valmsg').remove();
}




window.onload = function () {

    $('form[data-ajax=true]').on('submit', function (e) {
        var formdata = new FormData(this);

        var formId = $(this).attr("id");
        var formAction = $(this).attr("action");
        //var formUpdateTargetId = $(this).attr("data-ajax-update");
        var formOnSuccess = $(this).attr("data-ajax-success");
        var formOnFailure = $(this).attr("data-ajax-failure");

        if ($(this).valid()) {
            $.each($("#" + formId + ' input:file'), function (key, fileInput) {
                for (i = 0; i < fileInput.files.length; i++) {
                    formdata.append(fileInput.files[i].name, fileInput.files[i]);
                }
            });

            $.ajax({
                url: formAction,
                data: formdata,
                cache: false,
                processData: false,
                contentType: false,
                type: 'POST',
                success: function (dataofconfirm) {
                    window[formOnSuccess](dataofconfirm);
                },
                error: function (dataofconfirm) {
                    window[formOnFailure](dataofconfirm);
                }
            });
        }

        ////Creating an XMLHttpRequest and sending
        ////var xhr = new XMLHttpRequest();
        ////xhr.open('POST', formAction);
        ////blockSection(formUpdateTargetId);
        ////xhr.send(formdata);
        ////xhr.onreadystatechange = function () {
        ////    if (xhr.readyState == 4 && xhr.status == 200) {
        ////        //alert(xhr.responseText);
        ////        $("#" + formUpdateTargetId).html(xhr.responseText);
        ////        unblockSection(formUpdateTargetId);

        ////    }
        ////}

        return false;
    });

}

function clearform(targetFormId) {

    $(':input ', targetFormId)
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');

    $("textarea").val('');


    //$(targetFormId + " input").removeClass(".input-validation-error");
    $(targetFormId + " .field-validation-error").hide();

    $(targetFormId + ' :input[type=hidden]').not(targetFormId + " :input[name*='RequestVerificationToken']").val('');
}





function checkMelliCode(meli_code) {
    if (meli_code.length == 10) {
        if (meli_code == '1111111111' ||
            meli_code == '0000000000' ||
            meli_code == '2222222222' ||
            meli_code == '3333333333' ||
            meli_code == '4444444444' ||
            meli_code == '5555555555' ||
            meli_code == '6666666666' ||
            meli_code == '7777777777' ||
            meli_code == '8888888888' ||
            meli_code == '9999999999') {
            return false;
        }
        c = parseInt(meli_code.charAt(9));
        n = parseInt(meli_code.charAt(0)) * 10 +
            parseInt(meli_code.charAt(1)) * 9 +
            parseInt(meli_code.charAt(2)) * 8 +
            parseInt(meli_code.charAt(3)) * 7 +
            parseInt(meli_code.charAt(4)) * 6 +
            parseInt(meli_code.charAt(5)) * 5 +
            parseInt(meli_code.charAt(6)) * 4 +
            parseInt(meli_code.charAt(7)) * 3 +
            parseInt(meli_code.charAt(8)) * 2;
        r = n - parseInt(n / 11) * 11;
        if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == 11 - r)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
function SetDropEmpty(element) {
    $("#s2id_" + element + " .select2-chosen").html("انتخاب نمایید");
    $('#' + element).empty();
    var option = $('<option></option>').attr("value", "").text("انتخاب نمایید");
    $('#' + element).append(option);
}

function SetDropIndexToSelectItem(element) {

    $("#" + element).val("انتخاب نمایید");
    $('#select2-chosen-1').html("انتخاب نمایید");
}


function SetSelect2ValueText(dropName, value, text) {
    $('#' + dropName).select2('data', { id: value, text: text });
}

function GenarateRandomString(L) {
    var s = '';
    var randomchar = function () {
        var n = Math.floor(Math.random() * 62);
        if (n < 10) return n; //1-10
        if (n < 36) return String.fromCharCode(n + 55); //A-Z
        return String.fromCharCode(n + 61); //a-z
    }
    while (s.length < L) s += randomchar();
    return s;
}

//function OnlyDigit(e) {
//    var enterdCharacter = $(e).val();
//    alert(enterdCharacter);
//    //$(".form-control").keypress(function (e) {
//    if (enterdCharacter.which != 46 && enterdCharacter.which != 8 && enterdCharacter.which != 0 && (enterdCharacter.which < 48 || enterdCharacter.which > 57)) {
//        alert();
//        $(e).val('');
//        return false;
//    }
//    var specialchars = [48, 49, 50, 51, 52, 53, 57];

//    var notExist = !!([...enterdCharacter].find(itm => !specialchars.includes(itm.charCodeAt())));
//    if (notExist) {
//        $(e).val('');
//    }
//}

function OnlyDigit(obj) {
    var id = $(obj).attr('id');
    //alert(id);
    $("#" + id).keypress(function (e) {
        //alert("1");

        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //$(obj).val('');
            return false;
        }
    });
    $('#' + id).keyup(function (e) {
        moneyCommaSep($(this));
    });
}
function toEnglishDigits(input) {
    var result = "";
    var persian = { '۰': '0', '۱': '1', '۲': '2', '۳': '3', '۴': '4', '۵': '5', '۶': '6', '۷': '7', '۸': '8', '۹': '9' };
    var arabic = { '٠': '0', '١': '1', '٢': '2', '٣': '3', '٤': '4', '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9' };
    result = input.val().replace(/[^0-9.]/g, function (w) {
        return persian[w] || arabic[w] || w;
    });
    input.val(result);
};



var gridName;
var createUrl;
var createParameter;
var formName;
var hiddenPageHeader;
var backToURL;
var confirmMsg;
var ModalTitle;
function SubmitForm(formDiv) {
    var formdata = new FormData($("#" + formDiv)[0]);
    var formAction = $("#" + formDiv).attr("action");
    var formOnSuccess = $("#" + formDiv).attr("data-ajax-success");
    var formOnFailure = $("#" + formDiv).attr("data-ajax-failure");

    if ($("#" + formDiv).valid()) {
        debugger    
        if (confirmMsg != null) {
            if (!confirm(confirmMsg))
                return;
        }
        $.each($('#' + formDiv + ' input:file'), function (key, fileInput) {
            for (i = 0; i < fileInput.files.length; i++) {
                formdata.append(fileInput.files[i].name, fileInput.files[i]);
            }
        });

        $.ajax({
            url: formAction,
            data: formdata,
            cache: false,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function (dataofconfirm) {
                window[formOnSuccess](dataofconfirm);
            },
            error: function (dataofconfirm) {
                window[formOnFailure](dataofconfirm);
            }
        });
    }
}

function ShowDataAlert(validations) {
    var type;
    var msg = "<ul style='list-style-type: none;'>";
    $.each(validations, function (key, value) {
        var tt = "<li>" + value.Message + "</li>";
        msg += tt;
        type = value.Type;
    });
    ShowAlertToast(type, '', msg);
}
function OpenWindowCreate(createUrl, createParameter) {
    var targetForm = "#forms-body_" + formName;
    if (createParameter != null) {
        $.get(createUrl,
            createParameter,
            function (data) {
                if (backToURL != null) {
                    setTimeout(function () {
                        window.location.href = backToURL;
                    }, 1000);
                    return;
                }
                $(targetForm).html(data);
                if ($(".Select2")[0]) {
                    $(".Select2").select2();
                }
                formatDate();
                if (hiddenPageHeader) {
                    $(`#forms-body_${formName} .page-header`).remove();
                }
            });
    } else {
        $.get(createUrl, null, function (data) {
            $(targetForm).html(data);
            if ($(".Select2")[0]) {
                $(".Select2").select2();
            }
            formatDate();
                            if (hiddenPageHeader) {
                    $(`#forms-body_${formName} .page-header`).remove();
                }

        });
    }

}
var SetCurrentDate = [];

function setDateCurrent() {
    $('.date').persianDatepicker({
        timePicker: { enabled: false }, format: 'YYYY/MM/DD'
    });
    var date = new Date().toLocaleDateString('fa-IR', { year: 'numeric', month: '2-digit', day: '2-digit' });
    date = PersianNumberToEnglishNumber(date);
    for (var i = 0; i < SetCurrentDate.length; i++) {
        var id = SetCurrentDate[i];
        if (SetCurrentDate[i].includes('+')) {
            id = SetCurrentDate[i].split('+')[0].trim();
            date = SetCurrentDate[i].split('+')[1].trim();
        }

        $('#' + id).pDatepicker('setDate', [date.split('/')[0], parseInt(date.split('/')[1]), parseInt(date.split('/')[2])]);

    }
}

function formatDate(dates) {
    if ($('.date')[0]) {
        if (typeof (dates) != "undefined") {
            for (var i = 0; i < dates.length; i++) {
                var data = dates[i].split('*');
                var elementId = data[1].trim();
                var elementData = data[0].split('/');
                $(`#${elementId}`).persianDatepicker({
                    timePicker: { enabled: false }, format: 'YYYY/MM/DD'
                }).pDatepicker('setDate', [parseInt(elementData[0]), parseInt(elementData[1]), parseInt(elementData[2])]);

            }

        }
        else {
            $('.date').persianDatepicker({
                timePicker: { enabled: false }, format: 'YYYY/MM/DD'
            });
            
            if (SetCurrentDate.length > 0) {
                var date = new Date().toLocaleDateString('fa-IR', { year: 'numeric', month: '2-digit', day: '2-digit' });
                date = PersianNumberToEnglishNumber(date);
                for (var i = 0; i < SetCurrentDate.length; i++) {
                    var id = SetCurrentDate[i];
                    if (SetCurrentDate[i].includes('+')) {
                        id = SetCurrentDate[i].split('+')[0].trim();
                        date = SetCurrentDate[i].split('+')[1].trim();
                    }

                    $('#' + id).pDatepicker('setDate', [date.split('/')[0], parseInt(date.split('/')[1]), parseInt(date.split('/')[2])]);

                }
            }
            else {
                $('.date').val('');
            }
        }
    }

}
var _continue;
function showModal(data) {

    if (ModalTitle != null) {
        $("#exampleModalLabel").html(ModalTitle);
        $("#modalMsg").html(data);

        $("#exampleModal").modal({
            show: 'false'
        });
        $("input[type=text], textarea").val("");
        _continue = false;
        if (formName == "Loan") {
            $("#NationalCode").keyup();
        }
    }
}
function SuccessModal() {
    window.location.reload();
}
function CloseModal() {
    window.location.href = backToURL;
}
function GoToURL(url) {
    window.location.href = url;
}
function OnSuccess(data) {
    if (data.Data !== undefined) {

        if (data.Data[0].IsSuccessed) {
            showModal(data.Data[0].Message);
            if (_continue == false) {
                return;
            }
            if (backToURL != null) {
                ShowDataAlert(data.Data);
                setTimeout(function () {
                    window.location.href = backToURL;
                }, 1000);
                return;
            }
            if (gridName != null) {
                refreshGrid("#" + gridName);
            }
            if (createParameter !== undefined)
                OpenWindowCreate(createUrl, createParameter);
            else
                OpenWindowCreate(createUrl, null);
        }
        ShowDataAlert(data.Data);
    }
}

function SetDropEmpty(element) {
    $('#' + element).empty();
    var option = $('<option></option>').attr("value", "").text("انتخاب نمایید...");
    $('#' + element).append(option);
}

function OpenWindowEdit(id, editUrl) {

    $.get(editUrl, { id: id }, function (data) {
        if ($(".Select2")[0]) {
            $(".Select2").select2();
        }
        $("#forms-body_" + formName).html(data);
        if (hiddenPageHeader) {
            $(`#forms-body_${formName} .page-header`).remove();
        }
    });
}
function OpenWindowEdit(id, editUrl, dates) {
    $.get(editUrl, { id: id }, function (data) {
        $("#forms-body_" + formName).html(data);
        if ($(".Select2")[0]) {
            $(".Select2").select2();
        }
        formatDate(dates);
        if (hiddenPageHeader) {
            $(`#forms-body_${formName} .page-header`).remove();
        }
    });

}
var exportFlag = false;
function exportToExcel(e) {
    var sheet = e.workbook.sheets[0];
    var row = sheet.rows[0];
    var columns = e.sender.columns.filter(a => a.hidden != true);
    for (var cellIndex = 0; cellIndex < row.cells.length; cellIndex++) {
        row.cells[cellIndex].background = "#aabbcc";
        var enTitle = columns[cellIndex].headerAttributes.enTitle;
        if (typeof (enTitle) != "undefined") {
            row.cells[cellIndex].value = enTitle;
        }
    }
    if (!exportFlag) {
        for (var i = 0; i < e.sender.columns.length; i++) {
            var col = e.sender.columns[i].attributes.class;
            if (col.includes("hiddenInExcel")) {
                e.sender.hideColumn(i);

            }
        }
        e.preventDefault();
        exportFlag = true;
        setTimeout(function () {
            e.sender.saveAsExcel();

        })

    } else {

        if (exportFlag) {
            for (var i = 0; i < e.sender.columns.length; i++) {
                var col = e.sender.columns[i].attributes.class;
                if (col.includes("hiddenInExcel")) {
                    e.sender.showColumn(i);
                }
            }
        }
        exportFlag = false;
    }
}
var formEn = false;
function sumDataInReport() {
    var measureBaseInfos = document.getElementsByClassName("MeasureBaseInfoId");
    if (measureBaseInfos.length == 0) {
        return "";
    }
    var firstMeasureBaseInfoId = 0
    if (measureBaseInfos.length > 0)
        firstMeasureBaseInfoId = parseInt(measureBaseInfos[0].innerHTML)

    var coundMeasureBaseInfoId = 0;
    var measureBaseInId = 0;
    for (var i = 0; i < measureBaseInfos.length; i++) {
        measureBaseInId = parseInt(measureBaseInfos[i].innerHTML);
        if (firstMeasureBaseInfoId === measureBaseInId) {
            coundMeasureBaseInfoId += 1;
        }
    }

    if (coundMeasureBaseInfoId != measureBaseInfos.length) {

        return " "
    }

    var Amount = document.getElementsByClassName("Amount");
    var vahed = "";
    if (Amount.length > 0) {

        vahed = Amount[0].innerHTML.split('/')[1];
    }
    var value = 0;
    for (var i = 0; i < Amount.length; i++) {
        var temp = Amount[i].innerHTML.replaceAll(',', '').split('/')[0].trim();
        if (temp != "") {
            value += parseFloat(temp);
        }
    }
    if (typeof vahed === "undefined") {
        return "";
    }
    var titleTotal = "مجموع : ";
    if (formEn) {
        titleTotal = "Total : ";
    }
    return titleTotal + commaSeparateNumber(value) + " " + vahed;
}
function sumDataInReportBasedOnValue() {
    var measureBaseInfos = document.getElementsByClassName("MeasureBaseInfoId");
    if (measureBaseInfos.length === 0) {
        return "";
    }
    var firstMeasureBaseInfoId = 0
    if (measureBaseInfos.length > 0)
        firstMeasureBaseInfoId = parseInt(measureBaseInfos[0].innerHTML)

    var coundMeasureBaseInfoId = 0;
    var measureBaseInId = 0;
    for (var i = 0; i < measureBaseInfos.length; i++) {
        measureBaseInId = parseInt(measureBaseInfos[i].innerHTML);
        if (firstMeasureBaseInfoId === measureBaseInId) {
            coundMeasureBaseInfoId += 1;
        }
    }

    if (coundMeasureBaseInfoId !== measureBaseInfos.length) {

        return " "
    }

    var Amount = document.getElementsByClassName("Amount");
    var vahed = document.getElementsByClassName("Measure")[0].innerHTML;

    var value = 0;
    for (var i = 0; i < Amount.length; i++) {
        var temp = Amount[i].innerHTML.trim();
        console.log(temp);
        if (temp !== "") {
            value += parseFloat(temp);
        }
    }
    if (typeof vahed === "undefined") {
        return "";
    }
    var titleTotal = "مجموع : ";
    if (formEn) {
        titleTotal = "Total : ";
    }
    return titleTotal + commaSeparateNumber(value) + " " + vahed;
}
function checkDate(fromDate, uptoDate, fromTime, upToTime) {
    if (fromTime.length != 0 && upToTime.length != 0) {
        fromDate += " " + fromTime;
        uptoDate += " " + upToTime;
    }

    if (fromDate.length != 0 && uptoDate.length != 0) {
        if (fromDate <= uptoDate) {
            return true;
        }
    } else {//در نظر نگرفتن تاریخ
        return true;
    }
    return false;
}



function SetParameter() {
    var grid = $("#grid_" + gridName.replace("grid_","")).data("kendoGrid"),
        parameterMap = grid.dataSource.transport.parameterMap;

    return parameterMap({
        sort: grid.dataSource.sort(), filter: grid.dataSource.filter(), group: grid.dataSource.group(), pageSize: grid.dataSource.pageSize()

    });
//    e.preventDefault();
}
var isExistGetData = false;
//function exportToExcel() {
//    var data = {};
//    if (isExistGetData == true) {
//        data = { "request": SetParameter(), "searchedModel": GetData() };
//    } else {
//        data = { "request": SetParameter() };
//    }
//    $.ajax({
//        url: "/" + controllerName + "/SetExcelFilters",
//        data: data,
//        type: "POST",
//        success: function (result) {
//            window.location.href = "/" + controllerName + "/ExportExcel";
//        }
//    });
//}
function PersianNumberToEnglishNumber(data) {
    var dateC = '';
    for (var i = 0; i < data.length; i++) {
        var char = data[i];
        switch (char) {
            case "۰":
                dateC += "0";
                break;
            case "۱":
                dateC += "1";
                break;
            case "۲":
                dateC += "2";
                break;
            case "۳":
                dateC += "3";
                break;
            case "۴":
                dateC += "4";
                break;
            case "۵":
                dateC += "5";
                break;
            case "۶":
                dateC += "6";
                break;
            case "۷":
                dateC += "7";
                break;
            case "۸":
                dateC += "8";
                break;
            case "۹":
                dateC += "9";
                break;
            case "/":
                dateC += "/";
                break;

            default:
        }

    }
    return dateC;
}
function RoundNumber(number, countLastNumberRond) {
    number = number.toString();
    if (number.includes('.')) {
        var indexDesimal = number.indexOf('.');
        number = number.substring(0, indexDesimal);
    }
    var twoPart = number.substring(number.length - countLastNumberRond, number.length)
    var onePart = number.substring(0, number.length - countLastNumberRond);
    var round = Math.round(onePart + "." + twoPart).toString();
    for (var i = 0; i < countLastNumberRond; i++) {
        round += "0";
    }
    return parseInt(round);

}

var counter = 1;
function onDataBound(e) {
}
function renderNumber(data) {
    return counter++;
}
function rowCounterGrid(data) {
    var page = parseInt($("#"+gridName).data("kendoGrid").dataSource.page()) - 1;
    var pagesize = $("#" + gridName).data("kendoGrid").dataSource.pageSize();
    return parseInt(addRow(data) + (parseInt(page) * parseInt(pagesize)));
}
var rowNumber = 0;

function resetRowNumber(e) {
    rowNumber = 0;
}
function addRow(data) {
    return ++rowNumber;
}
function SumAmount() {

    if (typeof gridName === "undefined") {
        return "";
    }
    let data = $("#" + gridName).data("kendoGrid").dataSource._data;
    if (data.length > 0) {
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            sum += parseFloat(removeComma(data[i].Amount));
        }


        return "مجموع : " + commaSeparateNumber(sum.toString());
    }

    return "";
}
var isExistGetData = true;
var isLoanTab = false;
var extraData = {};
var controllerName = "";
function exportToPDF() {
    var data = {};
    if (isExistGetData == true) {
        data = { "": SetParameter(), "searchedModel": GetData() };
    } else if (isLoanTab === true) {
        data = { "": SetParameter(), "LoanIdModel": GetDataGridLoanTab() };
    } else {
        data = { "": SetParameter() };
    }
    $.post("/" + controllerName + "/SetExcelFilters", data, function (data) {
        window.location.href = "/" + controllerName + "/ReportPdf";
    });
}
function exportToExcel() {
    var data = {};
    if (isExistGetData === true) {
        data = { "": SetParameter(), "searchedModel": GetData() };
    } else if (isLoanTab === true) {
        data = { "": SetParameter(), "LoanIdModel": GetDataGridLoanTab() };
    } else {
        data = { "": SetParameter() };
    }
    $.ajax({
        url: "/" + controllerName + "/SetExcelFilters",
        data: data,
        type: "POST",
        success: function (result) {
            window.location.href = "/" + controllerName + "/ExportExcel";
        }
    });
}
//var exportFlag = false;
//function exportToExcel(e) {
//    var sheet = e.workbook.sheets[0];
//    var row = sheet.rows[0];
//    var columns = e.sender.columns.filter(a => a.hidden != true);
//    for (var cellIndex = 0; cellIndex < row.cells.length; cellIndex++) {
//        row.cells[cellIndex].background = "#aabbcc";
//        var enTitle = columns[cellIndex].headerAttributes.enTitle;
//        if (typeof (enTitle) != "undefined") {
//            row.cells[cellIndex].value = enTitle;
//        }
//    }
//    if (!exportFlag) {
//        for (var i = 0; i < e.sender.columns.length; i++) {
//            var col = e.sender.columns[i].attributes.class;
//            if (col.includes("hiddenInExcel")) {
//                e.sender.hideColumn(i);

//            }
//        }
//        e.preventDefault();
//        exportFlag = true;
//        setTimeout(function () {
//            e.sender.saveAsExcel();

//        })

//    } else {

//        if (exportFlag) {
//            for (var i = 0; i < e.sender.columns.length; i++) {
//                var col = e.sender.columns[i].attributes.class;
//                if (col.includes("hiddenInExcel")) {
//                    e.sender.showColumn(i);
//                }
//            }
//        }
//        exportFlag = false;
//    }
//}
//function formReset(formID) {
//    $(':input', '#' + formID)
//        .not(':button', ':submit', ':reset', ':hidden', ':radio', ':checkbox')
//        .val('');
//}