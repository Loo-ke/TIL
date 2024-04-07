// 이진 검색 트리 노드 생성 함수
function createNode(value) {
  return {
    value,
    left: null,
    right: null,
  };
}

// 이진 검색 트리 삽입 함수
function insert(root, value) {
  if (root === null) {
    return createNode(value);
  }

  if (value < root.value) {
    root.left = insert(root.left, value);
  } else {
    root.right = insert(root.right, value);
  }

  return root;
}

// 이진 검색 트리 검색 함수
function search(root, value) {
  if (root === null) {
    return null;
  }

  if (value === root.value) {
    return root;
  } else if (value < root.value) {
    return search(root.left, value);
  } else {
    return search(root.right, value);
  }
}

// 랜덤 정수 배열 생성
// const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
const arr = [8,4,2,5,9,3,7]

// 이진 검색 트리 루트 노드 생성
let root = null;

// 랜덤 배열 삽입
arr.forEach((value) => {
  root = insert(root, value);
});

// 특정 값 검색
const targetValue = 5;
const node = search(root, targetValue);

// 검색 결과 출력
if (node === null) {
  console.log(`값 ${targetValue}는 트리에 존재하지 않습니다.`);
} else {
  console.log(`값 ${targetValue}는 트리에 존재합니다.`);
}
