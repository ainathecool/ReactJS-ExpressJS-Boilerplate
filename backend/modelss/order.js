const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema (
    {
        orderID :{
            type: Number,
            required: true,
        },
        
        orderDate:
        {
            type: Date,
            required: true,
        },

        movie: {
            type: Schema.Types.ObjectId,
            ref: "Movie",
        
        },

    },
    {
        timestamps: true, //will tell konsa column kab bana
    }
    
);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;




