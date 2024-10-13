type Tree<T> = Empty | Cell<T>

// #region product types
class Cell<T> {
  constructor(
    public value: T,
    public left: Tree<T>,
    public right: Tree<T>,
  ) {}

  public toString(): string {
    return `Cell(${
      this.value
    }, ${this.left.toString()}, ${this.right.toString()})`
  }
}

class Empty {
  public toString(): string {
    return 'Empty'
  }
}
// #endregion

// #region main
const main = () => {
  const tree = new Cell(42, new Cell(0, new Empty(), new Empty()), new Empty())
  console.log(tree.toString())
}

main()
// #endregion
