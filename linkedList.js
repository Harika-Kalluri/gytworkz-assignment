
const hasCycle = (head) => {
  let slow, fast;
  slow = fast = head;

  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast){
      return true;
    }
  }
  return false;
};

head = [3,2,0,-4];
console.log(hasCycle(head));