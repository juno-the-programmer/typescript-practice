export {};
/*
Capitalize<StringType>
Converts the first character in the string to an uppercase equivalent.
*/
type LowercaseGreeting = "hello, world";
type Greeting = Capitalize<LowercaseGreeting>;
// type Greeting = "Hello, world"
