/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $header = $("#header"),
    $banner = $("#banner");

  // Breakpoints.
  breakpoints({
    xlarge: "(max-width: 1680px)",
    large: "(max-width: 1280px)",
    medium: "(max-width: 980px)",
    small: "(max-width: 736px)",
    xsmall: "(max-width: 480px)",
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Header.
  if ($banner.length > 0 && $header.hasClass("alt")) {
    $window.on("resize", function () {
      $window.trigger("scroll");
    });

    $banner.scrollex({
      bottom: $header.outerHeight(),
      terminate: function () {
        $header.removeClass("alt");
      },
      enter: function () {
        $header.addClass("alt");
      },
      leave: function () {
        $header.removeClass("alt");
      },
    });
  }

  // Menu.
  var $menu = $("#menu");

  $menu._locked = false;

  $menu._lock = function () {
    if ($menu._locked) return false;

    $menu._locked = true;

    window.setTimeout(function () {
      $menu._locked = false;
    }, 350);

    return true;
  };

  $menu._show = function () {
    if ($menu._lock()) $body.addClass("is-menu-visible");
  };

  $menu._hide = function () {
    if ($menu._lock()) $body.removeClass("is-menu-visible");
  };

  $menu._toggle = function () {
    if ($menu._lock()) $body.toggleClass("is-menu-visible");
  };

  $menu
    .appendTo($body)
    .on("click", function (event) {
      event.stopPropagation();

      // Hide.
      $menu._hide();
    })
    .find(".inner")
    .on("click", ".close", function (event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      // Hide.
      $menu._hide();
    })
    .on("click", function (event) {
      event.stopPropagation();
    })
    .on("click", "a", function (event) {
      var href = $(this).attr("href");

      event.preventDefault();
      event.stopPropagation();

      // Hide.
      $menu._hide();

      // Redirect.
      window.setTimeout(function () {
        window.location.href = href;
      }, 350);
    });

  $body
    .on("click", 'a[href="#menu"]', function (event) {
      event.stopPropagation();
      event.preventDefault();

      // Toggle.
      $menu._toggle();
    })
    .on("keydown", function (event) {
      // Hide on escape.
      if (event.keyCode == 27) $menu._hide();
    });
})(jQuery);

//animation

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  document.getElementById("image1").classList.add("bounce");
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

function mediaFunction(x) {
  if (x.matches) {
    // If media query matches
    window.onscroll = function () {
      mobileVersion();
    };
  } else {
    window.onscroll = function () {
      desktopVersion();
    };
  }
}

var x = window.matchMedia("(max-width: 700px)");
mediaFunction(x); // Call listener function at run time
x.addListener(mediaFunction); // Attach listener function on state changes

function mobileVersion() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    document.getElementById("design").className = "slideLeft";
    document.getElementById("image2").classList.add("bounce");
  }
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    document.getElementById("frontend").className = "slideRight";
    document.getElementById("image3").classList.add("bounce");
  }
  if (
    document.body.scrollTop > 1600 ||
    document.documentElement.scrollTop > 1600
  ) {
    document.getElementById("backend").className = "slideLeft";
    document.getElementById("image4").classList.add("bounce");
  }
  if (
    document.body.scrollTop > 2000 ||
    document.documentElement.scrollTop > 2000
  ) {
    document.getElementById("recent").className = "slideRight";
  }
  if (
    document.body.scrollTop > 2200 ||
    document.documentElement.scrollTop > 2200
  ) {
    document.getElementById("text").className = "slideLeft";
  }
  if (
    document.body.scrollTop > 2350 ||
    document.documentElement.scrollTop > 2350
  ) {
    document.getElementById("p1").className = "fade-in";
  }
  if (
    document.body.scrollTop > 3100 ||
    document.documentElement.scrollTop > 3100
  ) {
    document.getElementById("p2").className = "fade-in";
  }
  if (
    document.body.scrollTop > 4100 ||
    document.documentElement.scrollTop > 4100
  ) {
    document.getElementById("p3").className = "fade-in";
  }
  if (
    document.body.scrollTop > 5000 ||
    document.documentElement.scrollTop > 5000
  ) {
    document.getElementById("p4").className = "fade-in";
  }
  if (
    document.body.scrollTop > 5300 ||
    document.documentElement.scrollTop > 5300
  ) {
    document.getElementById("p5").className = "slideRight";
  }
  if (
    document.body.scrollTop > 5400 ||
    document.documentElement.scrollTop > 5400
  ) {
    document.getElementById("p6").className = "slideLeft";
  }
}

