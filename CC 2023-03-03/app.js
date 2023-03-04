// kyu: 8
//title: How many lightsabers do you own?
//description:Inspired by the development team at Vooza, write the function that
// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.
// For example(Input --> Output):

//P: seems easy enough, only Zach owns lightsabers.
//R: 18 for Zach, anyone else 0
//E: Zach -> 18
//   Jupiter -> 0
//   Loki -> 0
//P: if than, else

const howManyLightsabersDoYouOwn = name => name === 'Zach' ? 18 : 0


//notes: good practice for ternary operator

//test:
console.log(howManyLightsabersDoYouOwn('Zach'))
console.log(howManyLightsabersDoYouOwn('Jupiter'))
console.log(howManyLightsabersDoYouOwn('Loki'))