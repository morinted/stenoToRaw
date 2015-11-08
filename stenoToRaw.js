const fs = require(`fs`);

if (process.argv.length < 3) {
  console.error(`Please provide a path to your dictionary file,
                 e.g.: babel-node toRaw.js dict.json`)
  process.exit(1)
}

const file = process.argv[2]

console.log(`Reading ${file}`)
const dictionary = JSON.parse(fs.readFileSync(file, 'utf8'))
console.log(`Building`)
const rawVersion =
  JSON.stringify
    ( Object.keys(dictionary)
        .reduce
          ( (p, n) => {
              p[n] = n
              return p
            }
          , {}
          )
    , null
    , 1)
const newName = `raw-${file.substring(file.lastIndexOf(`/`) + 1)}`
console.log(`Writing ${newName}`)
fs.writeFileSync(newName, rawVersion, `utf8`)
console.log(`Done.`)
