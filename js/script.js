// global variables 
let $mattepostHeader = $('.mattepost-header')
let $mattepostText = $('.mattepost-text')
let $EditHeader = $('.edit-header')
let $EditText = $('.edit-text')
let $ColorHeader = $('.color-header')
let $ColorText = $('.color-text')
let $SoundHeader = $('.sound-header')
let $SoundText = $('.sound-text')
let $VfxHeader = $('.vfx-header')
let $VfxText = $('.vfx-text')
let $OnlineHeader = $('.online-header')
let $OnlineText = $('.online-text')
let $SlideArr = $('.slide-page')
// Language 
let langEN = {
    smallScreen:`Please use bigger device for look up...`,
    header1:`MattePost`,
    paragraph1:`ENGLİSH Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, ullam, numquam debitis aliquam porro neque consequatur praesentium maiores quam corrupti vitae soluta mollitia dolor? Vitae excepturi tempora officia tempore quod.`,
    header2:`Edit`,
    paragraph2:`In order to bring a dream that falls to the minds at the beginning of the creative process
    from the point you have brought after a long and exhausting set process with your
    efforts, to the point you dream; we embrace your projects with our large and
    professional team, who tries to understand your narrative language by imagining with
    the same thrill as you, and meticulously reveals their creative view. In the spacious,
    sterile, and comfortable work areas with balcony equipped with factors that enhances
    creativity, we are at your service for your TV series, movies, commercials, music videos
    and television programs with our 30 editing sets that we have created and integrated by
    following all the technological developments of the industry of editing instruments. In
    these times, where the importance of remote connection is increasing, our facility can
    work simultaneously with the whole world with the internet speed of up to 200 mbit with
    the latest technology of Radiolink.`,
    header3:`Color`,
    paragraph3:`The narrative you create in the editing process can be passed on to the audience as you
    have imagined, with a creative team that has embraced your narrative language, has
    the same perspective, and follow the industry's worldwide technology standards. As
    Mattepost, we provide services in our workspaces with sterile, comfortable and wide
    reference monitors, with our creative team that will be in direct contact with you in order
    to revive your color world in your project with the Filmlight Baselight and Davinci Resolve
    Color Grading systems, which we have created and integrated with industry standards
    worldwide. With our 4K video projection and integrated curtains, we have a Color hall,
    where you can control the final products in their real standards. In our facility, which
    offers integrated services in all areas from the beginning to the end of the postproduction process, we offer the opportunity to download and upload simultaneously
    with the whole world with the internet speed up to 200 mbit with the latest technology of
    Radiolink.`,
    header4:`Sound`,
    paragraph4:`We care about the sound world of your projects in our facility, which serves at every
    stage of the post production process. Together with our expert sound designers, we
    serve creative sound design process in our mixing and dubbing rooms, which can have
    3 MacOS and Windows systems with world industry-standard sound processing
    instruments: Pro Tools and Nuendo. We are at your service with a mini movie theater
    equipped with Dolby Digital 5.1 Surround system in order to examine the product after
    this creative process meticulously, before it reaches the audience.`,
    header5:`VFX`,
    paragraph5:`With our CGI and VFX supervisors, designers, 3D and 2D artists, who give importance
    to the creative process as much as the application, we can carry out your project from
    every stage of the visual effects process. In our VFX studios established by following the
    technological developments of the industry, we are at your service with high rendering
    speed and one-on-one communication with our creative supervisors for your TV series,
    movies, commercials, music videos and television programs without excluding any
    platform from the shooting process. In addition, your projects can be carried out
    simultaneously with the whole world with the internet speed of up to 200 mbit and with
    the latest technology of Radiolink in our facility.`,
    header6:`Online`,
    paragraph6:`Thanks to our radiolink internet connection reaching up to 200mbit, with fast rendering
    and export times in our systems we have created by following the latest technological
    developments of the industry in the online process, which finalizes your projects that you
    have implemented with great efforts before reaching the audience; we, as Mattepost,
    are at your side with the opportunity to test your final products in our mini movie theater
    equipped with 5.1 Dolby digital sound system and 4K projection system with fast
    download and upload possibilities.`,

}

