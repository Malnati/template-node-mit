import { renderHook } from '@testing-library/react';
import { useSearchParams } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    useSearchParams: jest.fn(),
}));

describe('index', () => {
    beforeAll(() => {
        jest.spyOn(global.console, 'info').mockImplementation(() => {});
        jest.spyOn(global.console, 'warn').mockImplementation(() => {});
        jest.spyOn(global.console, 'error').mockImplementation(() => {});
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

	it('should test something', () => {
		expect(() => () => { throw Error('paramName is required') }).toThrow();
	});
});
