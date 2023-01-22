import multer from "multer"
import { randomUUID } from "node:crypto";
import path from "path";

export const storage = multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: function (req, file, cb) {
        const imageType = file.mimetype.split('/', 3)[1];
        const imageId = randomUUID();

        cb(null, imageId + '.' + imageType)
    }
});