var $video = $('video')
let reverseArr = [];
var body = document.querySelector('body')
var stepCounter = 0;
let logo = $('.mattepost-logo')
let buttons = $('.lang-buttons')
let preloaderHalfTop = $('.half-top')
let preloaderHalfBottom = $('.half-bottom')

let preloaderHalfTopHR = $('.half-top hr')
let preloaderHalfBottomHR = $('.half-bottom hr')
let isVideoLeft = true;
function startAnimation(){
    switch (stepCounter % 2) {
        case 0:        

            if (isVideoLeft) {
                isVideoLeft = false;
                
                slideXForHide()

            }    else{

                slideYForHide()

                isVideoLeft = true;

            }
            
            break;
        case 1:
            goNextSection()
            loadPageItems()

                break;
        default:
            break;
    }
}
for (let i = 0; i < $SlideArr.length; i++) {
    $($SlideArr[i+1]).css({"display":"none"})
}
function slideXForHide(){
    var $rightTextArea = $('.layout-bottom-right')
    var $leftVideoArea = $('.layout-bottom-left')
    var $pageContainer = $('.slide-absolute')
    var $topHeader = $('.layout-top')
        
        gsap.fromTo($($topHeader[stepCounter/2]) , .5 ,{height:"10%",ease:Linear.easeNone}, {height:"0%",ease:Linear.easeNone},0.5)
        gsap.to($($rightTextArea[stepCounter/2]),.5,{x:"+=100%", ease:Linear.easeNone,delay:0.5})
        gsap.to($($leftVideoArea[stepCounter/2]),.5,{x:"+=50%", ease:Linear.easeNone,delay:0.5})
        gsap.to($($leftVideoArea[stepCounter/2]),.5,{width:"100%",height:"100%",  delay:1})
        gsap.to($($leftVideoArea[stepCounter/2]),.5,{x:"-=50%",  delay:1})
        gsap.to($($pageContainer[stepCounter/2]),.5,{width:"100%",height:"100%",  delay:1.5})
        // TweenLite.to($topHeader,1,{authoAlpha:'1',display:'none', delay:2.5})
        setTimeout(()=>{
            $($video[(stepCounter-1)/2]).attr("controls","true")
        },3000)

}
function slideYForHide(){
    var $rightVideoArea = $('.layout-bottom-right')
    var $leftTextArea = $('.layout-bottom-left')
    var $pageContainer = $('.slide-absolute')
    var $topHeader = $('.layout-top')
        gsap.fromTo($($topHeader[stepCounter/2]) , .5 ,{height:"10%",ease:Linear.easeNone}, {height:"0%",ease:Linear.easeNone},0.5)
        gsap.to($($leftTextArea[stepCounter/2]),.5,{x:"-=100%", ease:Linear.easeNone,delay:0.5})
        gsap.to($($rightVideoArea[stepCounter/2]),.5,{x:"-=50%", ease:Linear.easeNone,delay:0.5})
        gsap.to($($rightVideoArea[stepCounter/2]),.5,{width:"100%",height:"100%",  delay:1})
        gsap.to($($rightVideoArea[stepCounter/2]),.5,{x:"+=50%",  delay:1})
        gsap.to($($pageContainer[stepCounter/2]),.5,{width:"100%",height:"100%",  delay:1.5})
        // TweenLite.to($topHeader,1,{authoAlpha:'1',display:'none', delay:2.5})
        setTimeout(()=>{
            $($video[(stepCounter-1)/2]).attr("controls","true")
        },3000)
}

 function loadPageItems(){
    console.log($SlideArr[Math.round(stepCounter/2)])
    $($SlideArr[Math.round(stepCounter/2)]).find('.layout-bottom-left').delay(1000).animate({left: "0"})
    $($SlideArr[Math.round(stepCounter/2)]).find('.layout-bottom-right').delay(1000).animate({right: "0"})

}

function goNextSection(){
    $($SlideArr[Math.round(stepCounter/2)]).css({"display" : "flex"})
    $($('.slide-page')[Math.round(stepCounter/2)-1]).animate({top:"-100%"},1000)
}





