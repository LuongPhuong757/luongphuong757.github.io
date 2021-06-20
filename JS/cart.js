$(document).ready(function () {
    // $("p").on({
    //     mouseover: function(){
    //       $("body").css("background-color", "lightgray");
    //     },  
    //     mouseout: function(){
    //       $("body").css("background-color", "lightblue");
    //     }, 
    //     click: function(){
    //       $("body").css("background-color", "yellow");
    //     }  
    //   });

    // $('.number').
    // .on('change',function () {
    //     var total=$(this).parents('tr').siblings('.total');
    //     var price=$(this).parents('tr').siblings('.price');
    //     var totalNumber = parseInt($(total).html());
    //     console.log($(total).html())
    //     total.html
    // })
    // console.log($('.number'))
    $('.number').each (function (index,inputOfElement){
        $(inputOfElement).on('change',function () {
            var total=$($(this).parents('td')).siblings('.total');
            var price=$(this).parents('td').siblings('.price');
            var totalNumber = $(total).html().replaceAll('.','');
            total.html(parseInt(totalNumber)*parseInt($(inputOfElement).val()))
        })
    })
    
    $('.plus').each (function (index,inputOfElement){
        $(inputOfElement).on('click',function () {
            var inputNumber = $(this).siblings('.number');
            var number = parseInt(inputNumber.val());
            $(inputNumber).val(number+1);
        })
    })

    $('.minus').each (function (index,inputOfElement){
        $(inputOfElement).on('click',function () {
            var inputNumber = $(this).siblings('.number');
            var number = parseInt(inputNumber.val());
            $(inputNumber).val(number-1)
            if ($(inputNumber).val() <= 0 ) {
                $(this).parents('tr').remove();
            }
        })
    })
});