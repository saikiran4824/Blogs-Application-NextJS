---
  title: 150 Important DSA Questions Covering All Topics,
  description: Explore a comprehensive list of 150 important DSA questions covering various topics such as arrays, trees, graphs, dynamic programming, and more, with explanations to strengthen your problem-solving skills.,
  slug: 150-important-dsa-questions,
  author: Sai Kiran,
  image: https://deen3evddmddt.cloudfront.net/uploads/content-images/what-is-dsa.webp

----



📘 150 Essential DSA Questions
This comprehensive guide covers the most frequently asked questions in Data Structures and Algorithms, organized by topics. Each problem includes a short explanation and detailed steps, making this list a great reference for interview prep or daily practice.

🔢 Arrays
1. Two Sum
Problem: Find two numbers that add up to a specific target.
Approach:

Initialize a hash map.

Iterate through the array.

For each element x, check if target - x is in the map.

If yes, return indices.
Time Complexity: O(n)

2. Best Time to Buy and Sell Stock
Problem: Maximize profit from buying and selling stock once.
Approach:

Track minimum price while traversing.

Update maximum profit using current_price - min_price.
Time Complexity: O(n)

3. Container With Most Water
Problem: Find two lines that, together with the x-axis, form a container with the most water.
Approach:

Use two pointers at start and end.

Calculate area, move the pointer with the shorter line inward.
Time Complexity: O(n)

4. Product of Array Except Self
Problem: Return an array where each element is the product of all other elements.
Approach:

Use prefix and suffix arrays to store product from left and right.

Multiply prefix and suffix for each index.
Time Complexity: O(n)

