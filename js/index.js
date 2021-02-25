// Variables for colors
let redCol = $('#red').val();
let greenCol = $('#green').val();
let blueCol = $('#blue').val();

let redBg = $('#red').val();
let greenBg = $('#green').val();
let blueBg = $('#blue').val();

// Change colors and remember values
$('input[type=range]').on('input', function() {

    if ($('#radio-color').is(':checked')) {
        let textColor = 'rgb(' + $('#red').val() + ',' + $('#green').val() + ',' + $('#blue').val() + ')';
        $('#test-box').css({color: textColor});

        redCol = $('#red').val();
        greenCol = $('#green').val();
        blueCol = $('#blue').val();
    }

    if ($('#radio-bg').is(':checked')) {
        let textBg = 'rgb(' + $('#red').val() + ',' + $('#green').val() + ',' + $('#blue').val() + ')';
        $('#test-box').css({backgroundColor: textBg});

        redBg = $('#red').val();
        greenBg = $('#green').val();
        blueBg = $('#blue').val();
    }
})

// Insert remembered values
$('input[type=radio]').on('input', function() {
    if ($('#radio-color').is(':checked')) {
        $('#red').val(redCol);
        $('#green').val(greenCol);
        $('#blue').val(blueCol);
    }   
    
    if ($('#radio-bg').is(':checked')) {
        $('#red').val(redBg);
        $('#green').val(greenBg);
        $('#blue').val(blueBg);
    }
})