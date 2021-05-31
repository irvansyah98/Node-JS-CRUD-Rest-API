const router = require('express').Router();
const { karyawan, siswa } = require('../controllers');

router.get('/karyawan', karyawan.getDataKaryawan);

router.get('/karyawan/:id', karyawan.getDataKaryawanByID);

router.post('/karyawan/add', karyawan.addDataKaryawan);

router.post('/karyawan/edit', karyawan.editDataKaryawan);

router.post('/karyawan/delete/', karyawan.deleteDataKaryawan);

router.get('/siswa', siswa.getDataSiswa);

router.get('/siswa/:id', siswa.getDataSiswaByID);

router.post('/siswa/add', siswa.addDataSiswa);

router.post('/siswa/edit', siswa.editDataSiswa);

router.post('/siswa/delete/', siswa.deleteDataSiswa);

module.exports = router;