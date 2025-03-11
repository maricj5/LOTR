
const rightArrow = document.getElementById('arrow');  
const leftArrow = document.getElementById('arrow1');  


const firstSetCharacters = [
  document.getElementById('character1'),
  document.getElementById('character2'),
  document.getElementById('character3'),
  document.getElementById('character4')
];


const secondSetCharacters = [
  document.getElementById('character5'),
  document.getElementById('character6'),
  document.getElementById('character7'),
  document.getElementById('character8')
];


secondSetCharacters.forEach(function(character) {
  character.style.display = 'none'; 
});
leftArrow.style.opacity = '0.25'; 
leftArrow.style.cursor = 'default';


function showFirstSet() {
  
  secondSetCharacters.forEach(function(character) {
    character.style.display = 'none';
  });

  
  firstSetCharacters.forEach(function(character) {
    character.style.display = 'flex';
  });

  
  leftArrow.style.opacity = '0.25';
  leftArrow.style.cursor = 'default';
  rightArrow.style.opacity = '1';
  rightArrow.style.cursor = 'pointer';
}


function showSecondSet() {
  
  firstSetCharacters.forEach(function(character) {
    character.style.display = 'none';
  });

  secondSetCharacters.forEach(function(character) {
    character.style.display = 'flex';
  });

  rightArrow.style.opacity = '0.25';
  rightArrow.style.cursor = 'default';
  leftArrow.style.opacity = '1';
  leftArrow.style.cursor = 'pointer';
}

rightArrow.addEventListener('click', function() {
  if (rightArrow.style.cursor !== 'default') {
    showSecondSet();
  }
});

leftArrow.addEventListener('click', function() {
  if (leftArrow.style.cursor !== 'default') {
    showFirstSet();
  }
});
