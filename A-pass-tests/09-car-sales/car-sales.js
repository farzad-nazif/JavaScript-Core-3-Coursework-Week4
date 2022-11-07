function sales(carsSold) {
  let result = {
    Ford: 0,
    Honda: 0,
    "Land Rover": 0,
    Toyota: 0,
  };
  carsSold.forEach((car) => {
    if (car.make === "Ford") {
      result.Ford += car.price;
    } else if (car.make === "Honda") {
      result.Honda += car.price;
    } else if (car.make === "Land Rover") {
      result["Land Rover"] += car.price;
    } else if (car.make === "Toyota") {
      result.Toyota += car.price;
    }
  });
  return result;
}

module.exports = sales;
