import speaker from "../images/speaker.svg";
import corgi from "../images/test.jpg";

/* const hardcodeData = {
  order_id: 54574564,
  carton: 444,
  items: [
    {
      name: "Очень важная собака, которая улыбается",
      barcode: 1232973912,
      picture: corgi,
      id: 1,
      packageType: "Пакет",
      amount: 2,
    },
    {
      name: "Умная колонка Яндекс Станция Лайт, ультрафиолет",
      barcode: 1237871234,
      picture: speaker,
      id: 2,
      packageType: "Пузырчатая плёнка",
      amount: 3,
    },
    {
      name: "Умная колонка Яндекс Станция Лайт, ультрафиолет",
      barcode: 1237871212,
      picture: speaker,
      id: 3,
      packageType: "Стрейтч-плёнка",
      amount: 1,
    },
    {
      name: "Умная колонка Яндекс Станция Лайт, ультрафиолет",
      barcode: 1237871278,
      picture: speaker,
      id: 4,
      packageType: "Пузырчатая плёнка",
      amount: 1,
    },
    {
      name: "Умная колонка Яндекс Станция Лайт, ультрафиолет",
      barcode: 1237871290,
      picture: speaker,
      id: 5,
      packageType: "Пузырчатая плёнка",
      amount: 1,
    },
    {
      name: "Умная колонка Яндекс Станция Лайт, ультрафиолет",
      barcode: 1237871261,
      picture: speaker,
      id: 6,
      packageType: "Пузырчатая плёнка",
      amount: 1,
    },
  ],
}; */

const newHardcodeData = {
  order_id: 13243,
  cartons: [
    {
      cartontype: "Коробка YMA",
      barcode: 111,
    },
  ],
  items: [
    {
      id: 1,
      name: "Очень важная собака, которая улыбается",
      barcode: 1232973912,
      image: corgi,
      package_type: "Пакет",
    },
    {
      id: 1,
      name: "Очень важная собака, которая улыбается",
      barcode: 1232973913,
      image: corgi,
      package_type: "Пакет",
    },
    {
      id: 2,
      name: "Умная колонка Яндекс Станция Лайт, ультрафиолет",
      barcode: 1237871234,
      image: speaker,
      package_type: "Пузырчатая плёнка",
    },
    {
      id: 2,
      name: "Умная колонка Яндекс Станция Лайт, ультрафиолет",
      barcode: 1237871235,
      image: speaker,
      package_type: "Пузырчатая плёнка",
    },
    {
      id: 2,
      name: "Умная колонка Яндекс Станция Лайт, ультрафиолет",
      barcode: 1237871236,
      image: speaker,
      package_type: "Пузырчатая плёнка",
    },
    {
      id: 3,
      name: "Тарелка",
      barcode: 1237871212,
      image: corgi,
      package_type: "Стрейтч-плёнка",
    },
  ],
  payload: [
    {
      item_id: 1,
      amount: 2,
    },
    {
      item_id: 2,
      amount: 3,
    },
    {
      item_id: 3,
      amount: 1,
    },
  ],
};

const convertData = (data) => {
  const amountMap = data.payload.reduce((map, payloadItem) => {
    // eslint-disable-next-line no-param-reassign
    map[payloadItem.item_id] = payloadItem.amount;
    return map;
  }, {});

  const uniqueItems = new Map();

  data.items.forEach((item) => {
    if (!uniqueItems.has(item.id) && amountMap[item.id] === 1) {
      const newItem = {
        name: item.name,
        barcode: item.barcode,
        picture: item.image,
        id: item.id,
        packageType: item.package_type,
        amount: amountMap[item.id] || 0,
      };

      if (newItem.amount > 1) {
        newItem.multiplyBarcodes = data.items
          .filter((i) => i.id === item.id)
          .map((i) => i.barcode);
      }
      uniqueItems.set(item.id, newItem);
    }
    if (!uniqueItems.has(item.id) && amountMap[item.id] > 1) {
      const newItem = {
        name: item.name,
        picture: item.image,
        id: item.id,
        packageType: item.package_type,
        amount: amountMap[item.id] || 0,
      };

      if (newItem.amount > 1) {
        newItem.multiplyBarcodes = data.items
          .filter((i) => i.id === item.id)
          .map((i) => i.barcode);
      }

      uniqueItems.set(item.id, newItem);
    }
  });

  const result = {
    order_id: data.order_id,
    cartons: data.cartons,
    items: Array.from(uniqueItems.values()),
  };

  return result;
};

// const convertData = (data) => {
//   const amountMap = data.payload.reduce((map, payloadItem) => {
//     // eslint-disable-next-line no-param-reassign
//     map[payloadItem.item_id] = payloadItem.amount;
//     return map;
//   }, {});

//   const uniqueItems = new Map();

//   data.items.forEach((item) => {
//     if (!uniqueItems.has(item.id)) {
//       const newItem = {
//         name: item.name,
//         barcode: item.barcode,
//         picture: item.image,
//         id: item.id,
//         packageType: item.package_type,
//         amount: amountMap[item.id] || 0,
//       };

//       if (newItem.amount > 1) {
//         newItem.multiplyBarcodes = data.items
//           .filter((i) => i.id === item.id)
//           .map((i) => i.barcode);
//       }

//       uniqueItems.set(item.id, newItem);
//     }
//   });

//   const result = {
//     order_id: data.order_id,
//     cartons: data.cartons,
//     items: Array.from(uniqueItems.values()),
//   };

//   return result;
// };

const hardcodeData = convertData(newHardcodeData);

const boxData = [
  {
    id: 1,
    name: "Коробка YMA",
    barcode: 100,
  },
  {
    id: 2,
    name: "Коробка YMC",
    barcode: 110,
  },
  {
    id: 3,
    name: "Коробка YME",
    barcode: 120,
  },
  {
    id: 4,
    name: "Коробка YMF",
    barcode: 130,
  },
  {
    id: 5,
    name: "Коробка YMG",
    barcode: 140,
  },
  {
    id: 6,
    name: "Коробка YMH",
    barcode: 150,
  },
  {
    id: 7,
    name: "NONPACK",
    barcode: 250,
  },
];

const boxesBarcodes = [100, 110, 120, 130, 140, 150, 250];

const styleBoxesMap = {
  "Коробка YMA": { boxColor: "carton_blue", textColor: "carton__name_blue" },
  "Коробка YMC": { boxColor: "carton_green", textColor: "carton__name_green" },
  "Коробка YME": {
    boxColor: "carton_lightblue",
    textColor: "carton__name_lightblue",
  },
  "Коробка YMF": {
    boxColor: "carton_orange",
    textColor: "carton__name_orange",
  },
  "Коробка YMG": {
    boxColor: "carton_purple",
    textColor: "carton__name_purple",
  },
  "Коробка YMH": { boxColor: "carton_red", textColor: "carton__name_red" },
  "Пакет MYD": { boxColor: "carton_gray", textColor: "carton__name_gray" },
  "Пакет MYB": {
    boxColor: "carton_darkred",
    textColor: "carton__name_darkred",
  },
  NONPACK: {
    boxColor: "carton_darkyellow",
    textColor: "carton__name_darkyellow",
  },
};

// eslint-disable-next-line import/prefer-default-export
export {
  boxData,
  styleBoxesMap,
  hardcodeData,
  newHardcodeData,
  boxesBarcodes,
  convertData,
};
