// inisialisasi modul http
const http = require('http');

// buat server
const server = http.createServer( (req, res) => {
    //res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.write('Selamat pagi');

    res.writeHead(200, { 'Content-Type': 'application/json' });
    if(req.url === '/dosen'){
        message = 'List data dosen';
        data = ['Nico', 'Cel', 'Col'];
    } else if(req.url === '/mahasiswa') {
        message = 'List data mahasiswa';
        data = ['Niki', 'Cil', 'Cul'];
    } else {
        message = 'Tidak ditemukan';
        data = [];
    }
    res.write(JSON.stringify({
        'message' : 'Selamat pagi',
        'Status' : 'success'
    }));
    res.end();
} );

const port = 3000;
const host = 'localhost';

server.listen(port,host, () => {
    console.log(`Server berjalan di http://${host}:${port}`);
} );
