const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// Setting hiddenNav as a variable
let hiddenNav = document.getElementById("hiddenNav")

// Setting modals as variables
let bearingsModal = document.getElementById("bearingsModal");
let linearMotionModal = document.getElementById("linearMotionModal");
let lubeAdhesivesModal = document.getElementById("lubeAdhesivesModal");
let materialHandlingModal = document.getElementById("materialHandlingModal");
let motorsControlsModal = document.getElementById("motorsControlsModal");
let powerTransmissionsModal = document.getElementById("powerTransmissionsModal");
let sealsModal = document.getElementById("sealsModal");
let suppliesAccessoriesModal = document.getElementById("suppliesAccessoriesModal");

// Setting favicon burger as a variable
let bars = document.getElementById("bars");

// Setting form Submit button as a variable
let submitBtn = document.getElementById("submitBtn");


// Setting modal buttons as variables
let bearingsBtn = document.getElementById("bearings");
let linearMotionBtn = document.getElementById("linearMotion");
let lubeAdhesivesBtn = document.getElementById("lubeAdhesives");
let materialHandlingBtn = document.getElementById("materialHandling");
let motorsControlsBtn = document.getElementById("motorsControls");
let powerTransmissionsBtn = document.getElementById("powerTransmissions");
let sealsBtn = document.getElementById("seals");
let suppliesAccessoriesBtn = document.getElementById("suppliesAccessories");

// Setting close buttons as variables
let closeBearings = document.getElementById("closeBearings");
let closeLinearMotion = document.getElementById("closeLinearMotion");
let closeLubeAdhesives = document.getElementById("closeLubeAdhesives");
let closeMaterialHandling = document.getElementById("closeMaterialHandling");
let closeMotorsControls = document.getElementById("closeMotorsControls");
let closePowerTransmissions = document.getElementById("closePowerTransmissions");
let closeSeals = document.getElementById("closeSeals");
let closeSuppliesAccessories = document.getElementById("closeSuppliesAccessories");

// Bars click event Listeners
bars.addEventListener('click', openNav);

// Modal event Listeners
bearingsBtn.addEventListener('click', openBearings);
linearMotionBtn.addEventListener('click', openLinearMotion);
lubeAdhesivesBtn.addEventListener('click', openLubeAdhesives);
materialHandlingBtn.addEventListener('click', openMaterialHandling);
motorsControlsBtn.addEventListener('click', openMotorsControls);
powerTransmissionsBtn.addEventListener('click', openPowerTransmissions);
sealsBtn.addEventListener('click', openSeals);
suppliesAccessoriesBtn.addEventListener('click', openSuppliesAccessories);

// Display nav function
function openNav() {
    hiddenNav.style.display = "block";
}

// Open modal functions
function openBearings() {
    bearingsModal.style.display = "block";
}
function openLinearMotion() {
    linearMotionModal.style.display = "block";
}
function openLubeAdhesives() {
    lubeAdhesivesModal.style.display = "block";
}
function openMaterialHandling() {
    materialHandlingModal.style.display = "block";
}
function openMotorsControls() {
    motorsControlsModal.style.display = "block";
}
function openPowerTransmissions() {
    powerTransmissionsModal.style.display = "block";
}
function openSeals() {
    sealsModal.style.display = "block";
}
function openSuppliesAccessories() {
    suppliesAccessoriesModal.style.display = "block";
}

// function submitForm() {

// }

// Close button click event listeners
closeBearings.addEventListener('click', funcCloseBearings);
closeLinearMotion.addEventListener('click', funcCloseLinearMotion);
closeLubeAdhesives.addEventListener('click', funcCloseLubeAdhesives);
closeMaterialHandling.addEventListener('click', funcCloseMaterialHandling);
closeMotorsControls.addEventListener('click', funcCloseMotorsControls);
closePowerTransmissions.addEventListener('click', funcClosePowerTransmissions);
closeSeals.addEventListener('click', funcCloseSeals);
closeSuppliesAccessories.addEventListener('click', funcCloseSuppliesAccessories);

// Functions to close modals
function funcCloseBearings() {
    bearingsModal.style.display = "none";
}
function funcCloseLinearMotion() {
    linearMotionModal.style.display = "none";
}
function funcCloseLubeAdhesives() {
    lubeAdhesivesModal.style.display = "none";
}
function funcCloseMaterialHandling() {
    materialHandlingModal.style.display = "none";
}
function funcCloseMotorsControls() {
    motorsControlsModal.style.display = "none";
}
function funcClosePowerTransmissions() {
    powerTransmissionsModal.style.display = "none";
}
function funcCloseSeals() {
    sealsModal.style.display = "none";
}
function funcCloseSuppliesAccessories() {
    suppliesAccessoriesModal.style.display = "none";
}