type Tree<T> = Empty | Node<T>;

class Node<T> {
  constructor(public value: T, public left: Tree<T>, public right: Tree<T>) {}

  public toString(): string {
    return `Node(${
      this.value
    }, ${this.left.toString()}, ${this.right.toString()})`;
  }
}

class Empty {
  public toString(): string {
    return 'Empty';
  }
}

const main = () => {
  const tree = new Node(42, new Node(0, new Empty(), new Empty()), new Empty());
  console.log(tree.toString());
};

main();
