var words = [
  "Привет",
  "Хэлло",
  "Доброго времени суток",
  "Как дела?",
  "Отлично выглядишь"
];

exports.getWords = function() {
  var ranWord = Math.floor(Math.random() * words.length);
  return words[ranWord];
};
