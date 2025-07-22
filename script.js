const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let priceElements = document.querySelectorAll(".prices");

  let total = 0;

  // 2. हर price को number में convert करके जोड़ो
  priceElements.forEach(function(priceElement) {
    total += parseFloat(priceElement.textContent);
  });

  // 3. नया row बनाओ
  let table = document.getElementById("grocery-table");
  let newRow = document.createElement("tr");

  let totalCell = document.createElement("td");
  totalCell.colSpan = 2; // दो कॉलम में फैलेगा
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = "Total Price: ₹" + total;

  newRow.appendChild(totalCell);
  table.appendChild(newRow);
}
};

getSumBtn.addEventListener("click", getSum);

