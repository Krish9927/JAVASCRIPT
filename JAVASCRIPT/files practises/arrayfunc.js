const indian_heros=["Shaktiman","Naagraj","flying jatt","Krish"]
const videsi_heros=["thor","captain america","flash","ironman"]
//indian_heros.push(videsi_heros)
//console.log(indian_heros );//['Shaktiman', 'Naagraj','flying jatt',    'Krish', [ 'thor', 'captain america', 'flash', 'ironman' ]
const m=indian_heros.concat(videsi_heros)
console.log(m);
const allnew_heros=[...indian_heros,...videsi_heros]
console.log(allnew_heros);
/*[
  'Shaktiman',
  'Naagraj',
  'flying jatt',
  'Krish',
  'thor',
  'captain america',
  'flash',
  'ironman'
]*/
let mularr=[1,2,3,4,[1,2,3],4,5,6,[1,2,3,[4,5,1]]]
let newmularr= mularr.flat(1)//[ 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 1, 2, 3, [ 4, 5, 1 ] ]
console.log(newmularr);

newmularr= mularr.flat(2)//[   1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 1, 2,3, 4, 5, 1]
console.log(newmularr);
let b=Array.isArray("hitesh")
console.log(b);//false
console.log(Array.from("PAPAJI"));//[ 'P', 'A', 'P', 'A', 'J', 'I' ]
let scor=00
let score=12
let score1=32
console.log(Array.of(scor,score,score1));//[ 0, 12, 32 ]