function makePageToFullScreen() {
    if (body.requestFullscreen()) {
        body.requestFullscreen();
      } else if (body.webkitRequestFullscreen) { /* Safari */
        body.webkitRequestFullscreen();
      } else if (body.msRequestFullscreen) { /* IE11 */
        body.msRequestFullscreen();
      }
}
// Key Listener
addEventListener('keypress', (event)=>{
    if (event.key == 'i') {
        startAnimation()
        if (stepCounter >= ((reverseArr.length * 2) - 1)) {
            stepCounter =  (reverseArr.length * 2) - 1;  
            console.log("burda", (reverseArr.length * 2) - 1 )
        }else{
            stepCounter++;
        }
    }
    
    if (event.key == 'f') {
        makePageToFullScreen()    
    }
    
    if (event.key == 's') {
        console.log(stepCounter)
    }
})
// PRELOADER
function loadPreloader(){
    gsap.to(logo , { opacity:1  , transition : "1s"}).delay(1)
    gsap.from(buttons , {y:"100vh", duration:1}).delay(1)
    gsap.to(buttons , { y: "-150"  , transition : "1s",}).delay(1)
}
function closePreloader(){
    gsap.to(logo , { y:"-25vh"  , transition : "1s"})
    gsap.to(buttons , {y:"100vh", duration:3})
    gsap.to(preloaderHalfBottomHR, {width:"100vw", opacity:1 , duration:2}).delay(1)
    gsap.to(preloaderHalfTopHR, {width:"100vw" , opacity:1 , duration:2}).delay(1)
    gsap.to(logo , { y:"-55vh"  , transition : "1s" ,ease:Power1}).delay(3)
    gsap.to(preloaderHalfBottom, {y:"50vh", duration:2}).delay(3)
    gsap.to(preloaderHalfTop, {y:"-50vh", duration:2}).delay(3)
    gsap.to($('.mattepost-preloader'), {display:"none"}).delay(5)
}
//Reverse Array
$(document).ready(()=>{
    let $pageArr = $('section')
    for (let i = 0; i < $pageArr.length; i++) {
            reverseArr.push($pageArr[i])
        
    }

    $(reverseArr.reverse()).each((i,v)=>{

            $(v).css({"z-index" : i+1})

    })
    loadPreloader();
})
function selectSlideLang(elem) {
    languageFunc($(elem).attr('data-lang'))
    closePreloader()
    
}
function languageFunc(lang){
    if (lang != "TR") {
        $mattepostHeader.text(langEN.header1) 
        $mattepostText.text(langEN.paragraph1)  

        $EditHeader.text(langEN.header2) 
        $EditText.text(langEN.paragraph2)

        $ColorHeader.text(langEN.header3) 
        $ColorText.text(langEN.paragraph3)

        $SoundHeader.text(langEN.header4) 
        $SoundText.text(langEN.paragraph4)

        $VfxHeader.text(langEN.header5) 
        $VfxText.text(langEN.paragraph5)

        $OnlineHeader.text(langEN.header6) 
        $OnlineText.text(langEN.paragraph6)
        
        $('.gallery i').text(langEN.smallScreen)
                
    }

}

loadPageItems()





console.clear();

gsap.registerPlugin(Draggable, InertiaPlugin);

// from https://stackoverflow.com/a/32751487/2065702
function moveArrayIndex(array, oldIndex, newIndex) {
    if (newIndex >= array.length) {
        newIndex = array.length - 1;
    }
    array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
    return array;
}


