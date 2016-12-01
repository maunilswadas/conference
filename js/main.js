$(document).ready(function (){
    $('.slider').slider({full_width: true});
    $('.modal-trigger').leanModal();
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();
    var TechData=Handlebars.templates['TechnicalCommittee'](technicalCommitteeData);
    $('#technical-committee').html(TechData);

});
