bootbox.hideAll();
bootbox.dialog({
  title: "<span class='text-success'>Success</span>",
  message: '<h5><span class="text-default">You are now using <b>libs.js</b></span></h5>'
});

function testLibs () {
    bootbox.dialog({
        title: "<span class='text-success'>libs.js: IT WORKS</span>",
        message: ' '
    });
 }