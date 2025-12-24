# Sistem Pencatatan Sertifikat Berbasis Blockchain

Project ini merupakan sebuah **sistem pencatatan sertifikat berbasis blockchain**. Dimana pengguna dapat menyimpan **hash dari dokumen digital sertifikat** tersebut ke dalam blockchain untuk menjamin keaslian dan keamanan data.

Sistem ini dikembangkan sebagai implementasi teknologi Blockchain menggunakan JavaScript (Node.js). Project ini dirancang untuk mendemonstrasikan cara kerja dasar blockchain, termasuk pembuatan blok, validasi transaksi, algoritma konsensus (Proof of Work), dan desentralisasi jaringan antar node.

Secara spesifik, aplikasi ini memungkinkan pencatatan yang transparan dan tidak dapat diubah (immutable), sehingga cocok untuk kebutuhan validasi dokumen digital.
## Daftar Isi
- [Fitur Project](#fitur-project)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Data & Atribut](#struktur-data--atribut)
- [Algoritma & Hash](#algoritma--hash)
- [API Endpoint](#api-endpoint)
- [Cara Menjalankan Project](#cara-menjalankan-project)

## Fitur Project
1.  **Desentralisasi Node**: Mendukung banyak node yang saling terhubung dalam satu jaringan.
2.  **Sinkronisasi Jaringan**: Node baru dapat mendaftar dan menyinkronkan data dengan node lain di jaringan.
3.  **Algoritma Konsensus**: Menggunakan aturan "Longest Chain Rule" untuk memastikan semua node memiliki data blockchain yang valid dan sama.
4.  **Proof of Work (Mining)**: Mengamankan blok baru dengan mengharuskan node menyelesaikan teka-teki komputasi.
5.  **Pencatatan Transaksi/Sertifikat**: Menyimpan data issuer, penerima, dan hash sertifikat yang tidak dapat diubah (immutable).
6.  **Broadcast Transaksi & Blok**: Transaksi dan blok baru disebarkan secara otomatis ke seluruh node dalam jaringan.
7.  **Block Explorer**: Antarmuka web sederhana untuk melihat status blockchain.
8.  **Frontend Interaktif**: Antarmuka untuk mengupload file (untuk di-hash), mendaftarkan sertifikat, dan melakukan mining.

## Teknologi yang Digunakan
-   **Backend**: Node.js, Express.js
-   **Frontend**: HTML, CSS, Vanilla JavaScript
-   **Library Pendukung**: `sha256` (hashing), `uuid` (identitas node), `request-promise` (komunikasi antar node), `nodemon` (development).

## Struktur Data & Atribut

### Atribut Blok
Setiap blok dalam blockchain memiliki atribut berikut:
-   `index`: Nomor urut blok (integer).
-   `timestamp`: Waktu pembuatan blok.
-   `transactions`: Daftar transaksi yang tertampung dalam blok tersebut.
-   `nonce`: Angka unik hasil dari Proof of Work.
-   `hash`: Hash dari blok saat ini.
-   `previousBlockHash`: Hash dari blok sebelumnya (menghubungkan rantai).

### Atribut Transaksi (Sertifikat)
Setiap transaksi merepresentasikan pendaftaran sertifikat dengan atribut:
-   `issuer`: Pihak yang mengeluarkan sertifikat/transaksi.
-   `recipient`: Penerima sertifikat.
-   `certificateHash`: Hash unik dari file sertifikat (SHA256).
-   `timestamp`: Waktu transaksi dibuat.
-   `transactionId`: ID unik transaksi (UUID).

## Algoritma & Hash
-   **Algoritma Hash**: SHA-256 (Secure Hash Algorithm 256-bit).
-   **Kriteria Hash (Proof of Work)**: Hash yang valid untuk blok harus diawali dengan **4 angka nol** (`0000`).
    -   Contoh: `0000a1b2c3...`
    -   Node akan terus mencari nilai `nonce` hingga hash yang dihasilkan memenuhi kriteria ini.

## API Endpoint
Berikut adalah endpoint yang tersedia di setiap node untuk berinteraksi dengan blockchain:

**Blockchain & Mining**
-   `GET /blockchain`: Mendapatkan seluruh data blockchain.
-   `GET /mine`: Melakukan mining blok baru (Proof of Work) dan broadcast ke jaringan.
-   `GET /consensus`: Memeriksa dan menyinkronkan chain dengan node lain (Longest Chain Rule).

**Transaksi**
-   `POST /transaction`: Menambahkan transaksi ke memori lokal (pending).
-   `POST /transaction/broadcast`: Membuat transaksi baru dan menyebarkannya ke seluruh jaringan.

**Network / Node**
-   `POST /register-and-broadcast-node`: Mendaftarkan node baru dan memberitahu seluruh jaringan.
-   `POST /register-node`: Mendaftarkan node tunggal (dipanggil internal oleh broadcast).
-   `POST /register-nodes-bulk`: Mendaftarkan banyak node sekaligus (untuk node baru).
-   `POST /receive-new-block`: Menerima blok baru yang di-mine oleh node lain.

**Explorer / Data Lookup**
-   `GET /block/:blockHash`: Mencari blok berdasarkan hash.
-   `GET /transaction/:transactionId`: Mencari transaksi berdasarkan ID.
-   `GET /address/:address`: Mencari seluruh transaksi yang terkait dengan alamat tertentu.
-   `GET /block-explorer`: Membuka tampilan Block Explorer.

## Cara Menjalankan Project

### 1. Persiapan (Install Dependencies)
Pastikan Anda sudah menginstall Node.js. Kemudian, buka terminal di folder project `blockchain` dan jalankan:
```bash
cd blockchain
npm install
```

### 2. Menjalankan Backend (Multiple Nodes)
Anda dapat menjalankan beberapa node sekaligus untuk mensimulasikan jaringan terdesentralisasi. Buka beberapa terminal terpisah dan jalankan perintah berikut:

**Terminal 1 (Node 1 - Port 3001)**
```bash
npm run node_1
```

**Terminal 2 (Node 2 - Port 3002)**
```bash
npm run node_2
```

**Terminal 3 (Node 3 - Port 3003)**
```bash
npm run node_3
```
*Anda bisa menjalankan hingga `node_5` sesuai konfigurasi di `package.json`.*

### 3. Menjalankan Frontend
Frontend adalah aplikasi web statis (HTML/JS/CSS).
1.  Masuk ke folder `frontend`.
2.  Buka file `index.html` menggunakan browser (atau gunakan Live Server jika menggunakan VS Code).
3.  **Konfigurasi**: Secara default, frontend terhubung ke `http://localhost:3001` (Node 1). Jika Anda ingin mengubah node tujuan, edit file `frontend/script.js` pada baris:
    ```javascript
    const NODE_URL = 'http://localhost:3001';
    ```

### Cara Menggunakan Aplikasi
1.  **Hashing Sertifikat**: Upload file PDF pada form yang tersedia untuk mendapatkan hash SHA-256 nya.
2.  **Daftar Sertifikat**: Isi nama Issuer dan Recipient, lalu klik Submit. Transaksi akan dibuat dan disebar ke jaringan.
3.  **Mining**: Klik tombol "Mine" untuk memproses transaksi yang tertunda (pending) menjadi blok baru di blockchain.
