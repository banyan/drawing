import "./style.css";

const side = 800;
const intervalMs = 1000;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomEvenInt(min, max) {
  const num = randomInt(min, max);
  if (num % 2 === 0) {
    return num;
  } else {
    return randomEvenInt(min, max);
  }
}

function sample(arr) {
  const len = arr == null ? 0 : arr.length;
  return len ? arr[Math.floor(Math.random() * len)] : undefined;
}

function sampleLinecap() {
  return sample(["round", "butt", "square"]);
}

function sampleLinejoin() {
  return sample(["miter", "round", "bevel"]);
}

function sampleOpacity() {
  return randomInt(0, 10) / 10;
}

const points = () =>
  Array.from({ length: randomInt(1, 1000) }, () => randomInt(0, side));

setInterval(() => {
  const len1 = sample([2, 10, 50, 100, randomEvenInt(10, 500)]);
  const len2 = sample([2, 10, 50, 100, randomEvenInt(10, 500)]);
  const len3 = sample([2, 10, 50, 100, randomEvenInt(10, 500)]);
  const strokeWidth1 = sample([1, 1, randomInt(1, 10), randomInt(1, 100)]);
  const strokeWidth2 = sample([1, 1, randomInt(1, 10), randomInt(1, 100)]);
  const strokeWidth3 = sample([1, 1, randomInt(1, 10), randomInt(1, 100)]);
  const d1 = Array.from({ length: len1 }, () => sample(points()));
  const d2 = Array.from({ length: len2 }, () => sample(points()));
  const d3 = Array.from({ length: len3 }, () => sample(points()));

  document.querySelector("#app").innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="${side}" height="${side}">
  <rect x="0" y="0" width="${side}" height="${side}" fill="white" />
  <path stroke="#e3f6f5" stroke-width="${strokeWidth1}" fill="none" stroke-linecap="${sampleLinecap()}" stroke-linejoin="${sampleLinejoin()}" stroke-opacity="${sample(
    [1, sampleOpacity()]
  )}" d="
M ${d1.join(" ")}
"/>
<path stroke="#272343" stroke-width="${strokeWidth2}" fill="none" stroke-linecap="${sampleLinecap()}" stroke-linejoin="${sampleLinejoin()}" stroke-opacity="${sample(
    [1, sampleOpacity()]
  )}" d="
M ${d2.join(" ")}
"/>
  <path stroke="${sample([
    "#bae8e8",
    "#ffd803",
    "#fffffe",
    "#2d334a",
    "black",
    "grey",
  ])}" stroke-width="${strokeWidth3}" fill="none" stroke-linecap="${sampleLinecap()}" stroke-linejoin="${sampleLinejoin()}"
  stroke-opacity="${sample([1, sampleOpacity()])}" d="
M ${d3.join(" ")}
"/>
</svg>
`;
}, intervalMs);
