const createPlayer = function (name) {
  let nickname = name;

  let score = 0;

  return {
    sayMyName: () => {
      console.log(nickname);
      return nickname;
    },
    increment: function increment() {
      return score++;
    },
    showScore() {
      console.log(score);
      return score;
    },
    decrement() {
      return score--;
    },
  };
};

const heisenberg = createPlayer('Heisenberg');

const ifrit = createPlayer('Ifrit');

module.exports = heisenberg;
// module.exports = ifrit;
