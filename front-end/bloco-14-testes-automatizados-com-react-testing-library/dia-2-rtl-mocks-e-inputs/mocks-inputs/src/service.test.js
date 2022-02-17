const service = require('./service')

test('teste se a função tem o retorno padrão de 10', () => {
    service.randomNumber = jest.fn().mockReturnValue(10)

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
})