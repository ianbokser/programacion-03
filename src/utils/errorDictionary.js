const ERROR_CODES = {
    USER_ALREADY_EXISTS: 'USER_ALREADY_EXISTS',
    PET_CREATION_FAILED: 'PET_CREATION_FAILED',
    INVALID_INPUT: 'INVALID_INPUT',
    INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  };
  
  const ERROR_MESSAGES = {
    [ERROR_CODES.USER_ALREADY_EXISTS]: 'User already exists in the system.',
    [ERROR_CODES.PET_CREATION_FAILED]: 'Failed to create the pet in the system.',
    [ERROR_CODES.INVALID_INPUT]: 'The input data is invalid.',
    [ERROR_CODES.INTERNAL_SERVER_ERROR]: 'An unexpected error occurred.',
  };
  
  module.exports = { ERROR_CODES, ERROR_MESSAGES };
  