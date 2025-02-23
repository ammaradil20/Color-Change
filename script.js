
    const textColor = document.getElementById("text-color");
    const buttonContainer = document.getElementById("button-container");
    
    const redBtn = document.getElementById("red-btn");
    const greenBtn = document.getElementById("green-btn");
    const blueBtn = document.getElementById("blue-btn");
    const brownBtn = document.getElementById("brown-btn");
    const resetBtn = document.getElementById("reset-btn");

    buttonContainer.addEventListener("click", function (event){
        switch  (event.target) {
            case redBtn :
                textColor.style.color = "#ff0000";
                break;
                case greenBtn :
                    textColor.style.color = "#008000";
                    break;
                    case blueBtn :
                        textColor.style.color = "#0000ff";
                        break;
                        case brownBtn :
                            textColor.style.color = "#d8a869";
                            break;
                            case resetBtn :
                                textColor.style.color = "#000000";
                                break;

        };
    });
