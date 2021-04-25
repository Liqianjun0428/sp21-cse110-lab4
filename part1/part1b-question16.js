let statistics = {
    redCars: 21,
    blueCares: 45,
    greenCars: 12,
    raceCars: 5,
    balckCars: 40,
    rareCars: 2
};
for(let car in statistics){
    if(car.startsWith('r')||(statistics[car]%2) == 1){
        console.log(statistics[car]);
    }
}