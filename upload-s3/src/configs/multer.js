const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

const storageTypes = {
    local: multer.diskStorage({
        destination: (req,file,cb) => {
            cb(null, path.resolve(__dirname, "..","..","tmp","uploads"));
        },
        filename: (req,file,cb) => {
            crypto.randomBytes(16, (err, data) => {
                if (err) cb(err);

                const filename = `${data.toString('hex')}-${file.originalname}`;

                cb(null, filename);
            })
        }
    }),
    production: multerS3({
        s3: new aws.s3(),
        bucket: '',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read'
    })
}

module.exports = {
    dest: path.resolve(__dirname, "..","..","tmp","uploads"),
    storage: storageTypes[process.env.NODE_ENV],
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req,file,cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/png',
            'image/jpg'
        ]

        if (allowedMimes.includes(file.mimetype)){
            cb(null,true);
        }else{
            cb(new Error('Invalid file type.'));
        }
    }
}