5. Maximum Subarray (Kadane's Algorithm)
Problem: Find the subarray with the maximum sum.
Approach:

Initialize max_current = max_global = nums[0].

Traverse the array, update max_current = max(nums[i], max_current + nums[i]).

Update max_global with the maximum.
Time Complexity: O(n)

6. Find Minimum in Rotated Sorted Array
Problem: Find the smallest element in a rotated sorted array.
Approach:

Use binary search.

If mid element > rightmost, search right; else search left.
Time Complexity: O(log n)

7. Search in Rotated Sorted Array
Problem: Search for an element in rotated sorted array.
Approach:

Use binary search with extra checks for rotation.

Compare mid with both ends to decide which side is sorted.
Time Complexity: O(log n)

8. 3Sum
Problem: Find all unique triplets that sum to zero.
Approach:

Sort array.

Fix one number and use two pointers for remaining two.

Skip duplicates.
Time Complexity: O(n²)

9. 4Sum
Problem: Find all unique quadruplets that sum to a target.
Approach:

Fix two numbers and use two pointers for the rest.

Handle duplicates carefully.
Time Complexity: O(n³)

10. Move Zeroes
Problem: Move all zeroes to the end of the array.
Approach:

Use two pointers: one for current index, another for placing non-zero values.

After loop, fill remaining with zeroes.
Time Complexity: O(n)

11. Set Matrix Zeroes
Problem: If an element is 0, set its entire row and column to 0.
Approach:

Use first row and column to mark zeros.

Traverse matrix twice: mark and update.
Space: O(1) extra space (in-place).

12. Spiral Matrix
Problem: Return matrix elements in spiral order.
Approach:

Traverse with 4 boundaries: top, bottom, left, right.

Move in 4 directions and shrink boundaries.
Time Complexity: O(m × n)

13. Array Partition I
Problem: Maximize sum of min(a[i], b[i]) for array partitioned into pairs.
Approach:

Sort array and take every second element.
Time Complexity: O(n log n)

14. Find the Duplicate Number
Problem: Find the duplicate number without modifying the array.
Approach:

Floyd’s Cycle Detection: treat array as a linked list.
Time Complexity: O(n)

15. Find All Numbers Disappeared in an Array
Problem: Find numbers from 1 to n that don't appear.
Approach:

Mark visited elements by negating nums[nums[i]-1].

Traverse and collect indices with positive values.
Time Complexity: O(n)

16. Reverse Pairs
Problem: Count pairs (i, j) where i < j and nums[i] > 2*nums[j].
Approach:

Use merge sort to count pairs across partitions.
Time Complexity: O(n log n)

🔗 Linked Lists
17. Reverse Linked List
Problem: Reverse a singly linked list.
Approach:

Initialize three pointers: prev, current, next.

Iterate and adjust pointers.
Time Complexity: O(n)

18. Detect Cycle in a Linked List
Problem: Check if a cycle exists.
Approach:

Use slow and fast pointers (Floyd's Cycle Detection).

If they meet, cycle exists.
Time Complexity: O(n)

19. Merge Two Sorted Lists
Problem: Merge two sorted linked lists into one.
Approach:

Use dummy node.

Iterate both lists and attach smaller node to result.
Time Complexity: O(n)

20. Intersection of Two Linked Lists
Problem: Find node where two linked lists intersect.
Approach:

Use two pointers that traverse both lists; they meet at intersection or null.
Time Complexity: O(n)

21. Linked List Cycle II
Problem: Return the start node of the cycle.
Approach:

Detect cycle using Floyd's.

Move one pointer to head, another from meeting point — they meet at the start.
Time Complexity: O(n)

22. Add Two Numbers (Linked List)
Problem: Add two numbers represented by linked lists.
Approach:

Traverse both lists.

Add values + carry, store in new node.

Continue until both lists and carry are done.
Time Complexity: O(n)

23. Remove N-th Node From End of List
Problem: Remove N-th node from the end.
Approach:

Use two pointers: move first pointer N steps ahead.

Move both until first reaches end.

Remove node at second pointer’s next.
Time Complexity: O(n)

24. Reorder List
Problem: Reorder list as L0→Ln→L1→Ln−1...
Approach:

Find middle node.

Reverse second half.

Merge two halves.
Time Complexity: O(n)

25. Flatten a Multilevel Doubly Linked List
Problem: Convert a multilevel doubly linked list to a single-level list.
Approach:

Use DFS or stack.

Connect child lists to main list as you traverse.
Time Complexity: O(n)

🌳 Trees
26. Binary Tree Level Order Traversal
Problem: Traverse a binary tree level by level.
Approach:

Use Breadth-First Search (BFS) with a queue.

For each level, iterate all nodes and enqueue their children.
Time Complexity: O(n)

27. Maximum Depth of Binary Tree
Problem: Find the maximum depth (height) of a binary tree.
Approach:

Use Depth-First Search (DFS) recursively.

For each node, return 1 + max(depth of left, depth of right).
Time Complexity: O(n)

28. Symmetric Tree
Problem: Check if a binary tree is symmetric around its center.
Approach:

Compare left and right subtree recursively.

Both must be mirrors of each other.
Time Complexity: O(n)

29. Binary Tree Inorder Traversal
Problem: Inorder traversal: Left → Root → Right.
Approach:

Use recursion or an explicit stack for iterative solution.
Time Complexity: O(n)

30. Binary Tree Preorder Traversal
Problem: Preorder traversal: Root → Left → Right.
Approach:

Use recursion or stack-based iteration.
Time Complexity: O(n)

31. Binary Tree Postorder Traversal
Problem: Postorder traversal: Left → Right → Root.
Approach:

Recursively traverse left and right, then push root.

Or use two stacks in iterative version.
Time Complexity: O(n)

32. Flatten Binary Tree to Linked List
Problem: Flatten the tree to a linked list in preorder.
Approach:

Use reverse postorder traversal (right → left → root).

Store last visited node and link nodes accordingly.
Time Complexity: O(n)

33. Path Sum
Problem: Check if there's a root-to-leaf path with given sum.
Approach:

Subtract node value from target and recursively check children.
Time Complexity: O(n)

34. Binary Search Tree Validation
Problem: Check if binary tree follows BST rules.
Approach:

Use recursion and bounds (min, max) for each node.

Node's value must lie within the valid range.
Time Complexity: O(n)

35. Lowest Common Ancestor of a Binary Tree
Problem: Find LCA of two nodes in a binary tree.
Approach:

Traverse both sides recursively.

Return node if either side returns non-null.
Time Complexity: O(n)

36. Diameter of Binary Tree
Problem: Find the longest path between any two nodes.
Approach:

For each node, calculate left and right depths.

Max diameter = max(left + right).
Time Complexity: O(n)

37. Construct Binary Tree from Preorder and Inorder Traversal
Problem: Reconstruct tree from traversal arrays.
Approach:

Root = first item in preorder.

Recursively split inorder and preorder arrays.
Time Complexity: O(n)

38. Serialize and Deserialize Binary Tree
Problem: Convert tree to string and reconstruct it.
Approach:

Use preorder traversal for serialization.

Use index tracking during deserialization.
Time Complexity: O(n)

39. Balanced Binary Tree
Problem: Check if binary tree is height-balanced.
Approach:

Recursively check depth difference ≤ 1.

Return -1 if unbalanced early (pruning).
Time Complexity: O(n)

40. Binary Tree Maximum Path Sum
Problem: Find the path with the highest sum.
Approach:

Use DFS to track maximum path through each node.

Consider cases: node alone, node+left, node+right, or all three.
Time Complexity: O(n)

📊 Graphs
41. Number of Islands
Problem: Count connected groups of 1s in a 2D grid.
Approach:

Use DFS or BFS to explore and mark visited cells.
Time Complexity: O(m × n)

42. Clone Graph
Problem: Clone a graph with nodes and edges.
Approach:

Use BFS/DFS with a hashmap of original → cloned node.
Time Complexity: O(n)

43. Course Schedule
Problem: Check if courses can be completed.
Approach:

Use DFS for cycle detection in a directed graph.
Time Complexity: O(V + E)

44. Course Schedule II
Problem: Return order of course completion.
Approach:

Use Topological Sort via BFS (Kahn’s algo).
Time Complexity: O(V + E)

45. Word Ladder
Problem: Find the shortest word transformation.
Approach:

Use BFS from start word.

Change one letter at a time, check dictionary.
Time Complexity: O(n × word length)

46. Connected Components in an Undirected Graph
Problem: Count connected groups of nodes.
Approach:

Use DFS/BFS for each unvisited node.
Time Complexity: O(V + E)

47. Kruskal’s Algorithm
Problem: Find MST in weighted undirected graph.
Approach:

Sort edges by weight.

Use Union-Find to avoid cycles.
Time Complexity: O(E log E)

48. Prim’s Algorithm
Problem: Find MST starting from a node.
Approach:

Use a min heap (priority queue).

Add smallest edge to visited nodes.
Time Complexity: O(E log V)

49. Dijkstra’s Algorithm
Problem: Find shortest path from a source.
Approach:

Use min heap to always expand the smallest distance node.

Update neighbors with min(current, old distance).
Time Complexity: O((V + E) log V)

50. Bellman-Ford Algorithm
Problem: Find shortest path with negative weights.
Approach:

Relax all edges V-1 times.

Check for negative weight cycles on final pass.
Time Complexity: O(V × E)

51. Floyd-Warshall Algorithm
Problem: All pairs shortest paths.
Approach:

Use dynamic programming: dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j])
Time Complexity: O(V³)

