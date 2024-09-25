// var lst_images = ["images/girl.jpg", "images/avatar_hat.jpg", "images/girl_hood.jpg", "images/bandmember.jpg", "images/team1.jpg", "images/boy.jpg"]





var photos = {
    "image1": { "link": "images/girl.jpg", "count": 0 },
    "image2": { "link": "images/avatar_hat.jpg", "count": 0 },
    "image3": { "link": "images/girl_hood.jpg", "count": 0 },
    "image4": { "link": "images/bandmember.jpg", "count": 0 },
    "image5": { "link": "images/team1.jpg", "count": 0 },
    "image6": { "link": "images/boy.jpg", "count": 0 }
};

// Using for-in loop to iterate over the photos object

function random_photo(){
    
    for (let i =0; i<=11; i++) {
        let random_num = Math.floor(Math.random() * 6);
        index = `image${random_num+1}`
        image = photos[index]
        count = image.count
        let div = document.getElementsByTagName("div")
    
        if (count<=1) {
            image.count+=1
            var img = div[i].getElementsByTagName("img")[0]
            img.src = image.link
            img.style.visibility = "hidden";
            continue
        }
        i--
    }
    
}

random_photo()




function imgsrc() {
    let clickedImages = [];  // To store the image sources of the two clicked images
    let clickedDivs = [];    // To store the divs of the clicked images for visibility control
    let moves = 0;           // To count the number of moves
    let matchedPairs = 0;    // To count matched pairs (to know when the game is complete)
    const totalPairs = 6;    // Assuming you have 6 pairs (adjust this based on your game)

    var divs = document.querySelectorAll('.card');
    var movesCountElement = document.getElementById('movesCount'); // Get the moves count element
    var timerElement = document.getElementById('timer'); // Get the timer element
    var startButton = document.getElementById('startButton'); // Get the start button element
    var resetButton = document.getElementById('resetButton'); // Get the reset button element

    let gameRunning = false;  // Track if the game is running

    // Timer setup
    let totalTime = 5 * 60; // 5 minutes in seconds
    let timerInterval;

    function updateTimerDisplay(minutes, seconds) {
        timerElement.textContent = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        timerInterval = setInterval(function() {
            if (!gameRunning) {
                clearInterval(timerInterval);  // Stop the timer if the game is not running
                return;
            }

            let minutes = Math.floor(totalTime / 60);
            let seconds = totalTime % 60;

            updateTimerDisplay(minutes, seconds);

            if (totalTime === 0) {
                clearInterval(timerInterval);
                endGame();  // When time runs out, stop the game
            }

            totalTime--;
        }, 1000); // Update the timer every second
    }

    function stopTimer() {
        clearInterval(timerInterval);  // Stops the timer when the game is completed
    }

    function endGame() {
        gameRunning = false;
        alert('Time is up! Game over.');
        resetButton.style.display = "inline";  // Show the reset button when the game ends
    }

    function checkGameCompletion() {
        if (matchedPairs === totalPairs) {
            gameRunning = false;
            stopTimer();  // Stop the timer when the game is complete
            alert('Congratulations! You matched all pairs.');
            resetButton.style.display = "inline";  // Show the reset button after the game is complete
        }
    }

    function resetGame() {
        // Reset all images to hidden
        divs.forEach(function(div) {
            var img = div.querySelector('img');
            img.style.visibility = 'hidden';
        });

        // Reset game variables
        clickedImages = [];
        clickedDivs = [];
        moves = 0;
        matchedPairs = 0;  // Reset matched pairs
        totalTime = 5 * 60;  // Reset time to 5 minutes
        gameRunning = false;
        updateMovesDisplay();
        updateTimerDisplay(5, 0);
        resetButton.style.display = "none";  // Hide the reset button

        // Game will start when the Start Game button is clicked again
    }

    // Function to update the moves count display
    function updateMovesDisplay() {
        movesCountElement.textContent = `Moves: ${moves}`;
    }

    // Game logic
    divs.forEach(function(div) {
        div.addEventListener('click', function() {
            if (!gameRunning) return; // Prevent further clicks if the game is not running

            var img = this.querySelector('img'); // Select the img inside the clicked div

            if (img && clickedImages.length < 2 && img.style.visibility !== 'visible') {
                var imgSrc = img.src;

                // Make the clicked image visible immediately
                img.style.visibility = "visible";

                // Add the clicked image src to the array and store the div for visibility control
                clickedImages.push(imgSrc);
                clickedDivs.push(img); // Store the image element

                console.log('Image Source:', imgSrc);

                // When two images have been clicked, check if they match
                if (clickedImages.length === 2) {
                    moves++;
                    updateMovesDisplay(); // Update the move count display

                    // Check if the two clicked images have the same source
                    if (clickedImages[0] === clickedImages[1]) {
                        console.log('Images match! Both stay visible.');
                        matchedPairs++;  // Increase matched pairs count
                        checkGameCompletion();  // Check if all pairs are matched
                        clickedImages = [];
                        clickedDivs = [];  // Reset for the next round
                    } else {
                        console.log('Images do not match. Hiding them again.');
                        setTimeout(function() {
                            clickedDivs.forEach(function(imgElement) {
                                imgElement.style.visibility = "hidden";  // Hide images
                            });

                            clickedImages = [];
                            clickedDivs = [];
                        }, 1000); // Wait 1 second before hiding
                    }
                }
            }
        });
    });

    // Start the game and timer on button click
    startButton.addEventListener('click', function() {
        if (!gameRunning) {
            gameRunning = true;
            startTimer();  // Start the timer when the game starts
            console.log('Game started');
        }
    });

    // Reset the game when the reset button is clicked
    resetButton.addEventListener('click', function() {
        resetGame();
        console.log('Game reset');
    });
}

