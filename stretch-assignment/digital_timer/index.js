/*what a weird timer...
if I understand right it should go:
00:01
00:02
...
01:10
01:01
01:02
...
02:00
02:01
... ... ...
10:00 *Red
 & yeah there's no good way of when to swithc over the ms to seconds.
 I could go from 00:09 ->00:10 -> 01:01, but should never hit 10:00 following the pattern, bc it'd go to 10:01, so the above is my comprimise.


logic:

if less than 10:10,
    for loop ++ ms 01->10,
        if 10, then increment seconds
        & reset i
else when == 10:10,
    color:red & return 10:00 (not 10:10)
*/