52. Topological Sort
Problem: Linear order of vertices in DAG.
Approach:

Use DFS or BFS (Kahn’s algorithm).

Add node after all dependencies are resolved.
Time Complexity: O(V + E)

53. Longest Path in a DAG
Problem: Find the longest path in a DAG.
Approach:

Topological sort the graph.

Use dynamic programming over sorted nodes.
Time Complexity: O(V + E)
Problem
Given a graph, find the number of connected components.

Approach
Use DFS or BFS to traverse each unvisited node and mark all reachable nodes from it. Each time you start a new traversal, you've found a new connected component.

Steps
Maintain a visited set.

Iterate through all nodes. If a node is unvisited, start DFS/BFS from it.

Each DFS/BFS marks all reachable nodes from that start node.

Increment the count for each traversal started.

Use Case
Finding the number of isolated clusters in a social network or systems.

💡 Dynamic Programming
🔹 Climbing Stairs
Problem
You can climb 1 or 2 steps at a time. How many ways are there to reach the nth step?

Idea
It’s a Fibonacci sequence:

Ways to reach step i = ways[i-1] + ways[i-2]

🔹 House Robber
Problem
You can't rob two adjacent houses. What’s the max amount you can rob?

Idea
Use a DP array where each element stores the max amount that can be robbed up to that house without alerting the police.

