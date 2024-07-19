const res = document.getElementById("res");
const randomNums = document.getElementById("generateNums");
const res2 = document.getElementById("res2");

const prompt1 = prompt("first number");
const prompt2 = prompt("second number");
const prompt3 = prompt("third number");
const prompt4 = prompt("fourth number");
const prompt5 = prompt("fifth number");
const prompt6 = prompt("sixth number");
randomNums.addEventListener("click", () => {
  const uniqueNums = new Set();
  for (let i = 0; i <= 31; i++) {
    let randomNumber = Math.floor(Math.random() * 300);
    uniqueNums.add(randomNumber);
  }
  const myArray = Array.from(uniqueNums);
  myArray.forEach((nums, idx) => {
    res.innerHTML += `${idx + 1}: ${nums}<br>`;
  });
  const userNumbers = [prompt1, prompt2, prompt3, prompt4, prompt5, prompt6];
  const win = userNumbers.some((num) => uniqueNums.has(num));

  if (win) {
    res2.innerHTML = `You are win your numbers are ${userNumbers.join(", ")} 
    and computers numbers are ${myArray.join(", ")} `;
  } else {
    res2.innerHTML = `You lost your numbers are ${userNumbers.join(", ")} 
    and computers numbers are ${myArray.join(", ")} `;
  }
});
