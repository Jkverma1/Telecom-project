function changeLanguage(language) {
  var element = document.getElementById("url");
  element.value = language;
  element.innerHTML = language;
}

function showDropdown() {
  openDropdown = document.querySelector(".dropdown-div");
  if ((openDropdown.style.display = "none")) {
    openDropdown.style.display = "unset";
  }
}

// popup btn
function logoutbtn() {
  document.querySelector(".logout-popup").style.display = "unset";
}
function closelogoutpopup() {
  document.querySelector(".logout-popup").style.display = "none";
}

function buyApipopup() {
  document.querySelector(".buy-api-popup").style.display = "unset";
  document.querySelector(".background-overlay-popup").style.display = "unset";
}

function closeApipopup() {
  document.querySelector(".buy-api-popup").style.display = "none";
  document.querySelector(".background-overlay-popup").style.display = "none";
}

function extenddatepopup() {
  document.querySelector(".extend-date-popup").style.display = "unset";
  document.querySelector(".background-overlay-popup").style.display = "unset";
}

function closeextendDate() {
  document.querySelector(".extend-date-popup").style.display = "none";
  document.querySelector(".background-overlay-popup").style.display = "none";
}

function renewPrice() {
  document.querySelector(".renew-price-popup").style.display = "unset";
  document.querySelector(".background-overlay-popup").style.display = "unset";
}

function closeRenewPrice() {
  document.querySelector(".renew-price-popup").style.display = "none";
  document.querySelector(".background-overlay-popup").style.display = "none";
}

function confirmPaymentTask() {
  document.querySelector(".confirm-payment-task-popup").style.display = "unset";
}

function closeconfirmPaymentTask() {
  document.querySelector(".confirm-payment-task-popup").style.display = "none";
}

function numberMonitoringPopup() {
  document.querySelector(".Number-detail-popup").style.display = "unset";
  document.querySelector(
    ".Number-detail-background-overlay-popup"
  ).style.display = "unset";
}
function closenumberMonitoringPopup() {
  document.querySelector(".Number-detail-popup").style.display = "none";
  document.querySelector(
    ".Number-detail-background-overlay-popup"
  ).style.display = "none";
}

function numberScrubbingtaskListingPopup() {
  document.querySelector(".Number-scrubbing-task-listing-popup").style.display =
    "unset";
  document.querySelector(
    ".Number-scrubbing-background-overlay-popup"
  ).style.display = "unset";
}

function closenumberScrubbingtaskListingPopup() {
  document.querySelector(".Number-scrubbing-task-listing-popup").style.display =
    "none";
  document.querySelector(
    ".Number-scrubbing-background-overlay-popup"
  ).style.display = "none";
}

function monitoringUploadBtn() {
  document.querySelector(".m-s-21").style.marginTop = "21px";
  document.querySelector(".back-to-listing").style.display = "unset";
  document.querySelector(".monitoring-upload-content").style.display = "unset";
  document.querySelector(".rolling-table").style.display = "none";
  document.querySelector(".filter-menu-container").style.visibility = "hidden";
  document.querySelector(".show-container").style.display = "none";
}

function MonitoringAddManual() {
  document.querySelector(".m-s-21").style.marginTop = "21px";
  document.querySelector(".back-to-listing").style.display = "unset";
  document.querySelector(".add-manual-content").style.display = "unset";
  document.querySelector(".number-monitoring-table").style.display = "none";
  document.querySelector(".filter-menu-container").style.visibility = "hidden";
  document.querySelector(".show-container").style.display = "none";
}

function subBtn1() {
  let subBtn1 = document.querySelector(".first-button");
  let subBtn2 = document.querySelector(".second-button");
  subBtn1.style.color = "#008f7d";
  subBtn1.style.borderBottom = "2px solid #008f7d";
  document.getElementById("sub-tab-1").style.display = "unset";
  document.getElementById("sub-tab-2").style.display = "none";
  subBtn2.style.color = "#A0A7A7";
  subBtn2.style.borderBottom = "none";
}

function subBtn2() {
  let subBtn1 = document.querySelector(".first-button");
  let subBtn2 = document.querySelector(".second-button");
  subBtn1.style.color = "#A0A7A7";
  subBtn1.style.borderBottom = "none";
  document.getElementById("sub-tab-1").style.display = "none";
  document.getElementById("sub-tab-2").style.display = "unset";
  subBtn2.style.color = "#008f7d";
  subBtn2.style.borderBottom = "2px solid #008f7d";
}

function subBtn3() {
  let subBtn3 = document.querySelector(".third-button");
  let subBtn4 = document.querySelector(".fourth-button");
  subBtn3.style.color = "#008f7d";
  subBtn3.style.borderBottom = "2px solid #008f7d";
  document.getElementById("sub-tab-3").style.display = "unset";
  document.getElementById("sub-tab-4").style.display = "none";
  subBtn4.style.color = "#A0A7A7";
  subBtn4.style.borderBottom = "none";
}

function subBtn4() {
  let subBtn3 = document.querySelector(".third-button");
  let subBtn4 = document.querySelector(".fourth-button");
  subBtn3.style.color = "#A0A7A7";
  subBtn3.style.borderBottom = "none";
  document.getElementById("sub-tab-3").style.display = "none";
  document.getElementById("sub-tab-4").style.display = "unset";
  subBtn4.style.color = "#008f7d";
  subBtn4.style.borderBottom = "2px solid #008f7d";
}

function taskListingResult() {
  document.querySelector("#add-mapping-task-listing").style.display = "none";
  document.querySelector("#sub-tab-4").style.display = "none";
  document.querySelector("#number-mapping-result-container").style.display =
    "unset";
}

function taskListingDetail() {
  document.querySelector("#add-mapping-task-listing").style.display = "none";
  document.querySelector("#sub-tab-4").style.display = "none";
  document.querySelector(".number-mapping-detail-container").style.display =
    "unset";
}
function stateDistributionPopup() {
  document.querySelector(".mapping-state-distribution-popup").style.display =
    "unset";
  document.querySelector(
    ".state-distribution-background-overlay-popup"
  ).style.display = "unset";
}

function closestateDistributionPopup() {
  document.querySelector(".mapping-state-distribution-popup").style.display =
    "none";
  document.querySelector(
    ".state-distribution-background-overlay-popup"
  ).style.display = "none";
}

function FraudDescription() {
  document.querySelector(".fraud-description-popup").style.display =
    "unset";
  document.querySelector(
    ".state-distribution-background-overlay-popup"
  ).style.display = "unset";
}

function closeFraudDescription() {
  document.querySelector(".fraud-description-popup").style.display =
    "none";
  document.querySelector(
    ".state-distribution-background-overlay-popup"
  ).style.display = "none";
}