dp[i] = max(dp[i-1], dp[i-2] + nums[i])

🔹 Longest Palindromic Subsequence
Problem
Find the length of the longest subsequence that is a palindrome.

Idea
Use DP to compare substrings and build up the solution from smaller to larger substrings.

If characters match, expand inward.

Otherwise, try both ends and take max.

🔹 Longest Increasing Subsequence
Problem
Find the longest increasing subsequence in an array.

Idea
For each element, look at all previous elements. If a smaller element is found, update the current element’s LIS value.

Time complexity: O(n²), or O(n log n) using binary search optimization.

🔹 Partition Equal Subset Sum
Problem
Can you partition an array into two subsets with equal sum?

Idea
Use DP to find if a subset exists that sums up to sum/2.

This is a variation of the 0/1 Knapsack problem.

🔹 Coin Change
Problem
Find the minimum number of coins to make a target amount.

Idea
Use bottom-up DP to fill in the minimum coins required for each amount from 1 to amount.

If no valid combination, return -1.

🔹 Coin Change II
Problem
Count the number of combinations that make up the amount using coins.

Idea
This is an unbounded knapsack problem.

For each coin, update the number of ways to make amounts up to target.

🔹 Target Sum
Problem
Assign '+' or '-' signs to each number to reach a target sum.

Idea
Convert to a subset sum problem using DP by calculating the difference and partition logic.

🔹 Word Break
Problem
Can the string be segmented into dictionary words?

Idea
Use DP to keep track of valid partitions.

dp[i] = true if s[0:i] can be broken into valid words.

🔹 Edit Distance
Problem
Minimum operations to convert one string into another.

Idea
Classic DP:

If characters match: move both.

Else: min of insert, delete, or replace.

🔹 Distinct Subsequences
Problem
Count how many times a target string appears as a subsequence in another string.

Idea
Use DP to count all possible subsequences at each index of the source and target.

🔹 Minimum Path Sum
Problem
Find minimum path sum from top-left to bottom-right in a grid.

Idea
Use DP to add the current cell value to the minimum of top and left cell values.

🔹 Longest Common Subsequence
Problem
Find the longest common subsequence of two strings.

Idea
Use a DP table to track matches. If characters match, extend; else, take max of left and top.

🔹 Maximal Square
Problem
Find the largest square containing only 1's in a binary matrix.

Idea
DP cell represents the largest square ending at that position.

If current cell is '1':
dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])

🔹 Burst Balloons
Problem
Maximize coins collected by bursting balloons in an optimal order.

Idea
Use DP with interval-based recursion. Try all partitions between left and right.

🔹 Word Break II
Problem
Find all possible ways to segment a string using a dictionary.

Idea
Use DP for memorization and backtracking to build all valid sentences.

🔹 Maximum Product Subarray
Problem
Find max product of a contiguous subarray.

Idea
Track both min and max at every index due to possible negative numbers.

🔹 Minimum Window Substring
Problem
Find the smallest substring containing all characters of another string.

Idea
Use sliding window to expand and contract based on character needs.

🏆 Greedy Algorithms
🔹 Activity Selection Problem
Idea
Sort by finish times. Always choose the activity that ends first to maximize choices.

🔹 Fractional Knapsack
Idea
Sort items by value/weight ratio. Take as much of the highest ratio item as possible.

🔹 Huffman Coding
Idea
Build a min-heap of frequencies. Merge the smallest two repeatedly to form the tree.

🔹 Job Sequencing Problem
Idea
Sort jobs by profit. Use a greedy time slot allocation from latest to earliest.

🔹 Minimizing Coin Change
Idea
Greedy choice works only when coins are in canonical denominations. Pick the largest possible coin at every step.

🔹 Gas Station Problem
Idea
Try to simulate traveling from each gas station. Use greedy sum and track start index.

🔹 Maximum Sum Increasing Subsequence
Idea
Similar to LIS, but track the sum instead of just length. Update if increasing and sum is larger.

🔹 Divide Chocolate Problem
Idea
Binary search the answer and check feasibility using greedy cut strategy.

🔙 Backtracking
🔹 N-Queens
Idea
Place queens row-by-row and backtrack if a queen attacks another. Use column and diagonal constraints.

