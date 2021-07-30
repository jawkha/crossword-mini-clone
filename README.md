[New York Times Crossword Mini](https://www.nytimes.com/crosswords/game/mini)

**A. APP LOAD EVENTS**

When the app loads, the following should happen:

- ✅ The clues for across and down should be rendered on the screen
- ✅ The 5x5 grid should be rendered on the screen with un-fillable squares colored black with input
  disabled.
- ✅ Each square where the word for a given clue starts has the clue number displayed in the top
  left corner.
- ✅ The first fillable square from first row should be in focus with a yellow background
- ✅ The rest of the squares in first row should have a light blue background
- ✅ The first clue for across should be displayed in the activeClue section.
- 🟩 The same clue should also be highlighted with a light blue background in the clues list and its
  counterpart in the other direction (across or down) should have only it's left border colored
  light blue.
- ✅ The timer should start counting

**B. USER ACTIONS INSIDE THE GRID AND THEIR RESULTS**

**click on the currently active square**

- ✅ the direction toggles between 'across' and 'down'
- ✅ based on the new active direction, the rest of the squares in the row or column switch to a
  light blue background.
- ✅ the active clue is also updated based on the new direction.

**click on another square**

- ✅ the clicked square becomes active with yellow background.
- ✅ the active direction remains the same as before the click event and
- ✅ based on that direction, the remaining squares in the row or column containing the new active
  square switch to a light blue background.
- ✅ the active clue is also updated.

**press a key**

- ✅ **_if the key is not an arrow or space key_**, the currently active square is filled with a
  capitalized character corresponding to the pressed key and
  - ✅ the next fillable empty square in row or column based on the active direction becomes active.
  - ✅ if the active square is the last square in the given row or column, the same square remains
    active.
- ✅ **_if the pressed key is an arrow key_**, then the result of the key press depends on the
  current active direction and the type of the arrow key.
  - ✅ if the arrow key and the current active direction are the same, e.g. up or down arrow key
    when the active direction is 'down' or left and right arrow keys when the active direction is
    across, then the key press results in the next square (even if it's already filled) in the
    direction of the arrow key becoming active.
  - ✅ if the current active square is the last square in the active row or column, then the same
    square remains active.
  - ✅ if the arrow key and the current active direction are not the same, then the key press
    results in the active direction getting toggled.
- 🟩 **_if the key pressed is the space bar_**, then the result depends on whether the currently
  active square is filled or not.
  - 🟩 if the currently active square is not filled, then pressing the space bar results in moving
    to the next empty square in the active direction. If the next square is filled, it will be
    skipped over to move to the next empty square and making it the active square. If the currently
    active square is the last square in the given row or column, the first square for the given row
    or column becomes the next active square.
  - 🟩 if the currently active square is filled, pressing the space bar will delete the character
    from it and move to the next square immediately after it in the given row or column. If the new
    active square is also already filled, then pressing the space bar will keep deleting the
    characters. However, if a given active square is filled but is the last one in a given row or
    column, then after deleting the character inside it, the new active square will be the first
    empty square in the given row or column. If there are no other empty squares, then the last
    square in the given row or column will remain active despite repeated presses of the space bar.
  - 🟩 if the currently active square is empty, pressing the space bar will result in skipping over
    to the next empty square in the given row or column. If there are no other empty squares, then
    the same square will remain active despite repeated presses of the space bar.

**When all the squares are filled** then one of two things happens:

- 🟩 if all the answers are correct, a congratulations message is displayed and the timer stops
  indicating that the game is over.
- 🟩 if any of the squares has been filled incorrectly, a message is displayed that there are some
  errors and they should continue.

**C. USER ACTIONS OUTSIDE THE GRID AND THEIR RESULTS**

- 🟩 **_Pause the timer_** displays a message in a modal covering the grid asking the user to
  resume. if the resume button in the modal is clicked, the modal is removed and the timer resumes
  counting.

**_Options_** available in the menu bar

- 🟩 clicking Clear displays a dropdown with options to clear square, word, puzzle, or
  `puzzle and timer`.
- 🟩 clicking Reveal displays a dropdown with options to reveal square, word, or puzzle
- 🟩 clicking Check displays a dropdown with options for autocheck, square, word, or puzzle. When
  autocheck is activated, a square is highlighted as correct or incorrect as soon as it is filled.
