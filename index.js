function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}
  
function logShout(string) calls console.log() its one argument in all caps:
logWhisper(string) calls console.log() its one argument in all lowercase:
sayHiToGrandma(string) returns "I can't hear you!" if `string` is lowercase
 sayHiToGrandma(string) returns "YES INDEED!" if `string` is uppercase:

 sayHiToGrandma(string) returns "I love you, too." if `string` is "I love you, Grandma."`: