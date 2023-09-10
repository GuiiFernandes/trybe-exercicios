const carsFromModel = [
  {
    "id": 1,
    "model": "Renault Sandero",
    "color": "Branco",
    "licensePlate": "NCA-0956",
    "year": 2019,
    "driverId": 1
  },
  {
    "id": 2,
    "model": "Volkswagen Gol",
    "color": "Vermelho",
    "licensePlate": "DZG-4376",
    "year": 2015,
    "driverId": 2
  },
];

const carsFromDb = [
  {
    "id": 1,
    "model": "Renault Sandero",
    "color": "Branco",
    "license_plate": "NCA-0956",
    "year": 2019,
    "driver_id": 1
  },
  {
    "id": 2,
    "model": "Volkswagen Gol",
    "color": "Vermelho",
    "license_plate": "DZG-4376",
    "year": 2015,
    "driver_id": 2
  },
];

const newCarMock = {
  "model": "Chevrolet Onix",
  "color": "Prata",
  "licensePlate": "KBJ2899",
  "year": 2020,
  "driverId": 3
}

module.exports = {
  carsFromModel,
  newCarMock,
  carsFromDb,
};