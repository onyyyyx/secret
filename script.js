$(window).load(function () {

    var body = $("body"),
        universe = $("#universe"),
        solarsys = $("#solar-system");

    var init = function () {
        body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function () {
            $(this).removeClass('hide-UI').addClass("set-speed");
            $(this).dequeue();
        });
    };

    var setView = function (view) { universe.removeClass().addClass(view); };

    $("#toggle-data").click(function (e) {
        body.toggleClass("data-open data-close");
        e.preventDefault();
    });

    $("#toggle-controls").click(function (e) {
        body.toggleClass("controls-open controls-close");
        e.preventDefault();
    });

    $("#data a").click(function (e) {
        var ref = $(this).attr("class");
        solarsys.removeClass().addClass(ref);
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    $(".set-view").click(function () { body.toggleClass("view-3D view-2D"); });
    $(".set-zoom").click(function () { body.toggleClass("zoom-large zoom-close"); });
    $(".set-speed").click(function () { setView("scale-stretched set-speed"); });
    $(".set-size").click(function () { setView("scale-s set-size"); });
    $(".set-distance").click(function () { setView("scale-d set-distance"); });

    init();

});

async function sha256(str) {
    const arrayBuffer = new TextEncoder("utf-8").encode(str)
    const hashAsArrayBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
    const uint8ViewOfHash = new Uint8Array(hashAsArrayBuffer);
    return Array.from(uint8ViewOfHash).map((b) => b.toString(16).padStart(2, '0')).join('');
}

function ask() {
    input = window.prompt('Password :')
    if (sha256(input) === 'f86c2d1da3bbb113de139e80dd19778bb3a8d3658cbaa891e45ed2fb6b6b5d1a') {
        document.getElementById('secret').innerHTML = 'I <3 Elena'
        alert('Done')
    }
    console.log(sha256(input))

}