const fs = require('fs');
const color = require('colors');

const crearArchivo = async(base = 5, listar, hasta) => {

    try {
        

        let salidaConsola = '';
        let salida = '';

        for(let i = 1;i <= hasta;i++) {
            // console.log(`${base} x ${i} = ${base*i}`);
            salidaConsola += `${base} ${'x'.red} ${i} ${'='.red} ${base*i}\n`;
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        if(listar) {
            console.log('====================='.green);
            console.log('   Tabla del'.green, color.blue(base));
            console.log('====================='.green);
            console.log(salidaConsola);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch(err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}