const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
      Promise
        .resolve(requestHandler(req, res, next)) // handles async/await or plain promise
        .catch((error) => next(error)); // pass error to default error handler
    };
  };
  