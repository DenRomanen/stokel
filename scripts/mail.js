$.post("https://mailthis.to/mailstokel@mail.ru", {
  email: "foo@bar.co",
  _subject: "hi!",
  message: "Test"
}).then(function() {
  location.href = "https://mailthis.to/confirm";
});
