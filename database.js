const { Pool, Client } = require('pg');

// Konfigurasi koneksi ke database PostgreSQL
const pool = new Pool({
  user: 'postgres',         // Ganti dengan nama pengguna Anda
  host: 'localhost',        // Ganti dengan alamat host database Anda
  database: 'Week 9', // Ganti dengan nama database Anda
  password: 'Incorrecto1!',     // Ganti dengan kata sandi Anda
  port: 5432,               // Port default PostgreSQL
});

// Membuka koneksi ke database
pool.connect()
  .then(() => {
    console.log('Terhubung ke database');
  })
  .catch((err) => {
    console.error('Gagal terhubung ke database: ' + err);
  });
