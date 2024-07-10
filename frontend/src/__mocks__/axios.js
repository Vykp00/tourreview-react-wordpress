// Mock Axios is used to mock test WordPressAPI
export default {
    get: jest.fn(() => Promise.resolve({ data: {} }) )
};