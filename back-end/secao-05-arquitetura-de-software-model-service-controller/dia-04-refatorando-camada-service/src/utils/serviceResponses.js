const response = (body) => ({
  SUCCESS: { status: 200, data: body },
  CREATED: { status: 201, data: body },
  NOT_FOUND: { status: 404, data: body },
  BAD_REQUEST: { status: 400, data: body },
  CONFLICT: { status: 409, data: body },
  INTERNAL_SERVER_ERROR: { status: 500, data: body },
});

module.exports = response;