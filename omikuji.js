const nameInput = document.getElementById("name");
const button = document.getElementById("btn");

if (nameInput.value.trim() === "") {
    button.disabled = true;
}

nameInput.addEventListener("input", () => {
    if (nameInput.value.trim() === "") {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
});

button.addEventListener("click", () => {
    nameSubmit();
    hurihuri();
    jumpResult();
});

function nameSubmit() {
    const name = localStorage.setItem("name", nameInput.value.trim());
}

function hurihuri() {
    const 繰り返し = 10;
    button.disabled = true;

    button.animate(
        [
            { transform: "rotate(0)" },
            { transform: "rotate(15deg)" },
            { transform: "rotate(0)" },
            { transform: "rotate(-15deg)" },
            { transform: "rotate(0)" },
        ],
        {
            duration: 750,
            iterations: 繰り返し,
        }
    );

    setTimeout(() => {
        button.disabled = false;
    }, 繰り返し * 1000);
}

function jumpResult() {
    const 飛ぶ時間 = 2;

    setTimeout(() => {
        window.location.href = "result.html";
    }, 飛ぶ時間 * 1000);
}
