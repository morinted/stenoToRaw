# stenoToRaw

Convert your steno dictionary into raw form. For example, instead of `"KAUPB/TPAOUFD": "confused"`, you would have `"KAUPB/TPAOUFD": "KAUPB/TPAOUFD"`. This lets you demonstrate what your raw steno looks like.

To run the script, you must have Node and babel-node installed (`npm install -g babel-cli`).

Then run as `babel-node stenoToRaw.js ~/path/to/dict.json`. You will get an output in the current directory as `./dict_raw.json`.
