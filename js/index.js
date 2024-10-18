function strArr(length) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  let counter = 0;

  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function randNum(length = 5, maxVal = 100) {
  let arr = [];

  for (let i = 0; i < length; i++) {
    arr.push(Math.trunc(Math.random() * maxVal) + 1);
  }
  return arr;
}

function randStr(length = 5, maxVal = 100) {
  let arr = [];

  for (let i = 0; i < length; i++) {
    arr.push(strArr(6));
  }
  return arr;
}

function randNgtPst(length = 5, maxVal = 100) {
  let arr = [];

  for (let i = 0; i < length; i++) {
    Math.random() > 0.5
      ? arr.push(Math.trunc(Math.random() * maxVal) + 1)
      : arr.push(Math.trunc(Math.random() * maxVal + 1) * -1);
  }
  return arr;
}

function randStrNum(length = 5, maxVal = 100) {
  let arr = [];
  let strlen;

  for (let i = 0; i < length; i++) {
    if (Math.trunc(Math.random() * 10) > 5) {
      strlen = Math.trunc(Math.random() * 15);
      arr.push(strArr(strlen));

      continue;
    }

    arr.push(Math.trunc(Math.random() * maxVal) + 1);
  }
  return arr;
}

function innerAns(elID, answer) {
  document.getElementById(elID).innerHTML = answer;
}

function hidAns(Btn, elID) {
  document.getElementById(Btn).addEventListener("click", function () {
    innerAns(elID, "");
  });
}

//
//
//

//
// 1. Berilgan massivdagi har bir elementning qiymatini
// ekranga chiqarish uchun `forEach` metodidan foydalaning.

document.getElementById("first--btn").addEventListener("click", function () {
  let firstArr = randNum();
  let firstAns = "Massiv:<br>" + firstArr + "<br>Elementlari:<br> ";

  firstArr.forEach(function (val) {
    console.log(val);
    firstAns += " " + val + " ";
  });

  innerAns("first--answer", firstAns);

  hidAns("first--close", "first--answer");
});

//
// 2. Berilgan massivdagi har bir elementga 5 qo'shib, natijani
// ekranga chiqarish uchun `forEach` metodidan foydalaning.

document.getElementById("second--btn").addEventListener("click", function () {
  let secondArr = randNum();
  let secondAns =
    "Massiv:<br>" +
    secondArr +
    "<br>Elementlarining 5 ga kopaygan xolati:<br> ";

  secondArr.forEach(function (val) {
    val += 5;
    console.log(val);
    secondAns += " " + val + " ";
  });

  innerAns("second--answer", secondAns);

  hidAns("second--close", "second--answer");
});

//
//
// 3. Berilgan massivdagi barcha toq sonlarni ekranga
//  chiqarish uchun `forEach` metodidan foydalaning.

document.getElementById("third--btn").addEventListener("click", function () {
  let thirdArr = randNum();
  let thirdAns = "Massiv:<br>" + thirdArr + "<br>Toq sonlari:<br> ";

  thirdArr.forEach(function (val) {
    if (val % 2 == 1) {
      console.log(val);
      thirdAns += " " + val + " ";
    }
  });

  innerAns("third--answer", thirdAns);

  hidAns("third--close", "third--answer");
});

//
//
// 4. Berilgan massivdagi elementlar sonini hisoblang va
//  natijani ekranga chiqarish uchun `forEach` metodidan foydalaning.

document.getElementById("four--btn").addEventListener("click", function () {
  let fourArr = randNum(Math.trunc(Math.random() * 15) + 1);
  let fourAns = "Massiv:<br>" + fourArr + "<br>Elementlar sonlari:<br> ";
  let counter = 0;

  fourArr.forEach(function (val) {
    counter++;
  });
  console.log(counter);
  fourAns += counter;

  innerAns("four--answer", fourAns);

  hidAns("four--close", "four--answer");
});

