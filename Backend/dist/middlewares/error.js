// export const errorMiddleware = (err:ErrorHandler,req:Request, res:Response, next:NextFunction
//  )=>{
//   err.message ||= "Internal Server Error";
//   err.statusCode ||= 500;
//  return res.status(err.statusCode).json({
//    success:false,
//    message: err.message,
//  });
// }
// //Wrapper Function
// export const TryCatch =
//  (func: ControllerType)=> 
//  (req:Request, res:Response, next: NextFunction) =>{
//   return Promise.resolve(func(req, res, next)).catch((next)=>{
//   });
//  };
export const errorMiddleware = (err, req, res, next) => {
    err.message || (err.message = "Internal Server Error");
    err.statusCode || (err.statusCode = 500);
    if (err.name === "CastError")
        err.message = "Invalid ID";
    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};
export const TryCatch = (func) => (req, res, next) => {
    return Promise.resolve(func(req, res, next)).catch(next);
};
