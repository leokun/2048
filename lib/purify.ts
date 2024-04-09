export function fp<Tobject>(obj: Tobject): Tobject {
  return JSON.parse(JSON.stringify(obj)) as Tobject;
}