//
//
//
//  5. Berilgan massivdagi har bir elementni kattaroq massivdagi boshqa massivga ko'chirib, yangi
//  massivni ekranga chiqarish uchun `forEach` metodidan foydalaning.

function joinToBig(arr1, arr2) {
  arr1.forEach(function (val) {
    arr2.push(val);
  });
  return arr2;
}

document.getElementById("five--btn").addEventListener("click", function () {
  let fiveFirstArr = randNum(Math.trunc(Math.random() * 5) + 1);
  let fiveSecondArr = randNum(Math.trunc(Math.random() * 15) + 1);
  let fiveAns =
    "Kichik massiv:<br>" +
    fiveFirstArr +
    "<br>Ikkinchi massiv:<br>" +
    fiveSecondArr;

  let resArr = joinToBig(fiveFirstArr, fiveSecondArr);

  fiveAns += "<br>Qoshilgani:<br>" + resArr;

  innerAns("five--answer", fiveAns);

  hidAns("five--close", "five--answer");
});

//
// 6. 1. Berilgan massivdagi barcha elementlarning qiymatini 2 baravar
// oshiruvchi yangi massiv yarating va natijani ekranga chiqaring.

//

document.getElementById("six--btn").addEventListener("click", function () {
  let sixArr = randNum(Math.trunc(Math.random() * 5) + 1);
  let sixAns = "Kichik massiv:<br>" + sixArr;

  let resArr = sixArr.map(function (val) {
    console.log(val * 2);

    return val * 2;
  });

  sixAns += "<br>Natija:<br>" + resArr;

  innerAns("six--answer", sixAns);

  hidAns("six--close", "six--answer");
});

//
//
//
// 7.  2. Berilgan massivdagi har bir sonning kvadratini hisoblab ,
//   yangi massiv yarating va natijani ekranga chiqaring.

document.getElementById("seven--btn").addEventListener("click", function () {
  let sevenArr = randNum(Math.trunc(Math.random() * 5) + 1);
  let sevenAns = "Kichik massiv:<br>" + sevenArr;

  let resArr = sevenArr.map(function (val) {
    console.log(val * val);

    return val * val;
  });

  sevenAns += "<br>Natija:<br>" + resArr;

  innerAns("seven--answer", sevenAns);

  hidAns("seven--close", "seven--answer");
});

//
//
//
// 8. 3. Berilgan massivdagi barcha satrlarni
//   katta harflar bilan yangi massivda saqlang
// va natijani ekranga chiqaring.

document.getElementById("eight--btn").addEventListener("click", function () {
  let eightArr = randStrNum();
  let eightAns = "Massiv:<br>" + eightArr;

  let resArr = eightArr.map(function (val) {
    return typeof val == "string" ? val.toUpperCase() : val;
  });

  eightAns += "<br>Natija:<br>" + resArr;

  innerAns("eight--answer", eightAns);

  hidAns("eight--close", "eight--answer");
});

//
//
//
// 9.  4. Berilgan massivdagi har bir sonni
//  manfiy qiymatga aylantirib, yangi massiv yarating va natijani ekranga chiqaring.

document.getElementById("nine--btn").addEventListener("click", function () {
  let nineArr = randNum();
  let nineAns = "Massiv:<br>" + nineArr;

  let resArr = nineArr.map(function (val) {
    return (val *= -1);
  });

  nineAns += "<br>Natija:<br>" + resArr;

  innerAns("nine--answer", nineAns);

  hidAns("nine--close", "nine--answer");
});

//
//
// 5. Berilgan massivdagi sonlarga 3
//  ni qo'shib, yangi massiv yarating va natijani ekranga chiqaring.

document.getElementById("ten--btn").addEventListener("click", function () {
  let tenArr = randNum();
  let tenAns = "Massiv:<br>" + tenArr;

  let resArr = tenArr.map(function (val) {
    return (val += 3);
  });

  tenAns += "<br>Natija:<br>" + resArr;

  innerAns("ten--answer", tenAns);

  hidAns("ten--close", "ten--answer");
});

