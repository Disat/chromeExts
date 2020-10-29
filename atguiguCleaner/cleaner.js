"use strict";

window.onload = function () {
  //   if (document.querySelector(".toutiao_con")) {
  //     document.querySelector(".toutiao_con").remove();
  //   }

  //   if (document.querySelector(".toolbar")) {
  //     document.querySelector(".toolbar").remove();
  //   }

  //   if (document.querySelector(".online-left")) {
  //     document.querySelector(".online-left").remove();
  //   }

  //   if (document.querySelector("#hz6d_kf_icon_1")) {
  //     document.querySelector("#hz6d_kf_icon_1").remove();
  //   }

  //   if (document.querySelector(".headerbg")) {
  //     document.querySelector(".headerbg").remove();
  //   }

  //   if (document.querySelector("#nav_composition")) {
  //     document.querySelector("#nav_composition").remove();
  //   }

  //   if (document.querySelector(".video_r_nav>h1")) {
  //     document.querySelector(".video_r_nav>h1").remove();
  //   }

  //   if (document.querySelector(".hint_con")) {
  //     document.querySelector(".hint_con").remove();
  //   }

  // let removeElemnent = function (CSSSelector) {
  //   if (document.querySelector(CSSSelector)) {
  //     document.querySelector(CSSSelector).remove();
  //   }
  // };

  let CSSSelectors = [
    ".toutiao_con",
    ".toolbar",
    ".online-left",
    "#hz6d_kf_icon_1",
    "#nav_composition",
    ".video_r_nav>h1",
    ".hint_con",
    ".headerbg",
  ];

  CSSSelectors.forEach((CSSSelector) => {
    if (document.querySelector(CSSSelector)) {
      document.querySelector(CSSSelector).remove();
    }
  });
};
