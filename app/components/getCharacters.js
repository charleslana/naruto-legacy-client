import characters from '../../static/characters.js';

const getCharacters = () => {
    const element = document.querySelector('#carouselCharacters > div');
    let elements = '';
    let count = 0;

    if (element) {
        characters.map(character => {
            elements += `
                <div class="carousel-item ${count == 0 ? 'active' : ''}">
                    <label class="form-check-label" for="flexRadioCharacter${character.value}">
                        <img src="../assets/img/characters/${character.name}/${character.image}.png" class="d-block mb-2" alt="${character.name}">
                        <input class="form-check-input" type="radio" name="flexRadioCharacter"
                            id="flexRadioCharacter${character.value}" value="${character.value}" required>
                        <span>${character.name}</span>
                    </label>
                </div>
            `;
            count++;
        });

        element.innerHTML = elements;
    }
}

export default getCharacters;