function checkPositions(elem) {
  // Find the location in our array of the element
  let rowIndex = -1,
      imgIndex = -1;
  imgRep.forEach((row, i) => {
    row.forEach((img, j) => {
      if(elem.isSameNode(img)) {
        rowIndex = i;
        imgIndex = j;
      }
    });
  });
  
  // Element not found, return
  if(rowIndex === -1)
    return;
  
  // Reposition elements as necessary so that our element is in the center
  // Reposition the rows as necessary
  if(rowIndex < rowMidIndex) {
    for(let i = rowIndex; i < rowMidIndex; i++) {
      // Update the row's actual position
      let rowY = gsap.getProperty(rowArray[0], "y");
      
      if(rowArray.length % 2 === 1) { // Odd number of rows means we have to handle offset
        let row = rowArray[rowArray.length - 1];
        if(row.dataset.offset === "true") {
          gsap.set(row, {y: rowY - gutter - boxHeight, x: "+=" + boxWidth / 2});
          row.dataset.offset = "false";
        } else {
          gsap.set(row, {y: rowY - gutter - boxHeight, x: "-=" + boxWidth / 2});
          row.dataset.offset = "true";
        }
      } else { // Equal number of rows; don't have to handle offset
        gsap.set(rowArray[rowArray.length - 1], {y: rowY - gutter - boxHeight});
      }
      
      // Update our representations
      moveArrayIndex(imgRep, imgRep.length - 1, 0);
      moveArrayIndex(rowArray, rowArray.length - 1, 0);
    }
  } else if(rowIndex > rowMidIndex) {
    for(let i = rowMidIndex; i < rowIndex; i++) {
      // Update the row's actual position
      let rowY = gsap.getProperty(rowArray[rowArray.length - 1], "y");
      
      if(rowArray.length % 2 === 1) { // Odd number of rows means we have to handle offset
        let row = rowArray[0];
        if(row.dataset.offset === "true") {
          gsap.set(row, {y: rowY + gutter + boxHeight, x: "-=" + boxWidth / 2});
          row.dataset.offset = "false";
        } else {
          gsap.set(row, {y: rowY + gutter + boxHeight, x: "+=" + boxWidth / 2});
          row.dataset.offset = "true";
        }
      } else { // Equal number of rows; don't have to handle offset
        gsap.set(rowArray[0], {y: rowY + gutter + boxHeight});
      }
      
      // Update our representations
      moveArrayIndex(imgRep, 0, imgRep.length - 1);
      moveArrayIndex(rowArray, 0, rowArray.length - 1);
    }
  }
  
  
  // Reposition the images as necessary
  if(imgIndex < imgMidIndex) {
    for(let rowNum = 0; rowNum < rows.length; rowNum++) { // Do it for every row
      let row = imgRep[rowNum];
      
      for(let i = imgIndex; i < imgMidIndex; i++) {
        // Update the images's actual position
        let imgX = gsap.getProperty(row[0], "x");

        gsap.set(row[row.length - 1], {x: imgX - gutter - boxWidth});

        // Update our representation
        moveArrayIndex(row, row.length - 1, 0);
      }
    }
  } else if(imgIndex > imgMidIndex) {
    for(let rowNum = 0; rowNum < rows.length; rowNum++) { // Do it for every row
      let row = imgRep[rowNum];
      
      for(let i = imgMidIndex; i < imgIndex; i++) {
        // Update the images's actual position
        let imgX = gsap.getProperty(row[imgNum - 1], "x");

        gsap.set(row[0], {x: imgX + gutter + boxWidth});

        // Update our representation
        moveArrayIndex(row, 0, row.length - 1);
      }
    }
  }
}


function centerGrid() {
  let bcr = lastCenteredElem.getBoundingClientRect();
  let midX = bcr.x + bcr.width / 2;
  let midY = bcr.y + bcr.height / 2;
  
  let x = winMidX - midX;
  let y = winMidY - midY;
  
  gsap.to(containerSelector, {
    ease: "sine.inOut",
    duration: 0.7,
    x: "+=" + x,
    y: "+=" + y
  });
}

function getCenterCoords(endX, endY) {
  return {x: winMidX - endX, y: winMidY - endY}
}

function updateCenterElem() {
  let elems = document.elementsFromPoint(winMidX, winMidY);
  elems.forEach(elem => {
    if(elem.matches(imageSelector) && !lastCenteredElem.isSameNode(elem)) {
      lastCenteredElem = elem; 
      
      checkPositions(lastCenteredElem);
    }
  });
}



const containerId = "imageContainer";
const containerSelector = "#" + containerId;
const rowClass = "row"
const rowSelector = "." + rowClass;
const imageClass = "sliderImage";
const imageSelector = "." + imageClass;
const imgURLArray = null;
const imgURLArrayLength = imgURLArray ? imgURLArray.length : -1;
const rowNum = 5;
const imgNum = 9;

