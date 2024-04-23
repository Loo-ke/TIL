// const randomNumber = Math.floor(Math.random() * 50)

const arr = []
function getRandomNum(){
  for(let i = 1; i <= 100; i++){
    const randomNumber = Math.floor(Math.random() * 100)
    if (arr.indexOf(randomNumber) === -1) {
      arr.push(randomNumber)
    }else{
      i--
    }
  }
}

getRandomNum()
console.log(arr, arr.length)


// 랜덤의 숫자가 들어간 배열에서 트리구조를 사용해서 검색 방법을 구현해보자!



// const arr = [3,5,1,6,4,8]

function TreeNode(value) {
  return {
    value,
    left: null,
    right: null,
  };
}

function createTree(arr) {
  // 루트 노드 생성
  const rootNode = TreeNode(arr[0]);

  // 배열의 각 값을 트리 노드로 변환하고 삽입
  for (let i = 1; i < arr.length; i++) {
    insertNode(rootNode, arr[i]);
  }

  return rootNode;
}

function insertNode(node, value) {
  // 값이 현재 노드보다 작으면 왼쪽 서브 트리에 삽입
  if (value < node.value) {
    if (node.left === null) {
      node.left = TreeNode(value);
    } else {
      insertNode(node.left, value);
    }
  } else {
    // 값이 현재 노드보다 크거나 같으면 오른쪽 서브 트리에 삽입
    if (node.right === null) {
      node.right = TreeNode(value);
    } else {
      insertNode(node.right, value);
    }
  }
}

function searchNode(node, value) {
  // 값을 찾을 때까지 재귀적으로 탐색
  if (node === null) {
    return null;
  } else if (value === node.value) {
    return node;
  } else if (value < node.value) {
    return searchNode(node.left, value);
  } else {
    return searchNode(node.right, value);
  }
}

// 트리 생성
const rootNode = createTree(arr);

// 특정 값 검색
const searchedNode = searchNode(rootNode, 10);

if (searchedNode !== null) {
  console.log(`찾은 값: ${searchedNode.value}`);
} else {
  console.log('값을 찾을 수 없습니다.');
}