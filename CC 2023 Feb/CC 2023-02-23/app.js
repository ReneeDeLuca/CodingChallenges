// kyu: 8
//title: Pillars
//description: There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// 1. number of pillars (≥ 1);
// 2. distance between pillars (10 - 30 meters);
// 3. width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

//P: total pillar widths = num of pillars - 2 (first & last), total spaces between pillars = num of pillars -1
//R: return total distance (sum of two calculations above) in cm (note: distance is in m)
//E: 5 pillars, 20 meters, 30cm
//   6 pillars, 10 meters, 45cm
//   2 pillars, 30 meters, 20cm
//P: imagine your hand is the first example, fingers are pillars, spaces between fingers are distances between pillars. so not including first and last fingers, there are three fingers and 4 spaces. 

function findDistance(numPillar, distBetween, pillarWidth){
    if(numPillar>2){
    return ((numPillar - 2)*pillarWidth) + (distBetween*100*(numPillar-1))
    }else{
        return 0
    }
}
//notes: first attmept did not take into account if there were less than 2 pillars. and was backward on m to cm conversion needed. second attempt works but is long, clean it up.

const pillars = (numPillar,distBetween, pillarWidth) => numPillar>=2 ? ((numPillar - 2)*pillarWidth) + (distBetween*100*(numPillar-1)) : 0


//notes: better with ternary operator. 

//test:

console.log(pillars(5,20,30),8090)
console.log(pillars(6,10,45),5180)
console.log(pillars(2,30,20),3000)