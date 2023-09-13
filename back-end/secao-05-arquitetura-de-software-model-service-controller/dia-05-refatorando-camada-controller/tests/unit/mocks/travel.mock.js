const travelIdFromDB = { insertId: 42 };
const travelIdFromModel = 42;

const travelFromDB = {
  id: 42,
  driver_id: null,
  starting_address: 'starting street',
  ending_address: 'ending street',
  request_date: '2023-05-29T19:56:25.000Z',
  travel_status_id: 1,
  status: 'Aguardando Motorista',
  address: null,
  stop_order: null,
};

const travelFromModel = {
  id: 42,
  driverId: null,
  startingAddress: 'starting street',
  endingAddress: 'ending street',
  requestDate: '2023-05-29T19:56:25.000Z',
  travelStatusId: 1,
  status: 'Aguardando Motorista',
  waypoints: [],
};

const travelByStatusFromDB = [
  {
    id: 1,
    driverId: null,
    starting_address: 'Rua dos caramelos',
    ending_address: 'Rua Mariana Alvarez Dutra',
    request_date: '2023-05-29T19:56:52.000Z',
    amount_stop: 2,
  },
  {
    id: 42,
    driver_id: null,
    starting_address: 'starting street',
    ending_address: 'end street',
    request_date: '2023-05-29T19:56:25.000Z',
    amount_stop: 0,
  },
];
const travelByStatusFromModel = [
  {
    id: 1,
    driverId: null,
    startingAddress: 'Rua dos caramelos',
    endingAddress: 'Rua Mariana Alvarez Dutra',
    requestDate: '2023-05-29T19:56:52.000Z',
    amountStop: 2,
  },
  {
    id: 42,
    driverId: null,
    startingAddress: 'starting street',
    endingAddress: 'end street',
    requestDate: '2023-05-29T19:56:25.000Z',
    amountStop: 0,
  },
];

const travelInputData = {
  passengerId: 1,
  startingAddress: 'starting street',
  endingAddress: 'end street',
};

module.exports = {
  travelIdFromDB,
  travelIdFromModel,
  travelFromDB,
  travelFromModel,
  travelByStatusFromDB,
  travelByStatusFromModel,
  travelInputData,
};