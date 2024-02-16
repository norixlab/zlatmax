import mongoose from "mongoose";

export const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI,{
            dbName: 'zlatmax'
        })

        const connection = mongoose.connection;

        connection.on('connected', ()=>{
            console.log('DB CONNECTED')
        });

        connection.on('disconnect', ()=>{
            console.log('DB DISCONNECTED')
        })

    } catch (error) {
        console.log('DB ERROR', error)
    }
}