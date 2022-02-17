const service = require('./service')

test('teste se a função tem o retorno padrão de 10', () => {
    service.randomNumber = jest.fn().mockReturnValue(10)

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
})

test('testar se a função foi chamada apenas uma unica vez, testar se foi aplicado a divisão', () => {
    service.divisivelPorDois = jest.fn().mockImplementationOnce((a,b) => a/b)

    expect(service.divisivelPorDois(10,5)).toBe(2)
    expect(service.divisivelPorDois).toHaveBeenCalled();
    expect(service.divisivelPorDois).toHaveBeenCalledTimes(1);

})