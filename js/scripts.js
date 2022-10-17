// TOP BUTTON
// top 버튼을 클릭했을 때 페이지 상단으로 자연스럽게 스크롤
$("#top").click(function () {
  $("html, body").stop().animate({ scrollTop: 0 }, 800);
});

// NAVIGATION
// 스크롤값 변화에 따른 네비게이션 배경색 변경
window.addEventListener("scroll", function () {
  let top =
    window.scrollY ||
    window.pageXOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  let fixedNav = document.querySelector(".navbar");
  if (top > 50) {
    fixedNav.classList.add("navbar-active");
  } else {
    fixedNav.classList.remove("navbar-active");
  }
});

// 메뉴 버튼 클릭 시 네비게이션 show 클래스 토글
$(".btn-menu").click(function () {
  $(".navbar-media").toggleClass("navbar-show");
});

// HEADER
// Header 타이핑 텍스트
let typingTxt = "안녕하세요. 신입 웹퍼블리셔 김여경입니다.";
let typingBool = false;
let typingIdx = 0;

typingTxt = typingTxt.split(""); // 한글자씩 자른다.

if (typingBool == false) {
  // 타이핑이 진행되지 않았다면
  typingBool = true;
  var tyInt = setInterval(typing, 100); // 반복동작
}

function typing() {
  if (typingIdx < typingTxt.length) {
    // 타이핑될 텍스트 길이만큼 반복
    $(".typing-text").append(typingTxt[typingIdx]);
    // 한글자씩 이어준다.
    typingIdx++;
  } else {
    //끝나면 반복종료
    clearInterval(tyInt);
  }
}

// ABOUT
// 스크롤값 변화에 따른 섹션 fadein 작용
window.addEventListener("scroll", function () {
  let top =
    window.scrollY ||
    window.pageXOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  if (top > 100) {
    $(".about-text").addClass("show"); // fadin 스타일 적용된 클래스
  }
});

// PORTFOLIO
//케러셀 작동 swipe 구현
var 시작좌표 = 0;
var mouseClick = false;

$(".portfolio-wrap")
  .eq(0)
  .on("mousedown", function (e) {
    시작좌표 = e.clientX;
    mouseClick = true;
  });
$(".portfolio-wrap")
  .eq(0)
  .on("mousemove", function (e) {
    if (mouseClick == true) {
      $(".portfolio-list").css(
        "transform",
        `translateX(${e.clientX - 시작좌표}px)`
      );
    }
    if (e.clientX - 시작좌표 >= 0) {
      $(".portfolio-list").css("transform", "translateX(0vw)");
      $(".slide-btn").removeClass("slide-active");
      $(".slide-1").addClass("slide-active");
    }
  });
$(".portfolio-wrap")
  .eq(0)
  .on("mouseup", function (e) {
    mouseClick = false;
    if (e.clientX - 시작좌표 < -150) {
      $(".portfolio-list")
        .css("transition", "all 0.5s")
        .css("transform", "translateX(-100vw)");
      $(".slide-btn").removeClass("slide-active");
      $(".slide-2").addClass("slide-active");
    } else {
      $(".portfolio-list")
        .css("transition", "all 0.5s")
        .css("transform", "translateX(0vw)");
      $(".slide-btn").removeClass("slide-active");
      $(".slide-1").addClass("slide-active");
    }
    setTimeout(() => {
      $(".portfolio-list").css("transition", "none");
    }, 500);
  });

$(".portfolio-wrap")
  .eq(1)
  .on("mousedown", function (e) {
    시작좌표 = e.clientX;
    mouseClick = true;
  });
$(".portfolio-wrap")
  .eq(1)
  .on("mousemove", function (e) {
    if (mouseClick == true) {
      $(".portfolio-list").css(
        "transform",
        `translateX(calc(${e.clientX - 시작좌표}px - 100vw)`
      );
    }
  });
$(".portfolio-wrap")
  .eq(1)
  .on("mouseup", function (e) {
    mouseClick = false;
    if (e.clientX - 시작좌표 < -150) {
      $(".portfolio-list")
        .css("transition", "all 0.5s")
        .css("transform", "translateX(-200vw)");
      $(".slide-btn").removeClass("slide-active");
      $(".slide-3").addClass("slide-active");
    } else if (e.clientX - 시작좌표 > 150) {
      $(".portfolio-list")
        .css("transition", "all 0.5s")
        .css("transform", "translateX(0vw)");
      $(".slide-btn").removeClass("slide-active");
      $(".slide-1").addClass("slide-active");
    } else {
      $(".portfolio-list")
        .css("transition", "all 0.5s")
        .css("transform", "translateX(-100vw)");
      $(".slide-btn").removeClass("slide-active");
      $(".slide-2").addClass("slide-active");
    }
    setTimeout(() => {
      $(".portfolio-list").css("transition", "none");
    }, 500);
  });

