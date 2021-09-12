
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const example_input_1 = [1,2,2,1]
const example_input_2 = [1,2]

var isPalindrome = function(head) {
    let left = null
    let right = null
    let temp;

    let fast = head;
    let slow = head;

    while(fast && fast.next){
        fast = fast.next.next
        temp = slow.next;
        slow.next = left;
        left = slow;
        slow = temp;
    }
    right = fast ? slow.next : slow;
    while (left && right) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }
    return true
}

console.log(isPalindrome(example_input_1))
console.log(isPalindrome(example_input_2))

//출처 : https://leetcode.com/problems/palindrome-linked-list/