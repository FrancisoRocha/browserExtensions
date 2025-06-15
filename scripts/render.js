import { data } from "./api.js";

export const renderCars = async() =>{

    const items = await data()

    items.forEach(({ logo, name , description, isActive}) => {
    const cardsContainer = document.querySelector('.extension__card')
    
    const cards = document.createElement('DIV')
    cards.classList.add('cards')
    
    cards.innerHTML = 
        `
        <div class="cards ligth">
            <!-- INFORMACION -->
            <div class="info__card">
                <img src="${logo}" alt="${name}" class="icon__card">
                <div class="info">
                    <p class="title__card">${name}</p>
                    <p class="text__card">${description}</p>
                </div>
                <!-- BOTONES -->
                <div class="buttons__card">
                    <button class="btn__remove">Remove</button>
                    <label class="switch">
                    <input type="checkbox" id="themeToggle" ${isActive ? 'checked' : ''}>
                    <span class="slider"></span>
                    </label>
                </div>
            </div>
        </div>`;
    cardsContainer.appendChild(cards);
    });
}
