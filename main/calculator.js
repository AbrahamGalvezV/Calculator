// Llamamos a la pantalla y a los botones y creamos la variable
const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

// Cuando pulsamos un boton obtenemos su valos 
buttons.forEach(button => {
    button.addEventListener("click", () => {{
        // Reflejamos el contenido del botón presionado en pantalla
        const buttonPressed = button.textContent;
        
        // Al presionar C elimina la cuenta y muestra 0
        if (button.id === "c") {
            screen.textContent = "0";
            return;
        }

        // Al presionar ← se elimina la ultima cifra y si no quedan cifras refleja 0
        if (button.id === "delete") {
            if (screen.textContent.length === 1 || screen.textContent === "Error!"){ 
                screen.textContent = "0";  
            } else {
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }

        if (button.id === "equal") {
            try {
                screen.textContent = eval(screen.textContent);
            } catch {
                screen.textContent = "Error!";
            }
            return;
        }

        // Al introducir un valor 0 desaparece y visualiza dicho valor 
        if (screen.textContent === "0" || screen.textContent === "Error!") {
            screen.textContent = buttonPressed;
        } else { // Los numeros se almacenan en pantalla
            screen.textContent += buttonPressed;
        }
    }})
})