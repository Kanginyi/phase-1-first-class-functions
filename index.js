const receivesAFunction = func => func();

const returnsANamedFunction = () => receivesAFunction;

const returnsAnAnonymousFunction = () => (() => { console.log("Bingo!"); });