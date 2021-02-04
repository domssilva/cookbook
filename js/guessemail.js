const guessEmail = () => {
  const email = 'd*******s';
  const len = email.length;
  const guess = [
    /*
    'domeniques',
    'domdom13s',
    'domeniqus',
    'domenisws',
    'domdomsws',
    'domdom18s',
    'domdom21s',
    */
    'domdommss',
    'dome18sws',
    'dome20sws',
    'dmonzanis',
    'domeniq7s',
    '',
    '',
    '',
  ];
  const sameSize = (str) => str.length === len;
  return guess.filter((str) => sameSize(str))
}

const main = () => {
  const res = guessEmail();
  console.log('########## TRY OUT ############');
  res.map((possible) => {
    console.log(`${possible}@hotmail.com`);
  });
  console.log('################################');
}

console.clear();
main();