// Call the function to initialize the game
imgsrc();




















// function imgsrc() {
//     let clickedImages = [];  // To store the image sources of the two clicked images
//     let clickedDivs = [];    // To store the divs of the clicked images for visibility control
//     let moves = 0;           // To count the number of moves

//     // Select all divs with the class 'card'
//     var divs = document.querySelectorAll('.card');
//     var movesCountElement = document.getElementById('movesCount'); // Get the moves count element

//     // Function to update the moves count display
//     function updateMovesDisplay() {
//         movesCountElement.textContent = `Moves: ${moves}`;
//     }

//     // Loop through each div and add a click event listener
//     divs.forEach(function(div) {
//         div.addEventListener('click', function() {
//             var img = this.querySelector('img'); // Select the img inside the clicked div

//             // Ensure we only process a new click if less than 2 images have been clicked
//             if (img && clickedImages.length < 2 && img.style.visibility !== 'visible') {
//                 var imgSrc = img.src;

//                 // Make the clicked image visible immediately
//                 img.style.visibility = "visible";

//                 // Add the clicked image src to the array and store the div for visibility control
//                 clickedImages.push(imgSrc);
//                 clickedDivs.push(img); // Store the image element

//                 console.log('Image Source:', imgSrc);

//                 // When two images have been clicked, check if they match
//                 if (clickedImages.length === 2) {
//                     // Increment the move counter
//                     moves++;
//                     updateMovesDisplay(); // Update the move count display

//                     // Check if the two clicked images have the same source
//                     if (clickedImages[0] === clickedImages[1]) {
//                         // If the two images match, keep them visible
//                         console.log('Images match! Both stay visible.');
//                         clickedImages = [];
//                         clickedDivs = [];  // Reset for the next round
//                     } else {
//                         // If they don't match, hide them again after a short delay
//                         console.log('Images do not match. Hiding them again.');

//                         // Delay of 1 second before hiding the images
//                         setTimeout(function() {
//                             clickedDivs.forEach(function(imgElement) {
//                                 imgElement.style.visibility = "hidden";  // Hide images
//                             });

//                             // Reset clickedImages and clickedDivs after hiding the images
//                             clickedImages = [];
//                             clickedDivs = [];
//                         }, 1000); // Wait 1 second before hiding
//                     }
//                 }
//             }
//         });
//     });
// }

// // Call the function
// imgsrc();












