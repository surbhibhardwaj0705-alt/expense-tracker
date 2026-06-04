import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    title: String,
    amount: Number,
    category: String,
    type: String,
    date: Date
});
const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;
