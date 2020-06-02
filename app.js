const express = require('express');
const morgan = require('morgan');

const tcRouter = require('./routes/tcRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req,res,next)=>{
  console.log(req.body);
  next();
})


// 3) ROUTES
app.use('/api/v1/tc', tcRouter);

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Cant find ${req.originalUrl} on this server`
  });

  // const err = new Error(`Cant find ${req.originalUrl} on this server`);
  // err.statusCode = 404;
  // err.status = 'fail';
  //next(new AppError(`Cant find ${req.originalUrl} on this server`, 404));
});

//app.use(globalErrorController);
module.exports = app;