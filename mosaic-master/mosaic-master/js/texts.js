function Txt(){}

// questionmark tooltip: returns html for tooltip with specified text
function questionTt(text) {
    return "<i class='fa fa-question-circle text-secondary' data-toggle='tooltip' data-placement='bottom' title=\""+text+"\"></i>";
}

Txt.gradText = "If checked, the color will be used as a part of dark-to-bright <b>gradient</b>. In this gradient, you might want to only keep one color per each brightness level, e.g. exclude <b>green</b> color because 1) it does not look great on portraits and 2) its brightness isn't different from blue color";
Txt.edText = "<b>Try Error Diffusion without this color</b><br><br>For each color that is checked, program will generate separate approximation <b>without</b> this color using <i>error diffusion</i> method. E.g. since green doesn't look great on portraits, it's tempting to check it and see what does the <i>error diffusion</i> approximation look like without green.<br>Checking a lot of colors may result in a lot of options on the first step, which may not be what you want";
Txt.availableText = "Colors that are not available will not be used at all";
Txt.editPixelByPixel = "Downloaded <i>.png</i> file is called <strong>miniature</strong>: each pixel represents a sticker on the cube. You can edit it in your favourite image editor.<br>When you're done, simply upload the edited miniature here (drag-and-drop here or menu&rarr;New mosaic). You can then download a PDF split!";


Txt.qaTitlesAndTexts = [
    "<h2 class='mt-4'>What is this?</h2>",
    "You might've seen artists doing pictures from hundreds, or even thousands of Rubik's cubes. The hurdle of this art is to make a pixelized 6-color version of the original image which closely represents the original.<br>This tool is meant to make this process as simple and automatic as possible. Note that it still requires you to prepare original picture, e.g. remove the background from the photo.<br><img src='img/tutorial.jpg' class='img-fluid'></img>",
    "<h3 class='mt-4'>Does it work with black stickers?</h3>",
"Yes. Click the menu button in the top-right corner of the page, go to palette editor and enable black color. You can change colors as you wish.",
    "<h3 class='mt-4'>I prefer to make mosaic pictures myself. Can I use this website just to split it into sections?</h3>",
    "Yes. If you have your miniature picture ready (e.g. 60x90 pixel image to make 20x30 cubes mosaic), just upload it here like you would do it with normal pictures. The program will skip all adjustments and just get you to the \"Download PDF\" stage.",
    "<h3 class='mt-4'>Why some images produce much better mosaics than others?</h3>",
    "The quality of the source picture plays crutial role. If a picture was taken in poor lighing conditions or has low contrast, it may not be suitable for mosaic. Beautifiers may also make photo inopportune as they flatten some face regions in a way that important face-feature information is lost. <strong>Grayscale pictures are okay</strong> to use for making mosaic. Definitely experiment and try different source images.",
    "<h3 class='mt-4'>How does it work?</h3>",
    "Good question! Check the <a href='https://github.com/Roman-/mosaic' target='_blank'>Github repository</a> for the explanation.",
    "<h3 class='mt-4'>I still have questions</h3>",
"Feel free to ask me anything in <a href='https://www.speedsolving.com/threads/bse-mosaic-new-cube-mosaic-building-software.76139/' target='_blank'>this speedsolving thread</a> and share your thoughts. I wish this tool will improve your experience in Mosaic building!<br>"];