//
//
//
// 9.  4. Berilgan massivdagi har bir sonni
//  manfiy qiymatga aylantirib, yangi massiv yarating va natijani ekranga chiqaring.

document.getElementById("eleven--btn").addEventListener("click", function () {
  let elevenArr = randNum();
  let elevenAns = "Massiv:<br>" + elevenArr;

  let resArr = elevenArr.filter(function (val) {
    return val % 2 == 0;
  });

  elevenAns += "<br>Natija:<br>" + resArr;

  innerAns("eleven--answer", elevenAns);

  hidAns("eleven--close", "eleven--answer");
});

//
//
// 12. 2. Berilgan massivdagi faqat musbat sonlarni tanlab,
//  yangi massiv yarating va natijani ekranga chiqaring.

document.getElementById("twelve--btn").addEventListener("click", function () {
  let twelveArr = randNgtPst();
  let twelveAns = "Massiv:<br>" + twelveArr;

  let resArr = twelveArr.filter(function (val) {
    return val > 0;
  });

  twelveAns += "<br>Natija:<br>" + resArr;

  innerAns("twelve--answer", twelveAns);

  hidAns("twelve--close", "twelve--answer");
});

//
//
// 13. 3. Massivdagi uzunligi 5 ta belgidan katta bo'lgan
//  so'zlarni tanlab, yangi massiv yarating va natijani ekranga chiqaring.

document.getElementById("thirdtn--btn").addEventListener("click", function () {
  let thirdtnArr = randStrNum();
  let thirdtnAns = "Massiv:<br>" + thirdtnArr;

  let resArr = thirdtnArr.filter(function (val) {
    return typeof val === "string" && val.length > 5;
  });

  thirdtnAns += "<br>Natija:<br>" + resArr;

  innerAns("thirdtn--answer", thirdtnAns);

  hidAns("thirdtn--close", "thirdtn--answer");
});

//
//
// 4. Berilgan massivdagi 18 yoshdan katta bo'lgan shaxslarning
// yoshlarini yangi massivga saqlang va natijani ekranga chiqaring.

document.getElementById("fourtn--btn").addEventListener("click", function () {
  let fourtnArr = randNum(10, 100);
  let fourtnAns = "Massiv:<br>" + fourtnArr;

  let resArr = fourtnArr.filter(function (val) {
    return typeof val === "number" && val > 18;
  });

  fourtnAns += "<br>Natija:<br>" + resArr;

  innerAns("fourtn--answer", fourtnAns);

  hidAns("fourtn--close", "fourtn--answer");
});

//
//
// 5. Massivdagi qiymatlari 10 dan kichik bo'lgan barcha sonlarni filtrlab
//   yangi massiv yarating va natijani ekranga chiqaring.

document.getElementById("fivetn--btn").addEventListener("click", function () {
  let fivetnArr = randNum(10, 100);
  let fivetnAns = "Massiv:<br>" + fivetnArr;

  let resArr = fivetnArr.filter(function (val) {
    return typeof val === "number" && val < 10;
  });

  fivetnAns += "<br>Natija:<br>" + resArr;

  innerAns("fivetn--answer", fivetnAns);

  hidAns("fivetn--close", "fivetn--answer");
});

//
// 1. Berilgan massivdagi 10 dan katta bo'lgan barcha sonlarni filtrlab, yangi massiv yarating va
//  natijani ekranga chiqaring.
document.getElementById("sixtn--btn").addEventListener("click", function () {
  let sixtnArr = randNum();
  let sixtnAns = "Massiv:<br>" + sixtnArr;

  //  let sixtnFind = sixtnArr.find(function (val) {
  //     return val > 10;
  //   });

  //   masala shartida filtlash kerak deyilgani uchun filterdan foydalandim
  let sixtnFilt = sixtnArr.filter(function (val) {
    return val > 10;
  });

  sixtnAns += "<br>Natija:<br>" + sixtnFilt;

  innerAns("sixtn--answer", sixtnAns);

  hidAns("sixtn--close", "sixtn--answer");
});

