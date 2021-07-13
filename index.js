function writeCards(people, occasion) {
  let thank = [];
  for (let i = 0; i < people.length; i++) {
    thank.push(`Thank you, ${people[i]}, for the wonderful ${occasion} gift!`);
    debugger;
  }

  return thank;
}

function countDown(count) {
  while (count >= 0) {
    console.log(count);
    count--;
  }
}
