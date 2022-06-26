import { delay } from "./utils.js";

export class Console {
    static async openTerminal(app){
        Console.createText(app, "Welcome")
        await delay(500);
        Console.createText(app, "You're accessing to my personal server...")
        await delay(1500);
        Console.createText(app, "Type help to list the available commands", "italic")

        await delay(500);
        Console.newLine(app);
    }

    static createText(app, text, clazz){
        const p = document.createElement("p")
        if (clazz !== undefined) {
            p.classList.add(clazz)
        }
        p.innerHTML = text
        app.appendChild(p)
    }

    static createCode(app, code, text){
        const p = document.createElement("p");
        p.setAttribute("class", "code");
        p.innerHTML =
            `${code} <br/><span class='text'> ${text} </span>`;
        app.appendChild(p);
    }

    static newLine(app){
        const p = document.createElement("p");
        const span1 = document.createElement("span");
        const span2 = document.createElement("span");
        p.setAttribute("class", "path")
        p.textContent = "[visitor]";
        span1.textContent = " in";
        span2.textContent = " ~/afontan";
        p.appendChild(span1);
        p.appendChild(span2);
        app.appendChild(p);
        const div = document.createElement("div");
        div.setAttribute("class", "type")
        const i = document.createElement("i");
        i.setAttribute("class", "fas fa-angle-right icone")
        const input = document.createElement("input");
        div.appendChild(i);
        div.appendChild(input);
        app.appendChild(div);
        input.focus();
    }

    static validCommand(app, command){
        const div = document.createElement("section");
        div.setAttribute("class", "type2")
        const i = document.createElement("i");
        i.setAttribute("class", "fas fa-angle-right icone")
        const mensagem = document.createElement("h2");
        mensagem.setAttribute("class", "sucess")
        mensagem.textContent = `${command}`;
        div.appendChild(i);
        div.appendChild(mensagem);
        app.appendChild(div);
    }

    static invalidCommand(app, command){
        const div = document.createElement("section");
        div.setAttribute("class", "type2")
        const i = document.createElement("i");
        i.setAttribute("class", "fas fa-angle-right icone error")
        const mensagem = document.createElement("h2");
        mensagem.setAttribute("class", "error")
        mensagem.textContent = `${command}`;
        div.appendChild(i);
        div.appendChild(mensagem);
        app.appendChild(div);
    }
}