const rates = [
  {
    adults: 2,
    checkin: "2020-11-20",
    checkout: "2020-11-25",
    currency: "$",
    hotel_name: "Hotel 1",
    id: 1,
    price: 750,
    has_meal: false
  },
  {
    adults: 1,
    checkin: "2020-12-11",
    checkout: "2020-12-14",
    currency: "₽",
    hotel_name: "Hotel 2",
    id: 2,
    price: 2250,
    has_meal: true
  },
  {
    adults: 3,
    checkin: "2020-12-05",
    checkout: "2020-12-07",
    currency: "$",
    hotel_name: "Hotel 3",
    id: 3,
    price: 1250,
    has_meal: false
  },
  {
    adults: 3,
    checkin: "2020-08-05",
    checkout: "2020-09-07",
    currency: "$",
    hotel_name: "Hotel 4",
    id: 4,
    price: 5000,
    has_meal: false
  }
];

const USDrate = document.getElementById('USD').innerHTML;

rates.forEach(item => {
  if (item.currency === "₽") {
    item.priceUSD = item.price / USDrate;
  } else {
    item.priceUSD = item.price;
  }
});

rates.sort((a, b) => {
  return a.priceUSD-b.priceUSD;
});


export default rates;
