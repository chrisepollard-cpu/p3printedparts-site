(function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
    });
  }
  var form = document.getElementById("quote-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      // mailto fallback when no Formspree action is configured
      var action = form.getAttribute("action") || "";
      if (!action || action.indexOf("formspree") === -1) {
        e.preventDefault();
        var name = (form.querySelector("[name=name]") || {}).value || "";
        var email = (form.querySelector("[name=email]") || {}).value || "";
        var role = (form.querySelector("[name=role]") || {}).value || "";
        var machine = (form.querySelector("[name=machine]") || {}).value || "";
        var part = (form.querySelector("[name=part]") || {}).value || "";
        var details = (form.querySelector("[name=details]") || {}).value || "";
        var body = [
          "Name: " + name,
          "Email: " + email,
          "I am: " + role,
          "Machine / model: " + machine,
          "Part needed: " + part,
          "",
          details
        ].join("\n");
        var mailto = "mailto:quotes@p3printedparts.com?subject=" +
          encodeURIComponent("Parts quote — " + (part || machine || "P3")) +
          "&body=" + encodeURIComponent(body);
        window.location.href = mailto;
        var ok = document.querySelector(".form-success");
        if (ok) ok.style.display = "block";
      }
    });
  }
})();
