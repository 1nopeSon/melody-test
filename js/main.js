$(document).ready(function () {
    
    var currentFloor = 02;
    $(".home-image path").on('mouseover', function() {
        $(".home-image path").removeClass("current-floor");
        currentFloor = $(this).attr('data-floor');
        $(".counter").text(currentFloor);
    });

    $(".counter-up").on('click', function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
            $(".counter").text(usCurrentFloor);
            $(".home-image path").removeClass("current-floor");
            $(`[data-floor =${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    $(".counter-down").on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
            $(".counter").text(usCurrentFloor);
            $(".home-image path").removeClass("current-floor");
            $(`[data-floor =${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    var modal = $(".modal");
    $(".home-image path").on("click", toggleModal);

    $(".modal-close-button").on("click", toggleModal);

    $(".view-flats").on("click", toggleModal);

    function toggleModal () {
        modal.toggleClass(('is-open'));
        $(".modal-counter").text(currentFloor);
    }
}); 