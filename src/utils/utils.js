const getBoxNameByBarcode = (barcode) => {
  switch (barcode) {
    case 100:
      return "Коробка YMA";
    case 110:
      return "Коробка YMC";
    case 120:
      return "Коробка YME";
    case 130:
      return "Коробка YMF";
    case 140:
      return "Коробка YMG";
    case 150:
      return "Коробка YMH";
    case 250:
      return "NONPACK";
    default:
      return "";
  }
};

const generateUniqueKey = () => Math.random().toString(36).substring(2, 9);

/* const recommendedBoxes = [];

const convertToBoxArray = (barcodeData) => {
  recommendedBoxes.push({
    id: generateUniqueKey(),
    name: getBoxNameByBarcode(barcodeData),
    barcode: barcodeData,
  });
  return recommendedBoxes;
}; */

const recommendedBoxes = [];

const convertToBoxArray = (barcodeData) => {
  // Проверка наличия объекта с таким же штрих-кодом в массиве recommendedBoxes
  const existingIndex = recommendedBoxes.findIndex(
    (box) => box.barcode === barcodeData,
  );

  // Если объект с таким же штрих-кодом уже существует, не добавляем его в массив
  if (existingIndex !== -1) {
    return recommendedBoxes;
  }

  // Добавление нового объекта в массив recommendedBoxes
  recommendedBoxes.push({
    id: generateUniqueKey(),
    name: getBoxNameByBarcode(barcodeData),
    barcode: barcodeData,
  });

  return recommendedBoxes;
};

function convertToBarcodeArray(data) {
  const boxes = [];
  if (typeof data.carton === "number") {
    boxes.push(data.carton);
  }
  data.items.forEach((item) => {
    if (typeof item.barcode === "number" && item.amount >= 1) {
      boxes.push(...Array(item.amount).fill(item.barcode));
    }
  });
  return boxes;
}

function transformMultiplyBarcodes(data) {
  return data.flatMap((item) => {
    if (item.amount === 1) {
      return item.barcode;
    }
    return item.multiplyBarcodes;
  });
}

export {
  getBoxNameByBarcode,
  convertToBoxArray,
  generateUniqueKey,
  convertToBarcodeArray,
  recommendedBoxes,
  transformMultiplyBarcodes,
};
