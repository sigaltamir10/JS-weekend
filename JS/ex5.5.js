function convertNameToInitials(name) {
  const verify = name.match(/^[a-zA-Z]+ [a-zA-Z]+$/);
  if (verify[0] !== name) return "llegal input, please try again";
  return name
    .split(" ")
    .map(word => word[0].toUpperCase())
    .join(".");
}

console.log(convertNameToInitials("sigal tamir"));
