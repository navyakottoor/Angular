// 5. Create leaderboard from game scores (highest score wins)
const games = [
  { player: "Alice", score: 40 },
  { player: "Bob", score: 60 },
  { player: "Alice", score: 70 },
  { player: "Bob", score: 55 }
];
// Output: [{player:"Alice",score:70},{player:"Bob",score:60}]

let res = games.sort( (a,b) => {
        return b.score-a.score;
});

console.log(res);