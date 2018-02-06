import Joi from 'joi';

export default {

    createUser: {
        body: {
          username: Joi.string().required(),
          password: Joi.string().min(4).required(),
          confirmed_password: Joi.string().min(4).required(),
          lastname: Joi.string().required(),
          firstname: Joi.string().required(),
          mail: Joi.string().regex(/^[a-z0-9._-]+@[a-z0-9._-]{2,}.[a-z]{2,4}$/).required(),
        }
    },
    login: {
        body: {
            login: Joi.string().optional(),
            password: Joi.string().optional()
        }
    }

}