import boom from '@hapi/boom';

function validatorHandler(schema: any, property: any) {
    return (req: any, res: any, next: any) => {
        const { error } = schema.validate(req[property]);
        if (error) {
            next(boom.badRequest(error));
        }
        next();
    }
}

export { validatorHandler }