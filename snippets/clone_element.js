var $tfoot = $('<tfoot></tfoot>');
$($('thead').clone(true, true).children().get().reverse()).each(function(){
    $tfoot.append($(this));
});
$tfoot.insertAfter('table thead');
