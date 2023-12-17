// 여기에 정답을 작성해주세요
// 1
function removeClass() {
  document.getElementById("target-1").classList.remove("border");
}

// 2
function changeCss() {
  let targetId = document.getElementById("target-1");
  targetId.style.left = "250px";
}

// 3
function removeAndAddClass() {
  const targets = document.getElementsByClassName("target-2");
  for (let i = 0; i < targets.length; i++) {
    let target = targets[i];

    target.classList.remove("border");
    target.classList.add("blue");
  }
}

// 4
function changeCss2() {
  let targets = document.getElementsByClassName("target-2");
  for (let i = 0; i < targets.length; i++) {
    let target = targets[i];

    target.style.left = "50px";
    target.style.marginTop = "-15px";
  }
}

// 5
function fadeOutClass() {
  let target3 = document.getElementById("target-3");

  setTimeout(function () {
    target3.classList.add("fade-out");

    let target4 = document.getElementById("target-4");
    target4.classList.add("green");
  }, 100);

  target3.addEventListener("transitionend", function () {
    target3.style.display = "none";
  });
}

// 아래 코드는 수정하지 않습니다

// 1
$("#target-1").removeClass("border");

// 2
$("#target-1").css("left", "250px");

// 3
$(".target-2").removeClass("border").addClass("blue");

// 4
$(".target-2").css({ left: 50, "margin-top": "-15px" });

// 5
$("#target-3").fadeOut(() => $("#target-4").addClass("green"));
