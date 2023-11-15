export function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (!val) {
    //check if there's undefined of null
    throw Error("Expected 'val' to be Defined, but recieved" + val);
  }
}
