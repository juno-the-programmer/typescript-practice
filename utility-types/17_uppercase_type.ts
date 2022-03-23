export {};
/*
Uppercase<StringType>
Converts each character in the string to the uppercase version.
*/
type Greeting = "Hello, world";
type ShoutyGreeting = Uppercase<Greeting>;
// type ShoutyGreeting = "HELLO, WORLD"

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`;
type MainID = ASCIICacheKey<"my_app">;
// type MainID = "ID-MY_APP"