🔹 Sudoku Solver
Idea
Try placing digits in empty cells. Backtrack if placing causes rule violation.

🔹 Subset Sum
Idea
Try all subsets by including or excluding elements. Track sum and prune if it exceeds target.

🔹 Permutations
Idea
Fix each position and recursively permute remaining elements.

🔹 Combinations
Idea
Use start index to avoid duplicates. Build combinations of required length.

🔹 Combination Sum
Idea
Use candidates recursively. Reuse allowed, so do not move forward in recursive call.

🔹 Palindrome Partitioning
Idea
Try all substrings. If substring is a palindrome, recurse on remaining string.

🔹 Word Search
Idea
Start DFS from each cell. Move in 4 directions and backtrack if character doesn't match.

🔹 Letter Combinations of a Phone Number
Idea
Backtrack through all digit-to-letter mappings. Combine characters at each digit position.

🔹 N-Queens II
Idea
Same as N-Queens but instead of storing positions, count the number of valid configurations.
📊 Sliding Window
1. Longest Substring Without Repeating Characters
Find the length of the longest substring without repeating characters using a sliding window and a set to track seen characters.

Idea:
Use two pointers to represent a window. Expand the window until a duplicate is found, then move the left pointer to shrink the window.

2. Minimum Size Subarray Sum
Find the smallest length of a contiguous subarray whose sum is ≥ target.

Idea:
Maintain a window and track the sum. If the sum exceeds the target, shrink the window from the left and update the minimum length.

3. Longest Substring with At Most K Distinct Characters
Find the length of the longest substring with at most K unique characters.

Idea:
Use a hashmap to store character frequencies. If size exceeds K, shrink the window from the left.

4. Permutation in String
Check if one string is a permutation of a substring in another string.

Idea:
Compare the character count of the sliding window with that of the pattern using a frequency map.

5. Substring with Concatenation of All Words
Find starting indices of all substrings that are a concatenation of all given words exactly once.

Idea:
Use a window of size total length of all words and compare word frequencies with a map of given words.

6. Find All Anagrams in a String
Find all starting indices of anagrams of the pattern in the string.

Idea:
Use frequency maps and sliding window to compare substrings of size equal to the pattern.

7. Max Consecutive Ones III
Find the maximum length of a subarray containing at most K zeros.

Idea:
Track the number of zeros in the current window. If it exceeds K, shrink the window from the left.

8. Longest Substring with At Most Two Distinct Characters
Find the length of the longest substring with at most two unique characters.

Idea:
Use a hashmap to track character counts and manage the window size by maintaining only two keys.

🏆 Matrix Problems
1. Rotate Image
Rotate an n x n matrix 90 degrees clockwise in place.

Idea:
Transpose the matrix and then reverse each row.

2. Set Matrix Zeroes
Set the entire row and column to 0 if an element is 0.

Idea:
Use flags or extra storage to mark rows and columns that need to be zeroed.

3. Spiral Matrix
Return all elements of a matrix in spiral order.

Idea:
Use four pointers to track the current bounds and iterate through the matrix in layers.

4. Search a 2D Matrix
Search a target in a matrix with sorted rows and columns.

Idea:
Use binary search by treating the matrix as a flattened array or apply staircase search starting from the top-right.

5. Matrix Transpose
Transpose a matrix (swap rows with columns).

Idea:
Create a new matrix or modify in-place by swapping matrix[i][j] with matrix[j][i].

6. Word Search in a Matrix
Check if a word exists in a 2D grid by moving in adjacent directions.

Idea:
Use DFS or backtracking to explore possible paths and mark visited cells.

📉 Miscellaneous
1. Longest Palindromic Substring
Find the longest substring that is a palindrome.

Idea:
Expand from the center or use dynamic programming to track palindromic substrings.

2. Palindrome Partitioning
Split a string into all possible sets of palindromic substrings.

Idea:
Use backtracking to explore partitions and check for palindromes.

3. Roman to Integer
Convert Roman numerals to integers by evaluating values from left to right.

Idea:
Subtract when a smaller numeral precedes a larger one.

4. Integer to Roman
Convert integers to Roman numerals using a greedy approach.

