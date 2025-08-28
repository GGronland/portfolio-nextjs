export type BuildArrayOfMinLength<
  T,
  N extends number,
  Current extends T[]
> = Current["length"] extends N
  ? [...Current, ...T[]]
  : BuildArrayOfMinLength<T, N, [...Current, T]>;

// TS can only enforce a minimum length on tuple types at runtime, not on regular arrays
// Where ArrayOfMinLength is used, the relevant data prop must be assigned the appropriate tuple type
// e.g. data: ArrayOfMinLength<number, 2> => dataProp: [num1, num2, ...num[]]
export type ArrayOfMinLength<T, N extends number> = BuildArrayOfMinLength<
  T,
  N,
  []
>;
