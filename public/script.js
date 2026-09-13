/* ==========================================================================
   MAA JANKI TILES & MARBLES — script.js (vanilla JS, no libraries)
   Handles: sticky navbar, mobile menu, scroll reveal, FAQ accordion,
            product filtering, gallery lightbox.
   ========================================================================== */
(function () {
  "use strict";

  function init() {
    /* ---- Sticky / compact navbar ---- */
    var header = document.querySelector(".site-header");
    if (header) {
      var onScroll = function () {
        header.classList.toggle("is-scrolled", window.scrollY > 40);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    /* ---- Mobile menu ---- */
    var toggle = document.querySelector(".nav-toggle");
    var menu = document.querySelector(".mobile-menu");
    var backdrop = document.querySelector(".menu-backdrop");
    var setMenu = function (open) {
      if (!menu || !toggle) return;
      menu.classList.toggle("is-open", open);
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (backdrop) backdrop.classList.toggle("is-open", open);
      document.body.style.overflow = open ? "hidden" : "";
    };
    if (toggle) {
      toggle.addEventListener("click", function () {
        setMenu(!menu.classList.contains("is-open"));
      });
    }
    if (backdrop) backdrop.addEventListener("click", function () { setMenu(false); });
    if (menu) {
      menu.addEventListener("click", function (e) {
        if (e.target.closest("a")) setMenu(false);
      });
    }
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { setMenu(false); closeLightbox(); }
    });

    /* ---- Scroll reveal ---- */
    var revealables = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && revealables.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
      revealables.forEach(function (el) { io.observe(el); });
    } else {
      revealables.forEach(function (el) { el.classList.add("is-visible"); });
    }

    /* ---- FAQ accordion ---- */
    document.querySelectorAll(".faq-q").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".faq-item");
        var panel = item.querySelector(".faq-a");
        var open = item.classList.contains("is-open");
        document.querySelectorAll(".faq-item.is-open").forEach(function (other) {
          other.classList.remove("is-open");
          other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
          other.querySelector(".faq-a").style.maxHeight = null;
        });
        if (!open) {
          item.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });

    /* ---- Product category filter ---- */
    var chips = document.querySelectorAll(".chip[data-filter]");
    var cards = document.querySelectorAll(".product-card[data-category]");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var value = chip.getAttribute("data-filter");
        chips.forEach(function (c) { c.classList.remove("is-active"); });
        chip.classList.add("is-active");
        cards.forEach(function (card) {
          var show = value === "all" || card.getAttribute("data-category") === value;
          card.style.display = show ? "" : "none";
        });
      });
    });

    /* ---- Gallery lightbox ---- */
    var lightbox = document.querySelector(".lightbox");
    var lbImage = document.querySelector(".lightbox img");
    var lbCaption = document.querySelector(".lb-caption");
    var triggers = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox]"));
    var index = 0;

    function show(i) {
      if (!triggers.length || !lbImage) return;
      index = (i + triggers.length) % triggers.length;
      var img = triggers[index].querySelector("img");
      lbImage.src = img.getAttribute("src");
      lbImage.alt = img.getAttribute("alt") || "";
      if (lbCaption) lbCaption.textContent = img.getAttribute("alt") || "";
    }
    function openLightbox(i) {
      if (!lightbox) return;
      show(i);
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
    function closeLightbox() {
      if (!lightbox) return;
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    triggers.forEach(function (el, i) {
      el.addEventListener("click", function () { openLightbox(i); });
    });
    document.querySelectorAll(".lb-close").forEach(function (b) {
      b.addEventListener("click", closeLightbox);
    });
    document.querySelectorAll(".lb-prev").forEach(function (b) {
      b.addEventListener("click", function () { show(index - 1); });
    });
    document.querySelectorAll(".lb-next").forEach(function (b) {
      b.addEventListener("click", function () { show(index + 1); });
    });
    if (lightbox) {
      lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) closeLightbox();
      });
    }
    document.addEventListener("keydown", function (e) {
      if (!lightbox || !lightbox.classList.contains("is-open")) return;
      if (e.key === "ArrowRight") show(index + 1);
      if (e.key === "ArrowLeft") show(index - 1);
    });

    /* ---- Current year in footer ---- */
    var yearEl = document.querySelector("[data-year]");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
