const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [
    {
      menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
      quantity: { type: Number, default: 1 },
    },
  ],
  status: {
    type: String,
    enum: ['Pending', 'Preparing', 'Ready', 'Delivered', 'Cancelled'],
    default: 'Pending',
  },
  placedBy: { type: String, enum: ['customer', 'waiter'], required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
