const isValidBST = function (root) {
  
    const tree = (node) => {
      if (!node) {
        return [true, null, null]
      }
      const [leftValid, leftMin, leftMax] = tree(node.left)
      const [rightValid, rightMin, rightMax] = tree(node.right)
  
      let valid = leftValid && rightValid
      if (leftMax !== null && leftMax >= node.val) {
        valid = false
      }
      if (rightMin !== null && rightMin <= node.val) {
        valid = false
      }
      const currentMin = leftMin === null ? node.val : leftMin
      const currentMax = rightMax === null ? node.val : rightMax
      return [valid, currentMin, currentMax]
    }
    return tree(root)[0]
}

root = [2,1,3];
console.log(isValidBST(root));