Idea:
Match the largest possible Roman numeral at each step.

5. Merge Intervals
Merge all overlapping intervals in a list.

Idea:
Sort intervals by start time and merge overlapping ones as you iterate.

6. Validate Binary Search Tree
Check if a binary tree is a valid BST.

Idea:
Use inorder traversal or recursion with min/max boundaries.

7. Find the Kth Largest Element in an Array
Find the k-th largest element using quickselect or heaps.

Idea:
Use a min-heap of size k or quickselect to get the k-th element.

8. Find the Missing Number
Find the missing number from an array of n-1 elements in range 0 to n.

Idea:
Use XOR or the sum formula n*(n+1)/2 - sum(arr).

9. Trapping Rain Water
Compute water trapped between bars after raining.

Idea:
Use two pointers or precompute max heights to left and right.

10. Find Peak Element
Find an element that is greater than its neighbors.

Idea:
Use binary search to reduce the search space to half each time.

11. Find Majority Element
Find the element that appears more than n/2 times.

Idea:
Use Boyer-Moore Voting Algorithm or hashmap frequency count.

🔄 Binary Search
1. Binary Search
Search for a target in a sorted array.

Idea:
Divide the array into halves and eliminate half at each step.

2. Search in Rotated Sorted Array
Find target in an array that was sorted and then rotated.

Idea:
Use modified binary search by identifying the sorted half.

3. Find First and Last Position of Element in Sorted Array
Find the first and last position of an element.

Idea:
Use binary search twice — once to find the left bound, once for the right.

4. Peak Element in an Array
Find an index of a peak element using binary search.

Idea:
Compare middle element with its neighbor to move toward the peak.

5. Find Minimum in Rotated Sorted Array
Find the minimum element in a rotated sorted array.

Idea:
Use binary search to locate the unsorted part which contains the minimum.


📦 Trees

Binary Tree Inorder Traversal

Implement an in-order traversal of a binary tree.

Binary Tree Preorder Traversal

Implement a preorder traversal of a binary tree.

Binary Tree Postorder Traversal

Implement a postorder traversal of a binary tree.

Level Order Traversal

Perform level-order traversal of a binary tree using a queue.

Symmetric Tree

Check if a binary tree is symmetric around its center.

Maximum Depth of Binary Tree

Find the maximum depth of a binary tree using recursion.

Balanced Binary Tree

Check if a binary tree is height-balanced (the heights of two subtrees of every node differ by at most one).

Lowest Common Ancestor in a Binary Tree

Find the lowest common ancestor of two nodes in a binary tree.

Diameter of a Binary Tree

Calculate the diameter (longest path) of a binary tree.

Convert Sorted Array to Binary Search Tree

Convert a sorted array into a height-balanced binary search tree.

🧭 Graphs

Depth First Search (DFS)

Implement DFS traversal for a graph, either recursively or using a stack.

Breadth First Search (BFS)

Implement BFS traversal for a graph using a queue.

Detect Cycle in a Graph (Directed and Undirected)

Use DFS to detect a cycle in a directed or undirected graph.

Topological Sort

Perform topological sorting of a directed acyclic graph (DAG) using DFS or Kahn’s algorithm.

Dijkstra's Algorithm for Shortest Path

Implement Dijkstra's algorithm to find the shortest path in a weighted graph.

Bellman-Ford Algorithm

Implement the Bellman-Ford algorithm to find the shortest path in a graph with negative weights.

Floyd-Warshall Algorithm

Find the shortest paths between all pairs of nodes in a graph using Floyd-Warshall.

Find Strongly Connected Components (SCC)

Use Kosaraju’s or Tarjan’s algorithm to find strongly connected components in a directed graph.

Graph Coloring

Use a greedy algorithm to color a graph such that no two adjacent vertices have the same color.

Bipartite Graph Check

Use BFS or DFS to check if a graph is bipartite (two-colorable).

🧮 Hashing

Two Sum

Use a hash map to find two numbers in an array that add up to a target sum.

Longest Substring Without Repeating Characters

Use a hash set to solve the longest substring problem where no characters repeat.

Group Anagrams

Use a hash map to group strings that are anagrams of each other.

Find Duplicate in an Array

Use a hash set to find duplicates in an array.

