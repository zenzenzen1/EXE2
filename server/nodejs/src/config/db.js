import mongoose from 'mongoose';
const uri = "mongodb+srv://zenzen1:123123123@cluster0.yigho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const config = {
    user: 'zenzen1',
    pass: '123123123',
};

export const connectDb = async () => {
    try {
        await mongoose.connect(uri, {
            dbName: 'test',
        });
        console.log('Connected to database');
    } catch (error) {
        console.error(error);
    }
};