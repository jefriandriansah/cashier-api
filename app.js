const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./models');

const customerRoutes = require('./routes/customerRoutes');
const productRoutes = require('./routes/productRoutes');
const saleRoutes = require('./routes/saleRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const unitRoutes = require('./routes/unitRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const authRoutes = require('./routes/authRoutes');
const indexRoutes = require('./routes/index');
dotenv.config();

const app = express();

app.use(express.json());
app.use('/api/customers', customerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/sales', saleRoutes);
app.use('/api/purchases', purchaseRoutes);
app.use('/api/units', unitRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/auth', authRoutes);
app.use('/',indexRoutes);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Send JSON response
  res.status(err.status || 500).json({ error: err.message });
});

// Sync database
sequelize.sync({ force: false }) // force: false untuk menghindari overwrite data
  .then(() => {
    console.log('Database synchronized');
    const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });
module.exports = app;