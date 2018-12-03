grammar Regex;

expression: term (OR term)*;

term: factor+;

factor: atom | qmark | plus | star;

atom: set | group | CHAR;

set: LBRACK CARET? characterRange RBRACK;
group: LPAREN expression RPAREN;

// characterClass: (characterRange | beginCharacter)+;
characterRange: beginCharacter HYPHEN endCharacter;

qmark: atom QMARK;
star: atom STAR;
plus: atom PLUS;

beginCharacter: CHAR;
endCharacter: CHAR;

STAR: '*';
PLUS: '+';
QMARK: '?';
OR: '|';
HYPHEN: '-';
LPAREN: '(';
RPAREN: ')';
LBRACK: '[';
RBRACK: ']';
CARET: '^';

CHAR: ESCAPEDCHAR | NORMALCHAR;
NORMALCHAR: [0-9a-zA-Z \n\t\r\f./];
ESCAPEDCHAR: '\\*' | '\\+' | '\\(' | '\\)' | '\\[' | '\\-';

ANY: .;