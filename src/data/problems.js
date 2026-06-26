export const PROBLEMS = [
  {
    id: 1,
    title: "Two Sum",
    topic: "Arrays",
    difficulty: "Easy",
    description: "Given an array nums and an integer target, return indices of the two numbers that add up to target. Each input has exactly one solution, and you may not use the same element twice.",
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" }
    ],
    starterCode: {
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> twoSum(vector<int>& nums, int target) {\n    // Your solution here\n    \n}`,
      python: `def twoSum(nums, target):\n    # Your solution here\n    pass`,
      java: `class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        return new int[]{};\n    }\n}`,
      javascript: `function twoSum(nums, target) {\n    // Your solution here\n}`
    },
    systemPrompt: "You are Alex, a friendly but competitive FAANG interview coach. Problem: Two Sum. Brute force O(n²), optimal HashMap O(n). Push the user toward the optimal approach. Ask about edge cases. Start by asking their initial approach."
  },
  {
    id: 2,
    title: "Maximum Subarray",
    topic: "Arrays",
    difficulty: "Medium",
    description: "Given an integer array nums, find the contiguous subarray with the largest sum and return its sum (Kadane's Algorithm).",
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6" },
      { input: "nums = [1]", output: "1" }
    ],
    starterCode: {
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint maxSubArray(vector<int>& nums) {\n    // Kadane's algorithm\n    \n}`,
      python: `def maxSubArray(nums):\n    pass`,
      java: `class Solution {\n    public int maxSubArray(int[] nums) {\n        return 0;\n    }\n}`,
      javascript: `function maxSubArray(nums) {\n}`
    },
    systemPrompt: "You are Alex, a friendly but competitive FAANG interview coach. Problem: Maximum Subarray (Kadane's algorithm). Push them on why we discard the prefix when it goes negative. Ask about the all-negative edge case. Start by asking their approach."
  },
  {
    id: 3,
    title: "Reverse Linked List",
    topic: "Linked List",
    difficulty: "Easy",
    description: "Given the head of a singly linked list, reverse it and return the reversed list.",
    examples: [
      { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" },
      { input: "head = [1,2]", output: "[2,1]" }
    ],
    starterCode: {
      cpp: `struct ListNode { int val; ListNode* next; };\n\nListNode* reverseList(ListNode* head) {\n    // Iterative: prev, curr, next pointers\n    \n}`,
      python: `def reverseList(head):\n    pass`,
      java: `class Solution {\n    public ListNode reverseList(ListNode head) {\n        return null;\n    }\n}`,
      javascript: `function reverseList(head) {\n}`
    },
    systemPrompt: "You are Alex, a friendly but competitive FAANG interview coach. Problem: Reverse Linked List. Ask them to explain pointer re-wiring step by step. Ask for the recursive approach as a follow-up. Start by asking their approach."
  },
  {
    id: 4,
    title: "Linked List Cycle Detection",
    topic: "Linked List",
    difficulty: "Easy",
    description: "Given head of a linked list, determine if there is a cycle using O(1) memory (Floyd's Tortoise and Hare).",
    examples: [
      { input: "head = [3,2,0,-4], pos = 1", output: "true" },
      { input: "head = [1,2], pos = 0", output: "true" }
    ],
    starterCode: {
      cpp: `struct ListNode { int val; ListNode* next; };\n\nbool hasCycle(ListNode* head) {\n    // Floyd's algorithm\n    \n}`,
      python: `def hasCycle(head):\n    pass`,
      java: `class Solution {\n    public boolean hasCycle(ListNode head) {\n        return false;\n    }\n}`,
      javascript: `function hasCycle(head) {\n}`
    },
    systemPrompt: "You are Alex, a friendly but competitive FAANG interview coach. Problem: Linked List Cycle (Floyd's algorithm). Ask them to PROVE why slow/fast pointers meet inside a cycle. Start by asking their approach and why HashSet works but isn't optimal."
  },
  {
    id: 5,
    title: "Binary Search",
    topic: "Binary Search",
    difficulty: "Easy",
    description: "Given a sorted array nums and target, return the index of target or -1. Must be O(log n).",
    examples: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
      { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" }
    ],
    starterCode: {
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint search(vector<int>& nums, int target) {\n    int lo = 0, hi = nums.size() - 1;\n    \n}`,
      python: `def search(nums, target):\n    pass`,
      java: `class Solution {\n    public int search(int[] nums, int target) {\n        return -1;\n    }\n}`,
      javascript: `function search(nums, target) {\n}`
    },
    systemPrompt: "You are Alex, a friendly but competitive FAANG interview coach. Problem: Binary Search. Push on off-by-one errors and integer overflow with mid calculation. Then ask how to find first occurrence with duplicates. Start by asking their approach."
  },
  {
    id: 6,
    title: "Koko Eating Bananas",
    topic: "Binary Search",
    difficulty: "Medium",
    description: "Koko has n piles, guards return in h hours. Find minimum integer k (bananas/hour) so Koko finishes all piles in time.",
    examples: [
      { input: "piles = [3,6,7,11], h = 8", output: "4" },
      { input: "piles = [30,11,23,4,20], h = 5", output: "30" }
    ],
    starterCode: {
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint minEatingSpeed(vector<int>& piles, int h) {\n    // Binary search on answer\n    \n}`,
      python: `def minEatingSpeed(piles, h):\n    pass`,
      java: `class Solution {\n    public int minEatingSpeed(int[] piles, int h) {\n        return 1;\n    }\n}`,
      javascript: `function minEatingSpeed(piles, h) {\n}`
    },
    systemPrompt: "You are Alex, a friendly but competitive FAANG interview coach. Problem: Koko Eating Bananas — binary search on answer space [1, max(piles)]. Push on the ceiling division logic. Start by asking their approach."
  },
  {
    id: 7,
    title: "Valid Anagram",
    topic: "Strings",
    difficulty: "Easy",
    description: "Given strings s and t, return true if t is an anagram of s.",
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: "true" },
      { input: 's = "rat", t = "car"', output: "false" }
    ],
    starterCode: {
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nbool isAnagram(string s, string t) {\n    \n}`,
      python: `def isAnagram(s, t):\n    pass`,
      java: `class Solution {\n    public boolean isAnagram(String s, String t) {\n        return false;\n    }\n}`,
      javascript: `function isAnagram(s, t) {\n}`
    },
    systemPrompt: "You are Alex, a friendly but competitive FAANG interview coach. Problem: Valid Anagram. Push from sort O(n log n) to frequency array O(n). Ask what changes with Unicode input. Start by asking their approach."
  },
  {
    id: 8,
    title: "Longest Substring Without Repeating Characters",
    topic: "Strings",
    difficulty: "Medium",
    description: "Given string s, find the length of the longest substring without repeating characters.",
    examples: [
      { input: 's = "abcabcbb"', output: "3" },
      { input: 's = "bbbbb"', output: "1" }
    ],
    starterCode: {
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint lengthOfLongestSubstring(string s) {\n    // Sliding window\n    \n}`,
      python: `def lengthOfLongestSubstring(s):\n    pass`,
      java: `class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        return 0;\n    }\n}`,
      javascript: `function lengthOfLongestSubstring(s) {\n}`
    },
    systemPrompt: "You are Alex, a friendly but competitive FAANG interview coach. Problem: Longest Substring Without Repeating Characters — sliding window + HashMap of last seen index. Push on why storing index beats just a set. Start by asking their approach."
  },
  {
    id: 9,
    title: "Climbing Stairs",
    topic: "Dynamic Programming",
    difficulty: "Easy",
    description: "You're climbing a staircase with n steps, climbing 1 or 2 steps at a time. How many distinct ways to reach the top?",
    examples: [
      { input: "n = 2", output: "2" },
      { input: "n = 3", output: "3" }
    ],
    starterCode: {
      cpp: `int climbStairs(int n) {\n    // dp[i] = dp[i-1] + dp[i-2]\n    \n}`,
      python: `def climbStairs(n):\n    pass`,
      java: `class Solution {\n    public int climbStairs(int n) {\n        return 0;\n    }\n}`,
      javascript: `function climbStairs(n) {\n}`
    },
    systemPrompt: "You are Alex, a friendly but competitive FAANG interview coach. Problem: Climbing Stairs — it's Fibonacci! Push recursion → memoization → tabulation → O(1) space. Ask why this equals Fibonacci. Start by asking their approach."
  },
  {
    id: 10,
    title: "House Robber",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    description: "You can't rob two adjacent houses. Given array nums of money, return max amount you can rob.",
    examples: [
      { input: "nums = [1,2,3,1]", output: "4" },
      { input: "nums = [2,7,9,3,1]", output: "12" }
    ],
    starterCode: {
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint rob(vector<int>& nums) {\n    // dp[i] = max(dp[i-1], dp[i-2]+nums[i])\n    \n}`,
      python: `def rob(nums):\n    pass`,
      java: `class Solution {\n    public int rob(int[] nums) {\n        return 0;\n    }\n}`,
      javascript: `function rob(nums) {\n}`
    },
    systemPrompt: "You are Alex, a friendly but competitive FAANG interview coach. Problem: House Robber. Push on the recurrence dp[i]=max(dp[i-1], dp[i-2]+nums[i]) and space-optimized O(1) version. Then ask about circular houses (House Robber II). Start by asking their approach."
  },
  {
    id: 11,
    title: "Number of Islands",
    topic: "Graphs",
    difficulty: "Medium",
    description: "Given 2D grid of '1' (land) and '0' (water), count the number of islands.",
    examples: [
      { input: "grid = [[1,1,1],[0,1,0],[1,1,1]]", output: "1" },
      { input: "grid = [[1,1,0],[1,1,0],[0,0,1]]", output: "2" }
    ],
    starterCode: {
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint numIslands(vector<vector<char>>& grid) {\n    // DFS/BFS flood fill\n    \n}`,
      python: `def numIslands(grid):\n    pass`,
      java: `class Solution {\n    public int numIslands(char[][] grid) {\n        return 0;\n    }\n}`,
      javascript: `function numIslands(grid) {\n}`
    },
    systemPrompt: "You are Alex, a friendly but competitive FAANG interview coach. Problem: Number of Islands. Push DFS vs BFS tradeoffs and visited-marking strategy. Ask if Union-Find could work too. Start by asking their approach."
  },
  {
    id: 12,
    title: "Single Number",
    topic: "Bit Manipulation",
    difficulty: "Easy",
    description: "Every element appears twice except one. Find that single one in O(n) time, O(1) space.",
    examples: [
      { input: "nums = [2,2,1]", output: "1" },
      { input: "nums = [4,1,2,1,2]", output: "4" }
    ],
    starterCode: {
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nint singleNumber(vector<int>& nums) {\n    // XOR trick\n    \n}`,
      python: `def singleNumber(nums):\n    pass`,
      java: `class Solution {\n    public int singleNumber(int[] nums) {\n        return 0;\n    }\n}`,
      javascript: `function singleNumber(nums) {\n}`
    },
    systemPrompt: "You are Alex, a friendly but competitive FAANG interview coach. Problem: Single Number using XOR (a^a=0, a^0=a). Ask them to PROVE why XOR of all elements isolates the single number. Start by asking their approach."
  }
]
