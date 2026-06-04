import Transaction from "../models/Transaction.js";

export const createTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.create(req.body);
        res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (err) {        
        res.status(500).json({
            success: false,
            message: "Failed to create transaction"
        });
    }
}

export const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch transactions"
        });
    }
}
