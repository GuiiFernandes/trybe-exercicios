const response = (body) => ({
  SUCESSFUL: { status: 200, body },
  CREATED: { status: 201, body },
  NO_CONTENT: { status: 204, body },
  BAD_REQUEST: { status: 400, body },
  UNAUTHORIZED: { status: 401, body },
  NOT_FOUND: { status: 404, body },
  CONFLICT: { status: 409, body },
  INTERNAL_ERROR: { status: 500, body },
});

module.exports = response;