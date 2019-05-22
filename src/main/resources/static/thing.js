var prefix="http://localhost:8080/"
var RestGet = function() {
    var region = $("input#thing-id").val();

    /*$("form#hello-form :input").each(function(){
        console.log($(this));
    });*/

    $.ajax({
        type: 'GET',
        url:  prefix + region ,
        dataType: 'json',
        async: true,
        success: function(result) {
            $('.hello-reaction').
            html('<h1>'+result.id+ ' ' +result.value + '</h1>');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $('.hello-reaction').html(jqXHR.status + ' ' + jqXHR.responseText);
        }
    });
};

var RestGetAll = function() {
var str = "";
    $.ajax({
        type: 'GET',
        url:  prefix + "all" ,
        dataType: 'json',
        async: true,
        success: function(result) {
            $.each(result, function (index, value) {
                   str = str + '<h1>'+value.id+ ' '
                        +value.value+ '</h1>';
                   console.log(str);
                ;
            });
            $('.hello-reaction').html(str);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $('.hello-reaction').html(jqXHR.status + ' ' + jqXHR.responseText);
        }
    });
};

var RestPost = function() {

    var id = $("input#thing-id").val();
    var name = $("input#name-value").val();

    console.log(id + ' ' + name);

    var myJson = '{' +
        '    "id": ' + id + ','+
        '    "value": "' + name + '"' +
        '}';

    console.log(myJson);

    $.ajax({
        type: 'POST',
        url:  prefix ,
        data : /*JSON.stringify*/(myJson),
        contentType : 'application/json',
        dataType: 'json',
        async: true,
        success: function(result) {
            $('.hello-reaction').
            html('<h1>'+result.id+ ' ' +result.value + '</h1>');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $('.hello-reaction').html(jqXHR.status + ' ' + jqXHR.responseText);
        }
    });
}