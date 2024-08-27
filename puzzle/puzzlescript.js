// Shuffle Answers Function
function shuffleAnswers() {
    const answersGrid = document.querySelector('.answers-grid');
    const piecesArray = Array.from(answersGrid.children);
    piecesArray.sort(() => Math.random() - 0.5);
    piecesArray.forEach(piece => answersGrid.appendChild(piece));
  }
  
  // Call shuffleAnswers on page load
  window.addEventListener('load', shuffleAnswers);
  
  const pieces = document.querySelectorAll('.puzzle-piece');
  const dropzones = document.querySelectorAll('.dropzone');
  
  // Adding drag event listeners to puzzle pieces
  pieces.forEach(piece => {
    piece.addEventListener('dragstart', dragStart);
    piece.addEventListener('dragend', dragEnd);
  });
  
  // Adding drag event listeners to dropzones
  dropzones.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', drop);
  });
  
  // Drag Functions
  function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
      e.target.classList.add('hide');
    }, 0);
  }
  
  function dragEnd(e) {
    e.target.classList.remove('hide');
  }
  
  function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }
  
  function drop(e) {
    e.preventDefault();
    const pieceId = e.dataTransfer.getData('text/plain');
    const piece = document.getElementById(pieceId);
    const target = e.target;
  
    // Prevent replacing if dropzone already has a child
    if (!target.classList.contains('dropzone') || target.hasChildNodes()) {
      return;
    }
  
    // Check if the piece and dropzone have the same ID
    if (pieceId === target.id) {
      target.appendChild(piece);
      target.classList.add('correct', 'has-piece');
    } else {
      // If the piece doesn't match, return it to its original position
      const answersGrid = document.querySelector('.answers-grid');
      answersGrid.appendChild(piece);
    }
  }
  
  // Check Answers Function
  function checkAnswers() {
    let correctCount = 0;
  
    dropzones.forEach(zone => {
      const isCorrect = zone.classList.contains('correct');
      if (isCorrect) {
        correctCount++;
      }
    });
  
    if (correctCount === dropzones.length) {
      // ... code to handle successful completion ...
      if (correctCount === dropzones.length) {
        Swal.fire({
          title: 'Congratulations!',
          text: 'All answers are correct.',
          icon: 'success',
          confirmButtonColor: '#4caf50'
        }).then(() => {
          window.location.href = 'cards-mania.html'; // Redirect to the next level
        });
      } else {
        Swal.fire({
          title: 'Try Again!',
          text: `You got ${correctCount} out of ${dropzones.length} correct.`,
          icon: 'error',
          confirmButtonColor: '#f44336'
        });
      }
    } else {
      // ... code to handle incorrect answers ...
      if (correctCount === dropzones.length) {
        Swal.fire({
          title: 'Congratulations!',
          text: 'All answers are correct.',
          icon: 'success',
          confirmButtonColor: '#4caf50'
        });
      } else {
        Swal.fire({
          title: 'Try Again!',
          text: `You got ${correctCount} out of ${dropzones.length} correct.`,
          icon: 'error',
          confirmButtonColor: '#f44336',
          showCancelButton: true,
          cancelButtonColor: '#6c757d',
          confirmButtonText: 'Retry'
        }).then((result) => {
          if (result.isConfirmed) {
            // Reset the game state (optional)
          }
        });
      }
      if (correctCount === dropzones.length) {
        Swal.fire({
          title: 'Congratulations!',
          text: 'All answers are correct.',
          icon: 'success',
          confirmButtonColor: '#4caf50'
        });
      } else {
        Swal.fire({
          title: 'Keep Learning!',
          text: `You got ${correctCount} out of ${dropzones.length} correct. Review the answers and try again.`,
          icon: 'info',
          confirmButtonColor: '#3085d6' // Adjust color as needed
        });
      }
    }
  }