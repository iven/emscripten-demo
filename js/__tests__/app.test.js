import { describe, it, expect, beforeAll } from 'vitest';
import Module from '../wasm/demo.js';

describe('Wasm Module Tests', () => {
  let moduleInstance;

  beforeAll(async () => {
    moduleInstance = await Module();
  });

  describe('divide function', () => {
    it('should correctly divide two numbers', () => {
      expect(moduleInstance.divide(21, 7)).toBe(3);
      expect(moduleInstance.divide(0, 5)).toBe(0);
      expect(moduleInstance.divide(-10, 2)).toBe(-5);
    });

    it('should throw an error when dividing by zero', () => {
      try {
        moduleInstance.divide(1, 0);
        // 如果没有抛出错误，则测试失败
        expect(true).toBe(false);
      } catch (e) {
        // e.message 是 ['类型', '消息'] 结构 https://emscripten.org/docs/porting/exceptions.html
        expect(e.message[0]).toMatch(/runtime_error/i);
        expect(e.message[1]).toMatch(/divide by zero/i);
      }
    });
  });
}); 
