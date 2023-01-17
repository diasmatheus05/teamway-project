const mockedAxios: any = jest.genMockFromModule("axios");

mockedAxios.create = jest.fn(() => mockedAxios);

export default mockedAxios;