const useInertia = true;
const useCenterGrid = true;

let rows,
    imgMidIndex,
    rowMidIndex;
const rowArray = [];
const imgRep = [];

let boxWidth,
    boxHeight,
    gutter,
    horizSpacing,
    vertSpacing,
    horizOffset,
    vertOffset,
    winMidX,
    winMidY,
    lastCenteredElem;

function createImageGrid() {
  for(let y = 0; y < rowNum; y++) {
    let row = document.createElement("div");
    row.className = rowClass;
      for(let x = 0; x < imgNum; x++) {
        let image = document.createElement("div");
        image.className = imageClass;
        row.appendChild(image);
      }
    document.querySelector(containerSelector).appendChild(row);
    
    // Add the images to our representation
    imgRep.push(gsap.utils.toArray(row.querySelectorAll(imageSelector)));
  }
  
  rows = document.querySelectorAll(rowSelector),
  imgMidIndex = Math.floor(imgNum / 2),
  rowMidIndex = Math.floor(rowNum / 2);
}

function createMask() {
  let mask = document.createElement("div");
  mask.className = "mask";
  document.body.appendChild(mask);
  
  gsap.set(mask, {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 9999,
    // backgroundColor: "green",
    // opacity: "0.2",
  });
}

function resize() {
  winMidX = innerWidth / 2;
  winMidY = innerHeight / 2;
  boxWidth = innerWidth * 0.35;
  boxHeight = innerHeight * 0.35;
  gutter = innerWidth * 0.05;
  horizSpacing = boxWidth + gutter;
  vertSpacing = boxHeight + gutter;
  horizOffset = -(imgMidIndex * horizSpacing + boxWidth / 2) + winMidX;
  vertOffset = -(rowMidIndex * vertSpacing + boxHeight / 2) + winMidY;
  
  // Reset our container and rows
  gsap.set(containerSelector, {x: 0, y: 0});
  
  rows.forEach(function(row, i) {
    gsap.set(row, {
      attr: { 
        "data-offset": function() {
          if(i % 2 === 0) return false;
          else return true;
        }
      },
      x: function() {
        if(i % 2 === 0)
          return horizOffset;
        else
          return horizOffset - boxWidth / 2;
      },
      y: function() {
        return i * vertSpacing + vertOffset;
      },
    });

    gsap.set(row.querySelectorAll(imageSelector), {
      width: boxWidth,
      height: boxHeight,
      x: function(index) {
        return index * horizSpacing;
      }
    });
    
    // Update our representation of the rows
    rowArray[i] = row;
  });
}

function setStyles() {
  gsap.set("body", {
    margin: 0,
    overflow: "hidden"
  });
  
  const randImgSize = Math.floor( Math.max(innerWidth, innerHeight) / 3);
  gsap.set(imageSelector, {
    backgroundImage: function(index) {
      if(imgURLArray) {
        return imgURLArray[index % imgURLArrayLength];
      } else 
        return `url(https://picsum.photos/${randImgSize}/${randImgSize}?random=${index})`;
    },
    position: "absolute",
    backgroundSize: "cover",
    backgroundPosition: "center",
    top: 0,
    left: 0
  });
  
  gsap.set(rowSelector, {
    position: "absolute"
  });
}

function createDraggable() {
  let options = {
    trigger: ".mask",
    dragResistance: 0.4,
    resistance: 400,
    onDrag: updateCenterElem,
  }
  
  if(useInertia) {
    options.inertia = true;
    options.onThrowUpdate = updateCenterElem;
    
    if(useCenterGrid) {
      options.onThrowComplete = centerGrid;
    }
  } else if(useCenterGrid) { // No inertia
    options.onDragEnd = centerGrid;
  }
      
  return Draggable.create(containerSelector, options);
}

function init() {
  gsap.set(containerSelector, {willChange: "transform"});
  
  createImageGrid();
  createMask();
  lastCenteredElem = document.querySelectorAll(imageSelector)[(rowMidIndex - 1) * imgNum + imgMidIndex];
  
  createDraggable();
  
  setStyles();
  
  resize();
  window.addEventListener("resize", resize);
}

init();
