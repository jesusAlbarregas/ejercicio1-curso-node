


const { options, boolean } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

//const base = 7;
//let salida = '';

console.clear();
// console.log('=====================');
// console.log(`   Tabla del ${base}`);
// console.log('=====================');


/* for(let i = 1;i < 11;i++) {
    // console.log(`${base} x ${i} = ${base*i}`);
    salida += `${base} x ${i} = ${base*i}\n`;
}

console.log(salida);

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if(err) throw err;
    console.log(`tabla-${base}.txt creado`);
}) */


//console.log(process.argv);
// console.log(argv);

//console.log('base con yargs:', argv.base);


// const [,,arg3='base=5'] = process.argv;
// const [,base=5] = arg3.split('=')


crearArchivo(argv.base,argv.listar,argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
