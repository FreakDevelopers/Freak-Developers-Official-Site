/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

// Send mail function.
function sendEmail() {
  const form = document.querySelector('.contact_form');
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const subject = document.querySelector('#subject').value;
  const phone = document.querySelector('#phone').value;
  const msg = document.querySelector('#message').value;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "support@freakdevelopers.com",
    Password: "B11F1200EC0D85397C7DD50118B010617D98",
    To: 'thefreakdevelopers@gmail.com',
    From: "support@freakdevelopers.com",
    Subject: "New enquiry through contact form",
    Body: "Name: " + name + "<br> Email: " + email + "<br> Contact No: " + phone + "<br> Subject:" + subject + "<br> Message: " + msg
  }).then(
    message => alert("Recieved your message! We'll contact you shortly!")
  ).then(
    form.reset()
  );
}