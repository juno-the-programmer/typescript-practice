export {};
/*
Lowercase<StringType>
Converts each character in the string to the lowercase equivalent.
*/
type Greeting = "Hello, world";
type QuietGreeting = Lowercase<Greeting>;
// type QuietGreeting = "hello, world"

type ASCIICacheKey<Str extends string> = `id-${Lowercase<Str>}`;
type MainID = ASCIICacheKey<"MY_APPP">;
// type MainID = "id-my_appp"
