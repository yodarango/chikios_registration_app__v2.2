import mongoose from 'mongoose';

export const dbConnection = async () => {
   try {
      const conn = await mongoose.connect('', {
         useUnifiedTopology: true,
         useNewUrlParser: true,
      });
      console.log(`Successfully connected to ${conn.connection.host}`);
   } catch (error) {
      console.error(error);
      process.exit(1);
   }
};