Subarray Sum Equals K

Use a hash map to find the number of subarrays whose sum equals a given target.

Happy Number

Use a hash set to determine whether a number is happy.

Intersection of Two Arrays

Use a hash set to find the intersection of two arrays.

Contains Duplicate

Use a hash set to check if an array contains duplicate elements.

First Non-Repeated Character

Use a hash map to find the first non-repeating character in a string.

Word Pattern

Use a hash map to check if a string follows a given word pattern.

📊 Sliding Window (Continued)

Longest Subarray with At Most K Distinct Elements

Use the sliding window technique to find the longest subarray with at most K distinct characters.

Max Sliding Window

Use a sliding window technique to find the maximum value in every subarray of size k.

Minimum Window Substring (with extra conditions)

Modify the sliding window approach to handle additional constraints like minimum window size or multiple conditions.

Longest Repeating Character Replacement

Use a sliding window technique to replace the least frequent character in a string and make all characters the same.

Subarrays with K Different Integers

Use sliding window technique to count the number of subarrays containing exactly K distinct integers.
🔀 Union-Find (Disjoint Set)
1. Union-Find Data Structure
The Union-Find or Disjoint Set Union (DSU) is a data structure used to track a set of elements partitioned into disjoint subsets.

It supports two key operations efficiently:

Find: Identify which subset a particular element is in (helps detect cycles).

Union: Merge two subsets into a single subset.

Optimizations:

Path Compression makes the find operation faster by flattening the structure of the tree whenever find is used.

Union by Rank/Size keeps the tree flat by always attaching the smaller tree to the root of the larger tree.

2. Number of Connected Components in an Undirected Graph
This problem involves finding how many disjoint subgraphs exist within a larger undirected graph.

Using Union-Find, each connection (edge) merges two nodes into the same component.

After processing all edges, count the number of unique roots (leaders) which represent separate components.

3. Kruskal’s Algorithm for Minimum Spanning Tree (MST)
Kruskal’s algorithm finds the Minimum Spanning Tree of a weighted, undirected graph.

It works by:

Sorting all edges based on their weights.

Iterating over edges and adding them to the MST only if they connect disjoint components (checked using Union-Find).

Union-Find ensures cycles are avoided while forming the MST.

4. Cycle Detection in an Undirected Graph
To detect cycles, use Union-Find:

If two nodes of an edge already have the same root, a cycle exists.

Otherwise, union them and continue.

This method is efficient and commonly used in real-world applications involving graph validations.

5. Find Redundant Connection
Given a graph where an extra edge causes a cycle, the goal is to find that edge.

Union-Find is used to track component roots.

When trying to union two nodes already connected, that edge is redundant.

🔢 Number Theory
1. GCD and LCM
GCD (Greatest Common Divisor): The largest number that divides both numbers.

LCM (Least Common Multiple): The smallest number divisible by both numbers.

Euclid’s Algorithm is an efficient way to compute GCD by recursively using the relation gcd(a, b) = gcd(b, a % b).

2. Prime Numbers and Sieve of Eratosthenes
The Sieve of Eratosthenes is used to find all prime numbers up to n efficiently.

It works by iteratively marking the multiples of each prime starting from 2.

3. Perfect Number
A number is perfect if it is equal to the sum of its proper divisors.

Example: 28 is perfect because its divisors (1 + 2 + 4 + 7 + 14) = 28.

4. Prime Factorization
Prime factorization is the process of breaking a number into a product of prime numbers.

Useful for solving problems involving divisibility, LCM, GCD, etc.

5. Count Set Bits in an Integer
This involves counting the number of 1s in the binary representation of a number.

Useful in bit manipulation problems and optimization techniques.

6. Nth Fibonacci Number
Fibonacci numbers can be calculated using:

Recursion (inefficient)

Dynamic Programming (efficient)

Matrix exponentiation (very efficient for large n)

Each number is the sum of the two preceding ones.

7. Power of a Number
Efficiently compute a^b using exponentiation by squaring, which reduces the time complexity to O(log b).

8. Find All Divisors of a Number
To find all divisors, iterate from 1 to √n and collect both i and n/i whenever i divides n.

Efficient for number theory and divisor-related problems.