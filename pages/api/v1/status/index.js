function status(request, response) {
  response.status(200).json({
    chave: "oie rapaiz",
  });
}

export default status;
