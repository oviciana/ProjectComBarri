$(function() {

    var active = true;
/*
//for drop down or up all the panels
    $('#collapse-init').click(function() {
        if (active) {
            active = false;
            $('.panel-collapse').collapse('show');
            $('.panel-title').attr('data-toggle', '');
            $(this).text('Collapse');
        } else {
            active = true;
            $('.panel-collapse').collapse('hide');
            $('.panel-title').attr('data-toggle', 'collapse');
            $(this).text('Expand');

        }
    });
*/
    $('#accordion').on('show.bs.collapse', function() {
        if (active) $('#accordion .in').collapse('hide');
    });

});