$(".portfolio-wrap")
  .eq(2)
  .on("mousedown", function (e) {
    시작좌표 = e.clientX;
    mouseClick = true;
  });
$(".portfolio-wrap")
  .eq(2)
  .on("mousemove", function (e) {
    if (mouseClick == true) {
      $(".portfolio-list").css(
        "transform",
        `translateX(calc(${e.clientX - 시작좌표}px - 200vw)`
      );
    }
    if (e.clientX - 시작좌표 <= 0) {
      $(".portfolio-list").css("transform", "translateX(-200vw)");
      $(".slide-btn").removeClass("slide-active");
      $(".slide-3").addClass("slide-active");
    }
  });
$(".portfolio-wrap")
  .eq(2)
  .on("mouseup", function (e) {
    mouseClick = false;
    if (e.clientX - 시작좌표 > 150) {
      $(".portfolio-list")
        .css("transition", "all 0.5s")
        .css("transform", "translateX(-100vw)");
      $(".slide-btn").removeClass("slide-active");
      $(".slide-2").addClass("slide-active");
    } else {
      $(".portfolio-list")
        .css("transition", "all 0.5s")
        .css("transform", "translateX(-200vw)");
      console.log(e.clientX - 시작좌표);
      $(".slide-btn").removeClass("slide-active");
      $(".slide-3").addClass("slide-active");
    }
    setTimeout(() => {
      $(".portfolio-list").css("transition", "none");
    }, 500);
  });

// 반응형 케러셀 작동 터치 구현
$(".portfolio-wrap")
  .eq(0)
  .on("touchstart", function (e) {
    시작좌표 = e.touches[0].clientX;
    mouseClick = true;
  });
$(".portfolio-wrap")
  .eq(0)
  .on("touchmove", function (e) {
    if (mouseClick == true) {
      $(".portfolio-list").css(
        "transform",
        `translateX(${e.touches[0].clientX - 시작좌표}px)`
      );
    }
    if (e.touches[0].clientX - 시작좌표 >= 0) {
      $(".portfolio-list").css("transform", "translateX(0vw)");
      $(".slide-btn").removeClass("slide-active");
      $(".slide-1").addClass("slide-active");
    }
  });
$(".portfolio-wrap")
  .eq(0)
  .on("touchend", function (e) {
    mouseClick = false;
    if (e.changedTouches[0].clientX - 시작좌표 < -150) {
      $(".portfolio-list")
        .css("transition", "all 0.5s")
        .css("transform", "translateX(-100vw)");
      $(".slide-btn").removeClass("slide-active");
      $(".slide-2").addClass("slide-active");
    } else {
      console.log(e.changedTouches[0].clientX - 시작좌표);
      $(".portfolio-list")
        .css("transition", "all 0.5s")
        .css("transform", "translateX(0vw)");
      $(".slide-btn").removeClass("slide-active");
      $(".slide-1").addClass("slide-active");
    }
    setTimeout(() => {
      $(".portfolio-list").css("transition", "none");
    }, 500);
  });

$(".portfolio-wrap")
  .eq(1)
  .on("touchstart", function (e) {
    시작좌표 = e.touches[0].clientX;
    mouseClick = true;
  });
$(".portfolio-wrap")
  .eq(1)
  .on("touchmove", function (e) {
    if (mouseClick == true) {
      $(".portfolio-list").css(
        "transform",
        `translateX(calc(${e.touches[0].clientX - 시작좌표}px - 100vw)`
      );
    }
  });
$(".portfolio-wrap")
  .eq(1)
  .on("touchend", function (e) {
    mouseClick = false;
    if (e.changedTouches[0].clientX - 시작좌표 < -150) {
      $(".portfolio-list")
        .css("transition", "all 0.5s")
        .css("transform", "translateX(-200vw)");
      $(".slide-btn").removeClass("slide-active");
      $(".slide-3").addClass("slide-active");
    } else if (e.changedTouches[0].clientX - 시작좌표 > 150) {
      $(".portfolio-list")
        .css("transition", "all 0.5s")
        .css("transform", "translateX(0vw)");
      $(".slide-btn").removeClass("slide-active");
      $(".slide-1").addClass("slide-active");
    } else {
      $(".portfolio-list")
        .css("transition", "all 0.5s")
        .css("transform", "translateX(-100vw)");
      $(".slide-btn").removeClass("slide-active");
      $(".slide-2").addClass("slide-active");
    }
    setTimeout(() => {
      $(".portfolio-list").css("transition", "none");
    }, 500);
  });

