## TO DO

- Build the general layout of the game with the correct placement of timer, board, and clues.

1. Clicking on an inactive square should make it an active square. It should maintain the across or
   down direction from before and the rest of the row or column should have a light blue background.
2. Clicking on an active square should toggle between across and down directions. The active clue
   should also be updated accordingly.
3. When the user inputs into a square, the next non-black square in the across or down direction
   should become active. If it was the last square, then the same square should remain active.
4. When the user presses the space bar inside a previously filled square, the previous input should
   be deleted and the next square should become active following the same logic described in #3.
5. When the game starts, the first cell for 1 across should be in focus.
6. A timer starts running in increments of one second as the game starts.
7. The game can be paused and resumed using the pause/play icons next to the timer.