function desktopVersion() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    document.getElementById("design").className = "slideLeft";
    document.getElementById("image2").classList.add("bounce");
  }
  if (
    document.body.scrollTop > 1200 ||
    document.documentElement.scrollTop > 1200
  ) {
    document.getElementById("frontend").className = "slideRight";
    document.getElementById("image3").classList.add("bounce");
  }
  if (
    document.body.scrollTop > 1900 ||
    document.documentElement.scrollTop > 1900
  ) {
    document.getElementById("backend").className = "slideLeft";
    document.getElementById("image4").classList.add("bounce");
  }
  if (
    document.body.scrollTop > 2300 ||
    document.documentElement.scrollTop > 2300
  ) {
    document.getElementById("recent").className = "slideRight";
  }
  if (
    document.body.scrollTop > 2400 ||
    document.documentElement.scrollTop > 2400
  ) {
    document.getElementById("text").className = "slideLeft";
  }
  if (
    document.body.scrollTop > 2600 ||
    document.documentElement.scrollTop > 2600
  ) {
    document.getElementById("p1").className = "fade-in";
  }
  if (
    document.body.scrollTop > 2700 ||
    document.documentElement.scrollTop > 2700
  ) {
    document.getElementById("p2").className = "fade-in";
  }
  if (
    document.body.scrollTop > 3200 ||
    document.documentElement.scrollTop > 3200
  ) {
    document.getElementById("p3").className = "fade-in";
  }
  if (
    document.body.scrollTop > 3300 ||
    document.documentElement.scrollTop > 3300
  ) {
    document.getElementById("p4").className = "fade-in";
  }
  if (
    document.body.scrollTop > 4400 ||
    document.documentElement.scrollTop > 4400
  ) {
    document.getElementById("p5").className = "slideRight";
  }
  if (
    document.body.scrollTop > 4300 ||
    document.documentElement.scrollTop > 4300
  ) {
    document.getElementById("p6").className = "slideLeft";
  }
}

document.getElementById("image1").onclick = function () {
  if (document.getElementById("image1").classList.length > 0) {
    document.getElementById("image1").classList.remove("bounce");
  } else {
    document.getElementById("image1").classList.add("bounce");
  }
};

document.getElementById("image2").onclick = function () {
  if (document.getElementById("image2").classList.length > 0) {
    document.getElementById("image2").classList.remove("bounce");
    document.getElementById("image2").classList.add("slideLeft");
  } else {
    document.getElementById("image2").classList.add("bounce");
  }
};

document.getElementById("image3").onclick = function () {
  if (document.getElementById("image3").classList.length > 0) {
    document.getElementById("image3").classList.remove("bounce");
    document.getElementById("image3").classList.add("slideLeft");
  } else {
    document.getElementById("image3").classList.add("bounce");
  }
};

document.getElementById("image4").onclick = function () {
  if (document.getElementById("image4").classList.length > 0) {
    document.getElementById("image4").classList.remove("bounce");
    document.getElementById("image4").classList.add("slideLeft");
  } else {
    document.getElementById("image4").classList.add("bounce");
  }
};

// Sunset MODE

document.getElementById("darkMode").onclick = function () {
  var audio = new Audio("images/swish.mp3");
  audio.play();

  if (document.getElementById("darkMode").classList.length < 1) {
    document.getElementById("darkMode").classList.add("darkMode");
    document.getElementById("darkMode").classList.add("dark-text");
    document.getElementById("banner").classList.add("dark");
    document.getElementById("h2").classList.add("dark-text");
    document.getElementById("wrapper").classList.add("dark-wrapper");
    document.getElementById("button").classList.add("dark-text");
  } else {
    document.getElementById("darkMode").classList.remove("darkMode");
    document.getElementById("darkMode").classList.remove("dark-text");
    document.getElementById("banner").classList.remove("dark");
    document.getElementById("h2").classList.remove("dark-text");
    document.getElementById("wrapper").classList.remove("dark-wrapper");
    document.getElementById("button").classList.remove("dark-text");
    document.getElementById("two").classList.remove("dark");
  }
};