//
//
//  2. Massivdan faqat musbat sonlarni tanlab,
//  yangi massiv hosil qiling va natijani ekranga chiqaring.

document.getElementById("seventn--btn").addEventListener("click", function () {
  let seventnArr = randNgtPst();
  let seventnAns = "Massiv:<br>" + seventnArr;

  //  let seventnFind = seventnArr.find(function (val) {
  //     return val > 0;
  //   });

  let seventnFilt = seventnArr.filter(function (val) {
    return val > 0;
  });

  seventnAns += "<br>Natija:<br>" + seventnFilt;

  innerAns("seventn--answer", seventnAns);

  hidAns("seventn--close", "seventn--answer");
});

//
//
//  3. Berilgan so'zlar massividan uzunligi 4 belgidan katta
//  bo'lgan so'zlarni filtrlab, yangi massiv yarating va natijani ekranga chiqaring.

document.getElementById("eighttn--btn").addEventListener("click", function () {
  let eighttnArr = randStrNum();
  let eighttnAns = "Massiv:<br>" + eighttnArr;

  //  let eighttnFind = eighttnArr.find(function (val) {
  //     return val.lenght > 4;
  //   });

  let eighttnFilt = eighttnArr.filter(function (val) {
    return val.length > 4;
  });

  eighttnAns += "<br>Natija:<br>" + eighttnFilt;

  innerAns("eighttn--answer", eighttnAns);

  hidAns("eighttn--close", "eighttn--answer");
});

//
//
//  4. Berilgan massivdagi faqat juft sonlarni filtrlab,
//  yangi massiv yarating va natijani ekranga chiqaring.

document.getElementById("ninetn--btn").addEventListener("click", function () {
  let ninetnArr = randNum();
  let ninetnAns = "Massiv:<br>" + ninetnArr;

  //  let ninetnFind = ninetnArr.find(function (val) {
  //     return val % 2 == 0 ;
  //   });

  let ninetnFilt = ninetnArr.filter(function (val) {
    return val % 2 == 0;
  });

  ninetnAns += "<br>Natija:<br>" + ninetnFilt;

  innerAns("ninetn--answer", ninetnAns);

  hidAns("ninetn--close", "ninetn--answer");
});

//
//
//  5. Berilgan sonlar massividan faqat 0 va undan katta bo'lgan sonlarni
//  filtrlab, yangi massiv yarating va natijani ekranga chiqaring.
document.getElementById("twenty--btn").addEventListener("click", function () {
  let twentyArr = randNgtPst();
  let twentyAns = "Massiv:<br>" + twentyArr;

  //  let twentyFind = twentyArr.find(function (val) {
  //     return val.lenght >= 0;
  //   });

  let twentyFilt = twentyArr.filter(function (val) {
    return typeof val == "number" && val >= 0;
  });

  twentyAns += "<br>Natija:<br>" + twentyFilt;

  innerAns("twenty--answer", twentyAns);

  hidAns("twenty--close", "twenty--answer");
});

//
//
// ### `some` metodiga oid masalalar:
// 1. Berilgan massivda 0 dan kichik bo'lgan son mavjud yoki
//  yo'qligini aniqlang.

document.getElementById("twone--btn").addEventListener("click", function () {
  let twoneArr =
    Math.trunc(Math.random() * 10) + 1 >= 5 ? randNgtPst() : randNum();

  let twoneAns = "Massiv:<br>" + twoneArr;

  let twoneFilt = twoneArr.some(function (val) {
    return val < 0;
  });

  twoneAns += "<br>Natija:<br>";
  twoneAns +=
    twoneFilt == true
      ? " 0 dan kichik son mavjud "
      : "0 dan kichik son mavjud emas";

  innerAns("twone--answer", twoneAns);

  hidAns("twone--close", "twone--answer");
});

//
//
//  2. Massivdagi elementlardan hech bo'lmaganda
//  biri juft son ekanligini tekshiring.

