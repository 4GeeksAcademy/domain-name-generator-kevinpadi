let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

for (let index = 0; index < pronoun.length; index++) {
    for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
            console.log(`${pronoun[index]}${adj[a]}${noun[n]}.com`);
        }
    }
}
