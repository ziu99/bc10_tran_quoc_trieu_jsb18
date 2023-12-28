
function thucHienChucNang() {
  var inputArray = document.getElementById("inputArray").value;
  var arr = inputArray.split(",").map(Number);
  var functionSelector = document.getElementById("functionSelector").value;
  var result = 0;

  switch (functionSelector) {
    case "tongSoDuong":
      result = tinhTongSoDuong(arr);
      break;
    case "demSoDuong":
      result = demSoDuong(arr);
      break;
    case "timSoNhoNhat":
      result = timSoNhoNhat(arr);
      break;
    case "timSoDuongNhoNhat":
      result = timSoDuongNhoNhat(arr);
      break;
    case "timSoChanCuoiCung":
      result = timSoChanCuoiCung(arr);
      break;
    case "doiCho":
      doiCho(arr);
      result = "Mảng sau khi đổi chỗ: " + arr.join(", ");
      break;
    case "sapXepTangDan":
      sapXepTangDan(arr);
      result = "Mảng sau khi sắp xếp: " + arr.join(", ");
      break;
    case "timSoNguyenTo":
      result = timSoNguyenTo(arr);
      break;
    case "soNguyenTrongMangThuc":
      result = soNguyenTrongMangThuc(arr);
      break;
    case "soSanhDuongAm":
      result = soSanhDuongAm(arr);
      break;
    default:
      result = "Chức năng không hợp lệ";
  }

  document.getElementById("ketQua").innerHTML = result;
}

function tinhTongSoDuong(arr) {
  var tong = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      tong += arr[i];
    }
  }
  return "Tổng các số dương trong mảng là: " + tong;
}

function demSoDuong(arr) {
  var dem = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      dem++;
    }
  }
  return "Số lượng số dương trong mảng là: " + dem;
}

function timSoNhoNhat(arr) {
  if (arr.length === 0) {
    return "Mảng rỗng, không có số nhỏ nhất.";
  }
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return "Số nhỏ nhất trong mảng là: " + min;
}

function timSoDuongNhoNhat(arr) {
  var minDuong = Infinity;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < minDuong) {
      minDuong = arr[i];
    }
  }
  if (minDuong === Infinity) {
    return "Không có số dương trong mảng.";
  }
  return "Số dương nhỏ nhất trong mảng là: " + minDuong;
}

function timSoChanCuoiCung(arr) {
  var soChanCuoiCung = -1;
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      soChanCuoiCung = arr[i];
      break;
    }
  }
  return soChanCuoiCung !== -1 ? "Số chẵn cuối cùng trong mảng là: " + soChanCuoiCung : "Không có số chẵn trong mảng.";
}

function doiCho(arr) {
  var viTri1 = prompt("Nhập vị trí thứ nhất muốn đổi chỗ:");
  var viTri2 = prompt("Nhập vị trí thứ hai muốn đổi chỗ:");
  if (!isNaN(viTri1) && !isNaN(viTri2) && viTri1 >= 0 && viTri2 >= 0 && viTri1 < arr.length && viTri2 < arr.length) {
    var temp = arr[viTri1];
    arr[viTri1] = arr[viTri2];
    arr[viTri2] = temp;
  } else {
    alert("Vị trí không hợp lệ.");
  }
}

function sapXepTangDan(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
}

function timSoNguyenTo(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      return "Số nguyên tố đầu tiên trong mảng là: " + arr[i];
    }
  }
  return "Không có số nguyên tố trong mảng.";
}

function soNguyenTrongMangThuc(arr) {
  var soNguyen = 0;
  for (var i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      soNguyen++;
    }
  }
  return "Trong mảng có " + soNguyen + " số nguyên.";
}

function soSanhDuongAm(arr) {
  var soDuong = 0;
  var soAm = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      soDuong++;
    } else if (arr[i] < 0) {
      soAm++;
    }
  }
  if (soDuong > soAm) {
    return "Số dương > số âm.";
  } else if (soDuong < soAm) {
    return "Số âm > số dương.";
  } else {
    return "Số dương = số âm.";
  }
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
