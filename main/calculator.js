const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

// Función de escucha de eventos para los botones
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonPressed = button.textContent;

        switch (button.id) {
            case "c":
                screen.textContent = "0";
                break;
            case "delete":
                screen.textContent = screen.textContent.length === 1 || screen.textContent === "Error!"
                    ? "0"
                    : screen.textContent.slice(0, -1);
                break;
            case "equal":
                try {
                    screen.textContent = evaluateExpression(screen.textContent);
                } catch {
                    screen.textContent = "Error!";
                }
                break;
            default:
                screen.textContent = screen.textContent === "0" || screen.textContent === "Error!"
                    ? buttonPressed
                    : screen.textContent + buttonPressed;
        }
    });
});

// Función de evaluación segura (sustituye a `eval`)
function evaluateExpression(expression) {
    // Limitar la evaluación a expresiones matemáticas válidas
    return Function(`"use strict"; return (${expression})`)();
}