$(".portfolio-wrap")
  .eq(2)
  .on("touchstart", function (e) {
    시작좌표 = e.touches[0].clientX;
    mouseClick = true;
  });
$(".portfolio-wrap")
  .eq(2)
  .on("touchmove", function (e) {
    if (mouseClick == true) {
      $(".portfolio-list").css(
        "transform",
        `translateX(calc(${e.touches[0].clientX - 시작좌표}px - 200vw)`
      );
    }
    if (e.touches[0].clientX - 시작좌표 <= 0) {
      $(".portfolio-list").css("transform", "translateX(-200vw)");
      $(".slide-btn").removeClass("slide-active");
      $(".slide-3").addClass("slide-active");
    }
  });
$(".portfolio-wrap")
  .eq(2)
  .on("touchend", function (e) {
    mouseClick = false;
    if (e.changedTouches[0].clientX - 시작좌표 > 150) {
      $(".portfolio-list")
        .css("transition", "all 0.5s")
        .css("transform", "translateX(-100vw)");
      $(".slide-btn").removeClass("slide-active");
      $(".slide-2").addClass("slide-active");
    } else {
      $(".portfolio-list")
        .css("transition", "all 0.5s")
        .css("transform", "translateX(-200vw)");
      $(".slide-btn").removeClass("slide-active");
      $(".slide-3").addClass("slide-active");
    }
    setTimeout(() => {
      $(".portfolio-list").css("transition", "none");
    }, 500);
  });

// 1번 버튼 클릭시 스타일 추가
$(".slide-1").on("click", function () {
  $(".portfolio-list").css("transform", "translateX(0vw)");
  imgNum = 1;
  console.log(imgNum);
  $(".slide-btn").removeClass("slide-active");
  $(".slide-1").addClass("slide-active");
});
// 2번 버튼 클릭시 스타일 추가
$(".slide-2").on("click", function () {
  $(".portfolio-list").css("transform", "translateX(-100vw)");
  imgNum = 2;
  console.log(imgNum);
  $(".slide-btn").removeClass("slide-active");
  $(".slide-2").addClass("slide-active");
});
// 3번 버튼 클릭시 스타일 추가
$(".slide-3").on("click", function () {
  $(".portfolio-list").css("transform", "translateX(-200vw)");
  imgNum = 2;
  console.log(imgNum);
  $(".slide-btn").removeClass("slide-active");
  $(".slide-3").addClass("slide-active");
});

// 이전, 다음 버튼 클릭시 스타일 추가
let slideBox = document.querySelector(".portfolio-list");
let imgCount = document.getElementsByClassName("portfolio-wrap").length;
let imgNum = 1;
// 다음 버튼 클릭 구현
document.querySelector(".next").addEventListener("click", function () {
  if (imgNum < imgCount) {
    slideBox.style.transform = "translateX(-" + imgNum + "00vw)";
    imgNum++;
    console.log(imgNum);
    $(".slide-btn").removeClass("slide-active");
    $(".slide-btn")
      .eq(imgNum - 1)
      .addClass("slide-active");
  } else {
    imgNum = 0;
    slideBox.style.transform = "translateX(-" + imgNum + "00vw)";
    imgNum++;
    console.log(imgNum);
    $(".slide-btn").removeClass("slide-active");
    $(".slide-btn")
      .eq(imgNum - 1)
      .addClass("slide-active");
  }
});
// 이전 버튼 클릭 구현
document.querySelector(".before").addEventListener("click", function () {
  if (imgNum > 1) {
    imgNum--;
    slideBox.style.transform = "translateX(-" + (imgNum - 1) + "00vw)";
    console.log(imgNum);
    $(".slide-btn").removeClass("slide-active");
    $(".slide-btn")
      .eq(imgNum - 1)
      .addClass("slide-active");
  } else {
    imgNum = 3;
    slideBox.style.transform = "translateX(-" + (imgNum - 1) + "00vw)";
    console.log(imgNum);
    $(".slide-btn").removeClass("slide-active");
    $(".slide-btn")
      .eq(imgNum - 1)
      .addClass("slide-active");
  }
});
