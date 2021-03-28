# recoding-project

Recoding the artwork : Untitled from Wolfgang Baumer

# pseudo-code
First, we define a big square inside of the canvas. The square borders will be determined through the outside measures of the square. Then, we search for the centre of the canvas / big square, horizontally and vertically.

Second, we draw our beautiful tree. For that, we need to use a loop with seven iterations. Each iteration is a trip starting from the left to the right and then from the right to the left (second trip / second iteration), and so on. If we go from the left to the right it's an odd trip, and if we go from the right to the left it’s an even trip. As we design the tree, its branches get smaller and smaller from the border, so we subtract 1/8 each time it shrinks (proportion 1/8). When shrinking (regarding it’s hight), we also use 1/8 proportion each time.

Third, we finalize the cycle with the last line, the root of the tree. This line connects with the centre.

Finally, the top of the tree has not one but two branches. One in the middle and another 1/8 left from the middle. Its right side is an intersection between the two top branches, so I used a Linear Function. With the line equation (slope * x + intersect) we can discover the y coordinate and voilà. 



