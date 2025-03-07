// Selektovanje strelica i skupova karaktera
const rightArrow = document.getElementById('arrow');  // Desna strelica
const leftArrow = document.getElementById('arrow1');  // Leva strelica

// Prvi set karaktera
const firstSetCharacters = [
  document.getElementById('character1'),
  document.getElementById('character2'),
  document.getElementById('character3'),
  document.getElementById('character4')
];

// Drugi set karaktera
const secondSetCharacters = [
  document.getElementById('character5'),
  document.getElementById('character6'),
  document.getElementById('character7'),
  document.getElementById('character8')
];

// Inicijalne postavke
secondSetCharacters.forEach(function(character) {
  character.style.display = 'none'; // Sakrij drugi set na početku
});
leftArrow.style.opacity = '0.25'; // Leva strelica je neaktivna
leftArrow.style.cursor = 'default';

// Funkcija za prikazivanje prvog seta
function showFirstSet() {
  // Sakrij drugi set
  secondSetCharacters.forEach(function(character) {
    character.style.display = 'none';
  });

  // Prikaži prvi set
  firstSetCharacters.forEach(function(character) {
    character.style.display = 'flex';
  });

  // Ažuriraj strelice
  leftArrow.style.opacity = '0.25';
  leftArrow.style.cursor = 'default';
  rightArrow.style.opacity = '1';
  rightArrow.style.cursor = 'pointer';
}

// Funkcija za prikazivanje drugog seta
function showSecondSet() {
  // Sakrij prvi set
  firstSetCharacters.forEach(function(character) {
    character.style.display = 'none';
  });

  // Prikaži drugi set
  secondSetCharacters.forEach(function(character) {
    character.style.display = 'flex';
  });

  // Ažuriraj strelice
  rightArrow.style.opacity = '0.25';
  rightArrow.style.cursor = 'default';
  leftArrow.style.opacity = '1';
  leftArrow.style.cursor = 'pointer';
}

// Event listener za desnu strelicu
rightArrow.addEventListener('click', function() {
  if (rightArrow.style.cursor !== 'default') {
    showSecondSet();
  }
});

// Event listener za levu strelicu
leftArrow.addEventListener('click', function() {
  if (leftArrow.style.cursor !== 'default') {
    showFirstSet();
  }
});
