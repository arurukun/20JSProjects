# Regex expressions

### Rules

| Expression       | Meaning                                         |
| ---------------- | ----------------------------------------------- |
| / \<Content\> /  | Start and ending goes inside.                   |
| / s+ /           | s / ss / sss/ ssss/ sssss ......                |
| / es\* /         | e / es / ess / esss.....                        |
| / es+ /          | es / ess /esss.....                             |
| / es? /          | e / es ※ ? = can be there or cannot be there    |
| / e+s? /         | e / ee / es / ees / eees.....                   |
| / .s /           | es / as / bs / zs..... ※ . = anything           |
| / .?s /          | s / .s                                          |
| / s.. /          | sab / syz....                                   |
| / \ . /          | . ※ \ = mark of special                         |
| / \w /           | any letter                                      |
| / /s /           | any space                                       |
| / es {3,5} /     | esss / essss / esssss                           |
| / es { ,5} /     | es / ess / esss / essss / esssss                |
| / es {3, } /     | esss / essss / esssss.....                      |
| / es {5} /       | esssss                                          |
| / \d /           | 0-9 any number is okay                          |
| / ^ss /          | Starting with ss --> ssghs                      |
| / ss$ /          | Ending with ss --> sadsfss                      |
| /[ a-z ] /       | a-z any small alphabet is okay                  |
| /[ A-Z ] /       | A-Z any capital alphabet is okay                |
| / \[es\] {2} /   | \[es\] \[es\]                                   |
| / \[es\] {2} /   | ee / es / se / ss                               |
| / \[es\] {1,3} / | \[es\] or \[es\] \[es\] or \[es\] \[es\] \[es\] |

## Examples

### Example 1

| / ^ ( \[a-zA-Z\d\\.\]{ 4,20 } ) @ (\[a-z\]{ 4,11 }) . (com) $ / | for checking Email         |
| --------------------------------------------------------------- | -------------------------- |
| Correct                                                         | arurukun@gmail.com         |
| Correct                                                         | yuki.kawamoto1@example.com |
| Wrong                                                           | kin@example.com            |
| Wrong                                                           | kinkin@exa.com             |
