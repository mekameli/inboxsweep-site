// Bot-proof email protection
// No email address exists in HTML source — assembled only on human interaction
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var els = document.querySelectorAll('.email-protect');
    for (var i = 0; i < els.length; i++) {
      (function(el) {
        el.addEventListener('click', function(e) {
          e.preventDefault();
          var u = this.getAttribute('data-u');
          var d = this.getAttribute('data-d');
          if (!u || !d) return;
          var addr = u + String.fromCharCode(64) + d;
          // First click: reveal the address
          if (!this.classList.contains('revealed')) {
            this.textContent = addr;
            this.classList.add('revealed');
            this.title = 'Click again to send email';
          } else {
            // Second click: open mailto
            window.location.href = String.fromCharCode(109,97,105,108,116,111,58) + addr;
          }
        });
      })(els[i]);
    }
  });
})();
