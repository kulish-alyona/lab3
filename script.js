const a = document.getElementById('numA');
const b = document.getElementById('numB');
const select = document.getElementById('selectProp');
const btn = document.getElementById("btn");
const result = document.getElementById("result");



btn.addEventListener('click', () => {
    if (!a.value || !b.value) {
        alert("Fill the Fields!")
    } else {
        if (select.value === "+") {
            const sum = Number(a.value) + Number(b.value);
            result.innerHTML = sum;
        }

        if (select.value === "-")  {
            const sum = Number(a.value) - Number(b.value);
            result.innerHTML = sum;
        }

        if (select.value === "*")  {
            const sum = Number(a.value) * Number(b.value);
            result.innerHTML = sum.toFixed(2);
        }

        if (select.value === "/")  {
            const sum = Number(a.value) / Number(b.value);
            result.innerHTML = sum.toFixed(2);
        }

    }
})