document.getElementById("twtwo--btn").addEventListener("click", function () {
  let twtwoArr = randNum();

  let twtwoAns = "Massiv:<br>" + twtwoArr;

  let twtwoFilt = twtwoArr.some(function (val) {
    return val % 2 == 0;
  });

  twtwoAns += "<br>Natija:<br>";
  twtwoAns +=
    twtwoFilt == true
      ? "  hech bo'lmaganda biri juft son  "
      : " hech bo'lmaganda biri juft son  emas";

  innerAns("twtwo--answer", twtwoAns);

  hidAns("twtwo--close", "twtwo--answer");
});

//
//
//  3. Berilgan massivda "apple"
//  so'zi mavjud yoki yo'qligini tekshiring.

document.getElementById("twthree--btn").addEventListener("click", function () {
  let twthreeArr = randNum();

  Math.trunc(Math.random() * 10) > 5 ? (twthreeArr[0] = "apple") : 0;

  let twthreeAns = "Massiv:<br>" + twthreeArr;

  let twthreeFilt = twthreeArr.some(function (val) {
    return val == "apple";
  });

  twthreeAns += "<br>Natija:<br>";
  twthreeAns +=
    twthreeFilt == true
      ? "  massivda 'apple' so'zi mavjud  "
      : " massivda 'apple' so'zi mavjud  emas";

  innerAns("twthree--answer", twthreeAns);

  hidAns("twthree--close", "twthree--answer");
});

//
//
//
// ### `every` metodiga oid masalalar:
// 4. Berilgan massivdagi barcha sonlar musbat ekanligini tekshiring.

document.getElementById("twfour--btn").addEventListener("click", function () {
  let twfourArr =
    Math.trunc(Math.random() * 10) + 1 >= 5 ? randNgtPst() : randNum();

  let twfourAns = "Massiv:<br>" + twfourArr;

  let twfourFilt = twfourArr.every(function (val) {
    return val > 0;
  });

  twfourAns += "<br>Natija:<br>";
  twfourAns +=
    twfourFilt == true
      ? "  Berilgan massivdagi barcha sonlar musbat  "
      : " Berilgan massivdagi barcha sonlar musbat emas";

  innerAns("twfour--answer", twfourAns);

  hidAns("twfour--close", "twfour--answer");
});

//
//
// 5. Massivdagi barcha elementlarning satr ekanligini aniqlang.

document.getElementById("twfive--btn").addEventListener("click", function () {
  let twfiveArr =
    Math.trunc(Math.random() * 10) + 1 >= 5 ? randStr() : randNum();

  let twfiveAns = "Massiv:<br>" + twfiveArr;

  let twfiveFilt = twfiveArr.every(function (val) {
    return typeof val == "string";
  });

  twfiveAns += "<br>Natija:<br>";
  twfiveAns +=
    twfiveFilt == true
      ? "   Massivdagi barcha elementlarning satr  "
      : "  Massivdagi barcha elementlarning satr emas";

  innerAns("twfive--answer", twfiveAns);

  hidAns("twfive--close", "twfive--answer");
});

//
//
// 6. Berilgan massivdagi barcha sonlar 100 dan kichik
// ekanligini tekshiring.
document.getElementById("twsix--btn").addEventListener("click", function () {
  let twsixArr =
    Math.trunc(Math.random() * 10) + 1 >= 5 ? randNum(8, 90) : randNum(9, 500);

  let twsixAns = "Massiv:<br>" + twsixArr;

  let twsixFilt = twsixArr.every(function (val) {
    return val < 100;
  });

  twsixAns += "<br>Natija:<br>";
  twsixAns +=
    twsixFilt == true
      ? " Berilgan massivdagi barcha sonlar 100 dan kichik  "
      : "Berilgan massivdagi barcha sonlar 100 dan kichik emas";

  innerAns("twsix--answer", twsixAns);

  hidAns("twsix--close", "twsix--answer");
});
