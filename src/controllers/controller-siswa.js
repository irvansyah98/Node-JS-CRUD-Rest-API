const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    getDataSiswa(req, res){
        pool.getConnection(function(err, connection){
            if(err) throw err;
            connection.query(
                `
                SELECT * FROM siswa;
                `
            , function(error, results){
                if(error) throw error;
                res.send({
                    success: true,
                    message: 'Berhasil ambil data!',
                    data: results
                });
            });
            connection.release();
        });
    },
    getDataSiswaByID(req, res){
        let id = req.params.id;
        pool.getConnection(function(err, connection){
            if(err) throw err;
            connection.query(
                `
                SELECT * FROM siswa WHERE id = ?;
                `
            , [id],
            function(error, results){
                if(error) throw error;
                res.send({
                    success: true,
                    message: 'Berhasil ambil data!',
                    data: results
                });
            });
            connection.release();
        });
    },
    addDataSiswa(req,res){
        let data = {
            nama : req.body.nama,
            umur : req.body.umur,
            kelas : req.body.kelas,
        }
        pool.getConnection(function(err, connection){
            if(err) throw err;
            connection.query(
                `
                INSERT INTO siswa SET ?;
                `
            , [data],
            function (error, results){
                if(error) throw error;
                res.send({
                    success: true,
                    message: 'Berhasil tambah data!'
                });
            });
            connection.release();
        })
    },
    editDataSiswa(req, res){
        let dataEdit = {
            nama : req.body.nama,
            umur : req.body.umur,
            kelas : req.body.kelas,
        }
        let id = req.body.id;
        pool.getConnection(function(err, connection){
            if(err) throw err;
            connection.query(
                `
                UPDATE siswa SET ? WHERE id = ?;
                `
            , [dataEdit, id],
            function(error, results){
                if(error) throw error;
                res.send({
                    success:true,
                    message: 'Berhasil edit data!',
                });
            });
            connection.release();
        });
    },
    deleteDataSiswa(req,res){
        let id = req.body.id;
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                DELETE FROM siswa WHERE id = ?;
                `
            , [id],
            function(error, results){
                if(error) throw error;
                res.send({
                    success : true,
                    message: 'Berhasil hapus data!'
                });
            });
            connection.release();
        });
    }
}